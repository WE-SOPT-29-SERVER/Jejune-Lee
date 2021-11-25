const members = require("./members")["members"];

// 1. YB, OB 나누기
let YB = [];
let OB = [];

members.forEach(member => {
    if (member.group === 'YB') {
        YB.push(member.name);
    } else {
        OB.push(member.name);
    }
});


//YB, OB 섞기
function shuffle(array) { array.sort(() => Math.random() - 0.5); } // 구글링 
shuffle(YB);
shuffle(OB);

//조 편성
const memberNum = Math.floor(Math.random()*4) + 2; // 랜덤(구글링)

let groups = new Array();
const groupNum = Math.round(members.length / memberNum);

for (let i = 0; i < groupNum; i++) {
    groups[i] = new Array();
  }

for (let i=0; i<OB.length; i++) {
    groups[i%groupNum].push(OB[i]);
}

for (let i=0; i<YB.length; i++) {
    groups[(i+(OB.length % groupNum)) % groupNum].push(YB[i]);
}
console.log(groups);