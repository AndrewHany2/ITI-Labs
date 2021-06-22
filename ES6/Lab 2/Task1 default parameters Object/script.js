function course(obj) {
  var defaultObj = {
    courseName: "ES6",
    courseDuration: "3days",
    courseOwner: "JavaScript",
  };
  var courseInfo = Object.assign({}, defaultObj, obj);
  for (const key in courseInfo) {
    if (
      key !== "courseName" &&
      key !== "courseDuration" &&
      key !== "courseOwner"
    ) {
      throw "parameter not allowed";
    }
  }
  return `courseName=${courseInfo.courseName} courseDuration=${courseInfo.courseDuration} courseOwner=${courseInfo.courseOwner}`;
}
obj = {
  courseName: "asd",
  // courseData: "As",
};
console.log(course(obj));
