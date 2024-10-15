

import Button from './components/Button/Button';
import { MouseEvent, useState } from 'react';
import Input from './components/Input/Input';

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
		</>
	);
}

export default App;
