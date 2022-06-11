function Button({cls,active, handleActive, type, oth, re_f}){
	return (
    <button className={`${cls} ${active}`} onClick={handleActive} ref={re_f}>
            <strong>{type}</strong>
            <small>{oth}</small>
    </button>
	)
}
export default Button
