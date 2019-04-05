//when I click the plus
//rotat the plus sign and add class active to the current clicked item
const openCloseImg = document.querySelectorAll("img.openCloseImage");
const answerContentTag = document.querySelectorAll("p.QandA-answer__content");
const openCloseTag = document.querySelectorAll("img.openClose");

const showAnswer = function() {
  openCloseImg.forEach(img => {
    img.style.transform = "rotate(45deg)";
  });

  answerContentTag.forEach(tag => {
    tag.style.display = "block";
  });
};

// when I click a button toggle showAnswer function

openCloseTag.forEach(tag => {
  tag.addEventListener("click", function() {
    showAnswer();
  });
});


//maybe add add/remove class to toggle behavior
