import React from 'react';
import styled from 'styled-components';

const Generator = ({contextPanelGenerator}) => {
  const {
    panelWidth,
    panelHeight,
    panelBorder,
    panelText,
    panelTextColor,
    fontSize,
    fontColor,
    textAlign,
    textXOffset,
    textYOffset,
    iconAlign,
    iconScale,
    iconColor,
    iconBgColor,
  } = contextPanelGenerator;
  return (
    <ContentPanel>
      <MainElement
        id="MyPanel"
        width={panelWidth}
        height={panelHeight}
        backgroundColor={panelTextColor}
        iconAlign={iconAlign}
        border={panelBorder}
      >
        <IconContainer
          width={panelHeight}
          height={panelHeight}
          backgroundColor={iconBgColor}
          color={iconColor}
        >
          <Icon scale={iconScale} />
        </IconContainer>
        <PanelText
          textColor={fontColor}
          fontSize={fontSize}
          textAlign={textAlign}
          offsetX={textXOffset}
          offsetY={textYOffset}
        >
          {panelText}
        </PanelText>
      </MainElement>
    </ContentPanel>
  );
};

const ContentPanel = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: ${(props) => props.scale}%;
  height: ${(props) => props.scale}%;
`;
const MainElement = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: ${(props) => props.iconAlign};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.border}px;
`;
const PanelText = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.textColor};
  transform: translate(${(props) => `${props.offsetX}px,${props.offsetY}px`});
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  svg {
    path {
      fill: ${(props) => props.color};
    }
  }
`;
export default Generator;
