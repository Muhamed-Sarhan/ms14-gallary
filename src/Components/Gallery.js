import React, { useState } from 'react';
import data from '../Services/data';
import '../Styles/galleryStyle.css';
import close from '../Svg/close.svg';

const { images } = data;

const Gallery = () => {
	const [imgs, setImgs] = useState(images);
	const [model, setModel] = useState(false);
	const [imgTemp, setImgTemp] = useState('');
	const [visible, setVisible] = useState(10);

	const getImage = (imgSrc) => {
		setImgTemp(imgSrc);
		setModel(true);
	};
	const loadMore = () => {
		setVisible(visible + 8);
	};
	return (
		<>
			<div className={model ? 'model open' : 'model'}>
				<img src={imgTemp} className='gImg' />
				<img
					src={close}
					width={32}
					className='close'
					onClick={() => setModel(!model)}
				/>
			</div>
			<div className='gallery'>
				{imgs.slice(0, visible).map((img) => {
					return (
						<div
							className='pics'
							key={img.id}
							onClick={() => getImage(img.imgSrc)}>
							<img src={img.imgSrc} />
						</div>
					);
				})}
			</div>
			{visible < imgs.length && (
				<button onClick={loadMore} type='button' className='load-more'>
					Show More
				</button>
			)}
		</>
	);
};

export default Gallery;
