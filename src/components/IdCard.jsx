
function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="id-card">

            <img src={picture} alt={`${firstName} ${lastName}`} />

            <div className="idcard-info">
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height} cm</p>
            <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>

    )
}

export default IdCard;