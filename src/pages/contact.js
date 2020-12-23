import PageTemplate from 'layouts/PageTemplate';
import styled from 'styled-components';
import Header from 'components/Header';

const Contact = () => {
  return (
    <PageTemplate title="Contact">
      <Header
        title="Contact Us"
        description={[
          'Do you want a new feature? Maybe you want to tell us about some bug...',
          'Or maybe there is some accessibility issue? Anyway, contact us using the form bellow.',
        ]}
      />
      <Form>
        <div>
          <label>
            Name
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Subject
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            E-mail
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Message
            <textarea />
          </label>
        </div>
        <div>
          <button>Send</button>
        </div>
      </Form>
    </PageTemplate>
  );
};

const Form = styled.form`
  border-top: 2px solid #5ea4f3;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  div {
    margin-bottom: 1rem;
    width: 100%;
    label {
      width: 100%;
      cursor: default;
      margin-bottom: 0.5rem;
    }
    input,
    textarea {
      display: block;
      resize: vertical;
      width: 100%;
      max-width: 500px;
      height: calc(1.5em + 0.75rem + 2px);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }
    textarea {
      height: 80px;
    }
    button {
      cursor: pointer;
      display: block;
      width: 100%;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      font-weight: 400;
      text-align: center;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      &:hover {
        background-color: #007bffdd;
      }
    }
  }
`;

export default Contact;
