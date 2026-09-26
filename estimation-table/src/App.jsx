import { useState } from 'react'
import './App.css'
const roleRates={
  developer:600,
  designer:800,
  tester:500,
  manager:500,
  teamLead:700
};
function App(){
  const [tasks,setTasks]=useState([])
  function addTask(){
    const newTask={
      id:crypto.randomUUID(),
      name:"",
      role:"",
      hours:"",
    }
    setTasks((prev)=>[...prev,newTask]);

  }
  function updateTask(taskId,field,value){
    setTasks((prev) =>{
      return prev.map((task)=>{
        if(task.id===taskId){
          return{
            ...task,
            [field]:value
          };
        }
        return task;
      });
    });
  }
  function deleteTask(taskId){
    setTasks((prev)=>{
      return prev.filter((task)=>task.id!==taskId)
    });
  }
  const totalHours=tasks.reduce((total,task)=>{
    return total+Number(task.hours||0);
  },0);
  const totalCost=tasks.reduce((total,task)=>{
    const rate=roleRates[task.role]||0;
    const cost=Number(task.hours||0)*rate;
    return total+cost
  },0);
  return(
    <div className='app'>
      <h1>Estimation Table</h1>

      <button onClick={addTask}>AddTask</button>

      <p>Total Tasks:{tasks.length}</p>
      <p>Total Hours:{totalHours}</p>
      <p>Total Cost:{totalCost}</p>
      {tasks.length===0&&(
        <p>no tasks added yet.</p>
      )}
      {tasks.length>0 && (
        <div className="table-header">
          <span>Task Name</span>
          <span>Hours</span>
          <span>role</span>
          <span>Action</span>
          <span>Cost</span>
          </div>
      )}

      {tasks.map((task,index)=>(
        <div className="task-row" key={task.id}  index={index}>
          <input  type="text"
                  //value={task.name}
                  placeholder="task name"
                  onChange={(event)=>{
                    updateTask(
                      task.id,
                      "name",
                      event.target.value
                    )

                     
          }}
          />
        
          <input 
              type="number"
              placeholder="hours"
             // value={task.hours}
              onChange={(event) =>
                updateTask(
                  task.id,
                  "hours",
                  event.target.value
                )
              }
              />

         <select
           value={task.role}
           onChange={(event)=>
            updateTask(task.id,"role",event.target.value)

           }
         >
          <option value="">Select Role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="tester">Tester</option>
          <option value="manager">Manager</option>
          <option value="TeamLead">TeamLead</option>
         </select>
         <p>Rate:{task.role? roleRates[task.role]:"_"}</p>  
         <p>Cost:{" "}
          {task.hours&&task.role ? Number(task.hours)*roleRates[task.role]:"_"}

         </p>
         <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div> 
      ))}
    </div>
)}


export default App;