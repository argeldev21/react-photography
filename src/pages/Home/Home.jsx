import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  useEffect(() => {
    document.title = "Home – Il tuo sito";
  }, []);

  return (
    <main className="home-container">
      <h1 className="home-title">Benvenuto nella Home</h1>

      <p className="home-text">
        Questa è la pagina principale del sito. Naviga liberamente o prova la pagina di errore.
      </p>

      <Link to="/pagina-che-non-esiste" className="home-button">
        Vai alla pagina Error
      </Link>
    </main>
  );
}

export default Home;
