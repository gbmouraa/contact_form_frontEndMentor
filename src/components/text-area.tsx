import { FieldErrors, useFormContext } from "react-hook-form";
import { FormData } from "../hooks/useMyForm";

interface TextAreaProps {
  errors: FieldErrors<FormData>;
}

export const TextArea: React.FC<TextAreaProps> = ({ errors }) => {
  const { register } = useFormContext();

  return (
    <>
      <label>
        Message <span className="text-green-medium">*</span>
      </label>
      <textarea
        className={`${errors.message && "border-red-500"} hover:border-green-medium focus:border-green-medium border-grey-medium mt-2 w-full resize-none rounded border px-3 py-2 outline-0`}
        rows={5}
        {...register("message")}
        id=""
      />
      {errors?.message && (
        <span className="text-sm text-red-500">{errors.message.message}</span>
      )}
    </>
  );
};
