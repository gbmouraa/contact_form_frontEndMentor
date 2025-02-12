import { useMyForm, FormData } from "../hooks/useMyForm";
import { FormProvider } from "react-hook-form";
import { InputField } from "./input-field";
import { InputRadio } from "./input-radio";
import { TextArea } from "./text-area";
import { CheckBox } from "./checkbox";
import { Toast } from "./toast";
import { useState } from "react";

export const Form = () => {
  const [formSent, setFormSent] = useState<boolean>(false);

  const methods = useMyForm();

  const {
    handleSubmit,
    reset,
    control,
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
                control={control}
                errors={errors}
              />
              <InputField
                label="Last Name"
                name="lastName"
                control={control}
                errors={errors}
              />
            </div>
            <InputField
              label="Email Address"
              name="email"
              control={control}
              errors={errors}
            />
          </fieldset>
          <fieldset className="mb-4 flex flex-col gap-y-4">
            <InputRadio />
          </fieldset>
          <fieldset>
            <TextArea errors={errors} />
          </fieldset>
          <fieldset className="my-6">
            <CheckBox errors={errors} />
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
