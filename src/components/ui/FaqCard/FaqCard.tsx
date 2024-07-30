import { useState } from "react"
import './FaqCard.css'
import { TouchAppRounded } from "@mui/icons-material"
import { Zoom } from "@mui/material"

interface IFaqCard {
    question: string
    answer: string
}
export const FaqCard = ({ question, answer }: IFaqCard) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="faq-card" onClick={handleClick}>
            {!show ?
                <>
                    <div className="faq-card-line-question">
                        <p className="faq-card-question">{question}</p>
                        <TouchAppRounded className="faq-card-icon" />
                    </div>
                </>
                :
                <>
                    <Zoom in={show}>
                        <div className="faq-card-line-answer">
                            <p className="faq-card-answer">{answer}</p>
                            <TouchAppRounded className="faq-card-icon" />
                        </div>
                    </Zoom>
                </>
            }
        </div>
    )
}