import styled from "styled-components";

export const BlogContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and(max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BlogWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 360px) {
      height: 964px;
  }
`;

export const BlogRow = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
      height: 0px;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
  
  
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #33cccc;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 20px;

  @media screen and (max-width: 720px) {
    margin-bottom: 0px;
  margin-top: 20px;
  }
  
  
`;
export const Heading = styled.h1`
    color:#000;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "010606")};

  @media screen and(max-width: 480px) {
    font-size: 12px;
  }
  @media screen and(max-width: 720px) {
    margin-top: 24px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImageWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  padding-right: 0;
`;
