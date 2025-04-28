import React from "react";

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid #3498db",
  borderTop: "4px solid transparent",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
  margin: "auto",
};

const spinnerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
};

// Animation keyframes (à injecter globalement ou via styled-components/css file)
const injectSpinnerKeyframes = () => {
  const styleSheet = document.styleSheets[0];
  const keyframes = `@keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};

const Spinner = () => {
  React.useEffect(() => {
    injectSpinnerKeyframes();
  }, []);

  return (
    <div style={spinnerContainer}>
      <div style={spinnerStyle} />
    </div>
  );
};

export default Spinner;
