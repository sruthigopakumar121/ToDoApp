import React,{useState} from 'react'

function List() {
    const [text, setText] = useState('');
    const [item,setItem] = useState([]);
    const inputhandler=(event)=>{
     setText(event.target.value);
    }
    const Addhandler=()=>{
       
     if( text!==""){
        setItem((data)=>{
            return[...data,text];
        });
        setText("");
     }
       
       
    };
    const Deletehandler = (index)=>{
        setItem((data) => {
           return data.filter((arr,ind) => {
               return ind !== index ;
           });
       });
       setText("");
    }
    return (
        <div>
            <input type="text" value={text} onChange={inputhandler}></input>
                &nbsp;
                <button class="btn" type ="submit" onClick={Addhandler} > Add </button>
                <div>

                   {
                       item.map((val,index)=>{
                           return(
                               <div>
                                   <br/>
                                   <li  key ={index} onClick={(e)=>e.target.style.setProperty("text-decoration", "line-through 3px red")} text={val}> {val} 
                                   &nbsp;
                                   <button type="submit"  class="btn" onClick={() => Deletehandler(index)}> Delete</button> </li>
                                   
                               </div>
                           );
                   })
                   }
                </div>
        </div>
    )
}

export default List
