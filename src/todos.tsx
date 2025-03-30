import React, { useState } from 'react';

function Todo() {


    const [Todos,setTodos] = useState('');
    const [Lists,setLists] = useState<string[]>([]);
    
    const onChange = (event) => {
        setTodos(event.target.value);
          };

      const onSubmit = (event) => {
        event.preventDefault();
        setLists([...Lists, Todos]);
        setTodos('');
      }


    return (
        <div className='bg-indigo-50'>
    <form onSubmit={onSubmit} className='bg-indigo-50'>
      <input value={Todos} onChange={onChange} placeholder="할 일 입력" className="border-l-indigo-950 text-5xl to-blue-100 bg-blue-50 text-blue-800"/>
      <button type="submit" onSubmit={onSubmit} className="bg-amber-300 text-amber-700 right-2"> 할 일 추가 </button>
    </form>    

    <textarea />

        <ul className='to-blue-950 text-3xl bg-blue-50'>
            {Lists.map((item) => <li>{item}</li>)}
        </ul>


        </div>
    );
  }
  
  export default Todo;