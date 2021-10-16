import './App.css';
import Gallery from './Components/Gallery';
import ms14 from './Svg/ms14.svg';

function App() {
	return (
		<div className='app'>
			<div className='header'>
				<span>MS14</span>
				<img src={ms14} width={40} />
			</div>
			<Gallery />
		</div>
	);
}

export default App;
