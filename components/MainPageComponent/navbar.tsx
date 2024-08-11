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
import { useState } from "react";


import Lobby from "./Lobby";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/MainPageComponent/theme-switch";
import { Rooms } from "@/party/types";

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


  return (

    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
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

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>

     {/* Choose Model Section */}
     <p className="text-small">Choose AI Model: </p>
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" variant="bordered" className="w-32 m-4">
            {selectedModel}
            <ArrowDropDown/>
          </Button>
        </DropdownTrigger>
        
        <DropdownMenu
          aria-label="Single selection actions"
          color="secondary"
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

      <NavbarContent
        className=""
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
          <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />

    </NextUINavbar>
  );
};
