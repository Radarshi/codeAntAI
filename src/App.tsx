import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth.tsx";
import Home from "./Pages/Home.tsx";
import Review from "./Pages/Review.jsx";
import Security from "./Pages/Security.jsx";
import Settings from "./Pages/Settings.tsx";
import Support from "./Pages/Support.tsx";
import Use from "./Pages/Use.tsx";
function App() {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} Component={Auth} />
             <Route path={'/dashboard'} Component={Home} />
             <Route path={'/review'} Component={Review}></Route>
             <Route path={'/security'} Component={Security}></Route>
             <Route path={'/use'} Component={Use}></Route>
             <Route path={'/settings'} Component={Settings}></Route>
             <Route path={'/support'} Component={Support}></Route>
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
