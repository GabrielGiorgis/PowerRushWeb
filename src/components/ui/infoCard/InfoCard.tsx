import {Info } from "@mui/icons-material"
import { useState } from "react"

import './InfoCard.css'

interface IInfoCard {
    name: string,
    description: string,
    icon: string
}

export const InfoCard = ({ name, description, icon }: IInfoCard) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className={!show ? "info-card" : "info-card-flip"}>
            <div className="info-card-line">
                <img className="info-card-icon" src={icon} />
                {!show ? <p className="info-card-title">{name}</p> : <p className="info-card-description">{description}</p>}
            </div>
            {show ?
                <Info className="info-card-arrow" onClick={handleClick} style={{transform: 'rotate(180deg)' , color: '#00C08B', fontSize: 'clamp(2rem, 5vw, 3rem)' }} />
                : 
                <Info className="info-card-arrow" onClick={handleClick} style={{ transform: 'rotate(0deg)', color: '#1E1E1E', fontSize: 'clamp(2rem, 5vw, 3rem)' }}/>
            }
        </div>
    )
}

