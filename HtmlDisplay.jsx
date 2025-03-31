import React from "react";

function HtmlDisplay() {
  const rawHtml = "<h2 style='color:white'>Hola</h2><p>Este texto es <strong>bold</strong>.</p>";

  return (
    <div>
      <h1>Displaying Raw HTML</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  );
}

export default HtmlDisplay;