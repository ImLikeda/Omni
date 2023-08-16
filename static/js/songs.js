var teams = {
  omniA: [
    {
      name: "Far Away",
      singer: "Lacuna",
      info: "개쩌는 곡",
      image: "img/faraway.jpg",
      nameId: "faraway",
    },
    {
      name: "Realize",
      singer: "SilCagel",
      info: "개쩌는 곡ddddd",
      image: "",
      nameId: "faraway",
    },
    {
      name: "어느샌가 우리는 매일을 살아왔네",
      singer: "The Polse",
      info: "개쩌는 ddddddd 곡",
      image: "",
      nameId: "faraway",
    },
  ],
  omniB: [
    {
      name: "HI BULLY",
      singer: "TOUCHED",
      info: "개쩌는 곡",
      image: "",
      nameId: "faraway",
    },
    {
      name: "ALIVE",
      singer: "TOUCHED",
      info: "개쩌는 곡ddddd",
      image: "",
      nameId: "faraway",
    },
    {
      name: "좋지 아니한가",
      singer: "유다빈 밴드",
      info: "개쩌는 ddddddd 곡",
      image: "",
      nameId: "faraway",
    },
  ],
};

function MoveTeamPage(teamName) {
  window.location.href = "omniA.html?team=" + teamName;
}
function MoveSongPage(songId) {
  window.location.href = "jocianihangaTeam.html?song=" + songId;
}
