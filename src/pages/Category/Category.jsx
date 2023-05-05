import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../Hook/useTitle';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    console.log(categoryNews)
    useTitle('Home')

    return (
        <div>
            {id && <h2>This is a Category {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news ={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;