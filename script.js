function classifyGrade() {
  // Get the input value
  const gradeInput = document.getElementById("grade");
  const grade = parseFloat(gradeInput.value);

  // Hide all result divs and error message
  const gradeDivs = ["A", "B", "C", "D", "F"];
  gradeDivs.forEach((divId) => {
    document.getElementById(divId).classList.add("hidden");
  });
  document.getElementById("error").classList.add("hidden");

  // Validate the input
  if (isNaN(grade) || grade < 0 || grade > 100) {
    document.getElementById("error").classList.remove("hidden");
    return;
  }

  // Perform the grade classification
  let result = "";
  if (grade >= 90 && grade <= 100) {
    result = "A";
  } else if (grade >= 80 && grade < 90) {
    result = "B";
  } else if (grade >= 70 && grade < 80) {
    result = "C";
  } else if (grade >= 60 && grade < 70) {
    result = "D";
  } else {
    result = "F";
  }

  // Display the result
  document.getElementById(result).classList.remove("hidden");
}
