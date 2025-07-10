import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'
import uuid from 'react-uuid'

export const Route = createFileRoute('/calculator')({
  component: Calculator,
})

export default function Calculator() {
  
  const [Input, setInput] = useState<number | string>('');
  
  const [Input2, setInput2] = useState<number | string>('');
  
  const [result, setResult] = useState<number>(0);
  
  const [click, setClick] = useState<string>('');

    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    
    const handleChange2 = (event) => {
        setInput2(event.target.value);
      
    };

    const handleSubmit = (event) => {
    event.preventDefault();
  
    if (click === '+') {
      setResult(handleplus());
    } else if (click === '-') {
      setResult(handleminus());
    }
    else if (click === '*') {
      setResult(handlemultiple());
    } else if (click === '/') {
      setResult(handledivide());
    }
    setInput('');
    setInput2('');
    };

    const handleplus = () => {
  return  Number(Input2) + Number(Input);
  };
  const handleminus = () => {
  return  Number(Input) - Number(Input2);

  };
  const handlemultiple = () => {
  return  Number(Input) * Number(Input2);
  };
  const handledivide = () => {
  return  Number(Input) / Number(Input2);
  };

  
    const clickplus = () => {
    setClick('+');
  };
  const clickminus = () => {
    setClick('-');

  };
  const clickmultiple = () => {
    setClick('*');
  };
  const clickdivide = () => {
    setClick('/');
  };


  
  return (<form onSubmit={handleSubmit} className='bg-[#f3f3f3] h-[100vh]'>
    
    <input type="text" value={Input} onChange={handleChange}/>
    
    <input type="text" value={Input2} onChange={handleChange2}/>
    <button type="button" className="w-10 p-10" onClick={clickplus}>+</button>
    <button type="button" className="w-10 p-10" onClick={clickminus}>-</button>
    <button type="button" className = "w-10 p-10" onClick={clickmultiple}>*</button>
    <button type="button" className="w-10 p-10" onClick={clickdivide}>/</button>
    <br />
    <button type="submit">=</button>
    <br />
    <br />
    <div>{result}</div>
    
    
    </form>
  )
};