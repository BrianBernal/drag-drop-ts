// Drag & Drop Interfaces

/**
 * Se puede poner cualquier cosa dentro de un namespace.
 * Clases, funciones ....
 */
namespace App {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }

    export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
}

