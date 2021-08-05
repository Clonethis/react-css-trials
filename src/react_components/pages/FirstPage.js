import React from "react";
import SectionHeader from "../sections/SectionHeader";
import SectionAbout from "../sections/SectionAbout";
import SectionContent from "../sections/SectionContent";
import SectionCards from "../sections/SectionCards";
export default class FirstPage extends React.Component {
  render() {
    return (
      <div className="first-page">
        <SectionHeader />
        <main>
          {/* tells SEO that this is main content */}
          <SectionAbout />
          <SectionContent />
          <SectionCards />
        </main>
      </div>
    );
  }
}
