import '../App.css';
const Numkey = (props) => {
    const clk = (e) => {
        const t = props.val;
        const s = props.stvl;

        console.log("t:"+t)
         s(t + e.target.id);
        
    }

    return (
        <div className="key" id={props.num} onClick={clk}>
            {props.num}
        </div>
    )
}
export default Numkey;