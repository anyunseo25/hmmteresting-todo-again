import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'
import uuid from 'react-uuid'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  
  const [Input, setInput] = useState<string>('');
  const [items, setItems] = useState<{id : string; name : string; isChecked: boolean;}[]>([]);
  
    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setItems(items => [...items, {id: uuid(), name: Input, isChecked: false}]);
    setInput('');
    };

    const handleButton = (event) => {
        event.preventDefault();
    };


  
  return (<form onSubmit={handleSubmit}>
    <input type="text" value={Input} onChange={handleChange} />
    <button type="submit" className="bg-[#fff3f3]"> 추가 </button>
    <br />
    <br />
    <ul> 
      {items.map((item) =>
    <li key={uuid()} className={`font-semibold 
     ${item.isChecked ? "line-through text-[#444444]" : "text-[#00AAFF]"}`} > {item.name} <button className="bg-[#fff3f3]" onClick={handleButton}>완료</button> </li>)}
    </ul>
    <br />
    
    
    </form>
  )
};