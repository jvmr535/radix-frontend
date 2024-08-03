import { useEffect, useState, useMemo, useCallback } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { AuthContext } from "./auth.context";
import { AuthProviderProps } from "./types";

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);
  const [, setCookieUserId, removeCookieUserId] = useCookies(["userId"]);

  const [accessToken, setAccessToken] = useState<string | null>(cookie?.jwt);

  const router = useRouter();

  const signIn = useCallback(
    (token: string, userId: string): void => {
      setCookie("jwt", token, { path: "/" });
      setCookieUserId("userId", userId, { path: "/" });

      setAccessToken(token);
    },
    [setCookie, setCookieUserId, setAccessToken],
  );

  const signOut = useCallback((): void => {
    removeCookie("jwt", { path: "/" });
    removeCookieUserId("userId", { path: "/" });

    setAccessToken(null);
  }, [removeCookie, removeCookieUserId, setAccessToken]);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    } else {
      const decodedToken = jwt.decode(accessToken) as { exp: number };
      const tokenExpiration = decodedToken.exp * 1000;
      const currentTime = Date.now();
      if (tokenExpiration < currentTime) {
        signOut();
        router.push("/login");
      }
    }
  }, [accessToken, signOut, router]);

  const authContextValue = useMemo(
    () => ({
      accessToken,
      signIn,
      signOut,
    }),
    [accessToken, signIn, signOut],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
