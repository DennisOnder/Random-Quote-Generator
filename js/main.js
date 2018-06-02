var quotes = [
    "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    "I am doomed to an eternity of compulsive work. No set goal achieved satisfies. Success only breeds a new goal.",
    "Enquire not what boils in another's pot.",
    "To love deeply in one direction makes us more loving in all others.",
    "If little else, the brain is an educational toy.",
    "The only thing that's been a worse flop than the organization of non-violence has been the organization of violence.",
    "To become acquainted with kindness one must be prepared to learn new things and feel new feelings.",
    "Everybody likes a kidder, but nobody lends him money.",
    "Life is far too important a thing ever to talk seriously about.",
    "The significant problems we have cannot be solved at the same level of thinking with which we created them.",
    "Better to get up late and be wide awake than to get up early and be asleep all day.",
    "There is no wisdom without love.",
    "Never try to tell everything you know. It may take too short a time.",
    "After I'm dead I'd rather have people ask why I have no monument than why I have one.",
    "I can't complain, but sometimes I still do.",
    "The easiest kind of relationship for me is with ten thousand people. The hardest is with one.",
    "The cure for boredom is curiosity. There is no cure for curiosity.",
    "There are no such things as applied sciences, only applications of science.",
    "Desire is the most important factor in the success of any athlete.",
    "It’s like your batteries get low, and you need to charge them on someone else’s story.",
    "Kindness is more than a philosophy of the mind. It is a philosophy of the spirit.",
    "The golden apple devoured has seeds. It is endless.",
];

var output = document.getElementById('quote');

document.getElementById('generate').onclick = function() {
    output.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
