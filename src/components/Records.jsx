import RecordItem from "./RecordItem";
import LabelHead from "./LabelHead";
function Records() {
  const list = [0, 1, 3, 5, 3, 5];
  return (
    <div className="records">
      <LabelHead>
        <>Records</>
      </LabelHead>
      <ol className="records_items">
        {list.map((a, index) => (
          <RecordItem key={index} text={`${index + 1}. ${a}`} />
        ))}
      </ol>
    </div>
  );
}
export default Records;
