class TodoList {
    constructor(name) {
        this.tasks = []; // Массив задач
        this.name = name; // Название списка задач
        this.nextId = 1;  // Уникальный ID для задач
    }

    addTask(description) {
        const task = {
            id: this.nextId++, // Присваиваем уникальный ID
            description: description,
            completed: false, // Задача считается невыполненной
            createdAt: new Date().toISOString() // Время создания в ISO формате
        };
        this.tasks.push(task); // Добавляем задачу в массив
    }
 completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true; // Отмечаем задачу как выполненную
        } else {
            console.log(`Задача с ID ${taskId} не найдена.`);
        }
    }
    
    getAllTasks() {
        return this.tasks; // Возвращаем все задачи
    }

    getCompletedTasks() {
        return this.tasks.filter(t => t.completed); // Возвращаем выполненные задачи
    }

    getPendingTasks() {
        return this.tasks.filter(t => !t.completed); // Возвращаем невыполненные задачи
    }
