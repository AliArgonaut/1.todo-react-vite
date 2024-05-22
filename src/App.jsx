import Todo from "./components/Todo.jsx"
import Form from "./components/Form.jsx"
import FilterButton from "./components/FilterButton.jsx"

function App  (props) {
  
  const taskList = props.tasks?.map((task) => (
    <Todo id={task.id} name ={task.name} completed={task.completed} key={task.id}/>
  )); 
  
  function addTask(name){
    alert(name)
  }

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