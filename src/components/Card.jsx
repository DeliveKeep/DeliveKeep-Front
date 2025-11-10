import {Link} from "react-router-dom";

export default function Card({props}) {
    return (<Link to={props.link}>
            <div className="flex flex-col text-white bg-white/5 rounded-xl mx-5 md:m-0
            transition-all duration-300 ease-in-out
        hover:shadow-2xl
        hover:scale-[0.97]
        hover:bg-fade/5
        hover:bg-opacity-90">
                <img src={props.image} className="object-cover object-center md:w-full h-45 md:h-75 rounded-t-xl" alt="card"/>

                <div className="p-8">
                    <h3 className="text-2xl">
                        {props.title}
                    </h3>
                    <p className="">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>

    )
}