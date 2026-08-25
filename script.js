const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionScreen =
    document.getElementById("questionScreen");

const yesScreen =
    document.getElementById("yesScreen");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const backgroundVideo =
    document.getElementById("backgroundVideo");

const copyBtn =
    document.getElementById("copyBtn");

const accountNumber =
    document.getElementById("accountNumber");

const copyMessage =
    document.getElementById("copyMessage");


// ========================================
// START MUSIC AFTER USER INTERACTION
// ========================================

function startMusic() {

    backgroundMusic.volume = 0.5;

    backgroundMusic.play().catch(() => {
        console.log("Browser blocked autoplay.");
    });

}


// Start music when they first interact
document.addEventListener(
    "click",
    startMusic,
    { once: true }
);


// ========================================
// NO BUTTON
// ========================================

function moveNoButton() {

    const width = noBtn.offsetWidth;
    const height = noBtn.offsetHeight;

    const maxX =
        window.innerWidth - width - 20;

    const maxY =
        window.innerHeight - height - 20;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";
}


// Mouse
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// Touch
noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


// Click
noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


// ========================================
// YES BUTTON
// ========================================

yesBtn.addEventListener(
    "click",
    function() {

        startMusic();

        questionScreen.classList.add("hidden");

        yesScreen.classList.remove("hidden");

        // Try to play background video
        backgroundVideo.play().catch(() => {
            console.log(
                "Video could not autoplay. Using background image."
            );
        });

    }
);


// ========================================
// COPY ACCOUNT NUMBER
// ========================================

copyBtn.addEventListener(
    "click",
    async function() {

        const number =
            accountNumber.textContent.trim();

        try {

            await navigator.clipboard.writeText(number);

            copyBtn.textContent = "Copied ✓";

            copyMessage.textContent =
                "Account number copied! ";

            setTimeout(() => {

                copyBtn.textContent = "Copy";

                copyMessage.textContent = "";

            }, 2500);

        }

        catch (error) {

            copyMessage.textContent =
                "Couldn't copy automatically.";

        }

    }
);