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
      {/* Lobby on the far left */}
      <NavbarContent className="basis-1/5 sm:basis-full flex items-center justify-start">
        <Lobby currentRoom={currentRoom} rooms={rooms} setCurrentRoom={setCurrentRoom} setRooms={setRooms} />
      </NavbarContent>

      {/* Centered AI Model Selection */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
        <div className="flex items-center space-x-2"> {/* Adjusted spacing */}
          <p className="text-small text-blue-500 font-semibold">Choose AI Model: </p>
          <Dropdown>
            <DropdownTrigger>
              <Button color="primary" variant="bordered" className="w-32">
                <span className="flex items-center">
                  {selectedModel}
                  <ArrowDropDown className="ml-1" />
                </span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedModel}
              onSelectionChange={handleSelect}
            >
              <DropdownItem key="OpenAI">OpenAI</DropdownItem>
              <DropdownItem key="Ollama">Ollama (local)</DropdownItem>
              <DropdownItem key="Mistral">Mistral (local)</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>

      {/* ThemeSwitch, Notification, and OnlineUsers on the right */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <NotificationComponent />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <OnlineUsers />
        </NavbarItem>
      </NavbarContent>

      {/* Commented out the login button */}
      {/* <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem>
          <UserAvatar userCount={userCount} />
        </NavbarItem>
      </NavbarContent> */}
    </NextUINavbar>
  );
};
