// Hero Slider Text

let slides = [
    "Welcome to Our University",
    "Admission Open 2026",
    "Build Your Future With Us",
    "Quality Education For Everyone"
];

let index = 0;

setInterval(() => {
    document.getElementById("slideText").innerText = slides[index];
    index++;

    if(index === slides.length){
        index = 0;
    }
}, 2000);


// Notice Change

let notices = [
    "Admission Open Now",
    "Mid Term Exam Starts 15 July",
    "Scholarship Application Available",
    "New Semester Registration Running"
];

let noticeIndex = 0;

function changeNotice(){
    document.getElementById("noticeText").innerText =
    notices[noticeIndex];

    noticeIndex++;

    if(noticeIndex === notices.length){
        noticeIndex = 0;
    }
}

changeNotice();

setInterval(changeNotice,3000);


// Student Counter

let count = 0;

let counter = setInterval(() => {

    count += 100;

    document.getElementById("studentCount").innerText = count;

    if(count >= 5000){
        clearInterval(counter);
    }

},50);