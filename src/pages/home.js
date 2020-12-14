import PageTemplate from 'layouts/PageTemplate';
import Header from 'components/Header';

const Home = () => {
  return (
    <>
      <Header
        title="Home"
        hero="true"
        color="#fff"
        backgroundColor="#00000022"
        minHeight="40vh"
      />
      <PageTemplate title="Home"></PageTemplate>
    </>
  );
};

export default Home;
