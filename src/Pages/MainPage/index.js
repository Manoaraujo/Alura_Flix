import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Index";
import Header from "../../Components/Header/Index";
import Container from "../../Components/Container/Index";

function MainPage() {
   return (
      <main>
         <Header />
         <Container>
            <Outlet />
         </Container>
         <Footer />
      </main>
   );
}

export default MainPage;
