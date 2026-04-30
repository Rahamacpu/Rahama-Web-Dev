import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const TARGET_EMAIL = "tech1718@gmail.com";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("_subject", `New message from ${data.name} via icyber.tech`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      let result: { success?: string | boolean; message?: string } = {};
      try {
        result = await res.json();
      } catch {
        // ignore JSON parse errors
      }

      const success =
        result.success === true ||
        result.success === "true" ||
        (res.ok && !result.message);

      if (!res.ok || !success) {
        throw new Error(
          result.message || "Failed to send message. Please try again."
        );
      }

      return { success: true, message: "Message sent successfully!" };
    },
  });
}
