import { useState } from 'react';
import './Reviews.css';
import { Review } from './Review';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

const reviews = [
    {
        id: 1,
        name: 'Pablo V.',
        review: 'Ya van 3 días que lo pruebo, y las energías a full. Lo super recomiendo ¡MUCHAS GRACIAS!',
    },
    {
        id: 2,
        name: 'Locuano Acosta',
        review: 'EXCELENTE! EL sabor es suave... pero rico! Despues probare los otros sabores.',
    },
    {
        id: 3,
        name: 'Matias L.',
        review: 'Excelente sabor, lo que hacen estos pibes simplemente es genial.',
    },
];

export function Reviews() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };


    return (
        // <div className="carousel">
        //     <div className="carousel-button" >
        //         <ArrowForwardIos onClick={handlePrevious} style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}/>
        //     </div>
        //     <div className="carousel-content">
        //         <Review
        //             name={reviews[currentIndex].name}
        //             review={reviews[currentIndex].review}
        //         />
        //     </div>
        //     <div className="carousel-button" >
        //         <ArrowForwardIos onClick={handleNext} style={{ cursor: 'pointer' }}/>
        //     </div>
        // </div>
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} >
            {reviews.map((review) => (
                <Carousel.Item>
                    <Review
                        name={review.name}
                        review={review.review}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
