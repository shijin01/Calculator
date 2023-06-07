
const Display = (props) => {

    return (
        <div style={{ width: "140px", height: "50px",backgroundColor:"blue"}}>

        
        <div style={{ width: "120px", height: "30px", backgroundColor: "whitesmoke", margin: "10px",color:"black" }}>
            
            {props.val}
        </div></div> 
    );
}
export default Display;