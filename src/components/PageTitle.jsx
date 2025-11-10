
export default function PageTitle({props}) {
    return (
        <div className="text-xl flex flex-row justify-start border-b-1 border-primary-yellow md:text-3xl p-5 mb-15">
            <img className="h-10" src={props.icon}/>
            <p className="px-5">{props.text}</p>
        </div>
    )
}