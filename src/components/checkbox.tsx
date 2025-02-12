import { useFormContext, FieldErrors } from "react-hook-form";
import { FormData } from "../hooks/useMyForm";
import iconCheck from "../assets/icon-checkbox-check.svg";

interface CheckboxProps {
  errors: FieldErrors<FormData>;
}

export const CheckBox: React.FC<CheckboxProps> = ({ errors }) => {
  const { register, watch } = useFormContext();
  return (
    <>
      <label className="flex cursor-pointer items-center">
        <input
          type="checkbox"
          {...register("terms")}
          className="absolute inline-block w-0"
        />
        {/* CHECKBOX STYLIZED */}
        <div
          className={`${watch("terms") && "absolute border-transparent"} border-grey-medium mr-2 min-h-4 min-w-4 border`}
        />
        <div className={`${watch("terms") ? "mr-2 block" : "hidden"}`}>
          <img src={iconCheck} alt="Checkbox" width={16} className="min-w-4" />
        </div>

        <p>
          I consent to be contacted by the team{" "}
          <span className="text-green-medium">*</span>
        </p>
      </label>
      {errors.terms && (
        <span className="block text-sm text-red-500">
          {errors.terms?.message}
        </span>
      )}
    </>
  );
};
