import React, { useState } from 'react';
import styled from 'styled-components';
import * as htmlToImage from 'html-to-image';
import Form from './Components/Form';
import Generator from './Components/Generator';

const PanelGenerator = () => {
  const [panelWidth, setPanelWidth] = useState(200);
  const [panelHeight, setPanelHeight] = useState(60);
  const [panelBorder, setPanelBorder] = useState(0);
  const [panelText, setPanelText] = useState('');
  const [panelTextColor, setPanelTextColor] = useState('#7f49a6');
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#ffffff');
  const [textAlign, setTextAlign] = useState('center');
  const [textXOffset, setTextXOffset] = useState(0);
  const [textYOffset, setTextYOffset] = useState(0);
  const [iconAlign, setIconAlign] = useState('row');
  const [iconScale, setIconScale] = useState(80);
  const [iconColor, setIconColor] = useState('#ffffff');
  const [iconBgColor, setIconBgColor] = useState('#45275a');

  function getImage() {
    htmlToImage
      .toBlob(document.getElementById('MyPanel'), {
        width: panelWidth,
        height: panelHeight,
      })
      .then(function (blob) {
        window.saveAs(blob, '');
      });
  }
  function handleIconAlign(e, dir) {
    e.preventDefault();
    setIconAlign(dir);
  }

  const debounce = (callable, time) => {
    let timeout;
  
    return function() {
      const functionCall = () => callable.apply(this, arguments);
  
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };

  let contextPanelGenerator = {
    panelWidth, setPanelWidth,
    panelHeight, setPanelHeight,
    panelBorder, setPanelBorder,
    panelText, setPanelText,
    panelTextColor, setPanelTextColor,
    fontSize, setFontSize,
    fontColor, setFontColor,
    textAlign, setTextAlign,
    textXOffset, setTextXOffset,
    textYOffset, setTextYOffset,
    iconAlign, setIconAlign,
    iconScale, setIconScale,
    iconColor, setIconColor,
    iconBgColor, setIconBgColor,
    handleIconAlign, debounce, getImage
  }

  return (
    <MainPanel>
      <Form contextPanelGenerator={contextPanelGenerator}/>
      <Generator contextPanelGenerator={contextPanelGenerator}/>
    </MainPanel>
  );
};
const MainPanel = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 60vh;
  padding: 6vh;
  background: white;
  h3 {
    color: black;
    font-size: 3.2rem;
  }
`;
export default PanelGenerator;
