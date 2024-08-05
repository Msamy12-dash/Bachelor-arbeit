import type { AppProps } from "next/app";
import { useUser } from '../hooks/useUser';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "./env";
import { Rooms, SINGLETON_ROOM_ID, User } from "@/party/types";

export default function App({ Component, pageProps }: AppProps) {
  //const { user, updateUser } = useUser();
  const [user, updateUser] = useState<User | null>(null);
  const router = useRouter();

  const [rooms, setRooms] = useState<Rooms>({});

  const roomserverPartySocket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "roomserver",
    room: SINGLETON_ROOM_ID,
    onMessage(evt) {
      try {
        const data = JSON.parse(evt.data);

        if (data.type === "rooms") {
          setRooms(data.rooms);
        }
      } catch (err) {
        console.error(err);
      }
    },
  });

  

  useEffect(() => {
    if (!user && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [user, router]);

 

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
      <Component {...pageProps} user={user} updateUser={updateUser} rooms={rooms} setRooms={setRooms} roomserverPartySocket={roomserverPartySocket} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
