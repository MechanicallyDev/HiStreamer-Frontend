import PageTemplate from 'layouts/PageTemplate';
import styled from 'styled-components';
import GuideItem from 'components/Guides/GuideItem';

const GuideList = () => {
  return (
    <PageTemplate title="Guides">
      <BlockHeading>
        <h2>Guides</h2>
        <p>Check our guides and learn how to make your stream even better!</p>
      </BlockHeading>
      <GuideListContainer>
        <GuideItem
          image="https://img.r7.com/images/bicho-preguica-caracteristicas-das-especies-e-curiosidades-07042020125814530?dimensions=660x360"
          title="Ai que preguiça"
          date="10/12/20"
          author="MechanicallyDev"
          summary="O preguiçoso, conforme o senso comum, é aquele indivíduo avesso a atividades que mobilizem esforço físico ou mental, de modo que lhe é conveniente direcionar a sua vida a fins que não envolvam maiores esforços.
          A preguiça é algo que pode ser combatido e pode ter motivações psicológicas e fisiológicas. Também existem relações da preguiça com a depressão."
          slug="teste"
        />
        <GuideItem
          image="https://img.r7.com/images/bicho-preguica-caracteristicas-das-especies-e-curiosidades-07042020125814530?dimensions=660x360"
          title="Ai que preguiça"
          date="10/12/20"
          author="MechanicallyDev"
          summary="O preguiçoso, conforme o senso comum, é aquele indivíduo avesso a atividades que mobilizem esforço físico ou mental, de modo que lhe é conveniente direcionar a sua vida a fins que não envolvam maiores esforços.
          A preguiça é algo que pode ser combatido e pode ter motivações psicológicas e fisiológicas. Também existem relações da preguiça com a depressão."
          slug="teste"
        />
        <GuideItem
          image="https://img.r7.com/images/bicho-preguica-caracteristicas-das-especies-e-curiosidades-07042020125814530?dimensions=660x360"
          title="Ai que preguiça"
          date="10/12/20"
          author="MechanicallyDev"
          summary="O preguiçoso, conforme o senso comum, é aquele indivíduo avesso a atividades que mobilizem esforço físico ou mental, de modo que lhe é conveniente direcionar a sua vida a fins que não envolvam maiores esforços.
          A preguiça é algo que pode ser combatido e pode ter motivações psicológicas e fisiológicas. Também existem relações da preguiça com a depressão."
          slug="teste"
        />
      </GuideListContainer>
    </PageTemplate>
  );
};

export default GuideList;

const BlockHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 30vh;
  h2 {
    font-size: 2rem;
    padding: 10px;
    color: #333;
  }
  p {
    font-size: 1rem;
    padding: 10px;
  }
`;
const GuideListContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 40vh;
  margin-bottom: 4rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  background-color: #fff;
  padding: 2rem 0;
`;
