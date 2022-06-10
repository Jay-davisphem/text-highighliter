function Button({cls,active, handleActive, type, oth}){
	return (
    <button className={`${cls} ${active}`} onClick={handleActive}>
            <strong>{type}</strong>
            <small>{oth}</small>
    </button>
	)
}
export default Button
