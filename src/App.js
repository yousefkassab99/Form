import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import {BrowserRouter, Route, Routes,NavLink ,Navigate} from 'react-router-dom'
import Page3 from "./pages/page3";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  

  return (
   
  <BrowserRouter>
    <div>
   <Routes>
     <Route path='/' element = {<Page1 />} />
     <Route
            path="/Page2"
            element={user ? <Navigate to="/" /> : <Page2  />}
          />
    
     <Route path='/Page3' element = {<Page3 />} />
   </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
