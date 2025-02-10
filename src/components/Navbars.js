import React from 'react';

function Navbars() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-orange-600">AIChef</div>
        <ul className="flex space-x-6">
          <li><a href="#filters" className="hover:text-orange-600">Filters</a></li>
          <li><a href="#dietary" className="hover:text-orange-600">Dietary</a></li>
          <li><a href="#recipes" className="hover:text-orange-600">Recipes</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbars;