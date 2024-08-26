document.addEventListener("DOMContentLoaded", function() {
    const popupMessage = "I love you, Yana.";
    const mainMessage = "Hello, I want to apologize for the dry texts I gave you. None of it wasn't intentional, and whatever happened to us was never your fault. It was all on me, on how I acted all stupid jumping to conclusions of what I saw, that I never thought of clearly, which led me to being all delusional. The first thing going through my head was believing that you were leading on a bunch of guys instead of the thing you kept telling me that you ignore them. The second one was if I ignored you, you would start to lose interest. Painfully worked out for me not thinking about what you were going to feel. Now I know that, and I am thinking of it all the time. You also said it's not me, then it can't be anyone else. That was very sweet and it made me very soft. I fumbled you bad haha. I'm very guilty of my actions but I will try to be a better person for you or whoever's going to come next so I won't make dumb decisions in life again. I'm saying this all on the top of my head so this isn't everything. You can leave it or respond to me so you can ask more and I'll give you closure.❤️";

    let i = 0;
    let j = 0;
    const popupSpan = document.getElementById('popup-message');
    const mainSpan = document.getElementById('main-message');

    function typePopupMessage() {
        if (i < popupMessage.length) {
            popupSpan.textContent += popupMessage.charAt(i);
            i++;
            setTimeout(typePopupMessage, 100);
        } else {
            document.body.addEventListener('click', showMainMessage);
        }
    }

    function showMainMessage() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        typeMainMessage();
    }

    function typeMainMessage() {
        if (j < mainMessage.length) {
            mainSpan.textContent += mainMessage.charAt(j);
            j++;
            setTimeout(typeMainMessage, 50);
        }
    }

    typePopupMessage();
});