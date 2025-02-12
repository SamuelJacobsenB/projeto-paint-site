"use client";

import { useEffect, useState } from "react";
import { Controller } from "@/services";
import { Painting } from "@core/types";

interface UsePaintingByIdProps {
  id: string;
}

const usePaintingById = ({ id }: UsePaintingByIdProps) => {
  const [painting, setPainting] = useState<Painting>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const findPainting = async () => {
      setLoading(true);

      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setError("Você deve estar logado");
        setLoading(false);
        return;
      }

      const controller = new Controller();

      const { data, error } = await controller.get(
        `/painting/${id}`,
        accessToken
      );

      if (error) {
        setLoading(false);
      }

      setPainting(data);
      setLoading(false);
    };

    findPainting();
  }, [id]);

  return { painting, loading, error };
};

export { usePaintingById };
