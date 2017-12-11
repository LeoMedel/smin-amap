import React from 'react';

class StorePicker extends React.Component
{
	render(){
		return (
			//	commentaire dans REACT = {/*Comment*/}
			<form className="store-selector">
				<h2>Entrez un nom de magasin</h2>
				<input type="text" required placeholder="Nom de magasin"/>
				<button type="submit">Visiter le magasin</button>
			</form>
			
			
			)
	}
}

export default StorePicker;