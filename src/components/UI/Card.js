import './Card.scss'
export default function Card(props) {
    const cardClasses = 'card ' + props.className
    return (
        <div className={cardClasses}>
            {props.children}
        </div>
    )
}