# Strategia rozwoju portfolio

Portfolio ma działać jak główne CV Pawła Drojeckiego: krótko tłumaczyć pozycjonowanie, pokazywać najmocniejsze projekty i prowadzić odbiorcę do konkretnych case studies.

Pełniejsza wersja strategii jest w pliku [`STRATEGIA_ROZWOJU.md`](./STRATEGIA_ROZWOJU.md).

## Pozycjonowanie

Główna narracja:

> Buduję aplikacje webowe i produktowe od interfejsu po backend. Łączę React, Next.js, Nest.js i myślenie produktowe, żeby szybko dowozić działające rozwiązania.

Angielska wersja bio:

> I build web and product applications from interface to backend, combining React, Next.js, Nest.js and product thinking to ship useful, working software.

Najważniejsze słowa kluczowe:

- React
- Next.js
- Nest.js
- TypeScript
- React Native
- product development
- e-commerce
- backend
- DevOps
- Google Analytics

## Priorytetowe projekty

Najmocniejsze case studies powinny być widoczne na stronie głównej i na początku sekcji projektów w portfolio.

1. Royal Mint
   Komercyjny projekt enterprise/e-commerce. Pokazuje doświadczenie w pracy z dużym systemem, legacy codebase, Reactem, TypeScriptem, Azure i Google Analytics.

2. CleanStrategy
   Produkt mobile/web. Pokazuje myślenie produktowe, React Native, Expo, web app, backend w Nest.js i MongoDB.

3. Moment Studio
   Fullstackowy sklep internetowy. Pokazuje e-commerce, backend, MongoDB, Stripe, Resend i przejście od marki do realnej sprzedaży.

Juli Jogi może być traktowane jako projekt rosnący: platforma edukacyjno-usługowa z pełnym setupem Google Analytics i integracji analitycznych, która z czasem może wejść do top 3, jeśli będzie miała mocniejsze efekty, zrzuty ekranów i publiczny opis funkcji.

## Schemat opisu projektu

Każdy projekt powinien być opisany według tego samego schematu:

1. Problem
   Co było do rozwiązania i dlaczego to miało znaczenie.

2. Rozwiązanie
   Jakie podejście techniczne lub produktowe zostało zastosowane.

3. Technologie
   Konkretne narzędzia, frameworki i integracje.

4. Efekt
   Co użytkownik, klient albo produkt zyskał po wdrożeniu.

Ten schemat jest ważniejszy niż długa lista obowiązków. Ma szybko pokazywać wartość pracy.

## Roadmapa

### 0-3 miesiące

Cel: dopiąć wizerunek, portfolio i pierwszą warstwę SEO.

- Utrzymać stronę jako główne CV.
- Dopisać szczegółowe case studies dla najważniejszych projektów.
- Uzupełnić realne screeny projektów zamiast mockupów, gdy tylko są dostępne.
- Ustawić LinkedIn pod jedną narrację: React, Next.js, Nest.js, product development.
- Przygotować krótkie bio PL/EN do użycia w ofertach, rozmowach i socialach.

### 3-6 miesięcy

Cel: zwiększyć wiarygodność i ruch organiczny.

- Rozbudować case studies o mierzalne efekty, tam gdzie można je bezpiecznie podać.
- Dodać 2-4 wpisy blogowe związane z praktycznym frontend/fullstack developmentem.
- Rozwinąć TrisztiLab jako widoczny parasol dla eksperymentów, nauki i warsztatów.
- Dodać lepsze grafiki Open Graph dla strony głównej, portfolio i projektów.
- Uporządkować treści po angielsku, jeśli portfolio ma wspierać pracę z klientami zagranicznymi.

### 6-12 miesięcy

Cel: zbudować stronę jako długoterminowy asset zawodowy.

- Dodać publiczne mini-produkty albo narzędzia związane z TrisztiLab.
- Opublikować case study CleanStrategy z większym naciskiem na produkt i decyzje UX.
- Opublikować case study backendowe lub fullstackowe pokazujące Nest.js, MongoDB, integracje i deployment.
- Dodać sekcję ofertową, jeśli strona ma wspierać pozyskiwanie klientów.
- Rozważyć prosty newsletter albo katalog materiałów edukacyjnych.

## SEO

Aktualna baza SEO:

- globalne metadane w `src/app/layout.tsx`,
- canonicale i Open Graph przez `src/lib/seo.ts`,
- `robots.txt` w `src/app/robots.ts`,
- `sitemap.xml` w `src/app/sitemap.ts`,
- metadane dla portfolio, bloga, materiałów, filamentów, treningu kognitywnego i projektów,
- JSON-LD `Person` oraz `CreativeWork` dla case studies.
- Google Analytics jako podstawę pomiaru ruchu i zachowań użytkowników.

Kolejne kroki SEO:

- dodać unikalne grafiki OG dla najważniejszych stron,
- dopracować polskie i angielskie wersje opisów,
- zadbać o linkowanie wewnętrzne między doświadczeniem, firmami i projektami,
- publikować treści pod konkretne frazy, np. `React developer`, `Next.js developer`, `Nest.js backend`, `e-commerce frontend`.

## Zasady rozwoju strony

- Strona ma pozostać statyczna i łatwa do deployu.
- Nowe projekty powinny mieć osobną podstronę w `src/app/projekty`.
- Dane case studies powinny trafiać do `src/data/projectDetails.ts`.
- Opisy projektów mają być konkretne, krótkie i oparte o problem, rozwiązanie oraz efekt.
- Nie dodawać dużych zależności bez wyraźnej potrzeby.
- Dbać o mobile, bo portfolio często będzie otwierane z LinkedIna.

## Uruchamianie

```bash
npm install
npm run dev
```

Lokalny adres:

```text
http://localhost:3000
```

W tym projekcie często używany jest też port `3002`:

```bash
npm run dev -- -p 3002
```

## Build

```bash
npm run build
```

Projekt jest skonfigurowany jako statyczny export przez `output: "export"` w `next.config.js`.
