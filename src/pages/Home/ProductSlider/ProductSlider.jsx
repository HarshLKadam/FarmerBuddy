import React from 'react';
import { Link } from 'react-router-dom';  
import p1 from '../../../assets/p1.jpeg';

const ProductSlider = () => {
  return (
    <div className="trending-product  mt-4 flex pl-[100px] md:flex-wrap md:mt-0 ">
        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Onion" />
            <p className="text-center text-black py-2 font-medium">Onion</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Grocery" />
            <p className="text-center text-black py-2 font-medium">Grocery</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>

        <div className="item w-[150px] border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 mb-2 mr-2">
          <Link className="block no-underline" to="/">
            <img className="w-full h-28 object-cover rounded-t-lg" src={p1} alt="Tommato" />
            <p className="text-center text-black py-2 font-medium">Tommato</p>
          </Link>
        </div>
    </div>
  );
};

export default ProductSlider;
