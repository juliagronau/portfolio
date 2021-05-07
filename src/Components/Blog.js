import blogcmpthumbnail2 from "../assets/blogcmpthumbnail2.png";
import blogpostcmpthumbnail1 from "../assets/blogpostcmpthumbnail1.png";
import blogtrackingthumbnail from "../assets/blogtrackingthumbnail.png";

const Blog = () => {
  return (
    <div className="welcome-note" id="blogposts">
      <h2>Blog Posts</h2>
      <p>
        Neben dem Programmieren macht mir auch das Erstellen von Content und
        Wissensvermittlung großen Spaß. Für Kunden und Kollegen habe ich bereits
        zahlreiche Tutorials zu den Themen Webanalyse und Consent Management
        erstellt. Ich liebe es auch Blog Posts zu verfassen, wie zum Beispiel
        diese:
      </p>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="card" style={{ width: "17rem", margin: ".5rem" }}>
          <img className="card-img-top" src={blogtrackingthumbnail}></img>
          <div className="card-body">
            <h5 className="card-title">Reportingtools</h5>
            <p className="card-text">
              Übersicht verschiedener Trackingansätze im Hotel Online Marketing
            </p>
            <a
              href="https://www.myhotelshop.com/de-blog/trackingansatze-im-uberblick-wir-zeigen-ihnen-was-es-zu-beachten-gilt?utm_source=direct&utm_medium=none"
              target="blank"
              className="btn btn-primary"
            >
              Zum Blogpost
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "17rem", margin: ".5rem" }}>
          <img className="card-img-top" src={blogpostcmpthumbnail1}></img>
          <div className="card-body">
            <h5 className="card-title">Consent Management für Hotelwebsites</h5>
            <p className="card-text">
              Auswertung von Opt-In Raten - Teil 1 der Serie
            </p>
            <a
              href="https://www.myhotelshop.com/de-blog/schluss-mit-spekulationen-myhotelshop-zeigt-wie-hoch-die-cookie-opt-in-rate-wirklich-ist?utm_source=direct&utm_medium=none"
              target="blank"
              className="btn btn-primary"
            >
              Zum Blogpost
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "17rem", margin: ".5rem" }}>
          <img className="card-img-top" src={blogcmpthumbnail2}></img>
          <div className="card-body">
            <h5 className="card-title">Consent Management für Hotelwebsites</h5>
            <p className="card-text">
              Auswertung von Opt-In Raten - Teil 2 der Serie
            </p>
            <a
              href="https://www.myhotelshop.com/de-blog/teil-2-myhotelshop-zeigt-wie-hoch-die-cookie-opt-in-rate-wirklich-ist-und-was-sie-zur-steigerung-der-rate-tun-konnen?utm_source=direct&utm_medium=none"
              target="blank"
              className="btn btn-primary"
            >
              Zum Blogpost
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
