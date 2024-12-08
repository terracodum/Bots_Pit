import "./List.css"

interface List {
    title: string;
    count: number;
    points: string[];
}

function List(props: List) {
    return (
        <div className="list">
            <h2 className="title">{props.title}</h2>
            <ul>
                {props.points.map((point, index) => (
                    <li key={index}><p className="textl">{point}</p></li>
                ))}
            </ul>
        </div>
    );
}

export default List;