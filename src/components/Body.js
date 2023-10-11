import { Park } from "@mui/icons-material";
import React, { useEffect } from "react";

function Body() {
  return (
    <div>
      <section id="section-1" className="sec-1 ">
        <img
          className="image-body animate"
          src="/images/dorota.jpg"
          
        />

        <p className="text-body animate">
          Dorota Oniśko - magister komunikacji i pomocy społecznej, absolwentka
          Studiów Podyplomowych w zakresie nauczania przedmiotów zawodowych na
          kierunku florystyka, trener umiejętności psychospołecznych, terapeuta
          zajęciowy. Wykładowca i szkoleniowiec od wielu lat, specjalista w
          swojej dziedzinie. Pasjonatka przyrody, dobry przyjaciel i kochająca
          mama. Szkoła, którą stworzyła jest miejscem tworzenia wspaniałych
          rzeczy, zrozumienia, empatii i nauczania z pasją. Umysły są jak
          kwiaty, otwierają się tylko wtedy, kiedy nadchodzi właściwy
          czas jeżeli chcesz rozkwitnąć i zmienić coś w swoim życiu zapraszam
          do szkoły policealnej Dorota Oniśko Flower Artis już dziś 🌺
        </p>
      </section>
      <section id="section-2" className="sec-2">
        <p className="text-body animate">
          Zapewniamy naukę na wysokim poziomie, w profesjonalnie wyposażonej
          pracowni florystycznej. Zajęcia teoretyczne odbywają się w sali
          dydaktycznej z klimatyzacją. Zapewniamy dostęp do praktyk zawodowych,
          nasi absolwenci uzyskują certyfikat MEN na poziomie B1 uprawniający do
          pracy w zawodzie, przede wszystkim jednak gwarantujemy wspaniałą
          atmosferę i pełne zaangażowanie ze strony najlepszych wykładowców.
        </p>
        <img
          className="image-body animate"
          src="/images/kwiat2.png"
        
        />
      </section>
      <section id="section-3" className="sec-3">
        <img
          className="image-body animate"
          src="/images/309435778_138693668892893_1350548879369987429_n.jpg"
        
        />

        <p className="text-body animate">
          Przyjmujemy osoby, które ukończyły pierwszy semestr florystyki w
          innych szkołach i chcą ukończyć naukę w naszej placówce. Dysponujemy
          profesjonalnym warsztatem dydaktycznym. Zapewnimy profesjonalne
          warunki nauki i perfekcyjne przygotowanie do egzaminu.
          <br />
          Zadzwoń: 534275146, lub napisz: szkola.flowerartist@gmail.com
        </p>
      </section>
    </div>
  );
}

export default Body;
