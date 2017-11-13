
interface TodoDataSource {
    todos: TodoTask[];
}

class TodoTask {

    public taskName: string;

    constructor(name: string) {
     this.taskName = name;
    }

}

export { TodoTask, TodoDataSource };