import React from 'react'
import TodoList from './Todo/TodoList'

function App() {  
  const todos =[
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить молоко' },
    { id: 3, completed: false, title: 'Купить кефир' }
  ]
  return (
  <div className='wrapper'>
    <h1> React tutorial</h1>

    <TodoList todos={todos} />
  </div>
  )
} 

export default App;
