export default function HomeContainer({ children, content='' }) {
    return (
        <div>
            <h1>{children}</h1>
            <p>{content}</p>
        </div>

    )
}