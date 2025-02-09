import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../schema";
import { InputField } from "./input-field";
import iconRadioSelect from "../assets/icon-radio-selected.svg";

export const Form = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      terms: false,
    },
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData): void => {
    console.log("Success", data);
    reset();
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 text-[#2b4246]">
      <h1 className="mb-7 text-2xl font-bold text-[#2b4246]">Contact US</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-4 flex flex-col gap-y-4">
            <InputField label="First Name" name="firstName" />
            <InputField label="Last Name" name="lastName" />
            <InputField label="Email Address" name="email" />
          </fieldset>
          {/* INPUT RADIO */}
          <fieldset className="mb-4 flex flex-col gap-y-4">
            <legend className="mb-2">
              Query type <span className="text-[#0c7d69]">*</span>
            </legend>
            <label
              className={`flex cursor-pointer items-center rounded border border-[#87a3a6] px-5 py-2 ${methods.watch("queryType") === "general enquity" && "bg-[#dff1e7]"}`}
            >
              <span
                className={`${methods.watch("queryType") === "general enquity" && "border-0"} mr-3 block h-4 w-4 rounded-full border border-gray-300`}
              >
                <img
                  src={iconRadioSelect}
                  alt="radio selected"
                  className={`${methods.watch("queryType") === "general enquity" ? "block" : "hidden"}`}
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
            <label
              className={`flex cursor-pointer items-center rounded border border-[#87a3a6] px-5 py-2 ${methods.watch("queryType") === "support request" && "bg-[#dff1e7]"}`}
            >
              <span
                className={`${methods.watch("queryType") === "support request" && "border-0"} mr-3 block h-4 w-4 rounded-full border border-gray-300`}
              >
                <img
                  src={iconRadioSelect}
                  alt="radio selected"
                  className={`${methods.watch("queryType") === "support request" ? "block" : "hidden"}`}
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
            {errors.queryType && (
              <span className="-translate-y-2 text-sm text-red-500">
                Please select a query type
              </span>
            )}
          </fieldset>
          <fieldset>
            <label>
              Message <span className="text-#0c7d69">*</span>
            </label>
            <textarea
              className="mt-2 w-full resize-none rounded border border-[#87a3a6] px-3 py-2 outline-0"
              rows={5}
              {...register("message")}
              id=""
            />
            {errors?.message && (
              <span className="text-sm text-red-500">
                {errors.message?.message}
              </span>
            )}
          </fieldset>
          <fieldset>
            <label>
              <input type="checkbox" {...register("terms")} />I consent to be
              contacted by the team <span className="#0c7d69">*</span>
            </label>
            {errors.terms && <span>{errors.terms?.message}</span>}
          </fieldset>
          <button
            type="submit"
            className="mt-6 w-full rounded bg-[#0c7d69] py-2 text-white"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
