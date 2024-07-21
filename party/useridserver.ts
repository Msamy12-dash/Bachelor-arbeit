import type * as Party from "partykit/server";
import { User, Role } from "./types";

export default class useridserver implements Party.Server {
    users: User[];

    constructor(readonly room: Party.Room) {
        this.users = [];
    }

    async onStart(): Promise<void> {
        console.log("UserIdServer started");
        await this.loadUsersFromDatabase();
    }

    async onRequest(req: Party.Request): Promise<Response> {
        if (req.method === 'POST') {
            const body = await req.json();
            
            // Type guard function
            function isValidUserRequest(data: any): data is { username: string; role: Role } {
                return typeof data.username === 'string' && 
                       Object.values(Role).includes(data.role);
            }

            if (!isValidUserRequest(body)) {
                return new Response('Invalid request body', { status: 400 });
            }

            const { username, role } = body;
            const user = await this.getOrCreateUser(username, role);
            return new Response(JSON.stringify(user), { 
                status: 200, 
                headers: { 'Content-Type': 'application/json' }
            });
        }
        return new Response('Method not allowed', { status: 405 });
    }

    private async loadUsersFromDatabase(): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/api/getUserIDs');
            if (!response.ok) {
                throw new Error('Failed to fetch user IDs');
            }
            const data = await response.json();
            this.users = data.users;
            console.log('Users loaded from database:', this.users.length);
        } catch (error) {
            console.error('Error loading users from database:', error);
        }
    }

    private async getOrCreateUser(username: string, role: Role): Promise<User> {
        let user = this.users.find(u => u.name === username);
        if (!user) {
            user = {
                id: username,
                name: username,
                color: this.getRandomColor(),
                role: role
            };
            this.users.push(user);
            await this.saveUserToDatabase(user);
        }
        return user;
    }

    private getRandomColor(): string {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    private async saveUserToDatabase(user: User): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/api/saveUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('Failed to save user');
            }
            console.log('User saved to database:', user);
        } catch (error) {
            console.error('Error saving user to database:', error);
        }
    }
}