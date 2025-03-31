import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieNuevo = () => {
  const [visitCount, setVisitCount] = useState(0);


  const updateVisitCount = () => {
    const currentCount = Cookies.get("visitCount");
    
   
    if (currentCount) {
      const newCount = parseInt(currentCount) + 1;
      Cookies.set("visitCount", newCount, { expires: 365 });
      setVisitCount(newCount);
    } else {
      Cookies.set("visitCount", 1, { expires: 365 });
      setVisitCount(1);
    }
  };

  useEffect(() => {
    updateVisitCount();
  }, []);

  return (
    <div>
      <h2>Video de Ejemplo</h2>
      <p>Has visitado: {visitCount}</p>
    </div>
  );
};

export default CookieNuevo;