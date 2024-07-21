import { Avatar, AvatarGroup } from '@nextui-org/react';
import React from 'react';

import NotificationComponent from './NotificationComponent';
const UserAvatar: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <AvatarGroup
        isBordered
        max={3}
        renderCount={(count) => (
          <p className="text-sm text-gray-700 font-medium ms-2">
            +{count} others
          </p>
        )}
        total={10}
      >
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>
      <NotificationComponent />
    </div>
  );
};

export default UserAvatar;
