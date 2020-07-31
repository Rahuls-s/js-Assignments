// Welcome Message
let Name = window.prompt("Enter your name", "Visitor");
if (Name == null) {
    Name = "Visitor";
}
else if (Name.length == 0) {
    Name = "Visitor";
}
let welcome = document.getElementById('welcome-msg');
welcome.innerHTML = `Hello <mark>${Name} !</mark><br><br> Click the Button below to Generate your Quote`;

// Quotes
let quote = ['“The purpose of our lives is to be happy.”<br>– Dalai Lama',
    '“Get busy living or get busy dying.”<br>– Stephen King',
    '“You only live once, but if you do it right, once is enough.”<br>– Mae West',
    `“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.'”<br>– Muhammad Ali`,
    '“I love the winning, I can take the losing, but most of all I Love to play.”<br>– Boris Becker',
    '“Don’t settle for what life gives you; make life better and build something.”<br>– Ashton Kutcher',
    '“Everything negative – pressure, challenges – is all an opportunity for me to rise.”<br>– Kobe Bryant',
    '“Life is like riding a bicycle. To keep your balance, you must keep moving.”<br>– Albert Einstein',
    '“Life is like a coin. You can spend it any way you wish, but you only spend it once.”<br>– Lillian Dickson',
    '“Be yourself; everyone else is already taken.”<br>– Oscar Wilde',
    `“If you tell the truth, you don't have to remember anything.”<br>– Mark Twain`,
    '“A smile is the light in your window that tells others that there is a caring, sharing person inside.”<br>- Denis Waitley',
    '“Hold the vision, trust the process.”<br>– Anonymous',
    '“If something is important enough, even if the odds are stacked against you, you should still do it.”<br>– Elon Musk',
    '“Hustle in silence and let your success make the noise.”<br>– Anonymous',
    '“Some people want it to happen, some wish it would happen, others make it happen.”<br>– Michael Jordan',
    '“It’s not the load that breaks you down, it’s the way you carry it.”<br>– Lou Holtz',
    '“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.”<br>– Roy T. Bennett',
    '“Keep your eyes on the stars, and your feet on the ground.”<br>– Theodore Roosevelt',
    '“Hard work beats talent when talent doesn’t work hard.”<br>– Tim Notke',
    '“Work hard, be kind, and amazing things will happen.”<br>– Conan O’Brien',
    '“In the middle of every difficulty lies opportunity.”<br>– Albert Einstein',
    '“Start where you are. Use what you have. Do what you can.”<br>– Arthur Ashe',
    '“Dreams don’t work unless you do.”<br>– John C. Maxwell',
    '“Wherever you go, go with all your heart”<br>– Confucius',
    '“Begin anywhere.”<br>– John Cage',
    '“Never regret anything that made you smile.”<br>– Mark Twain',
    '“Be happy with what you have while working for what you want.”<br>– Helen Keller',
    '“I think, Therefore I am”<br>– René Descartes'];

// Random Quote Generation
let button = document.getElementById('btn');
button.onclick = function () { randomgen() };
function randomgen() {
    let randomnum = Math.floor(Math.random() * 29);
    document.getElementById('quote').innerHTML = quote[randomnum];
}
