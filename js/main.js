let NotetimeoutIDs = [];

function SendNotification(noti, returnit = true, color_green = true) {
    
    const notification = document.getElementById("notification");
    const theNotification = document.getElementById("theNotification");

    if (color_green) {
        notification.style.borderTop = "5px solid #72db1b";
        notification.style.boxShadow = "0 0 12px rgba(109, 255, 30, 0.4)";
    } else {
        notification.style.borderTop = "5px solid #bd0000";
        notification.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.4)";
    }

    theNotification.textContent = noti;
    notification.classList.add("show");

    notification.onclick = function(e) {
        e.preventDefault();
        notification.classList.remove("show");
    };
    
    if (returnit) {
        let NoteTimeOut = setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);

        NotetimeoutIDs.push(NoteTimeOut);
    }
}

document.getElementById("CVDownalod").onclick = function(e) {
    e.preventDefault();
    SendNotification("Téléchargement du CV non disponible 😔", true, false);
};
