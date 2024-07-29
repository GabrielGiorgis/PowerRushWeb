
import { IngredientCard } from '../../ui/IngredientCard/IngredientCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ingredients.css';
import Slider from "react-slick";
import eyeIcon from '/assets/icons/eye-svgrepo-com.svg';
import energyWhite from '/assets/icons/energy-svgrepo-white.svg';
import focus from '/assets/icons/focus-point-845-svgrepo-com.svg';
import meditation from '/assets/icons/meditation-svgrepo-com.svg';


const infoComponents = [
    {
        name: 'L-LUTEINA',
        description: 'Flavonoide con propiedades antioxidantes y anti inflamatorias que protegen la retina humana de las radiaciones ultravioletas del sol',
        icon: eyeIcon,
        perk: 'PROTECCION VISUAL',
    },
    {
        name: 'L-TEANINA',
        description: 'Aminoácido que influye sobre el estado de animo, el sueño y el cortisol, ayudando asi, a lidiar con el estrés',
        icon: meditation,
        perk: 'TRANQUILIDAD',
    },
    {
        name: 'GINSENG',
        description: 'Planta medicinal que actúa directamente en el hipocampo, responsable del funcionamiento de la memoria, mejorando la atención y la concentración',
        icon: focus,
        perk: 'CONCENTRACION',
    },
    {
        name: 'TAURINA',
        description: 'Aminoácido que contribuye al tratamiento de la fatiga y los trastornos musculares.',
        icon: energyWhite,
        perk: 'ENERGIA',
    }
];

export const Components = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="ingredients">
            <div className="ingredients-text">
                <p className="ingredients-info">
                    Contiene un conjunto de nutrientes y nootrópicos que te dan distintos <span>beneficios</span>, como una <span>hidratación visual</span>, <span>concentración</span> y  <span>energía</span> sin alterar tu <span>tranquilidad</span>.
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
