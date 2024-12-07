interface Props {
  id: string;
  name: string;
  rows?: number;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

export const Textarea = ({
  id,
  name,
  rows = 4,
  className = "",
  required = false,
  placeholder = "",
}: Props) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={`p-2 rounded-md border-2 border-black ${className}`}
      required={required}
      placeholder={placeholder}
    ></textarea>
  );
};
