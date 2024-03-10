const downloadResumeLink = document.getElementById("downloadResumeLink");
const downloadResumeButton = document.getElementById("downloadResumeButton");
downloadResumeButton.addEventListener("click", function() {
  downloadResumeLink.click();
});
downloadResumeLink.style.display = "none";
downloadResumeButton.style.display = "block";