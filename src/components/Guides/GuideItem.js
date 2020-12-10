import styled from 'styled-components';

export default function GuideItemInfo({
  image,
  title,
  date,
  author,
  summary,
  slug,
}) {
  return (
    <GuideItem>
      <div>
        <img src={image} alt={title} />
      </div>

      <div>
        <header>
          <h3>{title}</h3>
          <span>
            Sent by {author} in {date}
          </span>
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
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    img {
      border-radius: 0.5rem;
      max-width: 100%;
      height: 100%;
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
      font-size: .9rem;
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    div {
      p {
        max-width: 100%;
      }
    }
  }
`;
