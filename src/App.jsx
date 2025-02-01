import { useState } from 'react'

import './App.css'

function App() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [variation, setVariation] = useState("");
  const [shipping, setShipping] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const calculatePrice = () => {
    const price = parseFloat(originalPrice) * parseFloat(variation) + parseFloat(shipping);
    setFinalPrice(price.toFixed(2)); // Mantém o valor como string (fixado em 2 casas decimais)
  };

  const copyToClipboard = () => {
    if (finalPrice) {
      navigator.clipboard.writeText(finalPrice.toString());
      setCopyMessage("Copiado paizim"); // Exibe a mensagem
      setTimeout(() => {setCopyMessage("")
        setOriginalPrice("")
     setShipping("")
     setVariation("")
     setFinalPrice("")
      }
      
      
      , 3000); 
     
    }
  };

  const handleOriginalPriceChange = (e) => {
    setOriginalPrice(e.target.value);
  };

  const handleVariationChange = (e) => {
    setVariation(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div className="calculadora">
      <h1>Calculadora Win</h1>
      <div className="container">


<div className="card">
  <div className="card-content">
    <input
      type="number"
      placeholder="Valor original"
      value={originalPrice}
      onChange={handleOriginalPriceChange}
      className="no-spin"
    />
    <input
      type="number"
      placeholder="Variação (ex: 2.5)"
      value={variation}
      onChange={handleVariationChange}
      className="no-spin"
    />
    <input
      type="number"
      placeholder="Frete"
      value={shipping}
      onChange={handleShippingChange}
      className="no-spin"
    />
    <button onClick={calculatePrice}>Calcular</button>
    
  </div>

  
</div>

</div>
<div className='results-messages'>

{finalPrice && (
      <p className="result" onClick={copyToClipboard}>
        {finalPrice}
      </p>
    )}
{copyMessage && <div className="copy-message">{copyMessage}</div>} {/* Mensagem de cópia */}
</div>
    </div>
   
  );
}

export default App
