interface DirectorInterface = {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface DirectorInterface = {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }

  getToWork(): string {
    return `Getting a coffee break`;
  }

  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }

  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks(): string {
    return `Getting to work`;
  }
}


function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
  return new Director();
  }


function isDirector(employee: Teacher | Director) {
    if (typeof employee === Director) {
      return employee instanceof Director();
  }

function executeWork(employee: Teacher | Director) {
    if (typeof employee == Director) {
      return employee.workDirectorTasks();
    } else if (typeof employee === Teacher) {
      return employee.workTeacherTasks();
    }
  }
