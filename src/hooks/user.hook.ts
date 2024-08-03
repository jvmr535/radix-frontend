import { useCookies } from "react-cookie";
import { decode } from "jsonwebtoken";

export function useUser(): string {
  const cookie = useCookies();
  const token = cookie[0] as { jwt: string };
  const userId = decode(token.jwt) as { u_id: string };

  return userId.u_id;
}
