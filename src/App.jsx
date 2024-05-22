import Todo from "./components/Todo.jsx"
import Form from "./components/Form.jsx"
import FilterButton from "./components/FilterButton.jsx"
import {useState} from "react"

function App  (props) {

  const [tasks, setTasks] = useState(props.tasks)

  function addTask(name){
    const newTask = {id: "id", name, completed:false}; 
    setTasks([...tasks, newTask])
  }


  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name ={task.name} completed={task.completed} key={task.id}/>
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <FilterButton /> 
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;