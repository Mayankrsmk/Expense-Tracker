import "./Expenses.css"
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
const Expenses=(props)=> {
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }

    const filterExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

   
    
    return (
        <div>
       
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}></ExpensesFilter>
            <ExpensesChart expenses={filterExpenses}></ExpensesChart>
            <ExpenseList items={filterExpenses}></ExpenseList>
        </Card>
        </div>
    );
}
 
export default Expenses;