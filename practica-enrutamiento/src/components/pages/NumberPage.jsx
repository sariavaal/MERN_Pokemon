import {useParams} from "react-router-dom";

function NumberPage(){
    let {number} = useParams();
    return (
        <div className="text-center p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            <h1>El numero es: {number}</h1>
        </div>
    )
}
export default NumberPage