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
    <div className="flex w-full flex-col gap-1.5 text-[#2b4246]">
      <label>
        {label} <span className="text-[#0c7d69]">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className={`${className || ""} cursor-pointer rounded border border-[#87a3a6] px-4 py-2 outline-0 hover:border-[#0c7d69] focus:border-[#0c7d69] ${errors[name] && "border-red-500"}`}
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
