import "./Biglist.css"
import List from "../List/List.tsx"
import sum from "./text.tsx"
import fnaf from "../../images/fnaf.png"
import under from "../../images/undef.png"
function Biglist() {
    return (
        <div className="biglist">
            <h2 className="bigtitle">Основные механики</h2>
            <List title={sum[0].title} count={sum[0].count} points={sum[0].points}/>
            <div 
                className="logo__image"
                style={{ width: '40dvw', height:"20dvw", position: 'relative', overflow: 'hidden' }}
            >
                <img
                    className="noflow"
                    src={fnaf} 
                    alt="description" 
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }} // noflow под flow
                />
            </div>
            <List title={sum[1].title} count={sum[1].count} points={sum[1].points}/>
            <List title={sum[2].title} count={sum[2].count} points={sum[2].points}/>
            <List title={sum[3].title} count={sum[3].count} points={sum[3].points}/>
            <div 
                className="logo__image"
                style={{ width: '40dvw', height:"20dvw", position: 'relative', overflow: 'hidden' }}
            >
                <img
                    className="noflow"
                    src={under} 
                    alt="description" 
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }} // noflow под flow
                />
            </div>
            <List title={sum[4].title} count={sum[4].count} points={sum[4].points}/>
        </div>
    )
}

export default Biglist;