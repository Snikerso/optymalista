interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => (
  <button className="px-4 py-2 bg-accent text-black rounded hover:bg-accent/80 font-bold">
    {children}
  </button>
);
