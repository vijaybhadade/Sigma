 function doSomething()
 {
    console.log("button was clicked...");
 }
  
 function Hover() {
    console.log("hover on demo button");
 }

 function printHellow()
 {
    console.log("Hello sir");
 }


function handleformSubmit(event){
   event.preventDefault();
   console.log("form was sumitted...");
}

 export default  function  clickEvent()
 {   
   
    return (
        <>
        <h2>Click following button:</h2>
         <div>
            {  /* button events
             <button onClick={doSomething}>Clicke me!</button>
            <p onClick={printHellow}>This is para for demo click events.</p>
            <button onMouseOver={Hover}>Hover Button </button> */}
            <form onSubmit={handleformSubmit}>
              <button>Submit</button>
            </form>
        </div>
   
        </>
         );
       
 }