import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  link as linkStyles,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import UserAvatar from "../UserComponent/UserAvatar";
import RoomDropdown from "./RoomDropdown";  // Import the new RoomDropdown component

import { ArrowDropDown } from "@mui/icons-material";
import NotificationComponent from '../UserComponent/NotificationComponent';

import Lobby from "./Lobby"

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/MainPageComponent/theme-switch";
import { Rooms } from "@/party/types";
import OnlineUsers from "../UserComponent/OnlineUsers";

export const Navbar = ({ 
  currentRoom, 
  setCurrentRoom,
  rooms,
  setRooms,
  selectedModel,
  setSelectedModel
}: { 
  currentRoom: string, 
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>,
  rooms: Rooms;
  setRooms: Function;
  selectedModel: string;
  setSelectedModel: Function;
}) => {

  const handleSelect = (keys: any) => {
    const selectedKey = Array.from(keys).join(", "); // Convert the selection to a string

    setSelectedModel(selectedKey);
  };

  const userCount = rooms[currentRoom] || 0; // Calculate user count for the current room


  return (

    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full flex items-center justify-start">
        <div className="lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full justify-center">
        <NavbarItem className="flex items-center justify-center">
          <UserAvatar userCount={userCount} />
        </NavbarItem>
      </NavbarContent>

      <Dropdown>
        <DropdownTrigger>
          <Button className="w-32 m-4" color="primary" variant="bordered">
            {selectedModel}
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection actions"
          color="secondary"
          selectedKeys={selectedModel}
          selectionMode="single"
          onSelectionChange={handleSelect}
        >
          <DropdownItem key="OpenAI">OpenAI</DropdownItem>
          <DropdownItem key="Ollama">Ollama (local)</DropdownItem>
          <DropdownItem key="Mistral">Mistral (local)</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full justify-end items-center"
      >
        <NavbarItem className="flex items-center gap-2">
          <NotificationComponent />
          <ThemeSwitch />
          <Lobby  currentRoom={currentRoom} rooms={rooms} setCurrentRoom={setCurrentRoom} setRooms={setRooms} />
        </NavbarItem>

        <NavbarItem>
       <OnlineUsers/>
        </NavbarItem>


      </NavbarContent>


    </NextUINavbar>
  );
};
