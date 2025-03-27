import { PageSection } from "@/components/molecules/PageSection";
import { PageTemplate } from "@/components/templates/PageTemplate";
import ColourAlphabet from "./components/ColourAlphabet";
export default function SzybkieCzytanie() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "development") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Brak dostępu</h1>
        <p>Tworzy się strona...</p>
      </div>
    );
  }

  return (
    <PageTemplate title="Szybkie Czytanie" className="gap-12">
      <PageSection className="flex flex-col gap-4">
        <p>
          Szybkie czytanie to umiejętność, która pozwala na znacznie szybsze
          przyswajanie informacji z tekstu pisanego. Dzięki odpowiednim
          technikom, można zwiększyć swoją prędkość czytania nawet kilkukrotnie.
        </p>
      </PageSection>
      <div>Stworzyć cały proces treningu - -</div>
      <div>test szybkiego czytania</div>
      <div>Ćwiczenie - kształty pamięciowe</div>
      <div>szybkie kości</div>
      <div>Strzał w setke</div>

      <ColourAlphabet />

      {/* Stworzyć komponent który generuje kwadraty z kropka w środku */}
      {/* <div>
        <GeometryNumbers />
      </div> */}

      <PageSection isBorder className="gap-4">
        <h2 className="text-2xl font-bold">Korzyści z szybkiego czytania</h2>
        <ul className="list-disc list-inside">
          <li>Oszczędność czasu</li>
          <li>Zwiększenie efektywności nauki</li>
          <li>Lepsze zrozumienie i zapamiętywanie informacji</li>
        </ul>
      </PageSection>
    </PageTemplate>
  );
}
