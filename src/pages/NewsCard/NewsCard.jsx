import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
// import Rating from 'react-rating';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    
    useTitle('Category')
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />


                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark><FaShareAlt></FaShareAlt>
                </div>


            </Card.Header>
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}<Link to={`/news/${_id}`}>
                        ...read more

                    </Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">

                <div className='flex-grow-1 d-flex'>
                    {/* <Rating  placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}>
                 
                        
                       
                    </Rating> */}
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating?.number || 0)}
                            readOnly />

                            
                        <span className='ms-'>{rating?.number}</span>
                    </div>


           
                <div>
                    <FaEye></FaEye> <span className='me-1'>{total_view}</span>

                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;