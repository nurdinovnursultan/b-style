
import React from 'react'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Modal({show, setShow, edit, setEdit}) {

  const catalogId = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.catalogId
  })
    
  const [inputs, setInputs] = useState({
    model: '',
    color: '',
    img: '',
    size: '',
    article: '',
  })

  return (
      <div  className={show ? "modal-on" : "modal-off"}>
          {
            edit == true ?
          
            <div className="modal__content">
              <h4>Модель</h4>
                <input type="text" onChange={(e) => {setInputs({...inputs, model: e.target.value})}}/>
                <h4>Цвет</h4>
                <input type="text"  onChange={(e) => {setInputs({...inputs, color: e.target.value})}}/>
                <h4>Картинка</h4>
                <input type="text"  onChange={(e) => {setInputs({...inputs, img: e.target.value})}}/>
                <h4>размер</h4>
                <input type="text" onChange={(e) => {setInputs({...inputs, size: e.target.value})}} />
                <h4>Артикул</h4>
                <input type="text"  onChange={(e) => {setInputs({...inputs, article: e.target.value})}}/>
                <button onClick={() => console.log(inputs)}>Отправить</button>
              </div>
            :
          
            <div className="modal__content">
              <h4>Модель</h4>
                <input type="text"/>
                <h4>Цвет</h4>
                <input type="text"/>
                <h4>Картинка</h4>
                <input type="text"  />
                <h4>размер</h4>
                <input type="text"/>
                <h4>Артикул</h4>
                <input type="text"/>
                <button>Отправить</button>
              </div>
          }
        < div  className='modal__icon'>
            <IconButton>
              <CloseIcon onClick={() => {setShow(false)}} fontSize='large'/>
            </IconButton>
          </div>
        </div>
  )
};