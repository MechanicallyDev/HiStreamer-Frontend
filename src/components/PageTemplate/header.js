import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PositionStore from 'hooks/positionStore';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import LogoImage from '../../resources/images/hiStreamer384.png';

export default function Header() {
  const [isMenuCompacted, setMenuCompacted] = React.useState(false);

  const positionsStore = PositionStore();
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos);
      setMenuCompacted(currPos.y > 0 ? true : false);
    },
    [positionsStore],
    undefined,
    true
  );
  return (
    <Menu compacted={isMenuCompacted}>
      <MenuContainer>
        
          <LogoLink to="/">
            <span>
              <img src={LogoImage} alt="logo"/>
              <h1>Streamer</h1>.com
            </span>
          </LogoLink>

        <MenuListContainer>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guides">Guides</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </MenuListContainer>
      </MenuContainer>
    </Menu>
  );
}

const Menu = styled.nav`
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1rem;
  ${(props) =>
    props.compacted ? 'padding: 0rem 1rem;' : 'padding: 1.2rem 1rem;'}
  transition: padding .2s;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 0;
  }
`;
const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: inherit;
  color: rgba(0, 0, 0, 0.9);
  padding: 0.3125rem 0;
  margin-right: 1rem;
  white-space: nowrap;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s;
  h1 {
    display: inline-block;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 650px) {
    margin-top: 0.5rem;
  }
  img {
    height: 2rem;
    padding-right: .2rem;
  }
  span {
    display:flex;
    flex-direction: row;
    align-items: center;
  }
`;
const MenuListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    list-style: none;
  }
  li {
    padding-left: 1rem;
    @media screen and (max-width: 900px) {
      padding: 0;
      margin: 0;
    }
    a {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
      font-size: clamp(0.7rem, 1.5vw, 0.9rem);
      text-transform: uppercase;
      display: block;
      padding: 0.5rem 0.5rem;
      text-decoration: none;
      background-color: transparent;
      cursor: pointer;
      transition: color 0.15s;
      &:hover {
        color: rgba(0, 0, 0, 0.9);
        transform: scale(1.1);
      }
      @media screen and (max-width: 650px) {
        margin-top: 0.6rem;
        font-size: 0.6rem;
      }
    }
  }
`;
