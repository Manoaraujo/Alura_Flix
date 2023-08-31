import { Button } from "@mui/joy";
import styles from "./Header.module.css";

function Header() {
   return (
      <>
         <div className={styles.header}>
            <img src="/img/LogoMain.png" alt="logo AluraFlix" />
            <Button variant="outlined" className={styles.button}>
               Novo vídeo
            </Button>
         </div>
      </>
   );
}
export default Header;
