import './App.css';

function App() {
	class Ninja {
		constructor(name) {
			this.name = name;
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
			return `${this.name} drinks Sake and her health increases from ${this.health} to ${this.health}`;
		}
	}

	class Sensei extends Ninja {
		constructor(name) {
			super(name);
			this.wisdom = 10;
			this.wiseMessage =
				'You are only as wise as the effort you put into learn.';
		}
		speakWisdom() {
			return `${this.drinkSake()}. ${this.name} says: "${this.wiseMessage}"`;
		}
	}

	const sacha = new Ninja();
	const moira = new Sensei('Moira Rinn');

	return (
		<div className='App'>
			<h3>{sacha.sayName('Sacha Moira Rinn')}</h3>
			<p>{sacha.showStats()}</p>
			<p>{sacha.drinkSake()}</p>
			<h3>{moira.name}</h3>
			<p>{moira.speakWisdom()}</p>
		</div>
	);
}

export default App;
