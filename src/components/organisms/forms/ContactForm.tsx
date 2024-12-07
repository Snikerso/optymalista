import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  message: string;
};

export const ContactForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Email sent successfully");
      form.reset();
    } else {
      console.error("Failed to send email");
    }
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        control={form.control}
        required
      />

      <Textarea
        id="message"
        name="message"
        placeholder="Wiadomość"
        rows={3}
        control={form.control}
        required
      />

      <Button type="submit">Wyślij</Button>
    </form>
  );
};
