import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

let host = "https://data.irozhlas.cz/anketa-babis-audit";
if (window.location.hostname === "127.0.0.1") {
  host = "http://127.0.0.1:5500/";
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={"https://data.irozhlas.cz/kyber-anketa/img/" + el.ft} alt={el.p} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.f}</div>
            <div className="vek">{el.s.length > 0 ? "(" + el.s + ")" : ""}</div>
          </div>
          <div className="odpoved" dangerouslySetInnerHTML={{ __html: el.o }}></div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", host + "/data/data.json");
r.send();
