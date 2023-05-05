import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInside from '../../pages/News/EditorsInside/EditorsInside';
import EditorInsideNavbar from './EditorInsideNavbar';

const LeftNavbar = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        fetch('https://news-dragons-client-server-yeasinbhuiyan.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, [])
    return (
        <div className='my-5'>
            <h3>All Categori</h3>
            <div>

                {
                    categoris.map(categori =><Link to={`../category/${categori.id}`} className='d-flex text-decoration-none text-black my-3' key={categori.id}>{categori.name}</Link>)
                }
            <EditorInsideNavbar></EditorInsideNavbar>
            </div>
        </div>
    );
};

export default LeftNavbar;