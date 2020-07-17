score = prompt("Enter your marks: ")



    switch(true) {
      case (score <= 100 && score > 90):
         gscore = 'A+';
          break;
 
      case (score <= 90 && score > 80):
         gscore = 'A';
          break;
      case (score <= 80 && score > 70):
          gscore = 'B+';
           break;
      case (score <= 70 && score > 60):
          gscore = 'B';
           break;
      case (score <= 60 && score > 50):
          gscore = 'C';
           break;
      case (score <= 50 && score >= 40):
          gscore = 'D';
          break;
      case (score < 40  && score >= 0):
          gscore = 'Fail';
          break;
      case (score > 100 && score < 0):
          gscore = 'INVALID SCORE';
          break; 
  
      default:
        gscore = 'INVALID SCORE';
    }
    
    console.log(`Marks are ${score} and the grade is ` + gscore);