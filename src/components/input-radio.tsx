import { useFormContext } from "react-hook-form";
import iconRadioSelect from "../assets/icon-radio-selected.svg";

export const InputRadio: React.FC = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <legend className="mb-2">
        Query type <span className="text-green-medium">*</span>
      </legend>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="w-full">
          <label
            className={`border-grey-medium flex cursor-pointer items-center rounded border px-5 py-2 ${watch("queryType") === "general enquity" && "bg-green-lighter"}`}
          >
            <span
              className={`${watch("queryType") === "general enquity" && "border-0"} mr-3 block h-4 w-4 rounded-full border border-gray-300`}
            >
              <img
                src={iconRadioSelect}
                alt="radio selected"
                className={`${watch("queryType") === "general enquity" ? "block" : "hidden"}`}
              />
            </span>
            <input
              type="radio"
              value="general enquity"
              className="hidden"
              {...register("queryType")}
            />
            General Enquity
          </label>
        </div>
        <div className="w-full">
          <label
            className={`border-grey-medium flex cursor-pointer items-center rounded border px-5 py-2 ${watch("queryType") === "support request" && "bg-green-lighter"}`}
          >
            <span
              className={`${watch("queryType") === "support request" && "border-0"} mr-3 block h-4 w-4 rounded-full border border-gray-300`}
            >
              <img
                src={iconRadioSelect}
                alt="radio selected"
                className={`${watch("queryType") === "support request" ? "block" : "hidden"}`}
              />
            </span>
            <input
              type="radio"
              value="support request"
              className="hidden"
              {...register("queryType")}
            />
            Support Request
          </label>
        </div>
      </div>
      {errors.queryType && (
        <span className="-translate-y-2 text-sm text-red-500">
          Please select a query type
        </span>
      )}
    </>
  );
};
