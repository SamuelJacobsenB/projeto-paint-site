import { PaintingDto, Validate } from "../types";

export const validatePainting = (paintingDto: PaintingDto): Validate => {
  const { title, art } = paintingDto;

  const errors: string[] = [];

  if (!title) {
    errors.push("Título é obrigatório");
  }

  if (title.length < 3) {
    errors.push("Título deve ter pelo menos 3 caracteres");
  }

  if (title.length > 20) {
    errors.push("Título não pode ter mais de 20 caracteres");
  }

  if (!art) {
    errors.push("Arte é obrigatória");
  }

  if (art.length !== 256 && art.length !== 1024 && art.length !== 4096) {
    errors.push("Tipo de arte inválido");
  }

  return {
    error: errors.length > 0 ? errors[0] : undefined,
    valid: errors.length === 0,
  };
};
