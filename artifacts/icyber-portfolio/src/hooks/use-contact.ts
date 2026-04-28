import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Schema for contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      if (!accessKey) {
        throw new Error(
          "Contact form is not configured yet. Please try again later."
        );
      }

      const payload = {
        access_key: accessKey,
        subject: `New message from ${data.name} via icyber.tech`,
        from_name: "icyber.tech Portfolio",
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      return { success: true, message: "Message sent successfully!" };
    },
  });
}
