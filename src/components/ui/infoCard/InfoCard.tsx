import { Info } from "@mui/icons-material";
import { useState } from "react";
import { Zoom } from "@mui/material";

import './InfoCard.css';

interface IInfoCard {
    name: string;
    description: string;
    icon: string;
}

export const InfoCard = ({ name, description, icon }: IInfoCard) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className={!show ? 'info-card' : 'info-card-flip'} onClick={handleClick}>
            <div className="info-card-line">
                <img className="info-card-icon" src={icon} alt={`${name} icon`} />
                {!show ? (
                    <p className="info-card-title">{name}</p>
                ) : (
                    <Zoom in={show}>
                        <p className="info-card-description">{description}</p>
                    </Zoom>
                )}
            </div>
            <Info
                className="info-card-arrow"
                style={{
                    transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: show ? '#00C08B' : '#1E1E1E',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                }}
            />
        </div>
    );
};
