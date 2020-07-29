import React, { useContext } from 'react';
import { PlantContext } from '../contexts/PlantContext';


// Components
import Plant from './Plant';

const PlantList = () => {
	const { plants } = useContext(PlantContext)
	return (
		<div className="products-container">
			{plants.map(plant => (
				<Plant
					key={plant.id}
					plant={plant}
				/>
			))}
		</div>
	);
};

export default PlantList