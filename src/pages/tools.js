import PageTemplate from 'layouts/PageTemplate';
import Header from 'components/Header';
import PanelGenerator from 'pages/tools/PanelGenerator/PanelGenerator'

const Tools = () => {
  return (
    <PageTemplate title="Tools">
      <Header
        title="Tools"
      />
      <PanelGenerator/>
    </PageTemplate>
  );
};

export default Tools;
