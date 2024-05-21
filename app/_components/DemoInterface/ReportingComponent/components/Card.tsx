import { CardProps } from "@/Types/Types";

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-md hover:bg-gray-100 cursor-pointer">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
