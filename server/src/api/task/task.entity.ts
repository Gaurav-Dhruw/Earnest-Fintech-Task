
export class Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;

    constructor(options: Task) {
        this.id = options.id;
        this.title = options.title;
        this.description = options.description;
        this.completed = options.completed;
    }
}