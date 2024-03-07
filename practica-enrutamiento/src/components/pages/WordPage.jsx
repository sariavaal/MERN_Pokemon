import { useParams } from "react-router-dom";

function WordPage(){
    const {word} = useParams();
    return (
        <div className="text-center p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            <h1>La palabra es: {word}</h1>
        </div>
    )
}
export default WordPage