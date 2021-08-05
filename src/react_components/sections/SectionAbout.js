import React from "react";
import orange from "../../styling/images/oranzova.png";
import yellow from "../../styling/images/zluta.png";
export default class SectionAbout extends React.Component {
  render() {
    return (
      <section className="section-about">
        {/* u-center-text /utility for centering text             */}
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Proc mlsat prave nas?</h2>
        </div>
        <div className="row">
          <div className="col-1-2" id="col-1-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Text Content
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              voluptatibus voluptatem eum deleniti nulla aliquam. Possimus nam
              tempora nisi. Quas eum, architecto fugit dicta alias fugiat nihil
              hic iste qui?
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Text Content
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              voluptatibus voluptatem eum deleniti nulla aliquam. Possimus nam
              tempora nisi. Quas eum, architecto fugit dicta alias fugiat nihil
              hic iste qui?
            </p>
            <a href="#header" className="btn-text">
              Your Mother&rarr;
            </a>
          </div>
          <div className="col-1-2" id="col-2-2">
            <div className="heading-tertiary">Image gallery</div>
            <div className="composition">
              {/* // TODO need to crop pictures */}
              <img
                src={yellow}
                alt="Nase stastne zlute poteseni"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={yellow}
                alt="Zelena krupava radost do Vaseho tradicniho zivota"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={orange}
                alt="Co takhle cesnekovy snack?"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
