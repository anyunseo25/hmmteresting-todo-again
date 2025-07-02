import { createFileRoute } from '@tanstack/react-router'
import {DispatchWithoutAction, useState} from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  
  const [Input, setInput] = useState('');
  const [count, setCount] = useState(0);

  const [items, setItems] = useState<string[]>([]);
  
    const handleChange = (event) => {
      setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, Input]);
    setCount(count + 1);
    setInput('');
  };

type listProps = {  Input: string[]; count:number;
};

const List : React.FC<listProps> = ({ Input }) => { return (<div>{Input}</div>) }

  
  
  return (<form onSubmit={handleSubmit}>
    <input type="text" value={Input} onChange={handleChange} />
    <button type="submit" className="bg-[#fff3f3]"> 어쩌고 저쩌고 </button>
    <br />
    <br />
  <div>
    <List Input={items} count={count} />
    <br />
  </div>
    
    
    </form>
  )
};