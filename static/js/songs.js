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
      name: "어느샌가 우리는 <br> 매일을 살아왔네",
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
  comaA: [
    {
      name: "몸매 remix",
      singer: "Jay Park",
      info: "개쩌는 곡",
      image: "static/img/mommae.jpg",
      nameId: "mommae",
    },
    {
      name: "Toxic",
      singer: "Britney Jean Spears",
      info: "개쩌는 곡ddddd",
      image: "static/img/toxic.jpg",
      nameId: "toxic",
    },
    {
      name: "2NE1 remix",
      singer: "2NE1",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/2ne1.jpg",
      nameId: "twentyone",
    },
    {
      name: "Move",
      singer: "트레져",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/move.jpg",
      nameId: "move",
    },
  ],
  comaB: [
    {
      name: "Privacy / Needed Me",
      singer: "Chris Brown / Rihanna",
      info: "개쩌는 곡",
      image: "static/img/privacy.jpg",
      nameId: "privacy",
    },
    {
      name: "Love Killa",
      singer: "MONSTA X",
      info: "개쩌는 곡ddddd",
      image: "static/img/killa.jpg",
      nameId: "killa",
    },
    {
      name: "kream(Feat.Tyga)",
      singer: "lggy Azalea",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/kream.jpg",
      nameId: "kream",
    },
    {
      name: "HyunA remix",
      singer: "HyunA",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/hyuna.jpg",
      nameId: "hyuna",
    },
  ],
  collaboA: [
    {
      name: "Lovesick Girls",
      singer: "Black Pink",
      info: "개쩌는 곡",
      image: "static/img/lovesick.jpg",
      nameId: "lovesick",
    },
    {
      name: "TOMBOY",
      singer: "(G)-IDLE",
      info: "개쩌는 곡ddddd",
      image: "static/img/tomboy.jpg",
      nameId: "toxic",
    },
    {
      name: "No Celestial",
      singer: "LE SSERAFIM",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/celestial.jpg",
      nameId: "celestial",
    },
  ],
  collaboB: [
    {
      name: "Tell Me",
      singer: "Wonder Girls",
      info: "개쩌는 곡",
      image: "static/img/tellme.jpg",
      nameId: "tellme",
    },
    {
      name: "으르렁",
      singer: "EXO",
      info: "개쩌는 곡ddddd",
      image: "static/img/beast.jpg",
      nameId: "beast",
    },
    {
      name: "뱅뱅뱅",
      singer: "Big Bang",
      info: "개쩌는 ddddddd 곡",
      image: "static/img/bang.jpg",
      nameId: "bang",
    },
  ],
};

function MoveTeamPage(teamName) {
  window.location.href = "teams.html?team=" + teamName;
}
function MoveSongPage(songId) {
  window.location.href = "performer.html?song=" + songId;
}
