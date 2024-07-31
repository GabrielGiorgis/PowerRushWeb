import { InfoCard } from "../../ui/infoCard/InfoCard";
import healthIcon from '/assets/icons/health-insurance-svgrepo-com.svg';
import speedIcon from '/assets/icons/speed-svgrepo-com.svg';
import energyIcon from '/assets/icons/energy-svgrepo-com.svg';
import energyWhite from '/assets/icons/energy-svgrepo-white.svg';
import brainIcon from '/assets/icons/brain-illustration-4-svgrepo-com.svg';
import cashIcon from '/assets/icons/money-svgrepo-com.svg';
import candyIcon from '/assets/icons/candy-svgrepo-com.svg';
import eyeIcon from '/assets/icons/eye-svgrepo-com.svg';
import './Info.css'
import './InfoMQuery.css'
import { VersusItem } from "../../ui/VersusItem/VersusItem";

const jsonProperties = [
    {
        name: 'SALUD',
        description: 'Contiene 0 azucar y ayuda a tu salud con la suma de distintos nutrientes',
        icon: healthIcon,
    },
    {
        name: 'REACCION',
        description: 'Contiene 0 azucar y ayuda a tu salud con la suma de distintos nutrientes',
        icon: speedIcon,
    },
    {
        name: 'ENERGIA',
        description: 'Contiene 0 azucar y ayuda a tu salud con la suma de distintos nutrientes',
        icon: energyIcon,
    },
    {
        name: 'FOCUS',
        description: 'Contiene 0 azucar y ayuda a tu salud con la suma de distintos nutrientes',
        icon: brainIcon,
    },
]
const versusItems = [
    {
        text: '$783 x dósis',
        icon: cashIcon,
        text2: '$2.200 x lata'
    },
    {
        text: 'Azúcar 0g',
        icon: candyIcon,
        text2: 'Azúcar 27,5g'
    },
    {
        text: 'Ojos protegidos',
        icon: eyeIcon,
        text2: 'No lo hace'
    },
    {
        text: 'Cafeína 120g',
        icon: energyWhite,
        text2: 'Cafeína 80mg'
    }

]

export const Info = () => {
    return (
        <>
            <div className="info">
                <div className="properties">
                    <h3 className="info-title">¿EN QUE ME AYUDA?</h3>
                    <div className="properties-items">
                        {jsonProperties.map((property) => (
                            <InfoCard name={property.name} description={property.description} icon={property.icon} />
                        ))}
                    </div>
                </div>
                <div className="versus">
                    <h3 className="versus-title">¿POR QUE ELEGIRNOS?</h3>
                    <div className="versus-items">
                        <div className="versus-items-images">
                            <img className="versus-image" src="/assets/OnlyMango.png" alt="Mango" style={{ filter: 'drop-shadow(0 0 0.35rem #00C08B)' }} />
                            <img className="versus-image" src="/assets/latasola.png" alt="Lata" style={{ filter: 'drop-shadow(0 0 0.35rem #FF0048)' }} />
                        </div>
                        <div className="versus-items-text">
                            {versusItems.map((item) => (
                                <VersusItem text={item.text} icon={item.icon} text2={item.text2} />
                            ))}
                        </div>
                    </div>
                    <div className="versus-item-desktop">
                        <img className="versus-image" src="/assets/OnlyMango.png" alt="Mango" style={{ filter: 'drop-shadow(0 0 0.35rem #00C08B)' }} />
                        <div className="versus-items-text">
                            {versusItems.map((item) => (
                                <VersusItem text={item.text} icon={item.icon} text2={item.text2} />
                            ))}
                        </div>
                        <img className="versus-image" src="/assets/latasola.png" alt="Lata" style={{ filter: 'drop-shadow(0 0 0.35rem #FF0048)' }} />

                    </div>
                </div>
            </div>

        </>
    );
}