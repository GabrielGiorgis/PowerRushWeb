import { InfoCard } from "../../ui/infoCard/InfoCard";
import healthIcon from '/src/assets/icons/health-insurance-svgrepo-com.svg';
import speedIcon from '/src/assets/icons/speed-svgrepo-com.svg';
import energyIcon from '/src/assets/icons/energy-svgrepo-com.svg';
import energyWhite from '/src/assets/icons/energy-svgrepo-white.svg';
import brainIcon from '/src/assets/icons/brain-illustration-4-svgrepo-com.svg';
import cashIcon from '/src/assets/icons/money-svgrepo-com.svg';
import candyIcon from '/src/assets/icons/candy-svgrepo-com.svg';
import eyeIcon from '/src/assets/icons/eye-svgrepo-com.svg';
import './Info.css'
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
        text: '0g de azúcar',
        icon: candyIcon,
        text2: '27.5g de azúcar'
    },
    {
        text: 'Protege tus ojos',
        icon: eyeIcon,
        text2: 'No lo hace'
    },
    {
        text: '120g de cafeína',
        icon: energyWhite,
        text2: '80mg de cafeína'
    }

]

export const Info = () => {
    return (
        <>
            <div className="info">
                <div className="properties">
                    <h3 className="info-title">¿EN QUE ME AYUDA?</h3>
                    {jsonProperties.map((property) => (
                        <InfoCard name={property.name} description={property.description} icon={property.icon} />
                    ))}
                </div>
                <div className="versus">
                    <h3 className="versus-title">¿POR QUE ELEGIRNOS?</h3>
                    <div className="versus-items">
                        <div className="versus-items-images">
                            <img className="versus-image" src="src/assets/OnlyMango.png" alt="Mango" />
                            <img className="versus-image" src="src/assets/latasola.png" alt="Mango" />
                        </div>
                        <div className="versus-items-text">
                            {versusItems.map((item) => (
                                <VersusItem text={item.text} icon={item.icon} text2={item.text2} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}