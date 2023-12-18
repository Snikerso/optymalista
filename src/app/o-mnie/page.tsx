"use client";

import { Button } from "@/components/atoms/Button";
import { PageSection } from "@/components/molecules/PageSection";
import { StyledWrapper } from "./styles";

export default function AboutMe() {
  return (
    <StyledWrapper>
      <PageSection>
        <h1>Cześć i czołem !</h1>

        <p>
          Krótko mówiąc jestem programistą, trenerem, twórcą, uwielbiającym
          sztukę i naukę.
        </p>
        <p>Długo mówiąc TUTAJ możesz przeczytać moją autobiografie</p>

        <Button>Umów się na mentoring</Button>
      </PageSection>
      <PageSection>
        <h3>Złap mnie na social mediach</h3>
        <p>Chcesz się ze mną skontaktować ?</p>
        <p>Chcesz zobaczyć backstage ?</p>

        {/* <Lessons lessons={}={reactModules} /> */}
      </PageSection>
      {/* <PageSection>Zobacz moje filmy na youtube</PageSection> */}

      {/* <PageSection>
        <h2>Czego możesz się spodziewać w przyszłości ?</h2>

        <ul>
          <li>
            Więcej filmów na temat koncepcji, które pozwalają mi tworzyć
            nowoczesne funkcjonalności. Jak np API-tokens, autoryzacja,
            zarządzanie grafami.
          </li>
          <li>
            Może pojawi się rozdział książki fajntastycznej która pisze ale to
            na osobnej pod domenie
          </li>
        </ul>
      </PageSection> */}
      {/* Projekty */}
      {/* Napisać opowieść o samym sobie */}
    </StyledWrapper>
  );
}
