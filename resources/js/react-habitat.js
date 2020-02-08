import "babel-polyfill"; // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat from "react-habitat";
import { homepage, story, interview, settings } from "./Pages";
import BackendQuestions from "./Backend/Questions";
import BackendUsers from "./Backend/Users";

class App extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container
        const containerBuilder = new ReactHabitat.ContainerBuilder();

        //Register our components that we want to expose to the DOM

        containerBuilder.register(homepage).as("homepage");
        containerBuilder.register(story).as("story");
        containerBuilder.register(interview).as("interview");
        containerBuilder.register(settings).as("settings");

        // backend
        containerBuilder.register(BackendQuestions).as("backend_questions");
        containerBuilder.register(BackendUsers).as("users");

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
