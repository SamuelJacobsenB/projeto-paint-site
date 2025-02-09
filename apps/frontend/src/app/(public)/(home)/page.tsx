"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage, useUser } from "@/contexts";
import { usePaintingsByAuthor } from "@/hooks";
import {
  Button,
  CreateCardButton,
  Layout,
  LoadPage,
  PaintingCard,
} from "@/components";
import { PaintingModal } from "./painting-modal";

const Home = () => {
  const router = useRouter();

  const { showMessage } = useMessage();
  const { user } = useUser();

  const { paintings, loading } = usePaintingsByAuthor();

  const [isPaintingContent, setIsPaintingContent] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreatePainting = () => {
    if (!user) {
      showMessage("Você deve estar logado para realizar esta ação", "error");
      return;
    }

    setIsModalVisible(true);
  };

  if (loading) {
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
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
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
        ""
      )}
    </Layout>
  );
};

export default Home;
