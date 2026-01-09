const lessons = [
    { title: "Урок 1", url: "https://example.com/lesson1" },
  
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
