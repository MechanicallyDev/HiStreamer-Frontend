import React from 'react';

const PositionStore = () => {
  const [renderCount, triggerReRender] = React.useState(0);
  const viewportPosition = React.useRef({ x: 0, y: 0 });
  let throttleTimeout = 300;
  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
  };

  return {
    setViewportPosition: (pos) => setPos(viewportPosition, pos),
    renderCount,
  };
};
export default PositionStore;
