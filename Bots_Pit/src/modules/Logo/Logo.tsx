import logo from "../../images/Logo.png";
import flow from "../../images/Logo_flow.png";
import React, { useState } from 'react';
import './Logo.css';

function Logo() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="logo">
            <div 
                className="logo__image"
                style={{ width: '6rem', height: '6rem', position: 'relative', overflow: 'hidden' }}
            >
                <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="noflow"
                    src={logo} 
                    alt="description" 
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }} // noflow под flow
                />
                <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 
                    className={`flow ${isHovered ? 'slide-down' : ''}`} // Добавляем класс для анимации
                    src={flow} 
                    alt="description" 
                    style={{ width: '100%', position: 'absolute', top: isHovered ? '0' : '-100%', transition: 'top 0.5s ease-in-out', zIndex: 2 }} // flow сползает сверху
                />
            </div>
            <h1 className="logo__title">Bot's Pit</h1>
        </div>
    );
}

export default Logo;