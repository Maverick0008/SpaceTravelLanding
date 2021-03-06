import React from "react";
import { Button } from "../ButtonElement";
import {
  Column2,
  ImageWrap,
  BlogContainer,
  BlogWrapper,
  BlogRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
  Image,
} from "./BlogElements";
const BlogSection = ({id,
    lightBg,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark, dark2}) => {
  return (
    <>
      <BlogContainer lightBg={lightBg} id={id}>
        <BlogWrapper>
          <BlogRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrap>
                  <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} >{buttonLabel}</Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrap>
                <Image src={img} alt={alt} />
              </ImageWrap>
            </Column2>
          </BlogRow>
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default BlogSection;
