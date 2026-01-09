const lessons = [
    { title: "Урок 10", url: "https://github.com/JoePasquale404/Js-module/blob/10740e58b8272762e79fa895c8045c34bb441bb1/lesson%2010/index.html" },
  
];

const lessonsContainer = document.getElementById("lessons");

lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.textContent = lesson.title;

    card.onclick = () => {
        window.location.href = lesson.url;
    };

    lessonsContainer.appendChild(card);
});
