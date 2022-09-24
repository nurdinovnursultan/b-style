import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const Modal = ({ close, path }) => {
    const countries = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.countries
    })

    const catalog = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.catalog
    })

    const modalData = [
        {
            path: '/catalog',
            data: [
                <input type="text" name="model" placeholder="Введите модель" />,
                <input type="text" name="color" placeholder="Введите цвет" />,
                <input type="number" name="size_from" placeholder="Введите размер от" />,
                <input type="number" name="size_to" placeholder="Введите размер до" />,
                <input type="text" name="articul" placeholder="Введите артикул" />
            ]
        }, {
            path: '/sales-workers',
            data: [
                <select name="catalog">
                    {
                        catalog.map(item => <option key={item.id} value={item.id}>{item.model}</option>)
                    }
                </select>,
                <input type="number" name="pairs_shoes" placeholder="Введите количество пар" />,
                <input type="number" name="price" placeholder="Введите цену" />
            ]
        }, {
            path: '/semifinished',
            data: [
                <input type="text" name="title" placeholder="Введите название" />,
                <input type="number" name="quantity" placeholder="Введите количество" />,
                <select name="country">
                    {
                        countries.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
                    }
                </select>
            ]
        }, {
            path: '/stock',
            data: [
                <input type="number" name="quantity" placeholder="Введите количество" />,
                <input type="date" name="date" />,
                <select name="catalog">
                    {
                        catalog.map(item => <option key={item.id} value={item.id}>{item.model}</option>)
                    }
                </select>
            ]
        }, {
            path: '/employees',
            data: [
                <input type="text" name="full_name" placeholder="Введите ФИО" />,
                <input type="number" name="phone" placeholder="Введите телефон" />,
                <input type="email" name="email" placeholder="Введите почту" />,
                <input type="date" name="date_joined" placeholder="Введите дату" />
            ]
        }
    ]

    let currentModalData = modalData.filter(item => item.path === path)

    return (
        <div className="modal">
            <div className="modal__body">
                {
                    currentModalData[0].map((item, index) => <div key={index}>{item}</div>)
                }
                <button>Отправить</button>
            </div>
            <div className='modal__close'>
                <IconButton onClick={() => close(false)}>
                    <CloseIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
};

export default Modal;