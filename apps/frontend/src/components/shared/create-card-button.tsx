import { I } from "..";

interface CreateCardButtonProps {
  text: string;
  onClick?: () => void;
}

const CreateCardButton = ({ text, onClick }: CreateCardButtonProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-fit">
      <div
        className="flex justify-center items-center bg-white text-5xl w-48 h-72 cursor-pointer hover:bg-terciary"
        onClick={onClick}
      >
        <I.Add />
      </div>
      <big className="text-lg text-center text-white">{text}</big>
    </div>
  );
};

export { CreateCardButton };
