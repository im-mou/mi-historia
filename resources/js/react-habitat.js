import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat         from 'react-habitat';
import Editor               from './components/editor';
import BackendQuestions		from './components/backend/questions';
import BackendUsers		from './components/backend/users';
import Questions		from './components/questions';
import ContarHistoria		from './components/pages/contarHistoria';
import MiHistoria		from './components/pages/miHistoria';
import MisDatos		from './components/pages/misDatos';

class App extends ReactHabitat.Bootstrapper {

	constructor() {

		super();

		// Create a new container
		const containerBuilder = new ReactHabitat.ContainerBuilder();

		// Register our components that we want to expose to the DOM
		containerBuilder.register(Editor).as('editor');
		containerBuilder.register(BackendQuestions).as('backend_questions');
		containerBuilder.register(BackendUsers).as('users');
		containerBuilder.register(Questions).as('questions');
		containerBuilder.register(ContarHistoria).as('contar-historia');
		containerBuilder.register(MiHistoria).as('mi-historia');
		containerBuilder.register(MisDatos).as('mis-datos');

		// Set the DOM container
		this.setContainer(containerBuilder.build());

	}
}

// Create a single instance of our app
const instance = new App();

// Bind the update method onto the window for the dynamic demo
// Alternatively we could have imported this file into another
// eg
//
// import App from './App';
//
// App.update();
//
window.updateHabitat = instance.update.bind(instance);

// Export the instance
export default instance;