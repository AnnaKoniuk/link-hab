// Знаходимо кнопку зміни теми за її id в HTML
const themeBtn = document.querySelector("#themeBtn");

// Знаходимо кнопку поширення посилання за її id в HTML
const shareBtn = document.querySelector("#shareBtn");


// Додаємо обробник події натискання на кнопку зміни теми
themeBtn.addEventListener("click", function () {

    // Додаємо клас "dark", якщо його немає,
    // або видаляємо його, якщо він уже є
    document.body.classList.toggle("dark");

});


// Додаємо обробник події натискання на кнопку поширення
shareBtn.addEventListener("click", async function () {

    // Починаємо блок, у якому пробуємо виконати копіювання
    try {

        // Копіюємо адресу поточної сторінки в буфер обміну
        // await очікує завершення операції копіювання
        await navigator.clipboard.writeText(window.location.href);

        // Змінюємо текст кнопки, якщо посилання скопійовано успішно
        shareBtn.textContent = "✅ Посилання скопійовано!";

    } catch (error) {

        // Якщо копіювання не вдалося, показуємо підказку користувачу
        shareBtn.textContent = "Відкрий адресу сайту в браузері";

    }

});

