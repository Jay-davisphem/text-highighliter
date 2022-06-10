function LabelHead({ center = true, children }) {
  return (
    <span className={`label_head ${center ? "" : "nocenter"}`}>{children}</span>
  );
}
export default LabelHead;
