import styled from 'styled-components';

export default function GuideItemInfo({ image, title, summary, slug }) {
  return (
    <GuideItem>
      <div>
        <img src={image} alt={title} />
      </div>

      <div className="infobar">
        <header>
          <h3>{title}</h3>
          <p>{summary}</p>
        </header>
        <a href={`/guide/${slug}`}>Continue reading...</a>
      </div>
    </GuideItem>
  );
}
const GuideItem = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    img {
      border-radius: 0.5rem;
      width: 100%;
      max-height: auto;
      vertical-align: middle;
      border-style: none;
      object-fit: cover;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    span {
      font-size: 0.9rem;
      color: #555;
    }
    p {
      margin: 1rem 0;
      line-height: 1.5;
      width: 100%;
      max-width: 50ch;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
      background-color: transparent;
      text-align: center;
      border-color: #007bff;
      border-radius: 8px;
      color: #007bff;
      font-weight: bold;
      border-style: solid;
      border-width: 1px;
      &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
    }
  }
  .infobar {
      min-width: 40%;
    }
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    div {
      p {
        max-width: 100%;
      }
    }
  }
`;
