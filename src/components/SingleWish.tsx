import React, { useState } from 'react'
import { Wish } from '../model'
import './styles.css'

interface Props {
  wish: Wish
  wishes: Wish[]
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>
}

const SingleWish = ({ wish, wishes, setWishes }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editWish, setEditWish] = useState<string>(wish.wish);

  const handleDone = (id: string) => {
    setWishes(wishes.map((wish) =>
      wish.id === id ? { ...wish, isDone: !wish.isDone } : wish)
    )
  }

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    setWishes(wishes.map((wish) => (
      wish.id === id ? { ...wish, wish: editWish } : wish ))
      );
      setEdit(false);
  };

  const handleDelete = (id: string) => {
    setWishes(wishes.filter(wish => wish.id !== id))
  }


  return (
    <form className='single-wish' onSubmit={(e) => handleEdit(e, wish.id)}>
      {edit ? (
        <input value={editWish} onChange={(e) => setEditWish(e.target.value)} className="edit-input"></input>
      ) : wish.isDone ? (
        <span className='single-wish-text'><del>{wish.wish}</del></span>
      ) : (
        <span className='single-wish-text'>{wish.wish}</span>
      )}

      <div className='icons'>
        <span className='icon' onClick={() => handleDone(wish.id)}><i className="fa-solid fa-check"></i></span>
        <span className='icon' onClick={() => {
          if (!edit && !wish.isDone) {
            setEdit(!edit)
          }
        }}>
          <i className="fa-solid fa-pen-to-square"></i></span>
        <span className='icon' onClick={() => handleDelete(wish.id)}><i className="fa-solid fa-trash"></i></span>
      </div>
    </form>
  )
}

export default SingleWish