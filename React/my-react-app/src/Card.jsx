import ProfilePic from "./assets/ProfilePic/formal.jpg";
function Card() {
    return (
        <div className="card">
            <img src={ProfilePic}></img>
            <h3>Nour Eldeen</h3>
            <p>i learn React</p>
        </div>
    )
}
export default Card;