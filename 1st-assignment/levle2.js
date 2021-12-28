//1차 세미나 Level 2 과제
//조원들을 소개 할 수 있는 json Array 만들기
const MyTeam = {
    members : [
        {name : "이제준", place: "개봉역", age: "20", hobby: "쉬기"},
        {name : "장서현", place: "신도림역", age: "23", hobby: "영화보기"},
        {name : "권세훈", place: "역곡역", age: "23", hobby: "코딩"},
        {name : "김영권", place: "부천시청역", age: "25", hobby: "강의듣기"}
    ],

    PrintMembers: function () {
        console.log("팀원 소개를 시작합니다.");
        this.members.forEach(member => {
            console.log(`${member.name}은 ${member.place}에 거주하고 ${member.age}살이며 취미는 ${member.hobby}입니다~~`);
        });
    },
};
MyTeam.PrintMembers();