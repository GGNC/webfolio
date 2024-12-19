"use client";
import { z } from "zod";
import { contactData } from "@/config/constants";
import Title from "../Title";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { ContactFormSchema } from "@/config/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values);
  }
  return (
    <div className="space-y-4">
      <Title className="text-2xl md:text-4xl">
        {contactData.formData.title.en}
      </Title>
      <p>{contactData.formData.description.en}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form">
          <div className="contact-form-input-container">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="contact-form-input">
                  <FormControl>
                    <Input
                      placeholder={contactData.formData.name.en}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="contact-form-input">
                  <FormControl>
                    <Input
                      placeholder={contactData.formData.email.en}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={contactData.formData.message.en}
                    {...field}
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="contact-form-button"
            type="submit"
          >
            {contactData.formData.button.en}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
