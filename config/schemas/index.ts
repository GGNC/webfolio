import { z } from "zod";
import { contactData } from "../constants";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: contactData.formData.formMessages.name.invalidNameLengthShort.en,
    })
    .max(15, {
      message: contactData.formData.formMessages.name.invalidNameLengthLong.en,
    }),
  email: z.string().email({
    message: contactData.formData.formMessages.email.invalidEmail.en,
  }),
  message: z
    .string()
    .min(20, {
      message:
        contactData.formData.formMessages.message.invalidMessageLengthShort.en,
    })
    .max(100, {
      message:
        contactData.formData.formMessages.message.invalidMessageLengthLong.en,
    }),
});
