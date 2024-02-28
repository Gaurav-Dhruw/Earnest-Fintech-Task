
export class UpdateTaskDto {
    title?: string;
    description?: string;
    completed?: boolean;

    constructor(options:UpdateTaskDto) {
        this.title = options.title;
        this.description = options.description;
        this.completed = options.completed;
    }
};