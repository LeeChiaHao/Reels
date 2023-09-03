document.addEventListener("DOMContentLoaded", () => {
    var movePx = "500px"
    var btn = document.getElementById("moveBtn")

    btn.addEventListener("mouseenter", () => {
        var isCorrect = checkAnswer();
        if (isCorrect) {
            return false;
        }
        var marginL = btn.style.marginLeft;
        var marginR = btn.style.marginRight;
        if (marginL == "" && marginR == "") {
            btn.style.marginLeft = movePx;
        } else if (marginL == movePx) {
            btn.style.marginLeft = ""
            btn.style.marginRight = movePx;
        } else if (marginR == movePx) {
            btn.style.marginRight = ""
            btn.style.marginLeft = movePx;
        }
    })

    btn.addEventListener("click", () => {
        var isCorrect = checkAnswer();
        if (!isCorrect) {
            createEmojis();
        } else {
            createBye()
        }
    })
    var dateInput = document.getElementById("ans");
    dateInput.addEventListener("input", () => {
        if (checkAnswer()) {
            btn.classList.remove("btn-danger")
            btn.classList.add("btn-success")
            btn.style.margin = "";
        } else {
            btn.classList.add("btn-danger")
            btn.classList.remove("btn-success")
        }
    })

    function checkAnswer() {
        var input = document.getElementById("ans").value;
        if (input == "2023-04-18") {
            return true;
        } else {
            createEmojis();
            return false;
        }
    }

    createEmojis();
    function createEmojis() {
        const emojis = "💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩";
        const emoji2 = " 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩";
        document.getElementById("emoji-display").classList.add("emoji-container")

        const emojiContainer = document.querySelector(".emoji-container");
        while (emojiContainer.firstChild) {
            emojiContainer.removeChild(emojiContainer.firstChild);
        }
        for (var i = 0; i < 6; i++) {
            const emojiElement = document.createElement("div");
            emojiElement.classList.add("emoji");
            if (i % 2 == 0) {
                emojiElement.textContent = emojis;

            } else {
                emojiElement.textContent = emoji2;

            }
            emojiContainer.appendChild(emojiElement);
        }
    }

    function createBye() {
        const emojiContainer = document.querySelector(".emoji-container");
        while (emojiContainer.firstChild) {
            emojiContainer.removeChild(emojiContainer.firstChild);
        }
        const emojiElement = document.createElement("div");
        emojiElement.classList.add("emoji");
        emojiElement.textContent = "BYE. JT.";
        emojiContainer.appendChild(emojiElement);
        document.getElementById("emoji-display").classList.remove("emoji-container")
    }
})
