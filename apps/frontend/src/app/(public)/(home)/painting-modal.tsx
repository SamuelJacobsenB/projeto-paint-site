"use client";

import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "@/components";
import { useRouter } from "next/navigation";

interface PaintingModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintingModal = ({ isVisible, setIsVisible }: PaintingModalProps) => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("16");

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (title.length < 3) {
      setError("Título deve ter ao menos 3 letras");
      return;
    }

    if (title.length > 20) {
      setError("Título deve ter no máximo 20 letras");
      return;
    }

    if (size !== "16" && size !== "32" && size !== "64") {
      setError("Tamanho da arte inválido");
      return;
    }

    router.push(`/create/painting/${title}/${size}`);
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
