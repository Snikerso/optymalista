import { Control, Controller } from "react-hook-form";

interface Props {
  id: string;
  name: string;
  rows?: number;
  className?: string;
  required?: boolean;
  placeholder?: string;
  control: Control<any>;
}

export const Textarea = ({
  id,
  name,
  rows = 4,
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
        <textarea
          id={id}
          rows={rows}
          className={`p-2 rounded-md border-2 border-black ${className}`}
          required={required}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
  );
};
