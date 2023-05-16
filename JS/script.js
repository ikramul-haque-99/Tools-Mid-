// function temperatureconverter (F)
// {
    
//     F = parseFloat(F);
//     F = (F - 32.0) / 1.8;
//     F = F.toFixed(2);
//     return F;
// }
// function countzero(S)
// {
//     var cnt = 0
//     var flg = 0;

//     for ( var i = 0;i < S.length; i++)
//     {
//         if(S[i] == '0') cnt = cnt + 1;
//         if(S[i] != '0' && S[i] != '1') flg = 1;

//     }
//     if(flg) return "invalid input";
//     else return cnt;

// }

// console.log(temperatureconverter(103));
// console.log(countzero("10101"));
// console.log(countzero("101401"));


let people = [
  {
    name: "John Doe",
    age: 32,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    age: 27,
    occupation: "Marketing Manager",
  },
  {
    name: "Bob Johnson",
    age: 45,
    occupation: "Accountant",
  },
];

people.filter