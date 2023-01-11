import React from 'react'
import { Wish } from '../model'
import SingleWish from './SingleWish';

interface Props {
  wishes: Wish[];
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>
}

const BucketList = ({ wishes, setWishes }: Props) => {
  return (
    <div className='wishes'>
      {wishes.map(wish => (
        <SingleWish wish={wish} key={wish.id} wishes={wishes} setWishes={setWishes}/>
      ))}
    </div>
  )
}

export default BucketList