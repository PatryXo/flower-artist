import { Park } from '@mui/icons-material'
import React from 'react'

function Body() {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
    >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1200px",
        marginTop: "1rem",
      }}
    >
      <img
        src="/images/dorota.jpg"
        style={{ width: "600px", height: "550px" }}
      />
      <p
        style={{
          width: "50vh",
          fontSize: "20px",
          lineHeight: "150%",
          textAlign: "justify",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Zapraszamy wszystkie chętne osoby do Policealnej Szkoły
        Florystycznej Dorota Oniśko Flower Artist.
      </p>
    </div>
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1200px",
      }}
    >
      <ul
        style={{
          width: "50vh",
          fontSize: "20px",
          lineHeight: "150%",
          textAlign: "justify",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <li>Przygotujemy Cię do egzaminu.</li>
        <li>
          Zdobędziesz wiedzę i umiejętności do prowadzenia samodzielnej
          działalności florystycznej.
        </li>
        <li> Po ukończeniu szkoły otrzymasz certyfikat MEN.</li>
        <li>
          Zwolnienie z egzaminu B1 z języka polskiego na obywatelstwo.
        </li>
      </ul>
      
    
      <img
        src="/images/tlo2.png"
        style={{ width: "600px", height: "550px" }}
      />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1200px",
      }}
    >
      <img
        src="/images/kwiat2.png"
        style={{ width: "600px", height: "550px" }}
      />
      <p
        style={{
          width: "50vh",
          fontSize: "20px",
          lineHeight: "150%",
          textAlign: "justify",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Przyjmujemy osoby , które ukończyły pierwszy semestr florystyki w
        innych szkołach i chcą ukończyć naukę w naszej placówce.
        Dysponujemy profesjonalnym warsztatem dydaktycznym. Zapewnimy
        profesjonalne warunki nauki i perfekcyjne przygotowanie do
        egzaminu. Zadzwoń : 534275146, lub napisz :
        szkola.flowerartist@gmail.com
      
      </p>
    </div>
    
    <p
      style={{
        width: "75vh",
        fontSize: "20px",
        lineHeight: "150%",
        textAlign: "justify",
      }}
    ></p>
    </div>
  )
}

export default Body