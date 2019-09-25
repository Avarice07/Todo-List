import React,{Component} from 'react';
import TodoItem from './components/todoitem'
import Header from './components/header'
import Footer from './components/footer'



class App extends Component{
    state={
      items:[],
      clone:[],

    }


  addItem=(e)=>{
   if (e.charCode === 13){
   if(e.target.value !== ""){
     var newItem={
       text:e.target.value,
       key:Date.now(),
       completed:false,
       edit:false

      };

     this.setState((prevState)=>{
       return{
         items:prevState.items.concat(newItem),
         clone:prevState.items.concat(newItem)
       };
     });
   }
   e.target.value="";
   e.preventDefault();
  }
}

handleChange=(key)=> {
       this.setState(prevState => {
           const updatedTodos = prevState.items.map(item => {
               if (item.key === key) {
                  item.completed = !item.completed
               }
               return item
           })
           return {
               items: updatedTodos
           }

       })

}

deleteItems =(key)=>{
   var filteredItems=this.state.items.filter((item)=>{
     return (item.key != key)
   });
   this.setState({
     items:filteredItems,
     clone:filteredItems
   });
}
updatedTodos=(key)=>{
  const items = this.state.items;
     items.map(item=>{
       if(item.key===key){
         item.edit = !item.edit;
       }
     })
     this.setState({
       items: items,
     })
   }

   changeText=(key,e)=>{
     const items = this.state.items;
        items.map(item=>{
          if(item.key===key){
            item.text = e.target.value;
            item.edit = true;

          }
        })
        this.setState({
          items: items
        })
  }

setUpdate=(key,e)=>{
  const items = this.state.items;
     items.map(item=>{
       if(item.key===key){
         item.edit = !item.edit;
       }
     })
if (e.charCode === 13){
     this.setState({
       items: items
     })
   }
}

searchAll = () => {
   const list = this.state.items
   this.setState({
       clone: list
   })
 }

displayIncomplete = () => {
    const list = this.state.items.filter(item=>item.completed==false)
    this.setState({
        clone: list
    })
  }

displayCompleted = () => {
    const list = this.state.items.filter(item=>item.completed)
    this.setState({
        clone: list
    })
  }

  clearAll=()=>{
    this.setState({
      items:[],
      clone:[]
    })
  }


  render(){

  return (
    <div>

    <Header />

    <div className="todo-list">


       <TodoItem data={this.state.clone}
                handleChange={this.handleChange}
                deleted={this.deleteItems}
                addItem={this.addItem}
                set={this.setUpdate}
                up={this.updatedTodos}
                text={this.changeText}
              />

       <Footer
        data={this.state.clone}
        searchAll={this.searchAll}
        displayIncomplete={this.displayIncomplete}
        displayCompleted={this.displayCompleted}
        clearAll={this.clearAll}/>


      </div>
    </div>
  );
 }
}

export default App;
