import { ReactElement } from 'react'
import './IngredientCard.css'

interface IIngredientCard {
    name: string
    description: string
    icon: ReactElement
    perk: string
}

export const IngredientCard = ({ name, description, icon, perk }: IIngredientCard) => {
    return (
        <div className="ingredient-card">
            <p className="ingredient-card-name">{name}</p>
            <div className='desc'>
                <p className="ingredient-card-description">{description}</p>
            </div>
            <div className="ingredient-card-perk">
                {icon}
                <p className="ingredient-card-perk-text">{perk}</p>
            </div>
        </div>
    )
}