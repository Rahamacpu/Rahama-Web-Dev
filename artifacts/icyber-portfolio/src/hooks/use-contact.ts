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

      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("subject", `New message from ${data.name} via icyber.tech`);
      formData.append("from_name", "icyber.tech Portfolio");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      return { success: true, message: "Message sent successfully!" };
    },
  });
}
