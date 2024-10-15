

import Button from './components/Button/Button';
import { MouseEvent, useState } from 'react';

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
		</>
	);
}

export default App;
