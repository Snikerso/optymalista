import Link from "next/link";
import { createPageMetadata, siteUrl } from "@/lib/seo";

const title = "Zbudowałem własną bibliotekę komponentów dla Garmina";
const description = "ConnectIQComponents: reużywalne komponenty interfejsu dla Garmin Connect IQ, konfigurowalne motywy i składanie UI inspirowane Reactem. Biblioteka open source w Monkey C, używana w TeaStop.";
const path = "/blog/biblioteka-komponentow-garmin/";
const repository = "https://github.com/Snikerso/ConnectIQComponents";

export const metadata = createPageMetadata({ title, description, path });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-10-07",
  dateModified: "2026-10-07",
  inLanguage: "pl",
  author: { "@type": "Person", name: "Paweł Drojecki", url: siteUrl },
  mainEntityOfPage: new URL(path, siteUrl).toString(),
};

const buttonExample = `var theme = new ConnectIQComponents.Theme({
    :accent => 0xB3DFAC,
    :foreground => 0xF5F3E9
});

var button = new ConnectIQComponents.Button({
    :text => "Parz herbatę",
    :x => 80, :y => 220,
    :width => 200, :height => 50,
    :style => {:radius => 25},
    :onPress => method(:startBrewing)
}, theme);`;

export default function GarminComponentsPost() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog/" className="w-fit text-sm text-gray-600 hover:underline">← Wszystkie wpisy</Link>
      <header className="flex flex-col gap-4">
        <p className="text-sm text-gray-500"><time dateTime="2026-10-07">7 października 2026</time> · Paweł Drojecki</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="text-lg leading-8 text-gray-700">Pracując nad aplikacjami na zegarki Garmin, zbudowałem ConnectIQComponents — własną bibliotekę reużywalnych komponentów UI w Monkey C. Chciałem składać ekrany z gotowych elementów, zmieniać ich wygląd przez wspólny motyw i używać tego samego kodu w kolejnych projektach.</p>
        <a href={repository} target="_blank" rel="noreferrer" className="w-fit font-semibold underline underline-offset-4">Zobacz bibliotekę na GitHubie ↗</a>
      </header>

      <section className="flex flex-col gap-3 text-base leading-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-black">Od rysowania ekranów do wspólnych komponentów</h2>
        <p>Przy KnittingCounter i TeaStop zacząłem zauważać powtarzające się elementy: zaokrąglone przyciski, karty, etykiety, kapsułki z liczbami i wskaźniki postępu. Każdy ekran potrzebował podobnej geometrii, kolorów i sposobu rysowania tekstu. Utrzymywanie tych elementów osobno oznaczało kolejne miejsca do poprawienia przy zmianie wyglądu.</p>
        <p>Wyodrębniłem je do osobnego projektu. Komponenty nie potrzebują danych o herbacie, rzędach robótki ani zapisie stanu aplikacji. Dostają parametry, motyw i opcjonalną akcję, a aplikacja decyduje, co mają pokazywać i co ma się wydarzyć po kliknięciu.</p>
      </section>

      <section className="flex flex-col gap-3 text-base leading-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-black">Podejście znane z Reacta, dostosowane do Monkey C</h2>
        <p>Inspiracją było składanie interfejsu w React: komponent ma parametry podobne do propsów, może zawierać inne komponenty i reagować na zdarzenia. Wspólny motyw ustala kolory, fonty i odstępy, a lokalne style pozwalają zmienić wygląd pojedynczego elementu.</p>
        <p>To implementacja korzystająca z API rysowania Connect IQ. Parametry przekazuję jako słowniki Monkey C, składam elementy metodą <code>add()</code>, a treść zmieniam przez <code>setProps()</code>. Biblioteka nie zawiera JSX ani wirtualnego DOM; odświeżanie ekranu odbywa się przez mechanizm Garmin WatchUi.</p>
        <pre className="max-w-full overflow-x-auto rounded-lg bg-gray-950 p-5 text-sm leading-6 text-gray-100"><code>{buttonExample}</code></pre>
        <p>W tym przykładzie <code>startBrewing</code> jest metodą aplikacji. Biblioteka odpowiada za przycisk, a rozpoczęcie parzenia pozostaje po stronie TeaStop. Wymiary są podane w pikselach; rzeczywisty układ dopasowuję do rozmiaru ekranu zegarka.</p>
      </section>

      <section className="flex flex-col gap-3 text-base leading-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-black">Co zawiera biblioteka?</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Button i OutlineButton</strong> — akcje główne oraz przyciski z obrysem.</li>
          <li><strong>Panel i Label</strong> — karty, kontenery i tekst dopasowany do dostępnej szerokości.</li>
          <li><strong>Badge i Divider</strong> — kapsułki ze statystykami i separatory.</li>
          <li><strong>ProgressBar i ProgressRing</strong> — pasek postępu oraz segmentowy pierścień, przydatny w timerze.</li>
        </ul>
        <p>Do tego dochodzą wspólny motyw, zagnieżdżanie komponentów, obsługa dotyku oraz adaptery dla WatchUi.View i przycisku SELECT. Wygląd można zmieniać bez kopiowania całej implementacji komponentu.</p>
      </section>

      <section className="flex flex-col gap-3 text-base leading-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-black">Pierwsze wykorzystanie: TeaStop</h2>
        <p>Podłączyłem bibliotekę do TeaStop jako Git submodule przypięty do wersji 0.2.0. Rysuje teraz przyciski, karty listy herbat, separator w edytorze nazwy oraz pierścień postępu parzenia. Adapter mapuje kolorystykę TeaStop na motyw biblioteki i ponownie wykorzystuje instancje komponentów.</p>
        <p>Istniejące delegaty nadal obsługują akcje, a logika odliczania, alarmów i zapisu danych pozostaje w aplikacji. Dzięki temu mogłem wymienić warstwę rysowania bez przebudowy całego przepływu parzenia.</p>
        <p>Po integracji przeszły kompilacje dla Venu 3, fēnix 7S, Venu Sq 2 i Forerunner 965 oraz wszystkie 9 testów w symulatorze. To sprawdzenie kompilacji i zachowania kodu; pełna weryfikacja na fizycznych zegarkach jest kolejnym krokiem.</p>
      </section>

      <section className="flex flex-col gap-3 text-base leading-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-black">Publiczna i gotowa do kolejnych projektów</h2>
        <p>Udostępniłem kod na GitHubie na licencji MIT. Bibliotekę można dołączyć jako źródła lub zbudować paczkę Monkey Barrel. Repozytorium zawiera dokumentację, działający przykład i testy, a wersje można przypinać tagami.</p>
        <p>To wczesna wersja biblioteki, którą rozwijam na podstawie potrzeb rzeczywistych aplikacji. Największy efekt już teraz to wspólne miejsce na komponenty i ich wygląd — kolejny projekt nie musi zaczynać od rysowania każdego przycisku od zera.</p>
        <a href={repository} target="_blank" rel="noreferrer" className="w-fit font-semibold text-black underline underline-offset-4">Kod, dokumentacja i przykłady ConnectIQComponents ↗</a>
        <Link href="/projekty/knitting-counter-pro/" className="w-fit text-sm underline underline-offset-4">Zobacz też Knitting Counter Pro</Link>
      </section>
    </article>
  );
}
