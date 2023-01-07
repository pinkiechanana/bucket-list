import React from 'react'
import { Wish } from '../model'
import './styles.css'

interface Props {
  wish: Wish
  wishes: Wish[]
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>
}


const SingleWish = ({ wish, wishes, setWishes }: Props) => {
  return (
    <form className='single-wish'>
      <span className='single-wish-text'>
        {wish.wish}
      </span>
      <div className='icons'>
        <span className='icon'><i className="fa-solid fa-check"></i></span>
        <span className='icon'><i className="fa-solid fa-pen-to-square"></i></span>
        <span className='icon'><i className="fa-solid fa-trash"></i></span>
      </div>
    </form>
  )
}

export default SingleWish