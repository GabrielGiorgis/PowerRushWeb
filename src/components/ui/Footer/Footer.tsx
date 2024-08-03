import { Email, Instagram, WhatsApp } from "@mui/icons-material"
import './Footer.css'

const socials = [
    {
        icon: <Instagram className="footer-social-icon" />,
        name: 'Instagram',
        link: 'https://www.instagram.com/powerrusharg/?_ga=2.94469790.369525256.1722608665-1923597663.1719344210'
    },
    {
        icon: <WhatsApp className="footer-social-icon" />,
        name: '+54 9 11 2406-4157',
        link: 'https://wa.me/5491124064157?text=%C2%A1Hola!%20Vi%20el%20producto%20en%20la%20web%20y%20quisiera%20consultar%20por%20mas%20info%20sobre%20sus%20beneficios.%20%C2%A1Gracias!'
    },
    {
        icon: <Email className="footer-social-icon" />,
        name: 'soporte@powerrush.com.ar',
        link: 'mailto:soporte@powerrush.com.ar?subject=Consulta%20sobre%20el%20producto&body=%C2%A1Hola!%20Vi%20el%20producto%20en%20la%20web%20y%20quisiera%20consultar%20por%20mas%20info%20sobre%20sus%20beneficios.%20%C2%A1Gracias!'
    }
]

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-footer">
                <img src="/assets/logoHeader.png" />
            </div>
            <div className="footer-socials">
                {socials.map((social) => (
                    <a href={social.link} target="_blank" rel="noreferrer">
                        <div className="socials">
                            {social.icon}
                            <p>{social.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024. Todos los derechos reservados.</p>
            </div>
        </div>
    )

}