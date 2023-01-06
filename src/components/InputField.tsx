import { useRef } from 'react';
import './styles.css'

interface Props {
  wish: string;
  setWish: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ wish, setWish, handleAdd }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
      <input
        type='input'
        ref={inputRef}
        value={wish}
        onChange={
          (e) => setWish(e.target.value)
        }
        placeholder='Enter a task' className='input-box' />
      <button className='submit-btn' type='submit'>Go</button>
    </form>
  )
}

export default InputField;