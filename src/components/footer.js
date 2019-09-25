import React from "react"

const Footer=(props)=>{
  var todo=props.data;

  return(
<div className="footer">

<p>{todo.length-todo.filter(item=>item.completed).length} {todo.length>1?"items":"item"} left</p>
<ul>
 <li className="select" onClick={()=>props.searchAll()}><a href="#todo-item">All</a></li>
 <li className="select" onClick={()=>props.displayIncomplete()}><a href="#todo-item">Active</a></li>
 <li className="select" onClick={()=>props.displayCompleted()}><a href="#todo-item">Completed</a></li>
</ul>

<button className={todo.filter(item=>item.completed).length?'':'nothing'} onClick={()=>props.clearAll()}>Clear All</button>

  </div>
);

}

export default Footer;
