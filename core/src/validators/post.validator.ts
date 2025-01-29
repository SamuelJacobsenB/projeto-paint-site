import { PostDto, Validate } from "../types";

export const validatePost = (postDto: PostDto): Validate => {
  const { title, paintingId } = postDto;

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

  if (!paintingId) {
    errors.push("Identificador da arte é obrigatório");
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
