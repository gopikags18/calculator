const displayData= (arg)=>
{
    numbers.value +=arg;
}

const clearValue=()=>{
    numbers.value = " ";
}



const delLastValue=()=>{

numbers.value = numbers.value.slice(0,-1)
}

const callResult = () =>{
    numbers.value = eval(numbers.value)
}