import "./Block.css"

interface Article {
    title: string;
    text: string;
}

function Block(prop: Article) {
    return (
        <div className="block">
            <h2 className="title">{prop.title}</h2>
            <p className="text">{prop.text}</p>
        </div>
    )
}

export default Block;