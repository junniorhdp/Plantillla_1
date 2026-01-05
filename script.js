document.addEventListener("DOMContentLoaded", () => {

  /* ================== MÚSICA ================== */
  const playBtn = document.getElementById("playMusic");
  const music = document.getElementById("music");
  let isPlaying = false;

  if (playBtn && music) {
    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        music.play().catch(() => {});
        playBtn.textContent = "⏸";
        playBtn.classList.add("playing");
        isPlaying = true;
      } else {
        music.pause();
        playBtn.textContent = "▶";
        playBtn.classList.remove("playing");
        isPlaying = false;
      }
    });

    music.addEventListener("ended", () => {
      playBtn.textContent = "▶";
      playBtn.classList.remove("playing");
      isPlaying = false;
    });
  }

  /* ================== CONTADOR ================== */
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const eventDate = new Date(2026, 0, 17, 15, 0, 0).getTime();

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const updateCountdown = () => {
      const diff = eventDate - Date.now();

      if (diff <= 0) {
        daysEl.textContent = hoursEl.textContent =
        minutesEl.textContent = secondsEl.textContent = "00";
        return;
      }

      daysEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
      hoursEl.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, "0");
      minutesEl.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
      secondsEl.textContent = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ================== WHATSAPP ================== */
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (whatsappBtn) {
    const phone = "573227454759";
    const message = encodeURIComponent(
      "¡Preparen el pastel que ahí voy! 🍰🏃‍♀️ Confirmo mi asistencia al Baby Shower. ✨"
    );
    whatsappBtn.href = `https://wa.me/${phone}?text=${message}`;
  }

  /* ================== ANIMACIONES FADE-IN ================== */
  const fadeElements = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && fadeElements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));
  }

  /* ================== NUBES ================== */
  const cloudsLayer = document.querySelector(".clouds-layer");

  if (cloudsLayer) {
    for (let i = 0; i < 6; i++) {
      const cloud = document.createElement("span");
      cloud.className = "cloud";
      cloud.textContent = "☁️";
      cloud.style.top = Math.random() * 60 + "vh";
      cloud.style.animationDuration = 80 + Math.random() * 40 + "s";
      cloud.style.animationDelay = Math.random() * 40 + "s";
      cloudsLayer.appendChild(cloud);
    }
  }

  /* ================== PARTÍCULAS GENERALES ================== */
  const particlesLayer = document.querySelector(".particles-layer");

  if (particlesLayer) {
    const particles = ["💗", "✨", "⭐"];

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = 18 + Math.random() * 20 + "s";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particlesLayer.appendChild(particle);
    }
  }

  /* ================= MAGIA DORADA RAPUNZEL ================= */
  const magicContainer = document.querySelector(".rapunzel-magic");

  if (magicContainer) {
    const sparkles = ["✨", "⭐", "💛"];

    setInterval(() => {
      const spark = document.createElement("span");
      spark.className = "magic-spark";
      spark.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];

      spark.style.left = 40 + Math.random() * 20 + "%";
      spark.style.bottom = "20%";
      spark.style.animationDuration = 8 + Math.random() * 6 + "s";
      spark.style.fontSize = 10 + Math.random() * 10 + "px";

      magicContainer.appendChild(spark);

      setTimeout(() => spark.remove(), 14000);
    }, 900);
  }

});
