import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Dishes = ({handleCook}) => {
    const [dishes, setDishes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data=> setDishes(data))
    },[]);
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                dishes.map((dish, idx)=> <Recipe  handleCook={handleCook} key={idx} dish={dish}></Recipe>)
            }
        </div>
    );
};

Dishes.propTypes = {
    handleCook: PropTypes.any,
};

export default Dishes;