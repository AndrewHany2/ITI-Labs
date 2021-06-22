let Student = {
  Name: "andrew",
  Age: "25",
  Track: "MEARN stack",
  Courses: ["JS", "DS"],
  Grades: [10, 10, 10, 10],
};
let newStudent = Object.create(Student, {
  Date: { value: new Date().getDate(), name: { value: "JQBook" } },
});
console.table(Student);
console.table(newStudent);
