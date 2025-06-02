
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// 3. Add them to an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table and render student first name and location
const table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

// Optional: add a table header
const headerRow = table.insertRow();
const th1 = document.createElement("th");
const th2 = document.createElement("th");
th1.textContent = "First Name";
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);

// Append student data
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);
