"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage, useUser } from "@/contexts";
import { usePaintingsByAuthor, usePostsByAuthor } from "@/hooks";
import {
  Button,
  CreateCardButton,
  Layout,
  LoadPage,
  PaintingCard,
} from "@/components";
import { PaintingModal } from "./painting-modal";
import { PostCard } from "@/components/shared/cards/post-card";
import { PostModal } from "./post-modal";

const Home = () => {
  const router = useRouter();

  const { showMessage } = useMessage();
  const { user } = useUser();

  const { paintings, loading } = usePaintingsByAuthor();
  const {
    posts,
    loading: postLoading,
    findPosts,
  } = usePostsByAuthor({ id: user?.id });

  const [isPaintingContent, setIsPaintingContent] = useState(true);

  const [isPaintingModalVisible, setIsPaintingModalVisible] = useState(false);
  const [isPostModalVisible, setIsPostModalVisible] = useState(false);

  const handleCreatePainting = () => {
    if (!user) {
      showMessage("Você deve estar logado para realizar esta ação", "error");
      return;
    }

    setIsPaintingModalVisible(true);
  };

  const handleCreatePost = () => {
    if (!user) {
      showMessage("Você deve estar logado para realizar esta ação", "error");
      return;
    }

    if (!paintings) {
      showMessage("Você deve estar ter uma pintura para postar", "error");
      return;
    }

    setIsPostModalVisible(true);
  };

  if (loading || postLoading) {
    return <LoadPage />;
  }

  return (
    <Layout>
      <div className="flex justify-between text-terciary w-full max-w-96 mt-4 mb-20">
        <Button
          className="text-xl px-8"
          color={isPaintingContent ? "primary" : "secondary"}
          onClick={() => setIsPaintingContent(true)}
        >
          Pinturas
        </Button>
        <Button
          className="text-xl px-8"
          color={!isPaintingContent ? "primary" : "secondary"}
          onClick={() => setIsPaintingContent(false)}
        >
          Postagens
        </Button>
      </div>
      {isPaintingContent ? (
        <>
          <PaintingModal
            isVisible={isPaintingModalVisible}
            setIsVisible={setIsPaintingModalVisible}
          />
          <h1 className="text-white text-4xl my-20">Suas pinturas:</h1>
          <div className="flex flex-wrap gap-10">
            <CreateCardButton
              text="Nova pintura"
              onClick={() => handleCreatePainting()}
            />
            {paintings &&
              paintings.map((painting, i) => (
                <PaintingCard
                  painting={painting}
                  onClick={() => router.push(`/edit/painting/${painting.id}`)}
                  key={i}
                />
              ))}
          </div>
        </>
      ) : (
        <>
          <PostModal
            paintings={paintings!}
            refecthPosts={async () => await findPosts()}
            isVisible={isPostModalVisible}
            setIsVisible={setIsPostModalVisible}
          />
          <h1 className="text-white text-4xl my-20">Suas postagens:</h1>
          <div className="flex flex-wrap gap-10">
            <CreateCardButton
              text="Nova postagem"
              onClick={() => handleCreatePost()}
            />
            {posts &&
              posts.map((post, i) => (
                <PostCard post={post} onClick={() => {}} key={i} />
              ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
