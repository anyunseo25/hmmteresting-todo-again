import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'
import uuid from 'react-uuid'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  
  const [Input, setInput] = useState<string>('');
  const [items, setItems] = useState<{id: string; name : string; isChecked: boolean;}[]>([]);

  
    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setItems(items => [...items, {id: uuid(), name: Input, isChecked: false}]);
    setInput('');
    };

    const handleButton = (id: string) => {
          setItems(items => items.map((item => 
            item.id === id? {...item, isChecked: true} : item
          )));
        };


  
  return (<form onSubmit={handleSubmit} className='bg-[#f3f3f3] h-[100vh]'>
    <input type="text" value={Input} onChange={handleChange} className="text-[30px] w-[500px] h-[60px]" />
    <button type="submit" className="absolute bg-[#000000] text-[30px] text-[#ffffff] font-[semibold] left-[520px] top-[31.5px]"> 추가 </button>
    <br />
    <br />
    <ul> 
      {items.map((item) =>
    <li key={uuid()} className={`text-[20px]
     ${item.isChecked ? "line-through text-[#777777]" : "font-semibold text-[#000000]"}`} > {item.name}   <button className={`font-semibold text-[20px]
     ${item.isChecked ? "bg-[#444444] text-[#777777] line-through" : " bg-[#000000] text-[#ffffff]"}`} onClick={() => handleButton(item.id)}>완료</button> </li>)}
    </ul>
    <br />
    
    
    </form>
  )
};