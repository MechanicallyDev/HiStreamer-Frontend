import styled from 'styled-components';

const Header = ({ title, description = [], hero = false, color = '#555', backgroundColor="white", backgroundImage="", minHeight }) => {
  return (
    <BlockHeading hero={hero} color={color} backgroundColor={backgroundColor}  backgroundImage={backgroundImage} minHeight={minHeight}>
      {title && <h2>{title}</h2>}
      {description.map((description) => (
        <p>{description}</p>
      ))}
    </BlockHeading>
  );
};
export default Header;

const BlockHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 30vh;
  height: 30vh;
  color: #333;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-blend-mode: multiply;
  ${({hero, backgroundColor, backgroundImage, color, minHeight}) => {
    if (hero) {
      return `
        ${minHeight && `min-height: ${minHeight};`}
        margin-top: 4rem;
        max-width:100%;
        background-color:${backgroundColor};
        ${backgroundImage && `background-image: url(${backgroundImage});`}
        h2,p {color: ${color};}
      `;
    } else {
      return `h2,p {color: #333;}`;
    }
  }}
  h2 {
    font-size: 2rem;
    padding: 10px;
  }
  p {
    font-size: 1rem;
    padding: 10px;
  }
`;
