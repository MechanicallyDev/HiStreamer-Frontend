import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Get Started</h5>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Sign up</Link>
              </li>
              <li>
                <Link to="#">Downloads</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>About Us</h5>
            <ul>
              <li>
                <Link to="#">Company Information</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">Reviews</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Help Desk</Link>
              </li>
              <li>
                <Link to="#">Forums</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2020 HiStreamer</p>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: #2b2f31;
  padding-top: 0.6rem;
  width: 100%;
  .container {
    width: 95vw;
    max-width: 1200px;
    padding: 0;
    margin: 0 auto;
    .row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      .col {
        flex: 1;
        h5 {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 30px;
          text-align: center;
        }
        ul {
          line-height: 1.7;
          margin: 1rem 0;
          text-align: center;
          li {
            padding: 2px 0;
            a {
              color: #d2d1d1;
              font-size: 1rem;
              text-decoration: none;
              cursor: pointer;
              &:hover {
                color: #888787;
              }
            }
          }
        }
        @media screen and (max-width: 650px) {
          margin-top: 0.5rem;
          h5 {
            font-size: 0.9rem;
            margin: 0;
            padding: 0.5rem;
          }
          ul {
            padding: 0;
            margin: 0;
            li {
              padding: 0;
              a {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .container {
      .row {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .footer-copyright {
    background-color: #222425;
    padding: 3px 0;
    text-align: center;
    margin-top: 10px;
    display: block;
    p {
      color: #ccc;
      margin: 10px;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    @media screen and (max-width: 650px) {
      margin-top: 0.6rem;
      font-size: 0.6rem;
      font-size: clamp(0.8rem, 1.5vw, 0.9rem);
    }
  }
`;
