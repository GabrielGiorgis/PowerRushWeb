
import { IngredientCard } from '../../ui/IngredientCard/IngredientCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ingredients.css';
import Slider from "react-slick";
import BoltIcon from '@mui/icons-material/Bolt';
import { CableRounded, CoffeeRounded, FastfoodRounded, FilterCenterFocusRounded, FilterVintageRounded, FitnessCenterRounded, HealingRounded, KeyboardCommandKeyRounded, RemoveRedEyeRounded, TipsAndUpdatesRounded } from '@mui/icons-material';

const infoComponents = [
    {
        name: 'L-LUTEINA',
        description: 'Flavonoide con propiedades antioxidantes y anti inflamatorias que protegen la retina humana de las radiaciones ultravioletas del sol',
        icon: <RemoveRedEyeRounded />,
        perk: 'PROTECCION VISUAL',
    },
    {
        name: 'CAFEINA',
        description: 'Posee propiedades estimulantes, antioxidantes, antiinflamatorias y ergogénicas.',
        icon: <CoffeeRounded />,
        perk: 'MENOR CANSANCIO',
    },
    {
        name: 'L-TEANINA',
        description: 'Aminoácido que influye sobre el estado de animo, el sueño y el cortisol, ayudando asi, a lidiar con el estrés',
        icon: <FilterVintageRounded />,
        perk: 'MENOS ESTRES',
    },
    {
        name: 'GINSENG',
        description: 'Planta medicinal que actúa directamente en el hipocampo, responsable del funcionamiento de la memoria, mejorando la atención y la concentración',
        icon: <FilterCenterFocusRounded />,
        perk: 'CONCENTRACION',
    },
    {
        name: 'TAURINA',
        description: 'Aminoácido que contribuye al tratamiento de la fatiga y los trastornos musculares.',
        icon: <BoltIcon />,
        perk: 'ENERGIA',
    },
    {
        name: 'COLINA',
        description: 'Nutriente esencial y fundamental para el desarrollo del sistema nervioso, mejora las funciones cognitivas',
        icon: <TipsAndUpdatesRounded />,
        perk: 'DESARROLLO COGNITIVO',
    },
    {
        name: 'L-TIROSINA',
        description: 'Aminoácido que contribuye al metabolismo, a la producción de catecolaminas y el correcto funcionamiento del sistema nervioso central',
        icon: <CableRounded />,
        perk: 'RENDIMIENTO',
    },
    {
        name: 'VITAMINA B3',
        description: 'Vitamina importante para el metabolismo energético, la salud de la piel y el aparato digestivo.',
        icon: <FastfoodRounded />,
        perk: 'DIGESTION',
    },
    {
        name: 'VITAMINA B6',
        description: 'Vitamina que contribuye a la formacion de globulos rojos y neurotransmisores.',
        icon: <HealingRounded />,
        perk: 'SALUD',
    },
    {
        name: 'VITAMINA B12',
        description: 'Vitamina que ayuda al manteminimiento del sistema nervioso.',
        icon: <KeyboardCommandKeyRounded />,
        perk: 'PREVENCION CARDIACA',
    },
    {
        name: 'L-CARNITINA',
        description: 'Aminoácido que ayuda a fomentar la resistencia, quemar grasa y acelerar la recuperación muscular.',
        icon: <FitnessCenterRounded />,
        perk: 'RECUPERACION MUSCULAR',
    }

];

export const Components = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="ingredients">
            <div className="ingredients-text">
                <p className="ingredients-info">
                    <span className='title-ingredients'>¿Que contiene Power Rush?</span><br/>
                    Contiene <span>11 nootrópicos</span> que te aportan <span>energía</span>, <span>concentración</span> y <span>salud ocular</span>
                </p>
            </div>
            <div className="ingredients-cards">
                <Slider {...settings} >
                    {infoComponents.map((component, index) => (
                        <IngredientCard
                            key={index}
                            name={component.name}
                            description={component.description}
                            icon={component.icon}
                            perk={component.perk}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
