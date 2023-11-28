import CITIES from "../Array-cities";
import "./Cities.css"

function Cities() {
    return (
        <>
            <ul>
                {CITIES.map(i =>
                    <li key={i}>{i.name}, {i.oblast} oblast, population: {i.population} people</li>)}
            </ul>
        </>
    )
}

export default Cities;