import { useEffect, useState } from "react"
import { getImages } from "../helpers/getImages"


let size = 3;
const Cards = () => {

	const [images, setImages] = useState(getImages(size));
	const [selected, setSelected] = useState ([]);
	const [opened, setOpened] = useState ([]);

	console.log('selected', selected);
	console.log('opened', opened);


	const handleClick = (item) =>{
		if (selected.length < 2) {
		setSelected(selected => selected.concat(item))
	}
};

	useEffect(() => {
		if(selected.length === 2){
			if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
				setOpened(opened => opened.concat(selected))
			}	
			setTimeout(()=> setSelected([]), 500);
		}
	}, [selected]);

	useEffect(() => {
		if(opened.length === images.length){ 
			 size = size + 2;
			 clearArrays();
			 setImages(getImages(size));
		}
	}, [opened]);

	const clearArrays = () => {
		setSelected([]);
		setOpened([]);
	}



	let include = false;
	return (
		<div className="cards">
			<h2>Score : 100</h2>
			<ul>
			{
				images.map((item, index) => (
					<li key={index} onClick={()=> handleClick(item)}>
						<div className="content">
							{include = selected.includes(item) || opened.includes(item)}

							<div className={`front ${include?'flip-front': ''}`}>
								<img src="../images/question.png" alt= "icon" />
							</div>
							<div className={`back ${include?'flip-back' : ''}`}>
								<img src={item.split('|')[1]} alt= "" />
							</div>
						</div>
					</li>

				))
			}

			</ul>
		
		</div>

	)
}

export default Cards