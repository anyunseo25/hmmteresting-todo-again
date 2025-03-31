import React, { useState } from 'react';
import { parseAst } from 'vite';

function Calculator() {
  const [num1, setNum1] = useState(0.0);
  const [num2, setNum2] = useState(0.0);
  const [result, setResult] = useState(0);
  
  const onChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(parseFloat(event.target.value));
  }
  const onChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(parseFloat(event.target.value));
  }


  const onClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setResult(num1 + num2);
  }

  const onClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setResult(num1 - num2);
  }

  // 여기서부터 작성하세요!

  return (
    <div>
      <input
        type="number"
        step="0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
        value={num1}
        placeholder="첫 번째 숫자"
        className='text-blue-500 border-zinc-950 bg-blue-100'
        onChange={onChange1}
      />
      <input
        type="number"
        step="0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
        value={num2}
        placeholder="두 번째 숫자"
        className='text-blue-500 border-zinc-950 bg-blue-100 right-0.5'
        onChange={onChange2}
      />
      <div>
        <button onClick={onClick1} className='text-blue-500 border-zinc-950 bg-blue-100' >더하기</button>
        <button onClick={onClick2} className='text-blue-500 border-zinc-950 bg-blue-100' >빼기</button>
      </div>
      <p>결과: {result}</p>
    </div>
  );
}

export default Calculator;