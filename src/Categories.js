import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <FilterButton key={index} buttonName={ category } filterItems={ filterItems } category={ category }   />
        )
      })}
    </div>
  )
};


const FilterButton = ({ buttonName, filterItems, category }) => {
  return (
    <button type="button" className="filter-btn" onClick={() => filterItems(category)}>
      { buttonName }
    </button>
  )
}
export default Categories;
