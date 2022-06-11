import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import HighlightBtn from "./HighlightBtn";
function Category() {
  const [text, setText] = useLocalStorage("presentRecord"); 
  return (
    <p className="details">
      <HighlightBtn cls='high' type='Elinor Lee' active='active'  oth='PERSON'/>{'                         '}
      <HighlightBtn cls='high' type='New York City' active='active'  oth='ORG'/>
      {text}
      <HighlightBtn cls='high' type='London' active='active'  oth='ORG'/>
    </p>
  );
}
export default Category;
