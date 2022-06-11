import { useState } from "react";
import useLocalStorage from './hooks/useLocalStorage'
function RecordItem({ text, oText }) {
    const [tex, setTex] = useLocalStorage("presentRecord");
    const [pN, setPN] = useLocalStorage('pN')
    const handleClick = (e) => {
      setTex(oText)
      window.setTimeout(function () {
        window.location.reload();
         document.querySelector("ol")?.childNodes[JSON.parse(localStorage.getItem('pN')).classList.add('clickit')]
      }, 0);
      const ol = document.querySelector("ol").childNodes
      for (let i=0; i< ol.length; ++i) {
        if (e.target == ol[i]){
          setPN(i)
          e.target.classList.add("clickit");}
        else ol[i].classList.remove("clickit");
      }
    };
  return (
    <li onClick={handleClick}>
      <a>{text}</a>
    </li>
  );
}
export default RecordItem;
