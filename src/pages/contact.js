import React from "react";
import PageTemplate from "layouts/PageTemplate";
import styled from "styled-components";
import Header from "components/Header";
import IntText, { IntInText } from "i18n/IntText";

const Contact = () => {
  const [hasSent, setHasSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [errors, setErrors] = React.useState([]);

  function validateForm() {
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    function minSize(field, size) {
      return field.trim().length <= size;
    }
    function maxSize(field, size) {
      return field.trim().length >= size;
    }
    let errorList = [];
    if (minSize(name, 3) || maxSize(name, 145)) {
      errorList = ["name", ...errorList];
    }
    if (!validateEmail(email) || minSize(email, 5)) {
      errorList = ["email", ...errorList];
    }
    if (minSize(subject, 3) || maxSize(subject, 145)) {
      errorList = ["subject", ...errorList];
    }
    if (minSize(message, 20)) {
      errorList = ["message", ...errorList];
    }
    if (errorList.length > 0) {
      setHasError(true);
      setErrors(errorList);
      return true;
    } else {
      setHasError(false);
      return false;
    }
  }

  async function handleFormSubmition(e) {
    e.preventDefault();
    if (validateForm()) return;
    setErrors([]);
    setHasSent(true);
  }

  return (
    <PageTemplate title={IntInText("contact.title")}>
      <Header
        title={IntInText("contact.title")}
        description={[
          IntInText("contact.descriptionLine1"),
          IntInText("contact.descriptionLine2"),
        ]}
      />

      <Form hasError={hasError}>
        {hasSent && (
          <div>
            <h4>{IntInText("contact.sentResponseTitle")}</h4>
            <p>{IntInText("contact.sentResponseLine")}</p>
          </div>
        )}
        <div>
          <label>
            {IntInText("contact.formInputName")}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={hasSent}
            />
            {errors.includes("name") && (
              <span><IntText text="contact.formErrorName"/></span>
            )}
          </label>
        </div>
        <div>
          <label>
            {IntInText("contact.formInputSubject")}
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={hasSent}
            />
            {errors.includes("subject") && (
              <span><IntText text="contact.formErrorSubject"/></span>
            )}
          </label>
        </div>
        <div>
          <label>
            {IntInText("contact.formInputEmail")}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={hasSent}
            />
            {errors.includes("email") && (
              <span><IntText text="contact.formErrorEmail"/></span>
            )}
          </label>
        </div>
        <div>
          <label>
            {IntInText("contact.formInputMessage")}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={hasSent}
            />
            {errors.includes("message") && (
              <span><IntText text="contact.formErrorMessage"/></span>
            )}
          </label>
        </div>
        {!hasSent && (
          <div>
            <button onClick={(e) => handleFormSubmition(e)}>
              {hasError
                ? `${IntInText("contact.formError")}`
                : `${IntInText("contact.formSend")}`}
            </button>
          </div>
        )}
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
  h4 {
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
  div {
    margin-bottom: 1rem;
    width: 100%;
    label {
      width: 100%;
      cursor: default;
      margin-bottom: 0.5rem;
      span {
        color: red;
        font-size: 0.8rem;
      }
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
      background-color: ${(props) => (props.hasError ? "red" : "#007bff")};
      border-color: #007bff;
      font-weight: 400;
      text-align: center;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      margin: 2px;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      &:hover {
        background-color: ${(props) =>
          props.hasError ? "#bb0000" : "#007bffdd"};
      }
    }
  }
`;

export default Contact;
