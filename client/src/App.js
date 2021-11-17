import './App.css';

function App() {
	class Ninja {
		constructor() {
			this.name = '';
			this.health = 100;
			this.speed = 3;
			this.strength = 3;
		}
		sayName(name) {
			this.name = name;
			return this.name;
		}
		showStats() {
			return `${this.name}'s Stats:
			Health: ${this.health}
			Speed: ${this.speed}
			Strength: ${this.strength}`;
		}
		drinkSake() {
			this.health += 10;
			return this.health;
		}
	}

	const sacha = new Ninja();

	return (
		<div className='App'>
			<h3>{sacha.sayName('Sacha Moira Rinn')}</h3>
			<p>{sacha.showStats()}</p>
			<p>
				{sacha.name} drinks Sake and her health increases from {sacha.health} to{' '}
				{sacha.drinkSake()}
			</p>
		</div>
	);
}

export default App;
