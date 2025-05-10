/*import { Routes } from "react-router";
import Routers from "./Pages/Router/Routers";



function App() {
  return (
    <div className="">
      
<Routers/>

    </div>
  );
}

export default App;
<Route path="/reel" element={<Create/>} /> 

*/
import { Routes } from "react-router";
import Routers from "./Pages/Router/Routers";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Messages from "./Components/Messages/Messages.jsx";
import Notifications from "./Components/Notifications/Notifications.jsx";
import HomeRight from "./Components/HomeRight/HomeRight";
/*import Create from ".Components/Create/CreateReels.jsx"; */

function App() {
  return (
    <Routers>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeRight />} />
       
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Routers>
  );
}

export default App;
