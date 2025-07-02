import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  
  const [Input, setInput] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [id, setId] = useState(0);
  
    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, Input]);
    setId(id);
    setInput('');
  };
  const handleDelete = (event) => {
    event.preventDefault();
    setItems([]);
    setId(0);
  }
  
  
  return (<form onSubmit={handleSubmit}>
    <input type="text" value={Input} onChange={handleChange} />
    <button type="submit" className="bg-[#fff3f3]"> 추가 </button>
    <br />
    <br />
    <ul>
      {items.map((Input) =>
    <li key={id}> {Input} <button onChange={handleDelete} className="bg-[#fff3f3]">삭제</button> </li>)}
    </ul>
    <br />
    
    
    </form>
  )
};