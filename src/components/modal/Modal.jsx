import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Modal = ({ close, path }) => {
    const [inputs, setInputs] = useState({})

    const handleInputs = (e) => {
        let newObject = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInputs(newObject)
    }

    const countries = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.countries
    })

    const catalog = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.catalog
    })

    const employees = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.workers
    })

    const modalData = [
        {
            path: '/catalog',
            data: [
                <input type="text" name="model" placeholder="Введите модель" onChange={handleInputs} />,
                <input type="text" name="color" placeholder="Введите цвет" onChange={handleInputs} />,
                <input type="number" name="size_from" placeholder="Введите размер от" onChange={handleInputs} />,
                <input type="number" name="size_to" placeholder="Введите размер до" onChange={handleInputs} />,
            ]
        }, {
            path: '/sales',
            data: [
                <select name="worker" onChange={handleInputs}>
                    {
                        employees.length ? (
                            employees.map(item => <option key={item.id} value={item.id}>{item.full_name}</option>)
                        ) : null
                    }
                </select>,
                <select name="catalog" onChange={handleInputs}>
                    {
                        catalog.length ? (
                            catalog.map(item => <option key={item.id} value={item.id}>{item.model}</option>)
                        ) : null
                    }
                </select>,
                <input type="number" name="pairs_shoes" placeholder="Введите количество пар" onChange={handleInputs} />,
                <input type="number" name="price" placeholder="Введите цену" onChange={handleInputs} />
            ]
        }, {
            path: '/semifinished',
            data: [
                <input type="text" name="title" placeholder="Введите название" onChange={handleInputs} />,
                <input type="number" name="quantity" placeholder="Введите количество" onChange={handleInputs} />,
                <select name="country" onChange={handleInputs}>
                    {
                        countries.length ? (
                            countries.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
                        ) : null
                    }
                </select>
            ]
        }, {
            path: '/stock',
            data: [
                <input type="number" name="quantity" placeholder="Введите количество" onChange={handleInputs} />,
                <input type="date" name="date" onChange={handleInputs} />,
                <select name="catalog" onChange={handleInputs}>
                    {
                        catalog.length ? (
                            catalog.map(item => <option key={item.id} value={item.id}>{item.model}</option>)
                        ) : null
                    }
                </select>
            ]
        }, {
            path: '/employees',
            data: [
                <input type="text" name="full_name" placeholder="Введите ФИО" onChange={handleInputs} />,
                <input type="text" name="phone" placeholder="Введите телефон" onChange={handleInputs} />,
                <input type="email" name="email" placeholder="Введите почту" onChange={handleInputs} />,
                <input type="text" name="job_title" placeholder="Введите должность" onChange={handleInputs} />,
                <input type="date" name="date_joined" placeholder="Введите дату" onChange={handleInputs} />
            ]
        }
    ]

    let currentModalData = modalData.filter(item => item.path === path)

    return (
        <div className="modal">
            <div className="modal__body">
                <form onSubmit={console.log(inputs)}>
                    {
                        currentModalData[0].data.map((item, index) => <div key={index}>{item}</div>)
                    }
                    <button>Отправить</button>
                </form>
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