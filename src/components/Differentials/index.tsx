import styles from "../Differentials/styles.module.scss"

import WaterMark from "../../assets/images/watermark.png"
import DifferentialsFirst from "../../assets/images/differentials1.png"
import DifferentialsSecond from "../../assets/images/differentials2.png"
import { InstagramLogo, WhatsappLogo } from "phosphor-react"

export default function Differentials() {
  return (
    <main className={styles.differentialsContainer} id="diferenciais">
      <div className={styles.waterMarkDifferentials}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Diferenciais</h2>
      </div>
      <div className={styles.alignDifferentialsImages}>
        <div className={styles.differentialImages}>
          <h3>Cadeira de massagem</h3>
          <img src={DifferentialsFirst} width={500} height={567} alt="Cadeira de Massagem" />
        </div>
        <div className={styles.dividingLine}></div>
        <div className={styles.differentialImages}>
          <h3>Cappuccino especial, cortesia para as clientes</h3>
          <img src={DifferentialsSecond} width={500} height={567} alt="Cappuccino especial" />
        </div>
      </div>
      <div className={styles.socialButtons}>
          <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.whatsappButton}>
            <span>Contacte-nos</span>
            <WhatsappLogo width={30} height={30}/>
          </a>
          <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.whatsappButton}>
            <span>Siga-nos</span>
            <InstagramLogo width={30} height={30}/>
          </a>
      </div>
    </main>
  )
}