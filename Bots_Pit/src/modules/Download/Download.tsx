import "./Download.css"
import { useState } from 'react';

function triggerDownload(fileName: string) {

    var element = document.createElement('a');
    element.setAttribute('href', fileName);
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    // Происходит клик, словно совершил его сам программирующий ниндзя
    element.click();
    document.body.removeChild(element);
  }

function Download() {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div>
            <button 
            onClick={() => {triggerDownload('Eblan.txt')}} 
            onMouseEnter={() => setIsHovered(true)} // Устанавливаем состояние при наведении
            onMouseLeave={() => setIsHovered(false)} // Убираем состояние при уходе
            className={`down_btn highlight-container ${isHovered ? 'highlight' : ''}`}
            >Скачать пре-альфу игры</button>
        </div>
    )
}

export default Download;