"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Controller } from "@/services";
import { Painting } from "@core/types";
import { useMessage } from "@/contexts";
import { LoadPage, PaintingInterface } from "@/components";

const EditPainting = () => {
  const router = useRouter();
  const { id } = useParams();

  const { showMessage } = useMessage();

  const [painting, setPainting] = useState<Painting>();
  const [art, setArt] = useState<string[]>([]);

  const handleFindPainting = useCallback(async () => {
    const controller = new Controller();

    const { data, error } = await controller.get(`/painting/${id}`);

    if (error) {
      showMessage("Não foi possível encontrar a pintura", "error");
      router.push("/");
      return;
    }

    setPainting(data);
    setArt(data.art);
  }, [id, router, showMessage]);

  useEffect(() => {
    handleFindPainting();
  }, [id, handleFindPainting]);

  if (!painting) {
    return <LoadPage />;
  }

  return <PaintingInterface painting={painting} art={art} setArt={setArt} />;
};

export default EditPainting;
