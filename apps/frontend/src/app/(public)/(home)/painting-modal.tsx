"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage, useUser } from "@/contexts";
import { Controller } from "@/services";
import { generateDefaultPainting } from "@/functions";
import { Button, Form, Input, Modal, Select } from "@/components";
import { PaintingDto } from "@core/types";

interface PaintingModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintingModal = ({ isVisible, setIsVisible }: PaintingModalProps) => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { user } = useUser();

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("16");

  const controller = new Controller();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const accessToken = localStorage.getItem("access_token");

    if (!user || !accessToken) {
      showMessage("Você deve estar logado para realizar esta ação", "error");
      return;
    }

    if (title.length < 3) {
      setError("Título deve ter ao menos 3 letras");
      return;
    }

    if (title.length > 20) {
      setError("Título deve ter no máximo 20 letras");
      return;
    }

    if (size !== "SMALL" && size !== "MEDIUM" && size !== "LARGE") {
      setError("Tamanho da arte inválido");
      return;
    }

    const defaultPainting = generateDefaultPainting(size);

    const paintingDto: PaintingDto = {
      title,
      art: defaultPainting,
    };

    const { data, error } = await controller.post<PaintingDto>(
      "/painting",
      paintingDto,
      accessToken
    );

    if (error) {
      showMessage(error, "error");
      return;
    }

    router.push(`/edit/painting/${data.id}`);
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <h2 className="w-full text-2xl m-2">Crie sua pintura:</h2>
      <Form
        error={error}
        setError={setError}
        onSubmit={async (evt) => await handleSubmit(evt)}
      >
        <Input
          label="Título"
          color="primary"
          id="title"
          name="title"
          placeholder="Título da pintura"
          type="text"
          minLength={3}
          maxLength={20}
          required
          className="w-full"
          value={title}
          setValue={setTitle}
        />
        <Select
          label="Tamanho"
          color="primary"
          id="size"
          name="size"
          options={["16", "32", "64"]}
          className="w-full"
          value={size}
          setValue={setSize}
        />
        <Button type="submit" color="primary" className="w-full">
          Criar
        </Button>
      </Form>
    </Modal>
  );
};

export { PaintingModal };
