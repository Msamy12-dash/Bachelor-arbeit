import type * as Party from "partykit/server";
import { User, UserCore, Role } from "./src/types";


export default class useridserver implements Party.Server {
  users: UserCore[];

  readonly options = {
    hibernate: false
  };

  constructor(readonly room: Party.Room) {
    this.users = [];
  }

  async onStart(): Promise<void> {
    
    await this.loadUsersFromDatabase();
    //console.log("UserIdServer has started. Users loaded:", this.users);
  }

  async onRequest(req: Party.Request): Promise<Response> {
    //console.log(`Received ${req.method} request to ${req.url}`);

    if (req.method === "OPTIONS") {
      //console.log("Received OPTIONS request:", req, "\n-----------------------------------------------");
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (req.method === "POST") {
      try {
        const body = await req.json();

        //console.log("Received body:", body);

        if (!this.isValidUserRequest(body)) {
          return new Response("Invalid request body", { status: 400 });
        }

        if (
          !body ||
          typeof body.username !== "string" ||
          !Object.values(Role).includes(body.role)
        ) {
          return new Response("Invalid request body", {
            status: 400,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          });
        }

        const { username, role } = body;
        const user = await this.getOrCreateUser(username, role);

        return new Response(JSON.stringify(user), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        //console.error("Error processing request:", error);

        return new Response("Internal Server Error", {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    }

    return new Response("Method not allowed", {
      status: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  private async loadUsersFromDatabase(): Promise<void> {
    try {
      const response = await fetch("http://localhost:3000/api/getUserIDs");

      if (!response.ok) {
        throw new Error("Failed to fetch user IDs");
      }
      const data = await response.json();

      this.users = data.users;
      //console.log("Users loaded from database:", this.users.length);
    } catch (error) {
      //console.error("Error loading users from database:", error);
    }
  }

  private async getOrCreateUser(username: string, role: Role): Promise<User> {
    let userCore = this.users.find((u) => u.name === username);

    if (!userCore) {
      userCore = {
        id: username,
        name: username,
      };
      this.users.push(userCore);
      await this.saveUserToDatabase(userCore);
    }

    const user: User = {
      id: userCore.id,
      name: userCore.name,
      role: role,
    };

    return user;
  }

  private async saveUserToDatabase(userCore: UserCore): Promise<void> {
    try {
      const response = await fetch("http://localhost:3000/api/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCore),
      });

      if (!response.ok) {
        throw new Error("Failed to save user");
      }
      //console.log("User saved to database:", userCore);
    } catch (error) {
      //console.error("Error saving user to database:", error);
    }
  }

  // Type guard function

  private isValidUserRequest(
    data: any
  ): data is { username: string; role: Role } {
    return (
      typeof data.username === "string" &&
      Object.values(Role).includes(data.role)
    );
  }
}
