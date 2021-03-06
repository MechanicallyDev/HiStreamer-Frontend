import React from "react";
import styled from "styled-components";
import queryString from "query-string";
import api from "api/api";
import PageTemplate from "layouts/PageTemplate";
import Header from "components/Header";
import GuideItem from "components/Guides/GuideItem";
import IntText, { IntInText, GetLang } from "i18n/IntText";

const GuideList = (props) => {
  const [language, setLanguage] = React.useState(GetLang());
  const [linkPrefix, setLinkPrefix] = React.useState(
    IntInText("guides.prefix")
  );
  const [callToAction, setCallToAction] = React.useState(
    IntInText("guides.callToAction")
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    let lang = "en-US";
    if (language === "en-US" || language === "pt-BR") lang=language;
    api
      .get("posts", {
        params: {
          language: lang,
          page: currentPage,
        },
      })
      .then((response) => {
        const itemsPerPage = 6;
        const page = queryString.parse(props.location.search).page || 1;
        let reqPostCount = response.headers["x-total-count"];
        let reqPageCount = 1 + Math.floor(reqPostCount / itemsPerPage);
        setPageCount(reqPageCount);
        setPosts(response.data);
        if (page > reqPageCount && currentPage === 0) {
          setCurrentPage(reqPageCount);
        }
        if (currentPage === 0) setCurrentPage(1);
      });
  }, [currentPage, props.location.search, language]);

  function handleChangePage(dir) {
    if (dir === "previous" && currentPage > 1) {
      setCurrentPage(Number(currentPage) - 1);
    }
    if (dir === "next" && currentPage < pageCount) {
      setCurrentPage(Number(currentPage) + 1);
    }
  }

  return (
    <PageTemplate title={IntInText("guides.title")}>
      <Header
        title={IntInText("guides.title")}
        description={[`${IntInText("guides.description")}`]}
      />
      <PageNavigation currentPage={currentPage} maxPage={pageCount}>
        <button
          className="previous"
          onClick={() => handleChangePage("previous")}
        >{`<`}</button>
        <button disabled>
          {IntInText("guides.page")} {currentPage} / {pageCount}
        </button>
        <button
          className="next"
          onClick={() => handleChangePage("next")}
        >{`>`}</button>
      </PageNavigation>

      <GuideListContainer>
        {posts.length === 0 && (
          <h4>
            <IntText text="guides.loading" />
          </h4>
        )}
        {posts.map((post) => (
          <GuideItem
            key={post.title}
            image={post.image}
            title={post.title}
            prefix={linkPrefix}
            callToAction={callToAction}
            summary={post.description}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </GuideListContainer>
      <PageNavigation currentPage={currentPage} maxPage={pageCount}>
        <button
          className="previous"
          onClick={() => handleChangePage("previous")}
        >{`<`}</button>
        <button disabled>
          {IntInText("guides.page")} {currentPage} / {pageCount}
        </button>
        <button
          className="next"
          onClick={() => handleChangePage("next")}
        >{`>`}</button>
      </PageNavigation>
      <Spacer />
    </PageTemplate>
  );
};

export default GuideList;
const Spacer = styled.div`
  margin-bottom: 4rem;
`;
const PageNavigation = styled.aside`
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  background-color: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  button {
    outline: none;
    color: #fff;
    background: #007bff;
    border: 0px;
    padding: 0.8rem;
    font-weight: 700;
    &.previous {
      cursor: pointer;
      font-weight: 700;
      border-radius: 8px 0 0 8px;
      background: #0050ff;
      ${(props) => {
        if (props.currentPage === 1)
          return "color:transparent;  background: #007bff; cursor: default;";
      }}
    }
    &.next {
      cursor: pointer;
      font-weight: 700;
      border-radius: 0 8px 8px 0;
      background: #0050ff;
      ${(props) => {
        if (props.currentPage === props.maxPage)
          return "color:transparent; background: #007bff; cursor: default;";
      }}
    }
  }
`;

const GuideListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-width: 1200px;
  min-height: 40vh;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  background-color: #fff;
  h4 {
    margin: 3rem auto;
    text-align: center;
  }
`;
