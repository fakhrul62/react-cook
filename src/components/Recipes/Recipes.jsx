import React, { useState } from 'react';
import Dishes from './Dishes';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2'

const Recipes = () => {
    const [cook, setCook] = useState([]);
    const [wannaCook, setWannaCook] = useState([]);
    
    const handleCook = cookSingle =>{
        const isExist = cook.find((item)=> item.id == cookSingle.id);
        if(!isExist && !wannaCook.includes(cookSingle)){
            const newCook = [...cook, cookSingle];
            setCook(newCook);
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Hold On",
                text: "It's already there bro!",
                footer: 'Check again before you click'
              });
        }
    }

    const handleWannaCook = wantToCook =>{
        if(!wannaCook.includes(wantToCook)){
            const newWannaCook = [...wannaCook, wantToCook];
            setWannaCook(newWannaCook);
            const newCook= cook.filter((item)=> item.id !== wantToCook.id);
            setCook(newCook);
            
        }
    }


    
    
    
    

    return (
        <div className="w-10/12 mx-auto my-10">
            <div className='text-center w-9/12 mx-auto'>
                <h2 className='font-bold text-3xl'>Our Recipes</h2>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='grid grid-cols-[65%_35%] mt-10 gap-5'>
                <Dishes handleCook={handleCook}></Dishes>
                <Sidebar cook={cook} wannaCook={wannaCook} handleWannaCook={handleWannaCook}></Sidebar>
            </div>
        </div>
    );
};


export default Recipes;