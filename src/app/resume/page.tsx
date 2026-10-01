export const metadata = {
  title: "Resume Generator",
  description: "Targeted resumes for Paweł Drojecki are coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumeIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <p className="font-ibm text-sm font-bold uppercase text-gray-500">
          Resume generator
        </p>
        <h1 className="text-3xl font-bold leading-tight">
          CV wkrótce
        </h1>
        <p className="text-sm leading-6 text-gray-700">
          Ta sekcja jest chwilowo wyłączona. Dopasowane CV wrócą tutaj wkrótce.
        </p>
      </section>
    </div>
  );
}
