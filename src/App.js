import { useSelector } from "react-redux";
import "./App.css";
import Authorize from "./Component/Auth/Authorize";
import {getUser} from './store/user'
function App() {
  const user = useSelector(state => getUser(state))
  console.log(user)
  return (
    <div className="App">
      {/* <Authorize/> */}
      "hi"
      {user?"home":<Authorize/>}
    </div>
  );
}

export default App;
