import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  
  const [Input, setInput] = useState('');
  const [items, setItems] = useState<{id : number, name : string; }[]>([]);
  const [id, setId] = useState(0);
  
    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, {id: id, name: Input}]);
    setInput('');
    setId(id + 1);
    };
  
  return (<form onSubmit={handleSubmit}>
    <input type="text" value={Input} onChange={handleChange} />
    <button type="submit" className="bg-[#fff3f3]"> 추가 </button>
    <br />
    <br />
    <ul>
      {items.map((item) =>
    <li key={item.id}> {item.name} <button className="bg-[#fff3f3]" onClick={() => { setItems(
                items.filter(a =>
                  a.id !== item.id
                )
              );}
            }>완료</button> </li>)}
    </ul>
    <br />
    
    
    </form>
  )
};