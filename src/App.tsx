import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Wish } from './model';
import { v4 as uuidv4 } from 'uuid';
import BucketList from './components/BucketList';


const App: React.FC = () => {
  const [wish, setWish] = useState<string>("");
  const [wishes, setWishes] = useState<Wish[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (wish) { // checking if there is anything inside the 'wish' state
      setWishes([...wishes, { id: uuidv4(), wish, isDone: false }])
      setWish("");
    }
  }

  console.log(wish)
  console.log(wishes)

  return (
    <div className='App'>
      <span className='heading'>Chanana's Bucket List</span>
      <InputField wish={wish} setWish={setWish} handleAdd={handleAdd} />
      <BucketList wishes={wishes} setWishes={setWishes}/>
    </div>
  )
}

export default App;
