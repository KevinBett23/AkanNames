let dayValue;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

const calculateDay = () => {
  year = document.getElementById("year").value;
  const CC = parseInt(year.substring(0, 2));
  const YY = parseInt(year.substring(2, 4));
  const MM = parseInt(document.getElementById("month").value);
  const DD = parseInt(document.getElementById("date").value);
  const d = Math.round(((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * (MM+1)/10)) + DD )%7
  console.log(d);
  return d;
};

const getGender = () => {
  const male = document.getElementById("male");
  const female = document.getElementById("female"); 
  if (male.checked){
      if (dayValue == 0) {
          alert(
            "You were born on " +
              days[0] +
              " and Your akan name is " +
              maleNames[0] +
              "!"
          );
        } else if (dayValue == 1) {
          alert(
            "You were born on " +
              days[1] +
              " and Your akan name is " +
              maleNames[1] +
              "!"
          );
        } else if (dayValue == 2) {
          alert(
            "You were born on " +
              days[2] +
              " and Your akan name is " +
              maleNames[2] +
              "!"
          );
        } else if (dayValue == 3) {
          alert(
            "You were born on " +
              days[3] +
              " and Your akan name is " +
              maleNames[3] +
              "!"
          );
        } else if (dayValue == 4) {
          alert(
            "You were born on " +
              days[4] +
              " and Your akan name is " +
              maleNames[4] +
              "!"
          );
        } else if (dayValue == 5) {
          alert(
            "You were born on " +
              days[5] +
              " and Your akan name is " +
              maleNames[5] +
              "!"
          );
        } else if (dayValue == 6) {
          alert(
            "You were born on " +
              days[6] +
              " and Your akan name is " +
              maleNames[6] +
              "!"
          );
        }
  }
