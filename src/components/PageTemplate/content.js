import React from 'react';
import styled from 'styled-components';
import PositionStore from 'hooks/positionStore';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export default function ContentContainer({children}) {
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
  return <Content compacted={isMenuCompacted}>{children}</Content>;
}

const Content = styled.main`
  flex: 1;
  min-height: 100vh;
  padding: 1.2rem 1rem;
  ${(props) =>
    props.compacted ? 'margin-top:42px; padding: 0 0 0 0;' : 'margin-top:42px; padding: 2.4rem 0 0 0;'}
  transition: padding .2s;
  @media screen and (max-width: 650px) {
    margin-top: 0.5rem;
  }
`;
