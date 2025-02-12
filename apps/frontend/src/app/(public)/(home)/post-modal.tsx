"use client";

import React, { useState } from "react";
import { useMessage, useUser } from "@/contexts";
import { Controller } from "@/services";
import { Button, Form, Input, Modal, Select } from "@/components";
import { Painting, PostDto } from "@core/types";

interface PostModalProps {
  paintings: Painting[];
  refecthPosts: () => Promise<void>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal = ({
  paintings,
  refecthPosts,
  isVisible,
  setIsVisible,
}: PostModalProps) => {
  const { showMessage } = useMessage();
  const { user } = useUser();

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [paintingTitle, setPaintingTitle] = useState("Selecione uma pintura");

  const controller = new Controller();

  const paintingOptions = [
    "Selecione uma pintura",
    ...paintings.map((painting) => painting.title),
  ];

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

    if (title.length > 30) {
      setError("Título deve ter no máximo 30 letras");
      return;
    }

    if (!paintingTitle || paintingTitle === "Selecione uma pintura") {
      setError("Selecione uma pintura");
      return;
    }

    const paintingId = paintings.find(
      (painting) => painting.title === paintingTitle
    )?.id;

    if (!paintingId) {
      showMessage("Pintura não encontrada", "error");
      return;
    }

    const postDto: PostDto = {
      title,
      paintingId,
    };

    const { error } = await controller.post<PostDto>(
      "/post",
      postDto,
      accessToken
    );

    if (error) {
      showMessage(error, "error");
      return;
    }

    showMessage("Postagem criada com sucesso", "success");
    setIsVisible(false);

    await refecthPosts();
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
          label="Pintura"
          color="primary"
          id="painting"
          name="painting"
          options={paintingOptions}
          className="w-full"
          value={paintingTitle}
          setValue={setPaintingTitle}
        />
        <Button type="submit" color="primary" className="w-full">
          Postar
        </Button>
      </Form>
    </Modal>
  );
};

export { PostModal };
