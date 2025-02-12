"use client";

import { usePaintingById } from "@/hooks";
import { serializeDate } from "@/functions";
import { Loader } from "..";
import { Post } from "@core/types";

interface PaintingCardProps {
  post: Post;
  onClick?: () => void;
}

const PostCard = ({ post, onClick }: PaintingCardProps) => {
  const { painting, loading, error } = usePaintingById({ id: post.paintingId });

  const numberOfPixelsInSide =
    painting?.size === "SMALL" ? 16 : painting?.size === "MEDIUM" ? 32 : 64;

  const pixelSize =
    painting?.size === "SMALL" ? 10 : painting?.size === "MEDIUM" ? 5 : 2;

  const date = serializeDate(post?.createdAt as Date);

  return (
    <div className="flex flex-col justify-center gap-4 w-fit">
      <div
        className="relative flex flex-col justify-center items-center bg-white text-5xl w-48 h-72 cursor-pointer hover:bg-terciary"
        onClick={onClick}
      >
        {loading && (
          <div className="flex justify-center items-center w-full h-full">
            <Loader />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center w-full h-full p-2">
            <h2 className="text-lg text-red-600">
              Parece que houve um erro:
              <br />
              {error}
            </h2>
          </div>
        )}

        {!loading && !error && (
          <>
            <small className="absolute top-1 text-sm">{date}</small>
            <div
              className="flex flex-wrap border-2 border-black"
              style={{
                width: pixelSize * numberOfPixelsInSide + 4,
                height: pixelSize * numberOfPixelsInSide + 4,
              }}
            >
              {painting?.art.map((pixelColor, i) => (
                <div
                  style={{
                    width: pixelSize + "px",
                    height: pixelSize + "px",
                    backgroundColor: "#" + pixelColor,
                  }}
                  key={i}
                />
              ))}
            </div>
            {post.author && (
              <small className="absolute bottom-1 text-sm">
                {post.author.name}
              </small>
            )}
          </>
        )}
      </div>
      <big className="text-lg text-center text-white">{post.title}</big>
    </div>
  );
};

export { PostCard };
