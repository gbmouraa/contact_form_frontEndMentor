import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../schema";
import { InputField } from "./input-field";
import iconRadioSelect from "../assets/icon-radio-selected.svg";
import iconCheck from "../assets/icon-checkbox-check.svg";
import { Toast } from "./toast";
import { useState } from "react";

export const Form = () => {
  const [formSent, setFormSent] = useState<boolean>(false);

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
    setFormSent(true);
    console.log("Success", data);
    reset();

    setTimeout(() => {
      setFormSent(false);
    }, 4000);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-grey-darker relative h-fit w-full max-w-[700px] rounded-2xl bg-white p-7"
        >
          <h1 className="text-grey-darker mb-7 text-2xl font-bold">
            Contact US
          </h1>
          <fieldset className="mb-4">
            <div className="mb-3 flex flex-col gap-x-5 space-y-3 md:flex-row">
              <InputField
                label="First Name"
                name="firstName"
                className="w-full"
              />
              <InputField label="Last Name" name="lastName" />
            </div>
            <InputField label="Email Address" name="email" />
          </fieldset>
          {/* INPUT RADIO */}
          <fieldset className="mb-4 flex flex-col gap-y-4">
            <legend className="mb-2">
              Query type <span className="text-green-medium">*</span>
            </legend>
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div className="w-full">
                <label
                  className={`border-grey-medium flex cursor-pointer items-center rounded border px-5 py-2 ${methods.watch("queryType") === "general enquity" && "bg-green-lighter"}`}
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
              </div>
              <div className="w-full">
                <label
                  className={`border-grey-medium flex cursor-pointer items-center rounded border px-5 py-2 ${methods.watch("queryType") === "support request" && "bg-green-lighter"}`}
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
              </div>
            </div>
            {errors.queryType && (
              <span className="-translate-y-2 text-sm text-red-500">
                Please select a query type
              </span>
            )}
          </fieldset>
          <fieldset>
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
              <span className="text-sm text-red-500">
                {errors.message?.message}
              </span>
            )}
          </fieldset>
          <fieldset className="my-6">
            <label className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                {...register("terms")}
                className="absolute inline-block w-0"
              />
              {/* CHECKBOX STYLIZED */}
              <div
                className={`${methods.watch("terms") && "absolute border-transparent"} mr-2 min-h-4 min-w-4 border border-[#87a3a6]`}
              />
              <div
                className={`${methods.watch("terms") ? "mr-2 block" : "hidden"}`}
              >
                <img
                  src={iconCheck}
                  alt="Checkbox"
                  width={16}
                  className="min-w-4"
                />
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
          </fieldset>
          <button
            type="submit"
            className="bg-green-medium hover:bg-grey-darker w-full cursor-pointer rounded py-2 text-white transition-all"
          >
            Submit
          </button>
        </form>
      </FormProvider>
      {formSent && <Toast />}
    </>
  );
};
