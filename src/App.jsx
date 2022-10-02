import { useState } from 'react'

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

 
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  } 




  return (
    <div className="container">
      <header>
        <h1> Let's Blue Your To-Dos</h1>
      </header>
     <q> An app for managing your daily tasks.You can add, delete and edit your To-do list. </q>
    
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
  
        />
      )}
    </div>
  )
}

export default App
