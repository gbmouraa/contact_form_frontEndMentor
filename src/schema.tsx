import { z } from "zod";

export const formSchema = z.object({
  terms: z.boolean().refine((value) => value, {
    message: "To submit this form, please consent to being contacted",
  }),
  firstName: z.string().min(1, "This field is required"),
  lastName: z.string().min(1, "This field is required"),
  email: z.string().email("Please enter a valid email addres"),
  queryType: z.string().min(1, "Please select a query type"),
  message: z.string().min(1, "This field is required"),
});

export type FormData = z.infer<typeof formSchema>;
