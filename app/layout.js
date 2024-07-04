import './fonts.css';
import "@fontsource/geologica/100.css";
import  './globals.css';
import styles from "./layout.module.css";

const Layout = ({ children }) => {


  return ( 
    <div className={styles.container}>
     {children} 
    </div>
   
  );
};

export default Layout;