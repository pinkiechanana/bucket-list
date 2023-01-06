import React from 'react'
import { Wish } from '../model'
import "./styles.css"

interface Props {
  wishes: Wish[];
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>
}

const BucketList = ({ wishes, setWishes }: Props) => {
  return (
    <div className='wishes'>
      {wishes.map(wish => (
        <li>{wish.wish}</li>
      ))}
    </div>
  )
}

export default BucketList