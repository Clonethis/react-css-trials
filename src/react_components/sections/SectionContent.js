import React from "react";
export default class SectionContent extends React.Component {
  render() {
    return (
      <section className="section-content">
        <div className="row">
          {/* Displays elements in row */}
          <div className="col-1-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary">I like trains</h3>
              <p className="feature-box__text">
                Lorem ipsum ipsum dolor sit, amet consectetur adipisicing elit.
                Qui obcaecati accusamus explicabo ea nobis modi minus
                consectetur nulla, iusto eaque repellat rerum eligendi vitae
                sapiente quia repudiandae quos iure. Aliquid?
              </p>
            </div>
          </div>
          <div className="col-1-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-eye"></i>
              <h3 className="heading-tertiary">I like swimming</h3>
              <p className="feature-box__text">
                dolor sit amet consectetur adipisicing elit. Itaque animi sint
                mollitia blanditiis in nobis esse fugit culpa harum, a pariatur
                dolor iste ea delectus repellat deserunt quos quisquam illum?
              </p>
            </div>
          </div>
          <div className="col-1-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-home"></i>
              <h3 className="heading-tertiary">Nice Hat that i Like</h3>
              <p className="feature-box__text">
                dolor sit amet consectetur adipisicing elit. Itaque animi sint
                mollitia blanditiis in nobis esse fugit culpa harum, a pariatur
                dolor iste ea delectus repellat deserunt quos quisquam illum?
              </p>
            </div>
          </div>
          <div className="col-1-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-bolt"></i>
              <h3 className="heading-tertiary">Ohhh Geeez I forgot!</h3>
              <p className="feature-box__text">
                dolor sit amet consectetur adipisicing elit. Itaque animi sint
                mollitia blanditiis in nobis esse fugit culpa harum, a pariatur
                dolor iste ea delectus repellat deserunt quos quisquam illum?
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
