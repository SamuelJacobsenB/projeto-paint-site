"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage } from "@/contexts";
import { Controller } from "@/services";
import { Input, Button, FormPage } from "@/components";
import { validateLogin } from "@core/validators";
import { LoginDto } from "@core/types";

const Login = () => {
  const router = useRouter();
  const { showMessage } = useMessage();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const controller = new Controller();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const loginDto = {
      email,
      password,
    } as LoginDto;

    const { valid, error: _error } = validateLogin(loginDto);

    if (!valid) {
      setError(_error as string);
      return;
    }

    const { data, error: reqError } = await controller.post<LoginDto>(
      "/auth/login",
      loginDto
    );

    if (reqError) {
      setError(reqError);
      return;
    }

    localStorage.setItem("access_token", data.access_token);

    showMessage("Login realizado com sucesso!", "success");

    router.push("/");
  };

  return (
    <FormPage
      onSubmit={async (evt) => handleSubmit(evt)}
      title="Login:"
      error={error}
      setError={setError}
    >
      <Input
        label="Email"
        color="primary"
        id="email"
        name="email"
        placeholder="Seu email"
        type="text"
        required
        className="w-full"
        value={email}
        setValue={setEmail}
      />
      <Input
        label="Senha:"
        color="primary"
        id="password"
        name="password"
        placeholder="Suas senha"
        type="password"
        className="w-full"
        value={password}
        setValue={setPassword}
      />
      <Button type="submit" color="primary" className="w-full">
        Enviar
      </Button>
    </FormPage>
  );
};

export default Login;
