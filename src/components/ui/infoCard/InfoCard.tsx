import { ArrowForwardIos } from "@mui/icons-material"
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
        <div className="info-card">
            <div className="info-card-line">
                <img className="info-card-icon" src={icon} />
                {!show ? <p className="info-card-title">{name}</p> : <p className="info-card-description">{description}</p>}
            </div>
            <ArrowForwardIos className="info-card-arrow" onClick={handleClick} />
        </div>
    )
}

