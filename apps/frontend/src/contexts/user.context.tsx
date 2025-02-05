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
import { LoginDto, User, UserDto, ValidateUserDto } from "@core/types";

interface UserContextProps {
  user?: User;
  findUser: (id: string) => Promise<void>;
  signup: (userDto: UserDto) => Promise<{ error?: string }>;
  verifyEmail: (
    validateUserDto: ValidateUserDto
  ) => Promise<{ error?: string }>;
  login: (loginDto: LoginDto) => Promise<{ error?: string }>;
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

  const signup = useCallback(async (userDto: UserDto) => {
    const controller = new Controller();

    const { error } = await controller.post<UserDto>("/user", userDto);

    if (error) {
      return { error };
    }

    return { error: undefined };
  }, []);

  const verifyEmail = useCallback(async (validateUserDto: ValidateUserDto) => {
    const controller = new Controller();

    const { error } = await controller.post<ValidateUserDto>(
      "/auth/validate",
      validateUserDto
    );

    if (error) {
      return { error };
    }

    return { error: undefined };
  }, []);

  const login = useCallback(
    async (loginDto: LoginDto) => {
      const controller = new Controller();

      const { data, error } = await controller.post<LoginDto>(
        "/auth/login",
        loginDto
      );

      if (error) {
        return { error };
      }

      localStorage.setItem("access_token", data.access_token);

      await findUser();

      return { error: undefined };
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
    <userContext.Provider
      value={{ user, findUser, signup, verifyEmail, login, logout }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
