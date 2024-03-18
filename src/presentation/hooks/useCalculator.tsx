import { useState, useRef, useEffect  } from 'react';

enum Operators{
    add = '+',
    subtract = '-',
    multiplay = 'x',
    divide =  '/'
}



export const useCalculator = () => { 
     
    const [fomula, setFormula ] = useState('')
    const [number,setNumber]    = useState('0')
    const [previusNumber,setPreviousNumber]= useState('0')

    const lastOperators = useRef<Operators>();
    useEffect(()=>{
        setFormula(number)
        if(lastOperators.current){
            const firstFormulaPart = fomula.split(' ').at(0);
            setFormula(`${ firstFormulaPart} ${lastOperators.current} ${number}`)
        }else{
            setFormula(number)
        }
    },[number])

    useEffect(()=>{
        const subResult = calculateSubResult();
        setPreviousNumber(`${subResult}`)

    },[fomula])






 
    const clean = () =>{
        setNumber('0');
        setPreviousNumber('0');
        lastOperators.current = undefined;
        setFormula('')
    }

    const deleteOperation=()=>{
        let currentSign     = ''
        let temporalNumber  = number;

        if(number.includes('-')){
            currentSign = '-';
            temporalNumber = number.substring(1);
        }
        if(temporalNumber.length > 1){
            return setNumber(currentSign + temporalNumber.slice(0,-1))
        }

        setNumber('0')

    }

    const toggleSign = ()=>{
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-'+number)
    }


    const buildNumber = (numberString:string)=>{
        if(number.includes('.') && numberString === '.')return;
        if(number.startsWith('0') || number.startsWith('-0')){
            if(numberString === '.'){
                return setNumber(number+numberString);
            }
            if(numberString === '0' && number.includes('.')){
                return setNumber(number+numberString);
            }
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            }
            if(numberString === '0' && !number.includes('.')){
                return;
            }
            return setNumber(number + numberString);
        }
        setNumber(number + numberString);
    }

    const setLastNumber = () =>{
        calculateResult();
        if(number.endsWith('.')){
            setPreviousNumber(number.slice(0,-1));
        }else{
            setPreviousNumber(number)
        }
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperators.current = Operators.divide
    }
    const multiplyOperation = () => {
        setLastNumber()
        lastOperators.current = Operators.multiplay
    }
    const subtractOperation = () => {
        setLastNumber()
        lastOperators.current = Operators.subtract
    }

    const addOperation = () => {
        setLastNumber()
        lastOperators.current = Operators.add
    }
    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(result.toString());
        lastOperators.current = undefined;
        setPreviousNumber('0')

    }
    const calculateSubResult=():number=>{
        // const numOne = Number(number);
        // const numTwo = Number(previusNumber);

        const [firstValue, Operation, secondValue] = fomula.split(' ')


        const numOne = Number(firstValue);
        const numTwo = Number(secondValue);

        if(isNaN(numTwo))return  numOne;

        switch( lastOperators.current ){
            case Operators.add:
                return numOne + numTwo;
            case Operators.multiplay:
                return numOne * numTwo;
            case Operators.subtract:
                return numOne - numTwo;
            case Operators.divide:
                return numOne - numTwo;
            default:
                throw new Error('Operation not implement')
        }


    }


    return {
    //properties:
    number,
    previusNumber,
    fomula,
       
    //methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    subtractOperation,
    multiplyOperation,
    addOperation,
    calculateResult


    }
}
