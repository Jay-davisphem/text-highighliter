import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import HighlightBtn from "./HighlightBtn";
function Category() {
  const [text, setText] = useLocalStorage("presentRecord");
  return (
    <p className="details">
      <HighlightBtn
        cls="high"
        type="Details"
        oth="PERSON"
        active={true}
        handleActive={() => {}}
      />
      {text}
    </p>
  );
}
export default Category;
