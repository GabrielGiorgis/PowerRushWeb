import { Looks3Sharp, LooksOneSharp, LooksTwoSharp, NotListedLocationSharp, PlayArrowSharp } from "@mui/icons-material"
import './Steps.css'
import { FaqCard } from "../../ui/FaqCard/FaqCard"

const steps = [
    {
        key: 1,
        icon: LooksOneSharp,
        text: 'AGREGA UNA DOSIS A 200ML DE AGUA'
    },
    {
        key: 2,
        icon: LooksTwoSharp,
        text: 'REVOLVE HASTA DISOLVERLO BIEN'
    },
    {
        key: 3,
        icon: Looks3Sharp,
        text: 'TOMALO Y PREPARATE PARA RENDIR'
    }
]

const faqs = [
    {
        question: '¿Cuántas veces se puede tomar?',
        answer: 'Recomendamos 2 dosis maximo por debido a la cantidad de cafeina que contiene'
    },
    {
        question: '¿Cuando lo debo tomar?',
        answer: '30 minutos antes de realizar una actividad que requiera alta concentracion mental'
    },
    {
        question: '¿Debo tomarlo todos los días?',
        answer: 'No. El efecto de Power Rush es instantaneo y no es necesiario tomarlo todos los dias para que haga mas efecto'
    },
    {
        question: '¿Debo tomarlo todos los días?',
        answer: 'No. El efecto de Power Rush es instantaneo y no es necesiario tomarlo todos los dias para que haga mas efecto'
    }
]

export const Steps = () => {

    return (
        <>
            <div className="steps-faqs-container">
                <div className="steps-container">
                    <div className="steps-title">
                        <h3 className="steps-title-text">¿COMO SE PREPARA?</h3>
                    </div>
                    <div className="steps">
                        {
                            steps.map((step) => (
                                <>
                                    <div className="steps-item">
                                        <step.icon className="steps-item-icon" />
                                        <p className="steps-item-text">{step.text}</p>
                                    </div>
                                    {step.key !== 3 && <PlayArrowSharp className="steps-item-arrow" />}
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="faqs-container">
                    <div className="faqs-title">
                        <NotListedLocationSharp className="faqs-title-icon" />
                        <h3 className="faqs-title-text">PREGUNTAS FRECUENTES</h3>
                    </div>
                    <div className="faqs">
                        {
                            faqs.map((faq) => (
                                <FaqCard question={faq.question} answer={faq.answer} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}