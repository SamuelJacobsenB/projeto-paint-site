"use client";

import { useState } from "react";
import Link from "next/link";
import { useMessage } from "@/contexts";
import { Controller } from "@/services";
import { I } from "@/components";
import { PaintingModal } from "./painting-modal";
import { validateUpdatePainting } from "@core/validators";
import { Painting, UpdatePaintingDto } from "@core/types";

interface PaintingHeaderProps {
  painting: Painting;
  art: string[];
}

const buttonStyle =
  "text-lg text-white p-1 px-4 rounded hover:bg-light_secondary";

const PaintingHeader = ({ painting, art }: PaintingHeaderProps) => {
  const { showMessage } = useMessage();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const controller = new Controller();

  const handleSave = async () => {
    const { valid, error } = validateUpdatePainting({ art });

    if (!valid) {
      showMessage(error as string, "error");
      return;
    }

    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      showMessage("Você precisa estar logado para editar", "error");
      return;
    }

    const { error: _error } = await controller.patch<UpdatePaintingDto>(
      `/painting/${painting.id}`,
      { art },
      accessToken
    );

    if (_error) {
      showMessage(_error, "error");
      return;
    }

    showMessage("Salvo com sucesso", "success");
  };

  return (
    <header className="flex items-center gap-2 bg-secondary w-full p-2 ">
      <Link
        className="text-xl text-white p-2 rounded hover:bg-light_secondary"
        href={"/"}
      >
        <I.Home />
      </Link>
      <button
        color="secondary"
        className={buttonStyle}
        onClick={async () => await handleSave()}
      >
        Salvar
      </button>
      <button
        color="secondary"
        className={buttonStyle}
        onClick={() => setIsModalVisible(true)}
      >
        Visualizar
      </button>
      <PaintingModal
        size={painting.size}
        art={art}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </header>
  );
};

export { PaintingHeader };
