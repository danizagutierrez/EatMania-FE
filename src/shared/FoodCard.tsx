import { FC } from 'react';
import type { FoodItem } from '../store/slices/food';
import { ReactComponent as AddOrder } from '../assets/icons/AddOrder.svg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FoodCardProps {
    food: FoodItem;
    addReview: (id: number) => void;
}

export const FoodCard: FC<FoodCardProps> = ({ food, addReview }) => {
    return (
        <div className="box " style={{ position: 'relative' }}>
            <div className="img-box">
                <img src={food.image} alt="" />
            </div>
            <div className="detail-box">
                <h5>{food.foodName}</h5>
                <h5>{food.rating} &#9733;</h5> 
                <p>{food.description}</p>
                <p>${food.foodPrice}</p>
                <p className="order">
                    <button>
                    <a href="https://www.ubereats.com/ca/store/the-parlour-restaurant-vancouver/N5AgcXpATxmyBZ8xJhtZEg?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">
                    UberEats
                    </a>
                        <AddOrder />
                    </button>
                    <button>
                    <a href="https://www.doordash.com/store/the-parlour-vancouver-31098/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiVGhlIFBhcmxvdXIgUmVzdGF1cmFudCIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJwYXJsb3VyIHJlc3RhdXJhbnQiLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTQ0XSwiaXNfc2libGluZyI6ZmFsc2UsImZvcmNlX3N0b3JlX2F2YWlsYWJpbGl0eV92MiI6ZmFsc2UsImJ1bmRsZV9nbG9iYWxfc2VhcmNoX2NvbnRleHQiOm51bGx9&pickup=false" target="_blank" rel="noopener noreferrer">
                    DoorDash
                    </a>
                        <AddOrder />
                    </button>
                </p>
            </div>
            <Button
                onClick={() => {
                    addReview(food.foodId);
                }}
                style={{
                    width: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: '5px',
                    top: '5px'
                }}
                variant="success"
            >
                Review&nbsp;
                <FontAwesomeIcon icon={faStar} />
            </Button>
        </div>
    );
};
