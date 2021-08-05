import React from "react";
export default class SectionCards extends React.Component {
  render() {
    return (
      <div className="section-cards">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Nice one </h2>
        </div>
        {/* .row>.col-1-3*3>.flipping-card>.flipping-card__heading+.flippng-card__center-image */}
        <div className="row">
          <div className="col-1-3">
            <div className="flipping-card">
              <div className="flipping-card__side flipping-card__side--front">
                <div className="flipping-card__heading">Ja jsem Jirka</div>
                <div className="flippng-card__center-image"></div>
              </div>
              <div className="flipping-card__side flipping-card__side--back">
                Back
              </div>
            </div>
          </div>
          <div className="col-1-3">
            <div className="flipping-card">
              <div className="flipping-card__side flipping-card__side--front">
                <div className="flipping-card__heading">Ja jsem Jirka</div>
                <div className="flippng-card__center-image"></div>
              </div>
              <div className="flipping-card__side flipping-card__side--back">
                Back
              </div>
            </div>
          </div>
          <div className="col-1-3">
            <div className="flipping-card">
              <div className="flipping-card__side flipping-card__side--front">
                <div className="flipping-card__heading">Ja jsem Jirka</div>
                <div className="flippng-card__center-image"></div>
              </div>
              <div className="flipping-card__side flipping-card__side--back">
                Back
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
