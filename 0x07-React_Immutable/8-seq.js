import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(object);
  const bestStudents = studentsSeq.filter(student => student.score > 70);
  bestStudents = bestStudents.map(student => {
    const capStudent = student;
    capStudent.firstName = capStudent.firstName[0].toUpperCase() + capStudent.firstName.slice(1);
    capStudent.lastName = capStudent.lastName[0].toUpperCase() + capStudent.lastName.slice(1);
    return capStudent;
  });
  bestStudents = bestStudents.toObject();
  console.log(bestStudents);
}
