const mrButton = document.getElementById('gimmePhrase');
const printedOutput = document.querySelector('.output');
mrButton.addEventListener('click', thePhrase);

function thePhrase() {
    // console.log(downer[2]);
    const randomDowner = downer[Math.floor(Math.random()*downer.length)];
    const randomFirstName = firstName[Math.floor(Math.random()*firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random()*lastName.length)];
    const randomRealName = realName[Math.floor(Math.random()*realName.length)];
    const randomPeriod = period[Math.floor(Math.random()*period.length)];
    const randomRelation = relation[Math.floor(Math.random()*relation.length)];
    printedOutput.innerHTML = `“Yeah that’s pretty good I guess, for me perhaps a bit ${randomDowner}. I can’t believe you’re not familiar with ${randomFirstName} ${randomLastName} though. It’s pretty heady stuff, not for everyone, but if you can jump right in to their ${randomPeriod} period, you’ll be blown away.  Optional coup de grace: “You know the crazy thing is that ${randomLastName} was ${randomRealName}’s ${randomRelation}?"`
}

const firstName = [
    'Checo',
    'Claus',
    'Valteri',
    'Nico',
    'Etta',
    'Geraldo',
]

const lastName = [
    'Saussure',
    'Kinski',
    'Pinkham',
    'Stardust',
    'Esperanza-Sainz',
]

const realName = [
    'Jean Paul Sartre',
    'Albert Camus',
    'Jean-Luc Godard',
    'Henri Cartier-Bresson',
    'Guy Dubord',
    'Baudrillard',
]

const downer = [
    'plebian',
    'vapid',
    'pedestrian',
    'insipid',
    'hacky',
    'banal',
    'anemic',
    'kitsch',
    'cliche',
];

const prefix = [
    'post',
    'sub',
    'ante',
    'pre',
    'anti',
    'proto',
]

const genre = [
    'Vaporwave',
    'Hypnagogic',
    'Chillwave',
    'Post-Punk',
    'Noise',
    'C86',
    'Cold Wave',
    'Dance Punk',
    'DFA',
    'Dream-Pop',
    'Shoegaze',
    'Brit-Pop',
    'Electroclash',
    'Freak Folk',
    'Garage Rock',
    'Yacht Rock',
    'Trap',
    'Witch House',
]

const period = [
    'post-colonial',
    'red',
    'soft-focus',
    'Berlin',
]

const region = [
    'Balearic',
    'Jamaican',
    'Michigander'
]

const relation = [
    'cousin',
    'third cousin',
    'neighbor',
    'bowling partner',
    'surfing buddy',
    'golf caddy',
    'personal shopper',
]



