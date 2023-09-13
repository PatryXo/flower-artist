import { Park } from "@mui/icons-material";
import React, { useEffect } from "react";

function Body() {
  return (
    <div>
      <section id="section-1" className="sec-1 ">
        <img
          className="animate"
          src="/images/dorota.jpg"
          style={{ width: "550px", height: "500px" }}
        />

        <p
          className="animate"
          style={{
            width: "40%",
            fontSize: "20px",
            lineHeight: "150%",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // fontWeight: 'bold',
            fontStyle: "italic",
            fontSize: "26px",
          }}
        >
          Dorota Oniśko - magister komunikacji i pomocy społecznej, absolwentka
          Studiów Podyplomowych w zakresie nauczania przedmiotó w zawodowych na
          kierunku florystyka, trener umiejętności psychospołecznych, terapeuta
          zajęciowy. Wykładowca i szkoleniowiec od wielu lat, specjalista w
          swojej dziedzinie. Pasjonatka przyrody, dobry przyjaciel i kochająca
          mama. Szkoła , którą stworzyła jest miejscem tworzenia wspaniałych
          rzeczy, zrozumienia, empatii i nauczania z pasją. Umysły są jak
          kwiaty, otwierają się tylko wtedy, kiedy nadchodzi właściwy
          czas😊jeżeli chcesz rozkwitnąć i zmienić coś w swoim życiu zapraszam
          do szkoły policealnej Dorota Oniśko Flower Artis już dziś 🌺
        </p>
      </section>
      <section className="sec-2">
        <p
          className="animate"
          style={{
            width: "40%",
            fontSize: "20px",
            lineHeight: "150%",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // fontWeight: 'bold',
            fontStyle: "italic",
            fontSize: "26px",
          }}
        >
          Zapewniamy naukę na wysokim poziomie, w profesjonalnie wyposażonej
          pracowni florystycznej . Zajęcia teoretyczne odbywają się w sali
          dydaktycznej z klimatyzacją. Zapewniamy dostęp do praktyk zawodowych,
          nasi absolwenci uzyskują certyfikat MEN na poziomie B1 uprawniający do
          pracy w zawodzie , przede wszystkim jednak gwarantujemy wspaniałą
          atmosferę i pełne zaangażowanie ze strony najlepszych wykładowców 🌺
        </p>
        <img
          className="animate"
          src="/images/kwiat2.png"
          style={{ width: "550px", height: "500px" }}
        />
      </section>
      <section className="sec-3">
        <img
          className="animate"
          src="/images/dorota.jpg"
          style={{ width: "550px", height: "500px" }}
        />

        <p
          className="animate"
          style={{
            width: "40%",
            fontSize: "20px",
            lineHeight: "150%",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // fontWeight: 'bold',
            fontStyle: "italic",
            fontSize: "26px",
          }}
        >
          Przyjmujemy osoby, które ukończyły pierwszy semestr florystyki w
          innych szkołach i chcą ukończyć naukę w naszej placówce. Dysponujemy
          profesjonalnym warsztatem dydaktycznym. Zapewnimy profesjonalne
          warunki nauki i perfekcyjne przygotowanie do egzaminu.
          <br/>
          Zadzwoń: 534275146, lub napisz: szkola.flowerartist@gmail.com
        </p>
      </section>
    </div>
  );
}

export default Body;
