"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Controller } from "@/services";
import { ComponentWithChildren } from "@/types";
import { LoginDto, User } from "@core/types";

interface UserContextProps {
  user?: User;
  findUser: (id: string) => Promise<void>;
  login: (loginDto: LoginDto) => Promise<{ error: boolean }>;
  logout: () => void;
}

const userContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: ComponentWithChildren) => {
  const [user, setUser] = useState<User>();

  const findUser = useCallback(async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setUser(undefined);
      return;
    }

    const controller = new Controller();

    const { data, error } = await controller.get("/user/own", accessToken);

    if (error) {
      localStorage.removeItem("access_token");
      setUser(undefined);
      return;
    }

    setUser(data);
  }, []);

  const login = useCallback(
    async (loginDto: LoginDto) => {
      const controller = new Controller();

      const { data, error } = await controller.post<LoginDto>(
        "/auth/login",
        loginDto
      );

      if (error) {
        return { error: true };
      }

      localStorage.setItem("access_token", data.access_token);

      await findUser();

      return { error: false };
    },
    [findUser]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("access_token");
    setUser(undefined);
  }, []);

  useEffect(() => {
    findUser();
  }, [findUser]);

  return (
    <userContext.Provider value={{ user, findUser, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
