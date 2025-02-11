import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
}

export const InputField: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="text-grey-darker flex w-full flex-col gap-1.5">
      <label>
        {label} <span className="text-green-medium">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className={`${className || ""} border-grey-medium hover:border-green-medium focus:border-green-medium cursor-pointer rounded border px-4 py-2 outline-0 ${errors[name] && "border-red-500"}`}
            {...field}
            type={type}
          />
        )}
      />
      {errors[name] && (
        <span className="text-sm text-red-500">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};
