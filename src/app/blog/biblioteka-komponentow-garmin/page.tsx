import { BlogArticle } from "@/components/templates/BlogArticle";
import { blogPosts } from "@/data/blogPosts";
import { createPageMetadata, siteUrl } from "@/lib/seo";

const path = "/blog/biblioteka-komponentow-garmin/";
const post = blogPosts.find((entry) => entry.link === path)!;
const repository = "https://github.com/Snikerso/ConnectIQComponents";

export const metadata = createPageMetadata({ title: post.title, description: post.description!, path });
const jsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: post.title, description: post.description,
  datePublished: "2026-10-07", dateModified: "2026-10-07", inLanguage: "pl",
  author: { "@type": "Person", name: "Paweł Drojecki", url: siteUrl },
  mainEntityOfPage: new URL(path, siteUrl).toString(),
};
const example = `var theme = new ConnectIQComponents.Theme({
    :accent => 0xB3DFAC
});
var button = new ConnectIQComponents.Button({
    :text => "Parz herbatę",
    :x => 80, :y => 220,
    :width => 200, :height => 50,
    :style => {:radius => 25},
    :onPress => method(:startBrewing)
}, theme);

// W onUpdate(dc) widoku:
button.draw(dc, 0, 0);

// Po zmianie stanu aplikacji:
button.setProps({:text => "Gotowe"});
WatchUi.requestUpdate();`;
const components = [
  ["Button / OutlineButton", "Przycisk wypełniony lub z obrysem; obsługuje akcję onPress."],
  ["Panel / Label", "Zaokrąglona powierzchnia i tekst skracany do dostępnej szerokości."],
  ["Badge / Divider", "Kapsułka z tekstem i separator poziomy lub pionowy."],
  ["ProgressBar / ProgressRing", "Postęp od 0 do 1: pasek lub segmentowy pierścień."],
];

export default function GarminComponentsPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle title={post.title} lead="Zbudowałem bibliotekę UI w Monkey C dla Garmin Connect IQ. Wydzieliłem powtarzające się elementy z aplikacji zegarkowych i podłączyłem je do TeaStop: przyciski, karty oraz pierścień timera korzystają teraz ze wspólnego kodu."
        date="2026-10-07" dateLabel="7 października 2026" tags={post.tags}
        action={{ href: repository, label: "Repozytorium na GitHubie" }}
        sections={[{ id: "zakres", label: "Zakres biblioteki" }, { id: "api", label: "API i motywy" }, { id: "teastop", label: "Integracja z TeaStop" }, { id: "instalacja", label: "Instalacja" }]}>
        <section id="zakres">
          <h2>8 komponentów, jeden motyw</h2>
          <p>W KnittingCounter i TeaStop powtarzałem kod rysujący przyciski, karty i wskaźniki. Przeniosłem te elementy do osobnego repozytorium <strong>ConnectIQComponents</strong>. Wersja 0.2.0 zawiera:</p>
          <dl className="mt-5 divide-y divide-gray-200 border-y border-gray-200">{components.map(([name, detail]) => <div key={name} className="py-4"><dt className="font-ibm text-sm font-semibold text-black">{name}</dt><dd className="mt-1 text-sm leading-6 text-gray-600">{detail}</dd></div>)}</dl>
          <p className="mt-5">Każdy komponent przyjmuje pozycję, wymiary, widoczność i lokalny styl. Motyw ustala kolory, font, odstępy i promień zaokrągleń. Komponent nie zna danych aplikacji ani sposobu ich zapisu.</p>
        </section>
        <section id="api">
          <h2>Parametry i składanie inspirowane Reactem</h2>
          <p>Przekazuję parametry w słowniku Monkey C. Metoda <code>add(child)</code> pozwala zagnieżdżać komponenty, a <code>setProps()</code> aktualizuje ich treść i wygląd. Wspólny motyw można nadpisać przez <code>:style</code> konkretnego elementu.</p>
          <figure className="mt-5 min-w-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
            <figcaption className="flex items-center justify-between border-b border-gray-800 px-5 py-3 font-ibm text-xs text-gray-400"><span>Przycisk z motywem i aktualizacją tekstu</span><span className="ml-4 shrink-0">Monkey C</span></figcaption>
            <pre tabIndex={0} aria-label="Przykład kodu Monkey C" className="overflow-x-auto p-5 text-[13px] leading-6 text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><code>{example}</code></pre>
          </figure>
          <p className="mt-5"><code>startBrewing</code> to metoda aplikacji. Dotyk przekazuję do komponentu przez <code>press()</code> lub adapter <code>ComponentDelegate</code>. Renderowanie korzysta z Garmin Graphics i WatchUi; odświeżenie po zmianie stanu wywołuję jawnie. Układ ma wymiary w pikselach, więc dopasowanie do ekranu pozostaje po stronie aplikacji.</p>
        </section>
        <section id="teastop">
          <h2>Co wymieniłem w TeaStop</h2>
          <p>Dodałem bibliotekę jako Git submodule przypięty do <strong>v0.2.0</strong>. Adapter <code>TeaComponents.mc</code> mapuje kolory TeaStop na motyw biblioteki i ponownie wykorzystuje instancje komponentów podczas rysowania.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
            <li>Przyciski „+ Dodaj”, „Parz herbatę”, „Opcje” i korekty czasu używają Button lub OutlineButton.</li>
            <li>Karty listy herbat używają Panel, a separator edytora nazwy — Divider.</li>
            <li>Segmentowy wskaźnik parzenia używa ProgressRing.</li>
          </ul>
          <p className="mt-4">Delegaty TeaStop nadal obsługują akcje i trafienia dotyku. Odliczanie, alarmy i zapis sesji pozostały w aplikacji. Zmiana dotyczyła warstwy rysowania.</p>
          <div className="mt-5 rounded-lg border-l-4 border-accent bg-gray-50 p-5 text-sm leading-7"><p className="font-semibold text-black">Weryfikacja integracji</p><p>Kompilacje: Venu 3, fēnix 7S, Venu Sq 2 i Forerunner 965. W symulatorze przeszło 9 testów: 7 regresji aplikacji i 2 testy adaptera UI. Sprawdziłem też uruchomienie TeaStop na symulatorze Venu 3. Testy na fizycznych zegarkach pozostają do wykonania.</p></div>
        </section>
        <section id="instalacja">
          <h2>Jak użyć w kolejnym projekcie</h2>
          <p>Repozytorium jest publiczne, na licencji MIT. Można dołączyć źródła lub zbudować paczkę Monkey Barrel. Przy integracji ze źródeł dodaję repozytorium jako submodule, przypinam tag i rozszerzam <code>monkey.jungle</code>:</p>
          <pre tabIndex={0} aria-label="Konfiguracja ścieżek biblioteki" className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 font-ibm text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"><code>base.sourcePath = source;vendor/ConnectIQComponents/source</code></pre>
          <p className="mt-5">Biblioteka zawiera dokumentację, przykładową aplikację i testy. API jest jeszcze eksperymentalne — w aplikacji przypinam konkretną wersję, żeby aktualizacja zależności była świadomą zmianą.</p>
        </section>
      </BlogArticle>
    </>
  );
}
