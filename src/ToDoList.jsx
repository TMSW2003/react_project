import React, {useState} from 'react';
function ToDoList(){
   const [tasks, setTasks] = useState(["apple","fruit"]);
   const [newtask, setNewtask] = useState("");
   
   function handleInputChange(event){
      setNewtask(event.target.value);

   }
   function addTask(){
      if(newtask.trim() !== ""){
         setTasks(t => [...tasks, newtask]);
         setNewtask("");
      }
      
   }
   function deleteTask(index){
      const updatedtasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedtasks);
   }
   function moveTaskUp(index){
      if (index > 0){
         const updatedtasks = [...tasks];
         [updatedtasks[index], updatedtasks[index - 1]] = 
         [updatedtasks[index -1], updatedtasks[index]]
         setTasks(updatedtasks);
      }
      
   }
   function moveTaskDown(index){
      if (index < tasks.length - 1){
         const updatedtasks = [...tasks];
         [updatedtasks[index], updatedtasks[index + 1]] = 
         [updatedtasks[index + 1], updatedtasks[index]]
         setTasks(updatedtasks);
      }
      
   }

   
   return(<div className = "to-do-list">
      <h1>To-Do-List</h1>
      <input type = "text" 
      placeholder='Enter task...' 
      value={newtask}
      onChange={handleInputChange}/>
      <button className = 'add-button' onClick={addTask}>Add Task</button>
      

      <ol>{
         tasks.map((task,index)=><li key = {index}>
                                    <span className='text'>{task}</span>
                                    <button className = 'delete-task' onClick={()=>deleteTask(index)}>Delete</button>
                                    <button className = 'move-button'onClick={()=>moveTaskUp(index)}>up</button>
                                    <button className = 'move-button' onClick={()=>moveTaskDown(index)}>down</button>
                                 </li>)}
      </ol></div>);
}
export default ToDoList