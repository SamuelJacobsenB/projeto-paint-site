"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller } from "@/services";
import { Post } from "@core/types";

interface UsePostsByAuthorProps {
  id?: string;
}

const usePostsByAuthor = ({ id }: UsePostsByAuthorProps) => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);

  const findPosts = useCallback(async () => {
    setLoading(true);

    if (!id) {
      setLoading(false);
      return;
    }

    const controller = new Controller();

    const { data, error } = await controller.get(`/post/author/${id}`);

    if (error) {
      setLoading(false);
    }

    setPosts(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    findPosts();
  }, [findPosts]);

  return { posts, loading, findPosts };
};

export { usePostsByAuthor };
