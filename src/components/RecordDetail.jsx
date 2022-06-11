import { useState } from "react";
import Category from "./Category";
import LabelHead from "./LabelHead";
import Button from "./Button";

function RecordDetail() {
  const [active, setActive] = useState("");
  const [active2, setActive2] = useState("not_active");
  const handleActive = () => {
    setActive2("not_active");
    if (active) setActive("");
  };

  const handleActive2 = () => {
    setActive("not_active");
    if (active2) setActive2("");
  };

  return (
    <div className="record_detail">
      <LabelHead center={false}>
        <Button
          cls="btn"
          active={active}
          handleActive={handleActive}
          type="PERSON"
          oth="1"
        />
        <Button
          cls="btn"
          active={active2}
          handleActive={handleActive2}
          type="ORG"
          oth="2"
        />
      </LabelHead>
      <Category />
    </div>
  );
}
export default RecordDetail;
