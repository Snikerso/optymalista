"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center gap-10">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase text-gray-500">
            Frontend / Fullstack / Product
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Paweł Drojecki
          </h1>
        </div>

        <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8">
          <p>
            Projektuję i buduję aplikacje webowe, mobile oraz zaplecze
            techniczne produktów, które mają działać nie tylko w demo, ale też
            w prawdziwym użyciu.
          </p>
          <p className="text-gray-700">
            Pracuję z React.js, Next.js, React Native, Node.js i TypeScriptem.
            Lubię łączyć dobry frontend z backendem, integracjami, DevOpsem i
            myśleniem produktowym. Jestem miłośnikiem technologii i nauki, a
            w TrisztiLab tworzę różne ciekawe projekty, eksperymenty i
            warsztaty.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className="rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
          >
            Zobacz portfolio
          </Link>
          <a
            href="https://www.linkedin.com/in/pawel-drojecki/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black px-4 py-2 font-bold hover:text-accent"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {["Web apps", "Mobile apps", "Backend & DevOps"].map((item) => (
          <div key={item} className="rounded-md border-2 border-black p-4">
            <p className="text-sm font-bold uppercase text-gray-600">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
