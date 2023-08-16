var teams = {
  omniA: [
    {
      name: "Far Away",
      singer: "Lacuna",
      info: "개쩌는 곡",
      image: "img/faraway.jpg",
    },
    {
      name: "Realize",
      singer: "SilCagel",
      info: "개쩌는 곡ddddd",
      image: "",
    },
    {
      name: "어느샌가 우리는 매일을 살아왔네",
      singer: "The Polse",
      info: "개쩌는 ddddddd 곡",
      image: "",
    },
  ],
  omniB: [
    {
      name: "HI BULLY",
      singer: "TOUCHED",
      info: "개쩌는 곡",
      image: "",
    },
    {
      name: "ALIVE",
      singer: "TOUCHED",
      info: "개쩌는 곡ddddd",
      image: "",
    },
    {
      name: "좋지 아니한가",
      singer: "유다빈 밴드",
      info: "개쩌는 ddddddd 곡",
      image: "",
    },
  ],
};

function MoveTeamPage(teamName) {
  window.location.href = "omniA.html?team=" + teamName;
}
