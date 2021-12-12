import React from "react";
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesParagraph,
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesParagraph>On Tuesday, November 23 at 10:21 p.m.on Test (DART)Space Launch Complex 4 East (SLC-4E) at Vandenberg</ServicesParagraph>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesParagraph>Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation </ServicesParagraph>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesParagraph>SpaceX’s Starship spacecraft and Super Heavy </ServicesParagraph>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
