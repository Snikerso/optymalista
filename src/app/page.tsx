"use client";

import { Button } from "@/components/atoms/Button";
import { InlineLink } from "@/components/atoms/InlineLink";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { PageSection } from "@/components/molecules/PageSection";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <PageTemplate title="Siemanko!">
      <PageSection className="flex flex-col gap-4">
        <p>
          Najprościej będzie jak napiszesz do mnie na{" "}
          <InlineLink
            isExternal
            href="https://www.linkedin.com/in/paweł-drojecki/"
          >
            LinkedIn
          </InlineLink>{" "}
          ale dla zabawy zrobiłem wysyłanie mailem, bo została mi objawiona
          fajna biblioteka Resend. O której pisze w tym{" "}
          <InlineLink
            isExternal
            href="https://optymalista.medium.com/resend-easy-tool-to-send-mail-8c2755da54ae"
          >
            artykule
          </InlineLink>
          .
        </p>
      </PageSection>

      <PageSection isBorder>
        <h2 className="text-2xl font-bold">Masz do mnie sprawę?</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <Textarea
            id="message"
            name="message"
            placeholder="Wiadomość"
            rows={3}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          />

          <Button type="submit">Wyślij</Button>
        </form>
      </PageSection>
    </PageTemplate>
  );
}
