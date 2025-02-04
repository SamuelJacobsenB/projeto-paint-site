import { LoginDto, Validate } from "../types";

export const validateLogin = (loginDto: LoginDto): Validate => {
  const { email, password } = loginDto;

  const errors: string[] = [];

  if (!email) {
    errors.push("E-mail é obrigatório");
  }

  if (!password) {
    errors.push("Senha é obrigatória");
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
