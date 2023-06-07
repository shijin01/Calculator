import { memo } from "react";
import Numkey from "./keycomp/Numkey";
import Opkey from "./keycomp/Opkey";
const Keypad = (props) => {
    return (
        <div className="keypad">
            <Numkey num="7" val={props.val} stvl={props.stvl} />
          <Numkey num="8" val={props.val} stvl={props.stvl}/>
            <Numkey num="9" val={props.val} stvl={props.stvl} />
            <Opkey name="C" val={props.val} stvl={props.stvl}/>
            <br />
          <Numkey num="4" val={props.val} stvl={props.stvl}/>
          <Numkey num="5" val={props.val} stvl={props.stvl}/>
            <Numkey num="6" val={props.val} stvl={props.stvl} />
            <Opkey name="/" val={props.val} stvl={props.stvl}/><br />
          <Numkey num="1" val={props.val} stvl={props.stvl}/>
          <Numkey num="2" val={props.val} stvl={props.stvl}/>
            <Numkey num="3" val={props.val} stvl={props.stvl} />
            <Opkey name="x" val={props.val} stvl={props.stvl}/>
            <br />
            <Numkey num="0" val={props.val} stvl={props.stvl} />
            <Opkey name="=" val={props.val} stvl={props.stvl} />
            <Opkey name="-" val={props.val} stvl={props.stvl} />
            <Opkey name="+" val={props.val} stvl={props.stvl}/>
        </div>
    );
}
export default memo(Keypad);