import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useAuth } from "@/providers/AuthProvider";
import { Icons } from "./Icons";
import useAuthService from "@/hooks/useAuthService";

function UserMenuDropDown() {
  const { currentUser } = useAuth();
  const { logout } = useAuthService();
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>
      <Dropdown placement="left-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            color="success"
            src={currentUser?.photoURL || "images/default_user_avatar.jpeg"}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="faded">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue="Signed in as"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{currentUser?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="settings"
            startContent={<Icons.settings className={iconClasses} />}
          >
            My Settings
          </DropdownItem>
          <DropdownItem
            key="friends"
            startContent={<Icons.users2 className={iconClasses} />}
          >
            Friends
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            className="text-danger"
            startContent={<Icons.logout className={iconClasses} />}
            onPress={logout}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default UserMenuDropDown;
