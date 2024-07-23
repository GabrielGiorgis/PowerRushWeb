import './VersusItem.css'

interface IVersusItem {
    text: string
    icon: string
    text2: string
}

export const VersusItem = ({ text, icon, text2 }: IVersusItem) => {
    return(
        <div className="versus-item">
            <p className="versus-item-text">{text}</p>
            <img className="versus-item-icon" src={icon} />
            <p className="versus-item-text2">{text2}</p>
        </div>
    )
}