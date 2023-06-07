import { memo } from "react";
const Opkey = (props) => {
    const opclk = (e) => {
        const t = props.val;
        const s = props.stvl;
        console.log("type:"+typeof(e.target.id));
        console.log(e.target.id);
        if(e.target.id === "C") {
            console.log("inside if");
            s(()=>" ");
            console.log("inside if");

        }
        else if (e.target.id === "=") {
            let tt = t.replace("x", '*');
            console.log("inside = if");
            s(eval(tt));
        }
        else{
            s(t + e.target.id);
        }
        console.log("t:" + t);
    }
    
        
    return (
        <div className="key" id={props.name} onClick={opclk}>
            {props.name}
        </div>
    );
}
export default memo(Opkey);