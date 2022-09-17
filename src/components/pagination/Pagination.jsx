import React, { useState } from 'react';

const Pagination = ({ total, perPage }) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pages.push(i)
    }

    const [btn, setBtn] = useState(1)

    return (
        <div className="pagination">
            {
                pages.map((item, index) => <button key={index}
                    className={btn === item ? 'current-btn' : 'default-btn'}
                    onClick={() => {
                        setBtn(item)
                        window.scrollTo(0, 0)
                    }}>
                    {item}
                </button>)
            }
        </div>
    );
};

export default Pagination;