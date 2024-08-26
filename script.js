document.addEventListener("DOMContentLoaded", function() {
    const popupMessage = "pls read this.";
    const mainMessage = "i want to apologize for the dry texts i sent you. most of it wasnt intentional, i was slightly busy at school and doing other stuff, and no not talking to girls and whatever happened between us was never your fault. it was all on me, on how i acted, jumping to conclusions about what i saw without thinking clearly, which led me to be delusional. the first thing that went through my head was believing that you were leading on a bunch of guys instead of trusting what you kept telling me, that you were ignoring them. the second thing was thinking that if i ignored you, you would start to lose interest. that approach painfully backfired on me because i didn't consider how you would feel and now i think about it all the time. you also said, 'it's not me, then it can't be anyone else,' which was very sweet and made me feel soft. i really fumbled this situation and i feel very guilty for my actions. however, i will try to be a better person, whether for you or for whoever comes next, so that i won’t make such dumb decisions in life again. i'm saying this all off the top of my head so this isn’t everything i think i didnt even explain anything well too. i still like you, didnt even think the feeling went away thats why i didnt read your last messages. you can either leave it here or respond to me if you want to ask more. i’ll give you the closure you need.❤️";

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
