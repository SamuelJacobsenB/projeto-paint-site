"use client";

import { useState } from "react";
import { useMessage, useUser } from "@/contexts";
import { Button, CreateCardButton, Layout } from "@/components";
import { PaintingModal } from "./painting-modal";

const Home = () => {
  const { showMessage } = useMessage();
  const { user } = useUser();

  const [isPaintingContent, setIsPaintingContent] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreatePainting = () => {
    setIsModalVisible(true);

    // if (!user) {
    //   showMessage("Você deve estar logado para realizar esta ação", "error");
    //   return;
    // }
  };

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
          </div>
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
