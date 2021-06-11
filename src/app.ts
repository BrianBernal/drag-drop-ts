import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput(); // configure the form with its handler
new ProjectList('active'); // render the active list
new ProjectList('finished'); // render the finished list

