const shareScoreBtn = document.getElementById("shareScoreBtn");
const sharePopup = document.getElementById("shareScorePopup");

shareScoreBtn.addEventListener("click", () => {
  console.log("cliqué");
  sharePopup.classList.add("active");
});
