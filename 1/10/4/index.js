const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

function giveJobToStudent(student, jobName) {
  const studentWithWork = Object.assign(student, { job: jobName });
  alert(
    `Поздравляем! У студента ${studentWithWork.fullName} появилась новая работа! Теперь он ${studentWithWork.job}.`
  );
  return studentWithWork;
}
