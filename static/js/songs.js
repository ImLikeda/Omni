var teams = {
  omniA: [
    {
      name: "Far Away",
      singer: "Lacuna",
      info: "개쩌는 곡",
      image: "static/img/faraway.jpg",
      nameId: "faraway",
    },
    {
      name: "Realize",
      singer: "SilCagel",
      info: "개쩌는 곡ddddd",
      image: "static/img/realize.jpg",
      nameId: "realize",
    },
    {
      name: "어느샌가 우리는 매일을 살아왔네",
      singer: "The Polse",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/everyday.jpg",
      nameId: "everyday",
    },
  ],
  omniB: [
    {
      name: "HI BULLY",
      singer: "TOUCHED",
      info: "개쩌는 곡",
      image: "static/img/touched.jpg",
      nameId: "hibully",
    },
    {
      name: "ALIVE",
      singer: "TOUCHED",
      info: "개쩌는 곡ddddd",
      image: "static/img/touched.jpg",
      nameId: "alive",
    },
    {
      name: "좋지 아니한가",
      singer: "유다빈 밴드",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/anyway.jpg",
      nameId: "anyway",
    },
  ],
};

function MoveTeamPage(teamName) {
  window.location.href = "teams.html?team=" + teamName;
}
function MoveSongPage(songId) {
  window.location.href = "performer.html?song=" + songId;
}
