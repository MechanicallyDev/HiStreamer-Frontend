import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import api from 'api/api';
import PageTemplate from 'layouts/PageTemplate';
import Header from 'components/Header';
import GuideItem from 'components/Guides/GuideItem';

const GuideList = (props) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(1);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    api
      .get('posts', {
        params: {
          page: currentPage,
        },
      })
      .then((response) => {
        const itemsPerPage = 6;
        const page = queryString.parse(props.location.search).page || 1;
        let reqPostCount = response.headers['x-total-count'];
        let reqPageCount = 1 + Math.floor(reqPostCount / itemsPerPage);
        setPageCount(reqPageCount);
        setPosts(response.data);
        if (page > reqPageCount && currentPage === 0) {
          setCurrentPage(reqPageCount);
        }
        if (currentPage === 0) setCurrentPage(1);
      });
  }, [currentPage, props.location.search]);

  function handleChangePage(dir) {
    if (dir === 'previous' && currentPage > 1) {
      setCurrentPage(Number(currentPage) - 1);
    }
    if (dir === 'next' && currentPage < pageCount) {
      setCurrentPage(Number(currentPage) + 1);
    }
  }

  return (
    <PageTemplate title="Guides">
      <Header
        title="Guides"
        description={[
          'Check our guides and learn how to make your stream even better!',
        ]}
      />
      <PageNavigation currentPage={currentPage} maxPage={pageCount}>
        <button
          className="previous"
          onClick={() => handleChangePage('previous')}
        >{`<`}</button>
        <button disabled>
          Page {currentPage} / {pageCount}
        </button>
        <button
          className="next"
          onClick={() => handleChangePage('next')}
        >{`>`}</button>
      </PageNavigation>

      <GuideListContainer>
        {posts.length === 0 && <h4>Loading...</h4>}
        {posts.map((post) => (
          <GuideItem
            key={post.title}
            image={post.image}
            title={post.title}
            summary={post.description}
            slug={post.slug}
          />
        ))}
      </GuideListContainer>
      <PageNavigation currentPage={currentPage} maxPage={pageCount}>
        <button
          className="previous"
          onClick={() => handleChangePage('previous')}
        >{`<`}</button>
        <button disabled>
          Page {currentPage} / {pageCount}
        </button>
        <button
          className="next"
          onClick={() => handleChangePage('next')}
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
          return 'color:transparent;  background: #007bff; cursor: default;';
      }}
    }
    &.next {
      cursor: pointer;
      font-weight: 700;
      border-radius: 0 8px 8px 0;
      background: #0050ff;
      ${(props) => {
        if (props.currentPage === props.maxPage)
          return 'color:transparent; background: #007bff; cursor: default;';
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
