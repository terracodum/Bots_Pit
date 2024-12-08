import back from '../../images/back.png'
import gg from '../../images/GG.png'
import "./Imgset.css"
function Imgset() {

    return (
        <div className="set">
            <div className="img"
                style={{ width: '50dvw', overflow: 'hidden' }}>
                <img
                    className="back"
                    src={back} 
                    alt="description" 
                    style={{ width: '100%', height: '90%', zIndex: 1 }}
                />
                <p className='des'>Основная концепция</p>
            </div>

            <div className="img"
                style={{ width: '20dvw', overflow: 'hidden' }}>
                <img
                    className="gg" 
                    src={gg} 
                    alt="description" 
                    style={{ width: '100%', height: '90%', zIndex: 1 }}
                />
                <p className='des'>Дизайн робота</p>
            </div>
        </div>
    );
}

export default Imgset;