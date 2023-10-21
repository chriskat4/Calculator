import React from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNum(e){
        if(num === 0){
            setNum(e.target.value);
        }else{
            setNum(num + e.target.value);
        }
    }

    function clear(e){
        setNum(0);
    }

    function percentage(e){
        setNum(num/100);
    }

    function changeSign(e){
        setNum(num*(-1));
    }

    function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        switch(operator){
            case "/":
                setNum(oldNum/num);
                setOldNum(0);
                setOperator(0);
                break;
            case "+":
                setNum(oldNum+num);
                setOldNum(0);
                setOperator(0);
                break;
            case "-":
                setNum(oldNum-num);
                setOldNum(0);
                setOperator(0);
                break;
            case "x":
                setNum(oldNum*num);
                setOldNum(0);
                setOperator(0);
                break;
        }
    }

  return (
    <>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div className="wrapper">
                <Box m={3}/>
                {oldNum && <h1 className="oldNum">{oldNum}</h1>}
                {oldNum && <h1 className="oldNum">{operator}</h1>}
                <h1 className="resultado">{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={percentage}>%</button>
                <button className='orange' onClick={operatorHandler} value="/">/</button>
                
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value="x">X</button>

                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler } value="-">-</button>

                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value="+">+</button>
                
                <button className='gray' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='gray' style={{visibility: "hidden"}}>=</button>
                <button className='orange' onClick={calculate}>=</button>
            </div>
        </Container>
    </>
    )
}
