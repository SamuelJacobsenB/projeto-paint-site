import { UpdatePaintingDto, Validate } from "../types";

export const validateUpdatePainting = (
  updatePaintingDto: UpdatePaintingDto
): Validate => {
  const { title, art } = updatePaintingDto;

  const errors: string[] = [];

  if (title) {
    if (title.length < 3) {
      errors.push("Título deve ter pelo menos 3 caracteres");
    }

    if (title.length > 20) {
      errors.push("Título não pode ter mais de 20 caracteres");
    }
  }

  if (art) {
    if (art.length !== 256 && art.length !== 1024 && art.length !== 4096) {
      errors.push("Tipo de arte inválido");
    }
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
