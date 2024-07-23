import { Rating } from "@mui/material"
import { CustomButton } from "../../ui/CustomButton/CustomButton"
import './Landing.css'
import { Reviews } from "../../ui/Reviews/Reviews"

export const Landing = () => {
    return (
        <div className="landing">
            <h1 className="landing-title">Concentracion y energía en una sola dosis</h1>
            <div className="rating">
                <Rating className="rating-stars" value={5} readOnly />
                <p className="rating-text">+ 10.000 personas potenciadas</p>
            </div>
            <img className="landing-image" src="src/assets/Mango.png" alt="landing" />
            <p className="landing-description">Una combinacion ideal de vitaminas, nootropicos y nutrientes para un mejor rendimiento</p>
            <CustomButton />
            <Reviews />
        </div>
    );
}