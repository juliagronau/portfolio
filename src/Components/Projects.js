import React from "react";
import Sportsblogthumbnail from "../assets/Sportsblogthumbnail.png";
import Hacker_News_Clone_thumbnail from "../assets/Hacker_News_Clone_thumbnail.png";
import nodesqlthumbnail from "../assets/nodesqlthumbnail.png";
import locationexplorerthumbnail from "../assets/locationexplorerthumbnail.png";

const Projects = () => {
  return (
    <>
      <div className="row projectbox">
        <img
          src={Sportsblogthumbnail}
          className="col projectthumbnailleft"
          alt="sportsblog thumbnail"
        ></img>
        <div className="col">
          <h3>Blog Project</h3>
          <p>
            Ein Freizeitblog, erstellt mit zwei Mitschülern. Content wurde
            automatisch übersetzt.
          </p>
          <h4>Tech Stack</h4>
          <p>
            React, JavaScript, HTML, CSS, Bootstrap, Contentful CMS ersetzt
            durch ElephantSQL, Node.js, pg, Express
          </p>
          <a
            href="https://priceless-archimedes-aadb27.netlify.app/"
            target="blank"
            class="btn btn-primary"
          >
            Deployed Frontend
          </a>
          <a
            href="https://blog-project-api-jms.herokuapp.com/"
            target="blank"
            class="btn btn-primary"
          >
            Deployed Backend
          </a>
          <a
            href="https://github.com/juliagronau/sports-blog"
            target="blank"
            class="btn btn-primary"
          >
            GitHub Repo Frontend
          </a>
          <a
            href="https://github.com/saidakyuz/blog-project-api"
            target="blank"
            class="btn btn-primary"
          >
            GitHub Repo Backend
          </a>
        </div>
      </div>

      <div className="row projectbox">
        <div className="col">
          <h3>Hackernews Clone</h3>
          <p>
            Ein Klon der Nachrichtenseite Hackernews, Nachrichten werden
            gefetched von der Hackernews API.
          </p>
          <h4>Tech Stack</h4>
          <p>React, JavaScript, HTML, CSS, Bootstrap, axios</p>
          <a href="" target="blank" class="btn btn-primary">
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/hackernewsclone"
            target="blank"
            class="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
        <img
          src={Hacker_News_Clone_thumbnail}
          className="col projectthumbnailright"
          alt="hackernews thumbnail"
        ></img>
      </div>
      <div className="row projectbox">
        <img
          src={locationexplorerthumbnail}
          className="col projectthumbnailleft"
          alt="sportsblog thumbnail"
        ></img>
        <div className="col">
          <h3>Location Explorer</h3>
          <p>
            Eine Website, die die IP-Adresse der User:innen sowie einige
            Informationen über den Standort ausspielt. Daten werden gefetched
            von geo.ipify.org, restcountries.eu und countryflags.io
          </p>
          <h4>Tech Stack</h4>
          <p>React, JavaScript, HTML, CSS, Semantic UI, axios, Leaflet</p>
          <a
            href="https://jolly-goodall-e936ea.netlify.app/"
            target="blank"
            class="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/ip-project"
            target="blank"
            class="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <div className="row projectbox">
        <div className="col">
          <h3>Node.js-SQL-Übung</h3>
          <p>
            Fetchen von User- und Orderdaten aus einer selbst angelegten
            SQL-Datenbank (ElephantSQL).
          </p>
          <h4>Tech Stack</h4>
          <p>Node.js, JavaScript, Express, pg</p>
          <a
            href="https://nodejs-sql-uebung.herokuapp.com/"
            target="blank"
            class="btn btn-primary"
          >
            Deployed Website
          </a>

          <a
            href="https://github.com/juliagronau/nodejs-sql"
            target="blank"
            class="btn btn-primary"
          >
            GitHub Repo
          </a>
        </div>
        <img
          src={nodesqlthumbnail}
          className="col projectthumbnailright"
          alt="hackernews thumbnail"
        ></img>
      </div>
    </>
  );
};

export default Projects;
