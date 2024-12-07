"use client";

interface Props {
  icon: JSX.Element;
  link: string;
  text: string;
}

export const LessonElement = ({ icon, link, text }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2.5 cursor-pointer p-1 text-black hover:text-accent"
    >
      <div className="flex items-center justify-center text-current border-2 border-current p-1.5 rounded-full">
        {icon}
      </div>
      <p>{text}</p>
    </a>
  );
};
