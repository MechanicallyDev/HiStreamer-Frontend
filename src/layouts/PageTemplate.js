import React from 'react';
import Header from 'components/PageTemplate/header';
import Content from 'components/PageTemplate/content';
import Footer from 'components/PageTemplate/footer';

export default function PageTemplate(props) {
  React.useEffect(() => {
    document.title = `HiStreamer - ${props.title}`;
  }, []);
  return (
    <>
      <main>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </main>
    </>
  );
}
