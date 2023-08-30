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
            return false;
        }
    })

    function checkAnswer() {
        var input = document.getElementById("ans").value;
        if (input == "123") {
            return true;
        } else {
            return false;
        }
    }

    createEmojis();
    function createEmojis() {
        const emojis = "💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩";
        const emoji2 = " 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩 💩";

        const emojiContainer = document.querySelector(".emoji-container");
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
})





