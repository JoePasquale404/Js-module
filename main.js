const lessons = [
    { title: "Урок 10", url: "lesson 10/index.html" },
  
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
