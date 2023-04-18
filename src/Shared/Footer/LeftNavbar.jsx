import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, [])
    return (
        <div className='my-5'>
            <h3>All Categori</h3>
            <div>

                {
                    categoris.map(categori =><Link to={`categori/${categori.id}`} className='d-flex text-decoration-none text-black my-3' key={categori.id}>{categori.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;