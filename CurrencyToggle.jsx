import React, { useState } from 'react';

const CurrencyToggle = ({ onCambioMoneda }) => {
  
    const toggleCurrency = () => {
        onCambioMoneda("NEW CURRENCY");
    }

  return (
    <div>
      <button onClick={toggleCurrency}>
        Switch currency
      </button>
    </div>
  );
};

export default CurrencyToggle;