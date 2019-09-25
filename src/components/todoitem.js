import React from "react"

const TodoItem=(props)=>{
  var todoEntries=props.data;
  var listItems=todoEntries.map(item=>{
      return(
      <div className="todo-item">

      <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => props.handleChange(item.key)}

              />

       {item.edit?<input value={item.text} onChange={(event)=>props.text(item.key,event)} onKeyPress={(event)=>props.set(item.key,event)} type='text' key={item.key}  className={item.completed?'done' : null }/>:<p  key={item.key} className={item.completed?'done' : null } onClick={()=>props.up(item.key)}>{item.text}</p>}



        <button className="destroy" onClick={()=>props.deleted(item.key)}>X</button>
      </div>

     )
   }
 )

  return(
   <div className="mid">
   <input placeholder="enter task"
   onKeyPress={(event)=>props.addItem(event)}/>
   <div >

  {listItems}
   </div>
   </div>
 );
}



export default TodoItem;
