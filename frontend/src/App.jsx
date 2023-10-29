import Footer from "./components/Footer"
import Header from "./components/Header"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Features from "./pages/Features"
import Feature1 from "./pages/Feature1"
import Feature2 from "./pages/Feature2"
import MySpace from "./pages/MySpace"
import About from "./pages/About"
import NoteDetails from "./pages/NoteDetails"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import { UserContextProvider } from "./context/UserContext"


const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Features" element={<Features/>}/>
          <Route path="/Feature1" element={<Feature1 />}></Route>
          <Route path="/Feature2" element={<Feature2 />}></Route>
          <Route exact path="/notes" element={<MySpace/>}/>
          <Route exact path="/notes/note/:id" element={<NoteDetails />}/>
          <Route exact path="/write" element={<CreateNote />}/>
          <Route exact path="/edit/:id" element={<EditNote />}/>
        </Routes>
      </UserContextProvider>
      <Footer/>
    </div>
  )
}

export default App