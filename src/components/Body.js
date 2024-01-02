import { Park } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "../Florysta-semestr-letni-2024.pdf";

function Body() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="section-1" className="sec-1 ">
        <img className="image-body animate" src="/images/dorota.jpg" />

        <p className="text-body animate">
          Dorota Oniśko - magister komunikacji i pomocy społecznej, absolwentka
          studiów podyplomowych w zakresie nauczania przedmiotów zawodowych na
          kierunku florystyka, trener umiejętności psychospołecznych, terapeuta
          zajęciowy. Wieloletni wykładowca i szkoleniowiec, specjalista w swojej
          dziedzinie. Pasjonatka przyrody, dobry przyjaciel i kochająca mama.
          Szkoła Policealna Flower Artist jest miejscem dla ludzi z pasją,
          wyobraźnią i zaangażowaniem, dla tych którzy kochają piękno tworzenia
          wspaniałych rzeczy. Tu spotkasz się nie tylko z profesjonalną wiedzą,
          ale także pasją, zrozumieniem i empatią. Umysły są jak kwiaty,
          otwierają się tylko wtedy, kiedy nadchodzi właściwy czas. Jeżeli
          chcesz rozkwitnąć i zmienić coś w swoim życiu zapraszam do Szkoły
          Policealnej Flower Artist już dziś 🌺
        </p>
      </section>
      <section id="section-2" className="sec-2">
        <p className="text-body animate">
          Zajęcia teoretyczne i praktyczne odbywają się w profesjonalnie
          wyposażonych pracowniach, a nasi słuchacze mają dostęp do najwyższej
          jakości materiałów. Niewielkie grupy słuchaczy pozwalają nauczycielom
          na niemal indywidualną pracę z każdym z Was. Umożliwiamy realizację
          praktyk zawodowych w zaprzyjaźnionych placówkach z branży
          florystycznej. W naszej szkole przy minimum formalności możesz liczyć
          na maksimum wiedzy i umiejętności. Słuchaczem Szkoły Policealnej
          Flower Artist może zostać każda pełnoletnia osoba posiadająca
          wykształcenie minimum średnie (nie wymagamy matury). Do szkoły
          przyjmowani są także obcokrajowcy. Absolwenci naszej szkoły mają
          możliwość uzyskania Dyplomu Kwalifikacji Zawodowych w zawodzie
          Florysta, a także uzyskują świadectwo ukończenia szkoły policealnej
          uprawniające do zwolnienia z egzaminu na certyfikat B1 z języka
          polskiego – numer RSPO 480643 (dotyczy osób z obywatelstwem innym niż
          polskie).
        </p>
        <img className="image-body animate" src="/images/kwiat2.png" />
      </section>
      <section id="section-3" className="sec-3">
        <img
          className="image-body animate"
          src="/images/309435778_138693668892893_1350548879369987429_n.jpg"
        />

        <p className="text-body animate">
          Rekrutacja na semestr letni 2023/2024!
          <br />
          Zapraszamy wszystkie pełnoletnie osoby posiadające minimum średnie
          wykształcenie – nie wymagamy matury. Nie przeprowadzamy żadnych
          egzaminów wstępnych. Przy zapisie otrzymasz od nas skierowanie na
          badania lekarskie w medycynie pracy. Nowy semestr rozpoczyna się w
          lutym 2024! Aktywne będą grupy 1 i 2 semestru, przyjmujemy więc także
          osoby, które ukończyły semestr pierwszy w innej placówce.
          <br />
          Potrzebne dokumenty: - świadectwo ukończenia szkoły średniej (w
          przypadku obcokrajowców oryginał świadectwa i tłumaczenie tłumacza
          przysięgłego na język polski), - dowód osobisty (lub inny dokument ze
          zdjęciem), - zdjęcie legitymacyjne (jeśli będzie potrzeba Ci
          legitymacja).
          <br />
          Zadzwoń i umów się na spotkanie: 534275146, 609148208 lub napisz:
          szkola.flowerartist@gmail.com
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fed6d7", color: "black" }}
        >
          <a href={Pdf} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'black' }}> 
            SPRAWDŹ HARMONOGRAM ZAJĘĆ
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Body;
