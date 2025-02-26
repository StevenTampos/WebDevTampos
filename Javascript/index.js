const studentID = [
    {
        Name: "diego",
        IDnum: "101010",
        Year: 2020,
        Grade: 90
    },
    {
        Name: "dora",
        IDnum: "101011",
        Year: 2020,
        Grade: 88
    },
    {
        Name: "matilda",
        IDnum: "101012",
        Year: 2020,
        Grade: 85
    },
    {
        Name: "pio",
        IDnum: "101013",
        Year: 2024,
        Grade: 96
    },
    {
        Name: "ericka",
        IDnum: "101014",
        Year: 2024,
        Grade: 96
    },
    {
        Name: "steven",
        IDnum: "101015",
        Year: 2024,
        Grade: 95
    },
    {
        Name: "kurt",
        IDnum: "101016",
        Year: 2024,
        Grade: 99
    },
    {
        Name: "jarex",
        IDnum: "101017",
        Year: 2024,
        Grade: 100
    },
    {
        Name: "kharl",
        IDnum: "101018",
        Year: 2024,
        Grade: 94
    },
    {
        Name: "dave",
        IDnum: "101019",
        Year: 2024,
        Grade: 93
    }
]

function findHighAndLow (student) {
    let high = student[0]
    let low = student[0];
    for(let i = 1; i < 10; i++) {
        if(student[i].Grade > high.Grade) {
            high = student[i];
        }
        if(student[i].Grade < low.Grade) {
            low = student[i];
        }
    }

    console.log("The student who got the Highest grade:\n", `Name: ${high.Name}\n`, `IDnum: ${high.IDnum}\n`, `Year: ${high.Year}\n`, `Grade: ${high.Grade}`);
    console.log("The student who got the Lowest grade:\n", `Name: ${low.Name}\n`, `IDnum: ${low.IDnum}\n`, `Year: ${low.Year}\n`, `Grade: ${low.Grade}`);
}

findHighAndLow(studentID);