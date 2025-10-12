export default function Card(props) {
    return (
        <div>
            <img src={props.img} alt="Card"/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}