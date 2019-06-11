const listItem = document.querySelectorAll("li.faq-list__item");

listItem.forEach(listItem => {
  const opener = listItem.querySelector("img.opener");

  opener.addEventListener("click", function() {
    listItem.classList.toggle("open");
  });
});
