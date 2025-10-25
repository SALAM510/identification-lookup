let persons = [
  {
    name: "John Wick",
    DOB: "10-05-1990",
    age: 35,
    state: "Canada",
    occupation: "Software Developer",
  },
  {
    name: "Alex Paul",
    DOB: "20-03-1985",
    age: 40,
    state: "Australia",
    occupation: "Doctor",
  },

  {
    name: "Jane Smith",
    DOB: "22-09-1995",
    age: 30,
    state: "United States",
    occupation: "Graphic Designer",
  },
  {
    name: "Tom Cruise",
    DOB: "09-05-2000",
    age: 25,
    state: "United Kingdom",
    occupation: "Pharmacist",
  },
  {
    name: "Alex Morgan",
    DOB: "02-06-1980",
    age: 55,
    state: "United States",
    occupation: "Lawyer",
  },
];

document.getElementById("submitbtn").addEventListener("click", () => {
  let inputname = document.getElementById("inputname").value;
  let person = persons.find((p) => p.name.toLowerCase() === inputname.toLowerCase()
  );

  if (person) {
    document.getElementById("name").innerHTML = `${person.name}`;
    document.getElementById("DOB").innerHTML = `${person.DOB}`;
    document.getElementById("age").innerHTML = `${person.age}`;
    document.getElementById("state").innerHTML = `${person.state}`;
    document.getElementById("Occupation").innerHTML = `${person.occupation}`;
  } else {
    document.getElementById("name").innerHTML = `Name not found`;
    document.getElementById("dob").innerHTML = `Date Of Birth Not Found`;
    document.getElementById("age").innerHTML = `Age Not Found`;
    document.getElementById("state").innerHTML = `State Not Found`;
    document.getElementById("occupation").innerHTML = `Occupation Not Found`;
  }
});
