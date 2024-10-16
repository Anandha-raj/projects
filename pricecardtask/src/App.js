import './App.css';
import Card from './Card';

function App() {
	const freeCardData = {
		type: "FREE",
		price: 0,
		users: "Single User",
	}
	const plusCardData = {
		type: "PLUS",
		price: 9,
		users: "5 Users"
	}
	const proCardData = {
		type: "PRO",
		price: 49,
		users: "Unlimited Users"
	}
	return (
		<div className="container bg-primary bg-gradient mt-3">
			<div className="row" style={{justifyContent: "center"}}>
				<Card data={freeCardData}/>
				<Card data={plusCardData}/>
				<Card data={proCardData}/>
			</div>
		</div>
	);
}

export default App;
