import { CustomButton } from "../CustomButton/CustomButton"
import './Header.css'

export const Header = () => {

    return (
        <>
            <div className="header-container">
                <div className="promo">
                    <p className="promo-text">¡<a href="https://powerrush.com.ar/product/powerrush/">Suscribite</a> y otene 10% OFF!</p>
                </div>
                <header className="header">
                    <div className="header-logo-container">
                        <img className="header-logo-mobile" src="/assets/logoPowerRush.svg" alt="logo" />
                        <img className="header-logo" src="/assets/logoHeader.png" alt="logo" />
                    </div>
                    <div className="header-button-container">
                        <CustomButton />
                    </div>
                </header>
            </div>
        </>
    )
}