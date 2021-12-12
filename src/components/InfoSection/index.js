import React from "react";
import Video from '../../videos/video.mp4'
import { Button } from "../ButtonElement";
import {
    InfoContainer,
    InfoBackground,
    VideoBackground,
    InfoContent,
    InfoTitle,
    InfoParagraph,
    InfoButtonWrapper,
    ArrowForward,
    ArrowRight,
} from './InfoElements'
const InfoSection = () => {
    const [hover, setHover] = React.useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
      <InfoContainer>
        <InfoBackground>
          <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        </InfoBackground>
        <InfoContent>
            <InfoTitle>Buy Ticket to Space</InfoTitle>
            <InfoParagraph>One Small Step.Here, we make Air and Space available for everyone.</InfoParagraph>
            <InfoButtonWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </InfoButtonWrapper>
        </InfoContent>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
