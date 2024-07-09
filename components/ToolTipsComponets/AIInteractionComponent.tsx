/* eslint-disable prettier/prettier */
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface CustomMenuProps {
  onSaveRange: () => void;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ onSaveRange }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="ghost">Suggest</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
        <DropdownSection showDivider title="Actions">
          <DropdownItem
            key="copy"
            description="Custom command2 "
          >
          Command1
          </DropdownItem>
          <DropdownItem
            key="edit"
            description="Custom command1"
            onClick={onSaveRange}
          >
           Command2 
          </DropdownItem>
        </DropdownSection>
      
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomMenu;