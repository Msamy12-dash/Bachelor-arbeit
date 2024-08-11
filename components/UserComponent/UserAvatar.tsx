import React from 'react';
import { Avatar, AvatarGroup } from '@nextui-org/react';

import NotificationComponent from './NotificationComponent';

// Define the type for the props
interface UserAvatarProps {
  userCount: number;  // Number of users
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userCount }) => {
  // Generate an array of dummy user names based on userCount
  const users = Array.from({ length: userCount }, (_, index) => ({
    name: `User ${index + 1}`,
    avatarUrl: `https://api.adorable.io/avatars/285/${index + 1}.png` // Placeholder avatar URL
  }));

  return (
    <>
      <AvatarGroup 
        isBordered 
        css={{ cursor: "pointer" }}
        max={3}
        popoverTriggerType="hover"
        renderCount={(count) => count > 3 ? <p className="text-sm text-gray-700 font-medium ms-2">+{count - 3} others</p> : null}
        renderPopoverContent={() => (
          <div>
            {users.map((user, index) => (
              <p key={index}>{user.name}</p>
            ))}
          </div>
        )}
        total={userCount}
      >
        {users.slice(0, 3).map((user, index) => (
          <Avatar key={index}  name="user" />
        ))}
      </AvatarGroup>
    </>
  );
};

export default UserAvatar;
