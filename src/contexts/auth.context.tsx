"use client";

import { createContext, useContext } from "react";

interface AuthContext {
  accessToken?: string | null;
  signIn: (token: string, userId: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContext>({
  accessToken: null,
  signIn: () => null,
  signOut: () => null,
});

export const useAuthContext = (): AuthContext => useContext(AuthContext);
