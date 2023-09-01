import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="" style={{ backgroundColor: "#ffffff" }}>
      <nav style={{}}>
        <div
          style={{
            height: "65px",
            backgroundColor: "#ffd6d6",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #efefef",
            position: "fixed",
            width: "100%",
          }}
        >
          <img
            src="/images/FLOWER_ARTIST1.png"
            style={{ height: "50px", display: "flex", marginLeft: "1%" }}
          />

          <div
            className="nav"
            style={{
              display: "flex",
              gap: "30px",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              marginRight: "2%",
              cursor: "pointer",
            }}
          >
            <p>Aktualności</p>
            <p>O nas</p>
            <p>Oferta</p>
            <p>Galeria</p>
            <p>Kontakt</p>
          </div>
        </div>
      </nav>

      <header>
        <div
          style={{
            background: "rgb(255,213,213)",
            background:
              "linear-gradient(90deg, rgba(255,213,213,1) 47%, rgba(255,238,238,1) 61%, rgba(255,255,255,1) 100%)",
          }}
        >
          <img
            style={{ width: "99vw", height: "100vh" }}
            src="/images/logo.png"
          />
        </div>
      </header>
      <body style={{}}>
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
      </body>
      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#fed6d7",
          }}
        >
          <p>Strona w trakcie tworzenia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
