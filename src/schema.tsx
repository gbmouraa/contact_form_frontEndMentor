import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "This field is required"),
  lastName: z.string().min(1, "This field is required"),
  email: z.string().email("Please enter a valid email addres"),
  queryType: z.string().min(1, "Please select a query type"),
});

export type FormData = z.infer<typeof formSchema>;
