import AnnotationItem from "./AnnotationItem";
import LabelHead from "./LabelHead";
function Annotations() {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="annotations">
      <LabelHead>Annotations</LabelHead>
      <ul>
        {list.map((a, i) => (
          <AnnotationItem name={a} key={i} type={i} />
        ))}
      </ul>
    </div>
  );
}
export default Annotations;
