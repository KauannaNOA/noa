
import { InstagramLogo, List, WhatsappLogo } from "phosphor-react";
import Logo from "../../assets/images/logo.png"
import styles from "../Header/styles.module.scss"


export default function Header() {
  return (
    <header>
      <nav className={styles.headerContainer}>
        <input type="checkbox" id="check" className={styles.check}/>
          <label htmlFor="check" className={styles.checkbtn}>
            <List color="#5C3F44"/>
        </label>
        <img src={Logo} alt="Logo" className={styles.logo}/>
        <ul className={styles.linksContainer}>
          <li><a className={styles.active} href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#feedbacks">Feedbacks</a></li>
          <li><a href="#encontre-nos">Encontre-nos</a></li>
          <li> 
            <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.whatsappButton}>
              <span>Contacte-nos</span>
              <WhatsappLogo width={20} height={20}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.whatsappButton}>
              <span>Siga-nos</span>
              <InstagramLogo width={20} height={20}/>
            </a>
          </li>
        </ul>
      </nav>
    </header> 
  )
}