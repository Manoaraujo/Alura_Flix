import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Home from "./Pages/Home";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
