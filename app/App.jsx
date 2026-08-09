import { useState, useEffect } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("");

	useEffect(() => {
		async function fetchDataTest () {
			try {
				const response = await fetch("https://railwaybackendtestv1-production.up.railway.app/");
				
				if (!response.ok) {
					throw new Error("An error occurred while attempting a fetch request.");
				}

				const data = await response.json();
				console.log(data);
				setMessage(data.message);
			} catch (error) {
				console.error("Fatal error occurred during fetch request: " + error);
			}
		}

		fetchDataTest();
	})

	async function fetchDataFromTestPath () {
		try {
				const response = await fetch("https://railwaybackendtestv1-production.up.railway.app/test");
				
				if (!response.ok) {
					throw new Error("An error occurred while attempting a fetch request.");
				}

				const data = await response.json();
				console.log(data);
				setMessage(data.message);
			} catch (error) {
				console.error("Fatal error occurred during fetch request: " + error);
			}
	}

	async function fetchDataFromUsersPath (id) {
		try {
				const response = await fetch(`https://railwaybackendtestv1-production.up.railway.app/users/${id}`);
				
				if (!response.ok) {
					throw new Error("An error occurred while attempting a fetch request.");
				}

				const data = await response.json();
				console.log(data);
				setMessage(data.message);
			} catch (error) {
				console.error("Fatal error occurred during fetch request: " + error);
			}
	}

  	return (
		<>
			<h1 className='font-bold'>Hi Jason</h1>
			<p>{ message }</p>

			<button onClick={() => fetchDataFromTestPath()}>/test path</button>
			<button onClick={() => fetchDataFromUsersPath(2)}>/users/:id path</button>
		</>
 	)
}

export default App
