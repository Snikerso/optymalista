import { Control, Controller } from "react-hook-form";

interface Props {
  type: string;
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  control: Control<any>;
}

export const Input = ({
  type,
  id,
  name,
  className = "",
  required = false,
  placeholder = "",
  control,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          type={type}
          id={id}
          className={`p-2 rounded-md border-2 border-black ${className}`}
          required={required}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
  );
};
