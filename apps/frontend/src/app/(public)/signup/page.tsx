"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage, useUser } from "@/contexts";
import { Input, Button, FormPage } from "@/components";
import { validateUser } from "@core/validators";
import { LoginDto, UserDto, ValidateUserDto } from "@core/types";

const Signup = () => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { signup, verifyEmail, login } = useUser();

  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ifEmailSended, setIfEmailSended] = useState(false);
  const [verifyToken, setVerifyToken] = useState("");

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (password != confirmPassword) {
      setError("Senhas não conferem");
      return;
    }

    const userDto = {
      name,
      email,
      password,
    } as UserDto;

    const { valid, error: _error } = validateUser(userDto);

    if (!valid) {
      setError(_error as string);
      return;
    }

    const { error: reqError } = await signup(userDto);

    if (reqError) {
      setError(reqError);
      return;
    }

    setIfEmailSended(true);
  };

  const handleVerifyEmail = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const validateUserDto = {
      email,
      password,
      verify_token: verifyToken,
    } as ValidateUserDto;

    const { error: _error } = await verifyEmail(validateUserDto);

    if (_error) {
      setError(_error);
      return;
    }

    const loginDto: LoginDto = {
      email,
      password,
    };

    const { error: reqError } = await login(loginDto);

    if (reqError) {
      setError(reqError);
      return;
    }

    showMessage("Sua conta foi verificada com sucesso!", "success");
    router.push("/");
  };

  return (
    <FormPage
      onSubmit={async (evt) => {
        if (ifEmailSended) {
          await handleVerifyEmail(evt);
        } else {
          await handleSubmit(evt);
        }
      }}
      title="Cadastro:"
      error={error}
      setError={setError}
    >
      {ifEmailSended ? (
        <>
          <p className="text-md">
            Sua conta foi criada com sucesso. Por favor, verifique seu email e
            reescrevo o token recebido logo abaixo.
          </p>
          <Input
            label="Token"
            color="primary"
            id="verifytoken"
            name="verifytoken"
            placeholder="Seu token"
            type="text"
            minLength={6}
            maxLength={6}
            required
            className="w-full"
            value={verifyToken}
            setValue={setVerifyToken}
          />
          <Button className="w-full" color="primary">
            Verificar
          </Button>
        </>
      ) : (
        <>
          <Input
            label="Nome"
            color="primary"
            id="name"
            name="name"
            placeholder="Seu nome"
            minLength={3}
            maxLength={20}
            type="text"
            required
            className="w-full"
            value={name}
            setValue={setName}
          />
          <Input
            label="Email"
            color="primary"
            id="email"
            name="email"
            placeholder="Seu email"
            type="email"
            required
            className="w-full"
            value={email}
            setValue={setEmail}
          />
          <Input
            label="Senha"
            color="primary"
            id="password"
            name="password"
            placeholder="Suas senha"
            minLength={8}
            maxLength={15}
            type="password"
            className="w-full"
            value={password}
            setValue={setPassword}
          />
          <Input
            label="Repita sua senha"
            color="primary"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Sua senha novamente"
            minLength={8}
            maxLength={15}
            type="password"
            className="w-full"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <Button type="submit" color="primary" className="w-full">
            Enviar
          </Button>
        </>
      )}
    </FormPage>
  );
};

export default Signup;
