function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
        if (score < 0 || score > 100) return "INVALID SCORE";

    if (score <= 100 && score >= 98) return "A+";
    if (score < 98 && score > 92) return "A";
    if (score <= 92 && score >= 90) return "A-";

    if (score < 90 && score >= 88) return "B+";
    if (score < 88 && score > 82) return "B";
    if (score <= 82 && score >= 80) return "B-";


    if (score < 80 && score >= 78) return "C+";
    if (score < 78 && score > 72) return "C";
    if (score <= 72 && score >= 70) return "C-";


    if (score < 70 && score >= 68) return "D+";
    if (score < 68 && score > 62) return "D";
    if (score <= 62 && score >= 60) return "D-";


    if (score < 60 && score >= 0) return "F";
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
