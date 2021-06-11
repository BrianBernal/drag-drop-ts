namespace App {
    export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        // abstract: not allows instantiate directly. Instead, only can bu used as extends
            templateElement: HTMLTemplateElement;
            hostElement: T;
            element: U;
    
            constructor(
                templateId: string, 
                hostElementId: string,
                insertAtStart: boolean,
                newElementId?: string
            ) {
                this.templateElement = document.getElementById(templateId) as HTMLTemplateElement;
                this.hostElement = document.getElementById(hostElementId) as T;
                const importedNode = document.importNode(this.templateElement.content, true);
                this.element = importedNode.firstElementChild as U;
                if(newElementId) {
                    this.element.id = newElementId;
                }
                this.attach(insertAtStart);
            }
            
            private attach(insertAtBehinning: boolean) {
                this.hostElement.insertAdjacentElement(
                    insertAtBehinning ? 'afterbegin' : 'beforeend', 
                    this.element
                );
            }
    
            abstract configure(): void;
            abstract renderContent(): void;
            // abstract methods indicates that any class which extends this Component
            // must have a configure and renderContend method. COOL
        }    
}