import React from "react";
import Sportsblogthumbnail from "../assets/Sportsblogthumbnail.png";
import nodesqlthumbnail from "../assets/nodesqlthumbnail.png";
import locationexplorerthumbnail from "../assets/locationexplorerthumbnail.png";
import mongoose from "../assets/mongoose.jpg";
import multer from "../assets/multer.jpg";
import colinthumbnail from "../assets/colinthumbnail.png";

const Projects = () => {
  return (
    <>
      <div className="row projectbox">
        <div className="col-sm">
          <h3>Final Project - ColIn Color Inspirator</h3>
          <p>
            Eine App für Kreative, schlägt stimmige Farbkombinationen vor.
            Komplett kompatibel mit Light und Dark Mode. Released als PWA.
          </p>

          <h4>Tech Stack</h4>
          <p>React, JavaScript, HTML, CSS, Ionic, Node, Express, MongoDB</p>
          <a
            href="https://colin-color-inspirator.netlify.app/page/Home"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Frontend
          </a>
          <a
            href="https://github.com/juliagronau/ColIn-Frontend-Ionic"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo Frontend
          </a>
          <a
            href="https://colin-color-inspirator.herokuapp.com/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Backend
          </a>
          <a
            href="https://github.com/juliagronau/ColIn-Backend"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo Backend
          </a>
          <br></br>
          <a
            href="https://play.google.com/store/apps/details?id=app.netlify.colin_color_inspirator.twa"
            target="blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play Store Icon"
              className="play-store"
            />
          </a>
        </div>
        <div className="col-sm" style={{ alignSelf: "center" }}>
          <img
            src={colinthumbnail}
            alt="ColIn thumbnail"
            className="img-fluid"
          ></img>
        </div>
        <div
          className="row"
          style={{
            marginTop: "1rem",
            position: "relative",
            paddingBottom: "50%",
            height: "0",
          }}
        >
          <iframe
            title="ColIn Demo"
            src="https://www.loom.com/embed/b3e72291c9ba429bb4f87c36ae8901a4"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{
              position: "absolute",
              top: "0 rem",
              left: "0 rem",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
      <div className="row projectbox">
        <div className="col-sm">
          <img
            src={Sportsblogthumbnail}
            className="img-fluid"
            alt="sportsblog thumbnail"
          ></img>
        </div>
        <div className="col-sm">
          <h3>Blog Project</h3>
          <p>
            Ein Freizeitblog, erstellt mit zwei Mitschülern. Content wurde
            automatisch übersetzt.
          </p>
          <h4>Tech Stack</h4>
          <p>
            React, JavaScript, HTML, CSS, Bootstrap, Contentful CMS ersetzt
            durch ElephantSQL, Node.js, Express
          </p>
          <a
            href="https://priceless-archimedes-aadb27.netlify.app/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Frontend
          </a>
          <a
            href="https://blog-project-api-jms.herokuapp.com/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Backend
          </a>
          <a
            href="https://github.com/juliagronau/sports-blog"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo Frontend
          </a>
          <a
            href="https://github.com/saidakyuz/blog-project-api"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo Backend
          </a>
        </div>
      </div>
      <div className="row projectbox">
        <div className="col-sm">
          <h3>Node.js-MongoDB-Übung</h3>
          <p>CRUD Operations mit zwei Collections in einer MongoDB Database.</p>
          <h4>Tech Stack</h4>
          <p>Node.js, JavaScript, Express, MongoDB, mongoose</p>
          <a
            href="https://node-express-mongoose.herokuapp.com/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/node-express-mongoose-practice"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
        <div className="col-sm">
          <img
            src={mongoose}
            className="img-fluid"
            alt="mongoose thumbnail"
          ></img>
        </div>
      </div>

      <div className="row projectbox">
        <div className="col-sm">
          <img
            src={locationexplorerthumbnail}
            className="img-fluid"
            alt="sportsblog thumbnail"
          ></img>
        </div>
        <div className="col-sm">
          <h3>Location Explorer</h3>
          <p>
            Eine Website, die die IP-Adresse der User:innen sowie einige
            Informationen über den Standort ausspielt. Daten werden gefetched
            von geo.ipify.org, restcountries.eu und countryflags.io
          </p>
          <h4>Tech Stack</h4>
          <p>React, JavaScript, HTML, CSS, Semantic UI, Leaflet</p>
          <a
            href="https://jolly-goodall-e936ea.netlify.app/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/ip-project"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <div className="row projectbox">
        <div className="col-sm">
          <h3>Node.js-SQL-Übung</h3>
          <p>CRUD Operations mit einer SQL-Datenbank.</p>
          <h4>Tech Stack</h4>
          <p>Node.js, JavaScript, Express, ElephantSQL</p>
          <a
            href="https://nodejs-sql-uebung.herokuapp.com/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/nodejs-sql"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
        <div className="col-sm">
          <img
            src={nodesqlthumbnail}
            className="img-fluid"
            alt="hackernews thumbnail"
          ></img>
        </div>
      </div>
      <div className="row projectbox">
        <div className="col">
          <img
            src={multer}
            className="img-fluid"
            alt="multer S3 thumbnail"
          ></img>
        </div>
        <div className="col-sm">
          <h3>File Upload mit Multer</h3>
          <p>
            Upload einer oder mehrerer Dateien mit Multer, Multer Storage
            Streaming mit AWS S3.
          </p>
          <h4>Tech Stack</h4>
          <p>Node.js, Express, multer, AWS S3</p>
          <a
            href="https://multer-s3-fileupload.herokuapp.com/"
            target="blank"
            className="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/multerfileupload"
            target="blank"
            className="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
