import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput(); // configure the form with its handler
new ProjectList('active'); // render the active list
new ProjectList('finished'); // render the finished list
