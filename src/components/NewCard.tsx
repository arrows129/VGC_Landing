// components/Newcard.tsx
import { FC, ReactNode } from "react";

interface NewcardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const Newcard: FC<NewcardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#1f1f1f] border border-white/15 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 h-[300px] flex flex-col justify-between">
      <div>
        <div className="text-4xl mb-4 text-lime-400">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 uppercase leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-white/50">{description}</p>
    </div>
  );
};

export default Newcard;
