import React, { useState } from "react";
import DOMPurify from "dompurify";

function SanitizeInputDOMPurify() {
  const [input, setInput] = useState("");
  const [safeHtml, setSafeHtml] = useState("");

  const handleSubmit = () => {
    const sanitizedHtml = DOMPurify.sanitize(input); // Limpia el HTML
    setSafeHtml(sanitizedHtml);
  };

  return (
    <div>
      <h1>Sanitización 🏥con DOMPurify</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe algo aquí..."
      />
      <button onClick={handleSubmit}>Mostrar HTML Seguro</button>

      <h2>Salida:</h2>
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </div>
  );
}

export default SanitizeInputDOMPurify;
