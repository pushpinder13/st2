import React,{useState} from 'react'

const AddTodo=({onAddTodo})=> {
    const[txt,settext]=useState("");
    console.log(onAddTodo);
    function handle(e){
      e.preventDefault();
      if (txt.trim()==""){
        return;
      }
      console.log(txt);
        onAddTodo({txt});
        settext("");

    }

  return (
    <form className='s'onClick={handle}>
      <input className='h' type='text' value={txt} placeholder='Write Reviews' onChange={(e)=>settext(e.target.value)}/>
      <button className='com' type='submit'>Comment</button>
  
    </form>
  )
}


export default AddTodo