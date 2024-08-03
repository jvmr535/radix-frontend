import NavBar from "../NavBar";
import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <NavBar>
      <main className="flex flex-col w-full items-center">{children}</main>
    </NavBar>
  );
}
