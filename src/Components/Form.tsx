import React, { useState } from 'react'
import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import TodoList from "./TodoList";
import { TDO } from '../Types/data';

const Form = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<TDO[]>([]);

  const changeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const AddTodo = (): void => {
    if (input)
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: input,
          completed: false,
        },
      ]);
    setInput("");
  };

  return (
    <section >
      <FormControl>
        <FormLabel color={'white'} htmlFor='email'>Some Text</FormLabel>
        <Input color={'white'} borderColor={'aqua'} id='email' type='text' value={input} onChange={changeHadler} />
      </FormControl>
      <Button marginTop={15} colorScheme='blue' onClick={AddTodo}>Button</Button>
      <TodoList todos={todos} />
    </section>
  )
}

export default Form