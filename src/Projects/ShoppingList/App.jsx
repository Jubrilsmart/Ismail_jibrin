import React, { useState } from 'react'
import { FaCheck, FaDeleteLeft, FaPlus, FaXmark } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems, setBoughtTrue } from "../../Projects/ShoppingList/listSlice";
import InputForm from '../../Projects/ShoppingList/InputForm';
import { setInputState } from './inputSlice';
import ConfirmPopup from '../../Projects/ShoppingList/ConfirmPopup';
import { setConfirm } from '../../Projects/ShoppingList/confirmSlice'
import Return from '../../components/Return';


function App() {
  const itemList = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
      dispatch(deleteItems(selectedId))
  };
  const handleBought = () => {
      dispatch(setBoughtTrue(selectedId));
      setSelectedId([])
  };

  const inputState = useSelector((state) => state.inputToggle.toggled);
  const confirmState = useSelector((state) => state.confirm.opened);
  const [selectedId, setSelectedId] = useState([]);


  return (
    <div className='absolute inset-0 bg-light dark:bg-dark dark:text-light'>
      <Return />
      {inputState && <InputForm />}
      {confirmState && <ConfirmPopup />}
      <div className='max-w-4xl mx-auto'>
        {/* header */}
        <div className='mt-20'>
          <h1 className='text-4xl text-center font-serif mb-2'>Items List</h1>
        </div>

        {/* hidden buttons */}
        {selectedId.length > 0 && <div className=' w-fit mx-auto'>
          <button className='py-1 px-2 bg-red-500 m-1 rounded-sm hover:cursor-pointer'
          onClick={() => handleDeleteItem(selectedId)}
          >
            <FaDeleteLeft className='inline-block mr-2'/>
            delete
          </button>
          <button className='py-1 px-2 bg-green-800 m-1 rounded-sm hover:cursor-pointer'
          onClick={() => handleBought(selectedId)}>
            <FaCheck className='inline-block mr-2'/>
            Mark/Unmark
          </button>
        </div>}

        {/* Item header */}
        <div className='mx-5 h-[50vh] overflow-scroll no-scrollbar mb-10 mt-3'>
          <div className='grid grid-cols-[1fr_4fr_4fr] text-2xl sticky top-0 bg-blue-600 py-2'>
              <span></span>
              <span>Item</span>
              <span>Quantity</span>
          </div>
          {/* Items */}
          <div className=''>
            {itemList.length > 0 && itemList.map((item) => (
            <div key={item.id} className='odd:bg-dark/10 even:bg-white/10'>
              <div className={`grid grid-cols-[1fr_4fr_4fr] py-1 space-y-4 text-xl pt-6
                ${item.bought ? "bg-green- line-through" : ''}`}>
                <input type="checkbox" name="" id="" 
                className=''
                checked={selectedId.includes(item.id)}
                onChange={() => {
                  if (selectedId.includes(item.id)) {
                    setSelectedId(selectedId.filter(id => id !== item.id))
                  }else {
                    setSelectedId([...selectedId, item.id])
                  }
                }}
                />
                <span className='px-2'>{item.title}</span>
                <span className='px-2'>{item.quantity}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='flex justify-around pb-10'>
          <button className='py-2 px-4 text-xl border-2 border-dark dark:border-light rounded-md hover:cursor-pointer hover:scale-90'
          onClick={() => dispatch(setInputState(true))}
          >
            <FaPlus className='inline-block mr-2'/>
            Add Item
          </button>
          <button className='py-2 px-4 text-xl bg-red-700 rounded-md text-white hover:cursor-pointer hover:scale-90'
          onClick={() => dispatch(setConfirm(true))}>
            <FaXmark className='inline-block mr-2'/>
            Clear List
          </button>
        </div>
      </div>
    </div>
  )
}

export default App