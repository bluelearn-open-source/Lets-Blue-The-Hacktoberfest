import { useState } from 'react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

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

function App() {
  const [theme, setTheme] = useState("light")
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [mode, setMode] = useState('light');

  const toggler = () => {
    theme == "light" ? setTheme("dark") : setTheme("light")
  }

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

  const deleteTask = (id) => {
    setTasks(current =>
      current.filter(item => {
        return item.id !== id;
      }),
    );
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  document.body.style = theme === "dark" && 'background: #9a999f;';

  return (
    <div className="container" id={theme}>
      <header>
        <h1> Let's Blue Your To-Dos</h1>
      </header>
      <q> An app for managing your daily tasks.You can add, delete and edit your To-do list. </q>
     <div>
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="md"
        inactiveTrackColor="#fcfcfd"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={(mode) => {
          setMode(mode);
          toggler()
        }}
      />
      </div>

      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}

        />
      )}
        <footer>
          <ul id="logo-contain">
      <li > <a href="https://www.bluelearn.in/"><img id="logos" src= {blue_icon} height="0.9in"></img></a></li>
      <li > <a href="https://www.instagram.com/bluelearn.in/"> <img id="logos" src= {insta_icon} ></img></a></li>
      <li > <a href="https://www.linkedin.com/company/bluelearn"><img id="logos" src= {linkedin_icon} ></img></a></li>
      <li > <a href="https://www.youtube.com/channel/UCSuCYJ_jvzVJYFycR4WIZhw"><img id="logos" src={yt_icon}  ></img></a></li>

        </ul>
        </footer>

    </div>
  )
}

export default App
