import { UserDto, Validate } from "../types";

export const validateUser = (userDto: UserDto): Validate => {
  const { name, email, password } = userDto;

  const errors: string[] = [];

  if (!name) {
    errors.push("Nome é obrigatório");
  }

  if (name.length < 3) {
    errors.push("Nome deve ter pelo menos 3 caracteres");
  }

  if (name.length > 20) {
    errors.push("Nome não pode ter mais de 20 caracteres");
  }

  if (!email) {
    errors.push("E-mail é obrigatório");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.match(emailRegex)) {
    errors.push("E-mail inválido");
  }

  if (!password) {
    errors.push("Senha é obrigatória");
  }

  if (password.length < 8) {
    errors.push("Senha deve ter pelo menos 8 caracteres");
  }

  if (password.length > 15) {
    errors.push("Senha não pode ter mais de 15 caracteres");
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
