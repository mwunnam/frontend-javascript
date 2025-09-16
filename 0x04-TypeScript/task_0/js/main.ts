interface Student = {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1 : Student = {
    firstName : "Michael",
    lastName: "Wunnam",
    age: 23,
    location: "Winneba",
};

const student2 : Student = {
    firstName: "Gideon",
    lastName: "Sugri",
    age: 25,
    location: "Winneba",
};

const studentsList: Student[] = [student1, student2];


const table = document.createElement("table");
table.border = "1" 

studentsList.forEach((student) => {
  const row = document.createElement("td"); 
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});


document.body.appendChild(table);
