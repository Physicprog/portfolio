function SendNotification(noti, returnit = true, color_green = true) {
  const notification = document.getElementById("notification");
  const theNotification = document.getElementById("theNotification");

  if (!notification || !theNotification) return;

  if (color_green) {
    notification.style.borderTop = "5px solid #7CFC00";
    notification.style.boxShadow = "0 0 8px rgba(124, 252, 0, 0.3)";
  } else {
    notification.style.borderTop = "5px solid #FF4500";
    notification.style.boxShadow = "0 0 8px rgba(255, 69, 0, 0.3)";
  }

  theNotification.innerHTML = noti;

  notification.classList.add("show");

  /* enleve au click
  notification.onclick = function (e) {
    e.preventDefault();
    notification.classList.remove("show");
  };
  */
  /* enleve au scroll
  window.addEventListener("scroll", () => {
    notification.classList.remove("show");
  });
  */

  if (returnit) {
    setTimeout(() => notification.classList.remove("show"), 3000);
  }
}

function calculerHeure() {
  const now = new Date();
  const secondes = now.getSeconds().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const heures = now.getHours().toString().padStart(2, "0");

  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = `${heures}:${minutes}:${secondes}`;
  }
}
//LES NOTIFSSSS
const CVBtn = document.getElementById("CVDownload");
if (CVBtn) {
  CVBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SendNotification(
      "Téléchargement du CV non disponible pour le moment 😔",
      true,
      false
    );
  });
}

const skillbtn = document.getElementById("skillbtn");
if (skillbtn) {
  skillbtn.addEventListener("click", (e) => {
    e.preventDefault();
    SendNotification(
      "Mes connaissances acquises (🔵) et en apprentissage (🔴)",
      true,
      true
    );
  });
}

const projectbtn = document.getElementById("projectbtn");
if (projectbtn) {
  projectbtn.addEventListener("click", (e) => {
    e.preventDefault();
    SendNotification("Mes projets accomplis", true, true);
  });
}

//Notifs unique a chaque bouton
const buttons = document.querySelectorAll(".project-card .btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const AppName = btn.closest(".project-card").querySelector("h5").innerText;
    SendNotification(
      `Cette page document sur ${AppName} est en cours de création`,
      true,
      false
    );
  });
});

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

//la rotation des icons liens
const linkedin = document.querySelector(".back");

window.addEventListener("scroll", () => {
  const rotation = window.scrollY * 0.8;
  linkedin.style.transform = `rotate(${rotation}deg)`;
});
const git = document.querySelector(".imgLogo2");
window.addEventListener("scroll", () => {
  const rotation = window.scrollY * (-0.5);
  git.style.transform = `rotate(${rotation}deg)`;
});

//switch de theme
const switchBtn = document.getElementById("switch");
if (switchBtn) {
  switchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.className =
      document.body.className === "theme-light" ? "theme-dark" : "theme-light";
  });
}

const loaderContainer = document.getElementById("loader-container");
if (loaderContainer) {
  setTimeout(() => {
    loaderContainer.classList.add("fade-out");
    setTimeout(() => loaderContainer.remove(), 500);
  }, 1200);
}

calculerHeure();
setInterval(calculerHeure, 1000);


const links = document.querySelectorAll('a');
links.forEach(link => {
  link.onclick = (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) window.scrollTo(0, target.offsetTop - 80);
    }
  };
});



/*
(function() {
    'use strict';

    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("selectstart", e => e.preventDefault());
    document.addEventListener("dragstart", e => e.preventDefault());

    document.addEventListener("keydown", e => {
        const key = e.key.toLowerCase();
        if (e.key === "F12" || e.keyCode === 123) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(key)) e.preventDefault();
        if (e.ctrlKey && key === "u") e.preventDefault();
        if (e.ctrlKey && ["s", "p"].includes(key)) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && ["s", "p"].includes(key)) e.preventDefault();
    });

    const detectDevTools = () => {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            document.body.innerHTML = '<h1>Accès refusé</h1>';
        }
    };
    setInterval(detectDevTools, 1000);

    const checkDebugger = () => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) window.location.href='about:blank';
    };
    setInterval(checkDebugger, 1000);

    (function() {
        const originalLog = console.log;
        console.log = function() { originalLog('Tu veux voir quoi là ?'); };
        console.clear();
        console.error = console.log;
        console.warn = console.log;
        console.info = console.log;
        console.debug = console.log;
    })();

    window.addEventListener("beforeprint", e => e.preventDefault());
    window.addEventListener("dragover", e => e.preventDefault());
    window.addEventListener("drop", e => e.preventDefault());

})();
*/
