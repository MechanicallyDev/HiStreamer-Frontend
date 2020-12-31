import PageTemplate from 'layouts/PageTemplate';
import api from 'api/api';
import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';

const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const markdownOptions = {
  overrides: {
    h1: { component: H3 },
    h2: { component: H4 },
    h3: { component: H5 },
  },
};

const GuideSingle = () => {
  let { slug } = useParams();
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [creationDate, setCreationDate] = React.useState({
    day: '00',
    month: '00',
    year: '0000',
  });
  const [updateDate, setUpdateDate] = React.useState({
    day: '00',
    month: '00',
    year: '0000',
  });
  const [postMD, setPostMD] = React.useState('');

  React.useEffect(() => {
    api.get(`post/${slug}`).then(({ data }) => {
      const { post, author } = data;

      setTitle(post.title);
      setImage(post.image);
      setAuthor(author.name);
      const reqCreationDate = post.created_at.substring(0, 10).split('-');
      setCreationDate({
        day: reqCreationDate[2],
        month: reqCreationDate[1],
        year: reqCreationDate[0],
      });
      const reqUpdatedDate = post.updated_at.substring(0, 10).split('-');
      setUpdateDate({
        day: reqUpdatedDate[2],
        month: reqUpdatedDate[1],
        year: reqUpdatedDate[0],
      });
      document.title = `HiStreamer - ${title}`;
      setPostMD(post.content);
    });
  }, [slug, title]);

  function areDatesEqual(date1, date2) {
    return (
      date1.day === date2.day &&
      date1.month === date2.month &&
      date1.year === date2.year
    );
  }

  return (
    <PageTemplate title={title}>
      {title !== 'Page not found' && (
        <Container>
          <div
            className="postImage"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <PostBody>
            <h2>{title}</h2>
            {creationDate.day !== '00' && (
              <div className="info">
                <span>by {author}</span>
                <span>
                  {areDatesEqual(creationDate, updateDate)
                    ? `Posted on ${creationDate.month}/${creationDate.day}/${creationDate.year}`
                    : `Last update on ${updateDate.month}/${updateDate.day}/${updateDate.year}`}
                </span>
              </div>
            )}
            <ContentBlock options={markdownOptions}>{postMD}</ContentBlock>
          </PostBody>
        </Container>
      )}
      {title === 'Page not found' && (
        <Container>
          <PostBody style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
          </PostBody>
        </Container>
      )}
    </PageTemplate>
  );
};

const ContentBlock = styled(Markdown)`
  h3 {
    margin: 2rem 0 0.5rem 0;
    font-size: 1.6rem;
  }
  h4 {
    margin: 2rem 0 0.5rem 0;
    font-size: 1.4rem;
  }
  h5 {
    margin: 2rem 0 0.5rem 0;
    font-size: 1.2rem;
  }
  summary {
    margin: 2rem 0 0.5rem 0;
    font-size: 1rem;
  }
  p,
  a {
    font-size: 1rem;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #007bff;
    transition: color 0.2s;
    &:hover {
      color: #243386;
    }
  }
`;

const Container = styled.section`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 6rem;
  max-width: 1110px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  background-color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  border-radius: 1rem;
  .postImage {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    border-radius: 1rem 1rem 0 0;
  }
`;
const PostBody = styled.div`
  padding: 70px 100px;
  h2 {
    font-size: 1.75rem;
  }
  .info {
    padding: 0;
    display: block;
    span {
      display: inline-block;
      margin-right: 40px;
      color: #007bff;
      font-size: 0.9em;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;

export default GuideSingle;
