

export class CreateTaskDto {
    title: string;
    description?: string;

    constructor(options: CreateTaskDto) {
        this.title = options.title;
        this.description = options.description;
    }
};