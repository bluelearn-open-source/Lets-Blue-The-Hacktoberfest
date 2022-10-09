import { useState } from 'react'

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

// logo/imgs
import yt_icon from './assets/youtube-icon.svg'
import linkedin_icon from './assets/linkedin-icon.svg'
import insta_icon from './assets/instagram-icon.svg'
import blue_icon from './assets/bluelearn-icon.svg'
import github_icon from './assets/icons8-github-96.svg'

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
          <ul id="logo-contain">
      <li > <a href="https://www.bluelearn.in/"><img id="logos" src= {blue_icon} height="0.9in"></img></a></li>
      <li > <a href="https://www.instagram.com/bluelearn.in/"> <img id="logos" src= {insta_icon} ></img></a></li>
      <li > <a href="https://www.linkedin.com/company/bluelearn"><img id="logos" src= {linkedin_icon} ></img></a></li>
      <li > <a href="https://www.youtube.com/channel/UCSuCYJ_jvzVJYFycR4WIZhw"><img id="logos" src={yt_icon}  ></img></a></li>
      <li > <a href="https://www.youtube.com/channel/UCSuCYJ_jvzVJYFycR4WIZhw"><img id="logos" src={github_icon}></img></a></li>

        </ul>
        </footer>

    </div>
  )
}

export default App
