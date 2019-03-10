
let courseNumber = 0;

/*const courses = document.querySelector(".course")
let currentCourse = 0 */

let courseTitle = document.querySelector("h3.mobile-course-title");
let courseImage = document.querySelector("img.mobile-course-image");
let courseDescription = document.querySelector("p.mobile-course-description");
let linkOne = document.querySelector("a.mobile-course-link-more");
let linkTwo = document.querySelector("a.mobile-course-link-direct");

//previous and next tags
const nextTag = document.querySelector("img.next-tag");
const prevTag = document.querySelector("img.prev-tag");

const courses = [
  {
    title: 'Sumarbúðir',
    image: 'images/sumarbudir.jpg',
    content: "Fyrir börn á aldrinum 8 - 13 ára. Komdu inn í heim sagna og ævintýra og upplifðu söguna á eigin skinni. Tjaldaðu með okkur í fallega græna dalnum okkar í heila viku og lifðu og leiktu þér undir þaki heimsins, kveiktu varðeld, eldaðu mat og taktu þátt í frábæru ævintýri.",
    linkMore: "sumarbudir",
    linkDirect: "#"
  },
  {
    title: "Sirkus",
    image: "images/sirkus.jpg",
    content: "Lærðu að leika sirkuslistir í fellegu umhverfi Lækjarbotna undir berum himmni. Á námskeiðinu verður farið í undirstöðuatriðinn í sirkus. Komdu með og upplifðu að takast á við hið ótrúlega á fallegum stað.",
    linkMore: "sirkus",
    linkDirect: "#"
  },
  {
    title: "Leikdagar",
    image: "images/leikdagur.jpg",
    content: "Leikur fyrir alla á aldrinum 1 - 100 ára.  Þetta er tækifæri til að leika sér saman bæði fullorðnir og börn, upplifa einstaka stemmingu þar sem allir koma saman að byggja og leika sér úti í grasgrænni náttúrunni.",
    linkMore: "/leikdagur",
    linkDirect: "#"
  }
]


/*const newNext = function () {
  const currentCourse = currentCourse + 1
  if (currentCourse > courses.length - 1) {
    courseNumber = 0;
  }

  courses.forEach((course, index), function {
    course.style.display = index === currentCourse ? 'block' : 'none'
  })
}
*/

const next = function () {
  courseNumber = courseNumber + 1;

  if (courseNumber > courses.length - 1) {
    courseNumber = 0;
  }
  updateCourse();
}

const previous = function () {
  courseNumber = courseNumber - 1;

  if (courseNumber < 0) {
    courseNumber = courses.length - 1;
  }

  updateCourse();
}

const updateCourse = function () {
  courseTitle.innerHTML = courses[courseNumber].title;
  courseImage.setAttribute("src", courses[courseNumber].image);
  courseDescription.innerHTML = courses[courseNumber].content;
  linkOne.setAttribute("href", courses[courseNumber].linkMore);
  linkTwo.setAttribute("href", courses[courseNumber].linkDirect);
}

// when I click the nextTag slide the canvas right
nextTag.addEventListener("click", function () {
  next();
});

// when I click the prevTag slide the canvas left
prevTag.addEventListener("click", function () {
  previous();
})
