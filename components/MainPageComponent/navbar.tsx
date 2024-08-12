import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  link as linkStyles,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import UserAvatar from "../UserComponent/UserAvatar";
import RoomDropdown from "./RoomDropdown";  // Import the new RoomDropdown component

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/MainPageComponent/theme-switch";
import { Rooms } from "@/party/types";

export const Navbar = ({ 
  currentRoom, 
  setCurrentRoom,
  rooms,
  setRooms,
}: { 
  currentRoom: string, 
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>,
  rooms: Rooms;
  setRooms: Function;
}) => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
        <NavbarItem>
          <RoomDropdown currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} setRooms={setRooms} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <UserAvatar />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};