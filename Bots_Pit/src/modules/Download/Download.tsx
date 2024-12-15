import "./Download.css";
import { useState } from 'react';

function Download() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        window.open('https://github.com/terracodum/Bots-Pit', '_blank');
    };

    return (
        <div className="btncont">
            <button 
                onClick={handleDownload} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                className={`down_btn highlight-container ${isHovered ? 'highlight' : ''}`}
            >
                Скачать пре-альфу игры
            </button>
        </div>
    );
}

export default Download;