
import './Reviews.css';
import { Review } from './Review';
import Slider from 'react-slick';

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        initialSlide: 0,
        pauseOnHover: true,
        pauseOnTouch: true,
        centerMode: true,
    };

    return (
        <div className="reviews">
            <Slider {...settings} >
                {reviews.map((review) => (
                    <div className='review'>
                        <Review
                            name={review.name}
                            review={review.review}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
