import './IngredientCard.css'

interface IIngredientCard {
    name: string
    description: string
    icon: string
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
                <img className="ingredient-card-icon" src={icon} />
                <p className="ingredient-card-perk-text">{perk}</p>
            </div>
        </div>
    )
}