"use client";

import { PageSection } from "@/components/molecules/PageSection";
import { ContactForm } from "@/components/organisms/forms/ContactForm";
import { PageTemplate } from "@/components/templates/PageTemplate";

export default function AboutMe() {
  return (
    <PageTemplate title="Cześć i czołem !" className="gap-12">
      <PageSection>
        <ContactForm />
      </PageSection>
    </PageTemplate>
  );
}
