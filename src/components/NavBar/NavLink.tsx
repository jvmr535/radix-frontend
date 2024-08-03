import { Link, NavbarItem } from "@nextui-org/react";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

export default function NavLink({ route }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const isSelected = router.pathname === route.pathname;

  return (
    <NavbarItem isActive={isSelected}>
      <Link
        color="foreground"
        href={route.pathname}
        size="lg"
        className={isSelected ? "font-bold" : ""}
      >
        {route.label}
      </Link>
    </NavbarItem>
  );
}
