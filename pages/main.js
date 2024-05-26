// Seção Call for Papers
const callForPapersHeader = document.getElementById("call-for-papers-header");
const callForPapersContent = document.getElementById("call-for-papers-content");

callForPapersHeader.addEventListener("click", () => {
    callForPapersContent.style.display = callForPapersContent.style.display === "block" ? "none" : "block";
});
