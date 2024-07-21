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
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface CustomMenuProps {
  onSaveRange: () => void;
    onInsertTrialText: () => void;
  disabled: boolean;
}


const CustomMenu: React.FC<CustomMenuProps> = ({ onSaveRange, onInsertTrialText,disabled }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="ghost" isDisabled={disabled}>
          <div className="flex items-center space-x-2">
          <span>AI</span>
            <AutoAwesomeIcon className="h-4 w-4 text-yellow-500" />
        </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
        <DropdownSection showDivider title="Actions">
          <DropdownItem
            key="copy"
            description="improve clarity and vocab"
            onClick={onInsertTrialText}
          >
            Improve language
          </DropdownItem>
          <DropdownItem
            key="edit"
            description="Make the tone more freindly"
            onClick={onInsertTrialText}
          >
            Friendly Tone
          </DropdownItem>
        </DropdownSection>
      
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomMenu;