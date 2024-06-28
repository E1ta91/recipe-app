import welcomeImg from "../assets/images/welcome-img.png"



export default function welcome() {
    return (
        
        <div className="bg-[linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.5)),url('./assets/images/welcome-bg.png')] bg-cover bg-center h-screen flex flex-col justify-center">
            <h3 className="text-white text-center text-4xl">Savory & Sweet</h3>
            <img src={welcomeImg} alt="welcomeimg"/>
        </div>
    );
}