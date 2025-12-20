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
    getTaskCount() {
        const total = this.tasks.length; // Общее количество задач
        const completed = this.getCompletedTasks().length; // Количество выполненных
        const pending = this.getPendingTasks().length; // Количество невыполненных
        return { total, completed, pending }; // Возвращаем статистику
    }
}

const myTodo = new TodoList("Мои задачи");

// Добавляем задачи
myTodo.addTask("Купить молоко");
myTodo.addTask("Сделать домашку");
myTodo.addTask("Позвонить маме");

// Отмечаем одну задачу как выполненную
myTodo.completeTask(1);

// Получаем статистику
console.log(myTodo.getTaskCount());
// { total: 3, completed: 1, pending: 2 }

// Смотрим невыполненные задачи
console.log(myTodo.getPendingTasks());

// Удаляем одну задачу
myTodo.deleteTask(2);

// Проверяем оставшиеся задачи
console.log(myTodo.getAllTasks());