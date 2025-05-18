function convertScoreToGrade(score) {
    // your code here
    if (score < 0 || score > 100) return "INVALID SCORE";
    if (score <= 100 && score >= 90) return "A";
    if (score < 90 && score >= 80) return "B";
    if (score < 80 && score >= 70) return "C";
    if (score < 70 && score >= 60) return "D";
    if (score < 60 && score >= 0) return "F";


}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
