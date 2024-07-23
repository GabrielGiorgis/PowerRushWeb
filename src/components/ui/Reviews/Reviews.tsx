import { useState } from 'react';
import './Reviews.css';
import { Review } from './Review';
import { ArrowForwardIos } from '@mui/icons-material';

const reviews = [
    {
        id: 1,
        name: 'Billie',
        review: 'Fantastic team leader with a great vision for the project.',
    },
    {
        id: 2,
        name: 'Roger',
        review: 'Creative genius who brings ideas to life beautifully.',
    },
    {
        id: 3,
        name: 'Wendy',
        review: 'Detail-oriented designer with a knack for clean, modern designs.',
    },
];

export function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel-button" >
                <ArrowForwardIos onClick={handlePrevious} style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}/>
            </div>
            <div className="carousel-content">
                <Review
                    name={reviews[currentIndex].name}
                    review={reviews[currentIndex].review}
                />
            </div>
            <div className="carousel-button" >
                <ArrowForwardIos onClick={handleNext} style={{ cursor: 'pointer' }}/>
            </div>
        </div>
    );
}
