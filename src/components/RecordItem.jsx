import { useState } from "react";

function RecordItem({ text }) {
  const handleClick = (e) => {
    const ol = document.querySelector("ol");
    for (let li of ol.childNodes) {
      if (e.target == li) e.target.classList.add("clickit");
      else li.classList.remove("clickit");
    }
  };

  return (
    <li onClick={handleClick}>
      <a>{text}</a>
    </li>
  );
}
export default RecordItem;
