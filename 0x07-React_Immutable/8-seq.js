import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(object);
  let bestStudents = studentsSeq.filter((student) => student.score > 70);
  bestStudents = bestStudents.map((student) => {
    const capStudent = student;
    capStudent.firstName = capStudent.firstName.charAt(0).toUpperCase() + capStudent.firstName.slice(1);
    capStudent.lastName = capStudent.lastName.charAt(0).toUpperCase() + capStudent.lastName.slice(1);
    return capStudent;
  });
  bestStudents = bestStudents.toObject();
  console.log(bestStudents);
}
