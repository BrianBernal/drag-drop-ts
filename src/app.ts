/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

    new ProjectInput(); // configure the form with its handler
    new ProjectList('active'); // render the active list
    new ProjectList('finished'); // render the finished list

}
