import welcomeImg from "../assets/images/welcome-img.png"


export default function welcome() {
    return (
        <div>
            <h5>Savory & Sweet</h5>
            <img src={welcomeImg} alt="welcomeimg"/>
        </div>
    );
}