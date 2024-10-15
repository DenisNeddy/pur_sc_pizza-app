

import Button from './components/Button/Button';
import { MouseEvent, useState } from 'react';
import Input from './components/Input/Input';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';

function App() {
  
	const [counter, setCounter] = useState<number>(0);
	console.log(counter);

	const addCounter = (event: MouseEvent) => {
		setCounter(2);
    

		console.log(event);

	};


	return (
		<>
			<Button onClick={addCounter}>Кнопочка</Button>
			<Button onClick={addCounter} appearence='big'>Кнопочка 2</Button>
			<Input placeholder='Email'/>
			<div>
				<a href='/'>Меню</a>
				<a href='/cart'>Козина</a>
			</div>
			<Routes>
				<Route  path='/' element={<Menu />} />
				<Route  path='/cart' element={<Cart />} />
				<Route  path='*' element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
