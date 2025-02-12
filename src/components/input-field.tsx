import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormData } from "../hooks/useMyForm";

interface InputProps {
  label: string;
  name: keyof FormData;
  type?: string;
  className?: string;
  control?: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export const InputField: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  className,
  control,
  errors,
}) => {
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
            value={typeof field.value === "boolean" ? "" : field.value}
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
