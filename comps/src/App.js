import {  useEffect, useContext} from "react";
import Button from "./Button";
import {GoBell} from 'react-icons/go'
function App() {
  const handleClick = () =>{
    console.log("clicked")
  }
  const onMouseOver = () =>{
    console.log("onMouseOver")
  }
    return (<div>
      <div>
      <Button 
      warning className="md-5" onClick={handleClick} onMouseOver={onMouseOver}>
      <GoBell/>
        
        clickk</Button>
      </div>
      <div>
      <Button danger >clickk</Button>
      </div>
      <div>
      <Button primary outline rounded>clickk</Button>
      </div>
      <div>
      <Button secondary>clickk</Button>
      </div>
        </div>)
}
export default App;