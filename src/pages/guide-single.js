import PageTemplate from 'layouts/PageTemplate';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const GuideSingle = ({ title }) => {
  let { slug } = useParams();
  return (
    <PageTemplate title={slug}>
      <Container>
        <div
          className="postImage"
          style={{
            backgroundImage:
              'url("https://img.r7.com/images/bicho-preguica-caracteristicas-das-especies-e-curiosidades-07042020125814530?dimensions=660x360")',
          }}
        />
        <PostBody>
          <h2>Title</h2>
          <div className="info">
            <span>by Author</span>
            <span>Date</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consequuntur, recusandae provident ducimus voluptas ut hic harum
            assumenda debitis aliquam incidunt voluptatum quia ipsa,
            exercitationem eaque architecto quidem veniam. Error! Ratione
            incidunt aliquam quam blanditiis numquam obcaecati. Maiores
            molestiae ratione, maxime nostrum expedita modi excepturi delectus
            obcaecati architecto, deserunt velit minus natus. Tempore, sit
            labore! Tenetur earum unde aliquid quisquam? Explicabo placeat
            molestiae blanditiis rerum incidunt quibusdam ex optio quidem vitae
            nulla. Tempora velit incidunt eum corporis voluptas. Repellendus
            voluptate, architecto nam omnis illum temporibus ipsam natus
            necessitatibus ipsum culpa. Facere eveniet nam laudantium
            consequuntur eaque necessitatibus quidem, consequatur deserunt
            tenetur inventore dolorem asperiores veniam quibusdam eos ratione
            ipsam unde ad id aliquam in nulla ea cum ipsa. Sint, odit.
            Voluptatum officiis dolorem nam, assumenda iusto atque accusamus,
            quos eos et dolores praesentium iure natus in a hic! Earum accusamus
            consequatur quisquam architecto. Quis odit atque inventore voluptas.
            Fugit, vel! Iste id esse, impedit harum minima culpa possimus
            aliquid aliquam dicta animi. Earum impedit quasi reprehenderit
            officiis pariatur, quae adipisci magnam numquam nemo laboriosam
            optio aliquid cupiditate, atque iste temporibus? Eos laboriosam
            tempore blanditiis molestiae cupiditate. Temporibus impedit iste,
            eligendi est praesentium corrupti quos accusantium dignissimos totam
            fugit assumenda consectetur enim nostrum hic error velit. Quibusdam
            quia error laudantium illum. Necessitatibus quod aut minus explicabo
            ipsum alias quis sit commodi! Harum maiores fuga repellendus
            nostrum, consequatur id, amet commodi architecto culpa assumenda sed
            repudiandae, aspernatur laudantium iste provident dolores eligendi.
            Doloremque maiores commodi non quos omnis accusamus eius quod, sequi
            in alias. Quae labore velit esse, natus dicta nisi cum ipsa autem
            nostrum distinctio, assumenda incidunt facilis dolores nesciunt
            expedita! Beatae facilis modi consectetur nostrum harum rerum quas
            tenetur commodi necessitatibus, obcaecati officia, ducimus illum
            doloribus assumenda atque sequi eum consequuntur enim distinctio
            culpa dolorem nobis? Reprehenderit saepe aut voluptate.
          </p>
        </PostBody>
      </Container>
    </PageTemplate>
  );
};

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
    padding: 20px 0;
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
