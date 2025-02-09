"use client";

import { useEffect, useState } from "react";
import { Controller } from "@/services";
import { Painting } from "@core/types";

const usePaintingsByAuthor = () => {
  const [paintings, setPaintings] = useState<Painting[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findPaintings = async () => {
      setLoading(true);

      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setLoading(false);
        return;
      }

      const controller = new Controller();

      const { data, error } = await controller.get(
        "/painting/author",
        accessToken
      );

      if (error) {
        setLoading(false);
      }

      setPaintings(data);
      setLoading(false);
    };

    findPaintings();
  }, []);

  return { paintings, loading };
};

export { usePaintingsByAuthor };
