import React from 'react'
import { Wish } from '../model'
import './styles.css'

interface Props {
  wish: Wish
  wishes: Wish[]
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>
}


const SingleWish = ({ wish, wishes, setWishes }: Props) => {

  const handleDone = (id: string) => {
    setWishes(wishes.map((wish) =>
      wish.id === id ? { ...wish, isDone: !wish.isDone } : wish)
    )
  }

  const handleEdit = (id: string) => {

  }

  const handleDelete = (id: string) => {
    setWishes(wishes.filter(wish => wish.id !== id))
  }


  return (
    <form className='single-wish'>
      {
        wish.isDone ? (
          <span className='single-wish-text'><del>{wish.wish}</del></span>
        ) : (
          <span className='single-wish-text'>{wish.wish}</span>
        )
      }
      <div className='icons'>
        <span className='icon' onClick={() => handleDone(wish.id)}><i className="fa-solid fa-check"></i></span>
        <span className='icon' onClick={() => handleEdit(wish.id)}><i className="fa-solid fa-pen-to-square"></i></span>
        <span className='icon' onClick={() => handleDelete(wish.id)}><i className="fa-solid fa-trash"></i></span>
      </div>
    </form>
  )
}

export default SingleWish