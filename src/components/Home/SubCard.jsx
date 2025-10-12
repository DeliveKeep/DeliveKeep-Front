export default function SubCard(props) {
    return (
        <div>
            <h4>
                {props.title}
            </h4>
            <p>
                {props.description}
            </p>
            <button onClick={props.onClick}>
                {props.buttonLabel}
            </button>
        </div>
    )
}