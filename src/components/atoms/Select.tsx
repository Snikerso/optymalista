import { Control, Controller } from "react-hook-form";

interface Props {
  id: string;
  name: string;
  options: { value: string | null; label: string }[];
  className?: string;
  required?: boolean;
  control: Control<any>;
  defaultValue?: string;
}

export const Select = ({
  id,
  name,
  options,
  className = "",
  required = false,
  control,
  defaultValue,
}: Props) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <select
          id={id}
          className={`p-2 rounded-md border-2 border-black ${className}`}
          required={required}
          {...field}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value ?? ""}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};
