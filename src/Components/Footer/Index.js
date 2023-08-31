import styles from "./Footer.module.css";

function Footer() {
   return (
      <div className={styles.footer}>
         <img
            className={styles.logo}
            src="/img/LogoMain.png"
            alt="logo AluraFlix"
         />
      </div>
   );
}
export default Footer;
