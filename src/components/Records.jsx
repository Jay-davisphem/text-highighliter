import RecordItem from "./RecordItem";
import LabelHead from "./LabelHead";
function Records() {
  const list = JSON.parse(localStorage.getItem("recordList"));
  return (
    <div className="records">
      <LabelHead>
        <>Records</>
      </LabelHead>
      <ol className="records_items">
        {list.map((text, index) => (
          <RecordItem
            key={index}
            oText={text}
            text={`${index + 1}. ${text.toString().substring(0, 25)}...`}
          />
        ))}
      </ol>
    </div>
  );
}
export default Records;
