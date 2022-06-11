import AnnotationItem from "./AnnotationItem";
import useLocalStorage from './hooks/useLocalStorage'
import LabelHead from "./LabelHead";
function Annotations() {
  const [anno, setAnno] = useLocalStorage('highObj')
  console.log(anno)
  return (
    <div className="annotations">
      <LabelHead>Annotations</LabelHead>
      <ul>
        {anno.map(({name, type}, i) => (
          <AnnotationItem name={name} key={i} type={type} />
        ))}
      </ul>
    </div>
  );
}
export default Annotations;
