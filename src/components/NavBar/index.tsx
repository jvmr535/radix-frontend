import React, { useState } from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { useAuthContext } from "@/contexts";
import { NavBarProps } from "./types";

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut } = useAuthContext();

  return (
    <>
      <NextNavBar
        className="bg-primary-500 fixed top-0 left-0 right-0 z-50 h-16 sm:h-24"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex items-center">
            <Image
              width={154}
              height={63}
              src="https://static.wixstatic.com/media/8e4420_e836a94190814e62aebc479d2cad1c33~mv2.png/v1/crop/x_0,y_0,w_817,h_336/fill/w_154,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Radix%20Engineering.png"
              alt="Radix Engineering Logo"
              className="h-auto w-auto"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              className="bg-primary-500 text-white"
              variant="flat"
              onClick={signOut}
              size="lg"
            >
              Sair
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NextNavBar>
      <div className="flex min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-24 justify-center lg:justify-start mt-16">
        {children}
      </div>
    </>
  );
}
