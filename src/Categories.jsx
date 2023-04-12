import React from 'react'

const Categories = (props) => {
	const { filterItems, categories } = props

	return (
		<div className="btn-container">
			<button className="filter-btn" onClick={() => filterItems('all')}>
				All
			</button>
			{categories.map(cat => {
                return <button key={cat} className='filter-btn' onClick={() => filterItems(cat)}>
                    {cat}
                </button>
            })}
		</div>
	)
}

export default Categories
