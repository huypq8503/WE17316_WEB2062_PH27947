const sinhvien = {
    name:['Phạm Quang Huy1','Phạm Văn Huy2','Phạm Mạnh Huy3','Nguyễn Quang Huy4'],
    age : 20,
    location: 'Hà Nội',
    subjects1: ['Java','PHP','JS','C#','TypeScript'],
    subjects2: ['C','CPP','Kotlin','Golang'],
    //tạo phương thức
    order: function (starterIndex, mainIndex) {
        return [this.subjects1[starterIndex], 
        this.subjects2[mainIndex]];
    },
};

const arr = [1,2,3,4,5,6,7,8,9,10,11];
const a = arr[0];
const b = arr[9];
const [x,y,z] = arr;
console.log(x,y,z);
console.log(a);
console.log(arr[2]);

const [first, ,second] = sinhvien.name;
console.log(first, second);
// const [f,v] = sinhvien.name;
// console.log(f, v);

let [main, secondary] = sinhvien.name;
console.log(main, secondary);

//không phá hủy cấu trúc
//tạo 1 biến
// const temp = main;
// main = secondary;
// secondary = temp;
////////////

[main, secondary] = [secondary,main];
console.log(main, secondary);


// nhận 2 values trả về từ 1 function
const [starter, main1] = sinhvien.order(0,0)
console.log(starter, main1);

// 2 mảng lồng nhau
// nested destructuring
const nested = [2,4 ,[6,7]]
// const [u,n,h] = nested;
// phá hủy cấu trúc lồng nhau
const [u, ,[n,k]] = nested;
console.log(u,n);

// Default values (giá trị mặc định)
// const [p,o,i] = [2,3];

// 2 3 undefined
const [p=1,o=1,i=1] = [2,3];
console.log(p,o,i);
// 2 3 1



function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var tmp = bar();
x = tmp.x, y = tmp.y, z = tmp.z;

console.log(x, y, z); // 4 5 6

const [a1, b1, c1] = [1, 2, 3, 4, 5]
console.log(a1, b1, c1); // 1, 2, 3

const [a2, b2, ...c2] = [1, 2, 3, 4, 5]
console.log(a2, b2, c2) ; //1, 2, [3, 4, 5]

const {a3, b3} = {a: 1, b: 2};
console.log(a3, b3);// 1, 2

// add c 

const {a4, b4, c4} = {a: 1, b: 2, c: () => 3}
console.log(a4, b4, c4)// 1, 2, () => 3

// add ...c

const {a5, b5, ...c5} = {a: 1, b: 2, c: () => 3, d: 4}
console.log(a5, b5, c5)// 1, 2, { c: () => 3, d: 4}

const game = {
    team1 : 'Bayern Munich',
    team2 : 'Borrussia Dortmund',
    players : [
        [
            'Neuer',
            'Pavard',
            'Alaba',
            'Davies',
        ],
        [
            'Hakimi',
            'Hazard',
            'Sanchor',
            'Gotze',
        ]
    ],
    score: '2:1',
    scored : ['Alaba', 'Pavard', 'Hakimi'],
    date : 'Nov 9th, 2017',
    adds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const {
    odds: { team1, x: draw, team2},
}= game;
console.log(team1, draw,team2);


const rest = new Map();
rest.set('name', 'Classico');
rest.set(1,'Firezen, Italy');
console.log(rest.set(2,'Lisbon, Portugal'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startesWith('_Delayed')} ?
    `
}
//  ${getCode(from)} ${getCode(to)}