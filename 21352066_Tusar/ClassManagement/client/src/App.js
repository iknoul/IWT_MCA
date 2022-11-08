import {BrowserRouter ,Route,Routes} from "react-router-dom";
import './App.css';
import TeacherHome from "./component/TeacherHome";

const App = () => {
  return (
    <div className="container">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<TeacherHome/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
