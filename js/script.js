const steps = [
  {
    title: "Етап 1: Знеболення",
    content:
      "Обійми з доставкою просто в серце! <br><br> *надсилаю віртуальні обіймашки* <img class='second-cats' src='/src/catshugs2.jpg' alt=''> ",
  },
  {
    title: "Етап 2: Перевірка настрою",
    content: `
    <p class="step-two-title">Як ти зараз себе почуваєш?</p>
    <button class="mood-btn" onclick="showMood('good')">😊 Добре</button>
    <button class="mood-btn" onclick="showMood('meh')">😐 Таке</button>
    <button class="mood-btn" onclick="showMood('bad')">😢 Не дуже</button>
    <div id="moodResult" style="margin-top: 20px;"></div>
  `,
  },

  {
    title: "Етап 3: Вітаміни",
    content: `
    <div class="flip-card" onclick="flipCard(this)">
      <div class="flip-card-inner">
        <div class="flip-card-front">
      🧾 те, що лікар прописав <br>
           (натисни на рецепт)
        </div>
        <div class="flip-card-back">
          Вітамін Ц — цьом 💋<br>
          Вітамін К — котики 🐱<br>
          Вітамін Ф — фільмик 🎬<br><br>
          Приймати кожен день
          <br><br>
        </div>
      </div>
    </div>
  `,
  },
  {
    title: "Виписка пацієнта",
    content:
      'Ти успішно пройшов курс ❤️<br><br>Заборонено: кусатися і їсти тверде (ну, майже) <br> <img  class="last-cat" src="https://media.giphy.com/media/3oz8xsaLjLVqVXr3tS/giphy.gif"  style="width:100%; border-radius:10px;">',
  },
];

let stepIndex = 0;

function nextStep() {
  if (stepIndex < steps.length) {
    document.getElementById("title").innerText = steps[stepIndex].title;
    document.getElementById("content").innerHTML = steps[stepIndex].content;

    if (stepIndex === 0) {
      document.getElementById("nextBtn").innerText = "Далі";
    }

    stepIndex++;

    if (stepIndex === steps.length) {
      document.getElementById("nextBtn").innerText = "Обійнято";
    }
  } else {
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("nextBtn").innerText = "Кінець курсу";
  }
}

function showMood(mood) {
  const moodResult = document.getElementById("moodResult");
  if (mood === "good") {
    moodResult.innerHTML =
      "Урааа! живем, живем 🌈<br><img class='cat-gif' src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWoyaG1oNTFsbDI3b201aTl0MDdkM2lrOXI2bXd0emcyM2R3djNiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GeimqsH0TLDt4tScGw/giphy.gif' style='width:100%; border-radius:10px;'>";
  } else if (mood === "meh") {
    moodResult.innerHTML =
      "Цілющий кусь🐾<br><img class='cat-gif' src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBhcmFmNGFwMzhwNWt4aHg2eG4xOGprNndxcXhmNnRjMDhlbWE5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/108wBdjDIkQZb2/giphy.gif' style='width:100%; border-radius:10px;'>";
  } else {
    moodResult.innerHTML =
      "Отримай порцію підтримки ❤️<br><img  class='cat-gif' src='https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif' style='width:100%; border-radius:10px;'>";
  }
}

function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}

function createPaw(event) {
  const paw = document.createElement("div");
  paw.className = "paw-print";
  paw.style.left = `${event.clientX - 15}px`;
  paw.style.top = `${event.clientY - 15}px`;
  document.body.appendChild(paw);
  setTimeout(() => paw.remove(), 1000);
}
document.addEventListener("click", createPaw);
