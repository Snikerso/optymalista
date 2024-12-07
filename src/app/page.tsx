"use client";

import { InlineLink } from "@/components/atoms/InlineLink";
import { PageSection } from "@/components/molecules/PageSection";
import { ContactForm } from "@/components/organisms/forms/ContactForm";
import { PageTemplate } from "@/components/templates/PageTemplate";

export default function Home() {
  return (
    <PageTemplate title="Siemanko!" className="gap-12">
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

      <PageSection isBorder className="gap-4">
        <h2 className="text-2xl font-bold">Masz do mnie sprawę?</h2>

        <ContactForm />
      </PageSection>
    </PageTemplate>
  );
}
