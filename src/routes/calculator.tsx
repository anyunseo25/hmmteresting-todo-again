import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'
import uuid from 'react-uuid'

export const Route = createFileRoute('/calculator')({
  component: Calculator,
})

export default function Calculator() {
  
  const [Input, setInput] = useState<number>(0);
  const [numbers, setNumbers] = useState<{id: string; num: number;}[]>([]);
  
    const handleChange = (event) => {
        setInput(event.target.value);
      
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    setNumbers(numbers =>  [...numbers, {id: uuid(), num: Input}]);
    setInput(Number(null));
    };

    const handleplus = (num: number) => {
      const plus = Number(Input) + Number(num);
      setInput(plus);
  };
  const handleminus = (num: number) => {
    const minus = - Number(Input) + Number(num);
    setInput(minus);

  };
  const handlemultiple = (num: number) => {const multiple = Number(Input) * Number(num);
      setInput(multiple);
  };
  const handledivide = (num: number) => {
      const divide =  Number(num) / Number(Input);
      setInput(divide);
  };

    const handleButton = (id: string) => {
          setNumbers(numbers => numbers.filter((n => n.id !== id)));
        };


  
  return (<form onSubmit={handleSubmit} className='bg-[#f3f3f3] h-[100vh]'>
    <input type="text" value={Input} onChange={handleChange} className="text-[30px] w-[500px] h-[60px]" />
   {numbers.map((number) => <div key = {number.id}><button onClick={() => {handleplus(number.num)}} className="absolute bg-[#000000] text-[30px] text-[#ffffff] font-[semibold] left-[520px] top-[31.5px]">. + .</button>
    
    <button onClick={() => {handleminus(number.num)}} className="absolute bg-[#000000] text-[30px] text-[#ffffff] font-[semibold] left-[600px] top-[31.5px]">. - .</button>
    
    <button onClick={() => {handlemultiple(number.num)}} className="absolute bg-[#000000] text-[30px] text-[#ffffff] font-[semibold] left-[680px] top-[31.5px]">. * .</button>
    
    <button onClick={() => {handledivide(number.num)}} className="absolute bg-[#000000] text-[30px] text-[#ffffff] font-[semibold] left-[760px] top-[31.5px]">. / .</button>
    </div>)}
    <br />
    <br />
    <ul> 
      {numbers.map((number) =>
    <li key={number.id} > {number.num} <button className="font-semibold text-[20px] bg-[#000000] text-[#ffffff]" onClick={() => handleButton(number.id)}>삭제</button> </li>)}
    </ul>
    <br />
    
    
    </form>
  )
};