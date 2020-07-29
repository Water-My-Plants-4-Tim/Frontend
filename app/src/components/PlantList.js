import React, { useContext } from 'react';
import { PlantContext } from './Dashboard';


// Components
import Plant from './Plant';

const PlantList = () => {
	const { plants } = useContext(PlantContext)
    console.log("PlantList -> plants", plants)
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