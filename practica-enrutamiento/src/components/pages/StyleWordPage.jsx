import { useParams } from "react-router-dom";

function StyleWordPage(){
    const {text, color, background} = useParams();
    return (
        <div className="text-center p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" >
            <h1 style={{color: color, backgroundColor: background}}>{text}</h1>
        </div>
    )
}
export default StyleWordPage