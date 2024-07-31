import { Email, Instagram, WhatsApp } from "@mui/icons-material"
import './Footer.css'

const socials =[
    {
        icon: <Instagram className="footer-social-icon"/>,
        name: 'Instagram'
    },
    {
        icon: <WhatsApp className="footer-social-icon"/>,
        name: '+54 9 11 2406-4157'
    },
    {
        icon: <Email className="footer-social-icon"/>,
        name: 'soporte@powerrush.com.ar'
    }
]

export const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="logo-footer">
                <img src="/assets/logoHeader.png"/>
            </div>
            <div className="footer-socials">
                {socials.map((social) =>(
                    <div className="socials">
                        {social.icon}
                        <p>{social.name}</p>
                    </div>
                ))}
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024. Todos los derechos reservados.</p>
            </div>
        </div>
    )

}