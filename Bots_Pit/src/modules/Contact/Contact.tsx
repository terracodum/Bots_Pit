import "./Contact.css"
import telegram from "../../images/icons8-telegram.svg"

function Contact() {
    return (
        <div className="cont">
            <p className="link">botspitgame@gmail.com</p>
            <a className="link" href="https://t.me/botspitgame">
            <div className="img"
                style={{ width: '4rem', overflow: 'hidden' }}>
                <img
                    className="back"
                    src={telegram} 
                    alt="description" 
                    style={{ width: '100%', height: '90%', zIndex: 1 }}
                />
            </div>
            </a>
        </div>
    )
}

export default Contact;