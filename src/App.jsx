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
        <footer>
          <ul>
         <li> <a href="https://www.bluelearn.in/"><img src= "src/assets/bluelearn-icon.svg" height="20" width="50"></img>Website</a></li>
      <li> <a href="https://www.instagram.com/bluelearn.in/"> <img src= "src/assets/instagram-icon.svg" height="20" width="50"></img>Instagram</a></li>
      <li> <a href="https://www.linkedin.com/company/bluelearn"><img src= "src/assets/linkedin-icon.svg" height="20" width="50"></img>Linkedin</a></li>
     <li>  <a href="https://www.youtube.com/channel/UCSuCYJ_jvzVJYFycR4WIZhw"><img src= "src/assets/youtube-icon.svg" height="20" width="50"></img>Youtube</a></li>

        </ul>
        </footer>

    </div>
  )
}

export default App
