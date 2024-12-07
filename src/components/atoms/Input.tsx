interface Props {
  type: string;
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

export const Input = ({
  type,
  id,
  name,
  className = "",
  required = false,
  placeholder = "",
}: Props) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`p-2 rounded-md border-2 border-black ${className}`}
      required={required}
      placeholder={placeholder}
    />
  );
};
