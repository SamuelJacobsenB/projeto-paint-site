import { UpdatePostDto, Validate } from "../types";

export const validateUpdatePost = (updatePostDto: UpdatePostDto): Validate => {
  const { title } = updatePostDto;

  const errors: string[] = [];

  if (!title) {
    errors.push("Título é obrigatório");
  }

  if (title.length < 3) {
    errors.push("Título deve ter pelo menos 3 caracteres");
  }

  if (title.length > 30) {
    errors.push("Título deve ter no máximo 30 caracteres");
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
