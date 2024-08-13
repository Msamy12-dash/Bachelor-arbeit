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
  onGenerateText: (type: 'clarity' | 'tone' | 'rephrase' | 'complexity-up' | 'complexity-down') => void;
  disabled: boolean;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ onGenerateText, disabled }) => {
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
      <DropdownMenu aria-label="AI Actions" variant="faded">
        <DropdownSection showDivider title="Text Enhancements">
          <DropdownItem
            key="clarity"
            description="Improve clarity and readability"
            onClick={() => onGenerateText('clarity')}
          >
            Improve Clarity
          </DropdownItem>
          <DropdownItem
            key="tone"
            description="Make the tone more friendly"
            onClick={() => onGenerateText('tone')}
          >
            Improve Tone
          </DropdownItem>
          <DropdownItem
            key="rephrase"
            description="Express the same idea in a different way"
            onClick={() => onGenerateText('rephrase')}
          >
            Rephrase
          </DropdownItem>
          <DropdownItem
            key="complexity-up"
            description="Increase the complexity of the text"
            onClick={() => onGenerateText('complexity-up')}
          >
            Increase Complexity
          </DropdownItem>
          <DropdownItem
            key="complexity-down"
            description="Simplify the language and sentence structure"
            onClick={() => onGenerateText('complexity-down')}
          >
            Reduce Complexity
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomMenu;