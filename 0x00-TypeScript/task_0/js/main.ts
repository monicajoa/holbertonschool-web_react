interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Monica",
	lastName: "Ortiz",
	age: 27,
	location: "Medellin",
}
const student2: Student = {
	firstName: "Jazmin",
	lastName: "Alvarez",
	age: 27,
	location: "Medellin",
}

const studentsList: Array<Student> = [student1, student2];

// get the reference for the body
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Creates a <table> element and a <tbody> element
const table: HTMLTableElement = document.createElement("table");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

// Creating all cells

studentsList.forEach((student: Student) => {
	const row: HTMLTableRowElement = tableBody.insertRow(0);
	const cellOne: HTMLTableCellElement = row.insertCell(0);
	const cellTwo: HTMLTableCellElement = row.insertCell(1);

	// Assigning the data to the table
	cellOne.innerHTML = student.firstName;
	cellTwo.innerHTML = student.location;
});

table.append(tableBody);
body.append(table);
