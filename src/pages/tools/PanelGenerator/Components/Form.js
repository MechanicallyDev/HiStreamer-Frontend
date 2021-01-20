import React from 'react';
import styled from 'styled-components';

const Form = ({contextPanelGenerator}) => {
  let [icon, setIcon] = React.useState("");


  const {
    panelWidth,
    setPanelWidth,
    panelHeight,
    setPanelHeight,
    panelBorder,
    setPanelBorder,
    panelText,
    setPanelText,
    panelTextColor,
    setPanelTextColor,
    fontSize,
    setFontSize,
    fontColor,
    setFontColor,
    textAlign,
    setTextAlign,
    textXOffset,
    setTextXOffset,
    textYOffset,
    setTextYOffset,
    iconAlign,
    setIconAlign,
    iconScale,
    setIconScale,
    iconColor,
    setIconColor,
    iconBgColor,
    setIconBgColor,
    handleIconAlign,
    debounce,
    getImage,
  } = contextPanelGenerator;
  return (
    <StyledForm>
      <h3>Gerador de Painéis</h3>
      <label>
        Texto
        <input
          id="panelText"
          type="text"
          placeholder="Painel"
          value={panelText}
          onChange={(e) => {
            setPanelText(e.target.value);
          }}
        />
      </label>
      <label>
        Font Size
        <input
          type="number"
          name="fontSize"
          id="fontSize"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
        />
      </label>
      <label>
        Alinhamento do Texto:
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTextAlign('flex-start');
            }}
          >
            Esquerda
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTextAlign('center');
            }}
          >
            Centro
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTextAlign('flex-end');
            }}
          >
            Direita
          </button>
        </div>
      </label>
      <label>
        Offset X:
        <input
          type="range"
          min={-100}
          max={100}
          step={1}
          value={textXOffset}
          onChange={(e) => {
            setTextXOffset(e.target.valueAsNumber);
          }}
        />
      </label>
      <label>
        OffsetY:
        <input
          type="range"
          min={-100}
          max={100}
          step={1}
          value={textYOffset}
          onChange={(e) => {
            setTextYOffset(e.target.valueAsNumber);
          }}
        />
      </label>
      <label>
        Direção
        <button onClick={(e) => handleIconAlign(e, 'row')}>{' < '}</button>
        <button onClick={(e) => handleIconAlign(e, 'row-reverse')}>
          {' > '}
        </button>
      </label>
      <label>
        Largura:
        <input
          type="number"
          name="panelWidth"
          id="panelWidth"
          value={panelWidth}
          onChange={(e) => setPanelWidth(e.target.value)}
        />
      </label>
      <label>
        Altura:
        <input
          type="number"
          name="panelHeight"
          id="panelHeight"
          value={panelHeight}
          onChange={(e) => setPanelHeight(e.target.value)}
        />
      </label>
      <label>
        Borda:
        <input
          type="range"
          min={0}
          max={panelHeight / 2}
          step={1}
          value={panelBorder}
          onChange={(e) => {
            setPanelBorder(e.target.valueAsNumber);
          }}
        />
      </label>
      <label>
        Escala do Ícone:
        <input
          type="range"
          name="iconScale"
          id="iconScale"
          min={0}
          max={100}
          step={0.05}
          value={iconScale}
          onChange={(e) => {
            setIconScale(e.target.valueAsNumber);
          }}
        />
      </label>
      <label>
        Ícone
        <input type="file" onChange={()=>("")}/>
        <button onClick={()=>("")}>Upload!</button>
      </label>
      <label>
        Cor do Ícone:
        <input
          type="color"
          value={iconColor}
          onChange={(e) => {
            debounce(setIconColor(e.target.value), 2000);
          }}
        />
      </label>
      <label>
        Cor do BG Ícone:
        <input
          type="color"
          value={iconBgColor}
          onChange={(e) => {
            setIconBgColor(e.target.value);
          }}
        />
      </label>
      <label>
        Cor do Fundo:
        <input
          type="color"
          value={panelTextColor}
          onChange={(e) => {
            setPanelTextColor(e.target.value);
          }}
        />
      </label>
      <label>
        Cor do Texto:
        <input
          type="color"
          value={fontColor}
          onChange={(e) => {
            setFontColor(e.target.value);
          }}
        />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          getImage();
        }}
      >
        Download
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.6rem;
  }
`;

export default Form;
