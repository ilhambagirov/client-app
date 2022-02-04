import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';

export default function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </Card>
    )
}