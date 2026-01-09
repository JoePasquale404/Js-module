const lessons = [
    { title: "Урок 10", url: "lesson 10/index.html" },
    { title: "Урок 17 (задача 1)", url: "lesson17/index.html" },
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
