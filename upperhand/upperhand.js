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
    const randomEra = era[Math.floor(Math.random()*era.length)];
    const randomRegion = region[Math.floor(Math.random()*region.length)];
    const randomGenre = genre[Math.floor(Math.random()*genre.length)];
    const randomMedium = medium[Math.floor(Math.random()*medium.length)];
    const randomPrefix = prefix[Math.floor(Math.random()*prefix.length)];
    const randomSubEra = subEra[Math.floor(Math.random()*subEra.length)];

    printedOutput.innerHTML = 
        `<p>1) “Yeah that’s pretty good I guess, for me perhaps a bit on the ${randomDowner} side. I can’t believe you’re not familiar with ${randomFirstName} ${randomLastName} though. For ${randomRegion} ${randomMedium} it's pretty heady stuff, definitely not for everyone. If you can jump right in to their ${randomPeriod} period, you’ll be blown away.</p>
        
        <p>Optional coup de grace: “You know the crazy thing is that ${randomLastName} was ${randomRealName}’s ${randomRelation}?"</p>

        <p>2) Everything changed for me when I found ${randomSubEra}-${randomEra} ${randomRegion} ${randomPrefix}-${randomGenre} ${randomMedium}. My favorite artist is probably ${randomFirstName} ${randomLastName}.</p>
        
        <p>3) That was my thing for so long, then I found ${randomFirstName} ${randomLastName}. Game changer! While their most popular stuff is decent, albeit  occasionally ${randomDowner}, you really need to check out the ${randomMedium} work from their ${randomPeriod} period. They actually had a massive influence on ${randomRealName}.</p>
        
        <p>4) Oh if you like them you definitely know ${randomFirstName} ${randomLastName} right? No?! Wow well forget everything you thought you knew about ${randomSubEra}-${randomEra} ${randomRegion} ${randomPrefix}-${randomGenre}.</p>`
}

const firstName = [
    'Checo',
    'Claus',
    'Valteri',
    'Nico',
    'Etta',
    'Geraldo',
    'Christo',
    'Anselm',
    'Blake',
    'Kevin',
    'Willem',
    'Atticus',
    'Daphne',
    'Imogen',
    'Liv',
    'Boris',
    'Simon',
    'Nile',
    'Alomar',
    'Robert',
    'Hedi',
    'Karin',
    'Maryam',
    'Adena',
    'Bella',
    'Halla',
    'Rami',
    'Jesper',
]

const lastName = [
    'Saussure',
    'Kinski',
    'Pinkham',
    'Ronson',
    'Esperanza-Sainz',
    'Venturi',
    'Weston',
    'Frakes',
    'Tolliver',
    'Smithson',
    'Edelbright',
    'Leclerc',
    'Svenson',
    'Leander',
    'Elbrecht',
    'Yorke',
    'Gallup',
    'Sumner',
    'Gahan',
    'Bond',
    'Visconti',
    'Dreijer',
    'Pareski',
]

const realName = [
    'Jean Paul Sartre',
    'Albert Camus',
    'Jean-Luc Godard',
    'Henri Cartier-Bresson',
    'Guy Dubord',
    'Jean Baudrillard',
    'Roland Barthes',
    'Lazlo Moholy-Nagy',
    'Umberto Eco',
    'Susan Sontag',
    'Victor Burgin',
    'David Bowie',
    'Graham Parson',
    'Todd Rundgren',
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
    'lowbrow',
    'boorish',
    'provincial',
    'tawdry',
    'bland',
    'unpalatable',
    'MoR',
    'flat',
    'jejune',
    'simplistic',
    'quotidian',
    'prosaic',
];

const prefix = [
    'post',
    'post-post',
 //   'sub',
    'pre',
    'proto',
    'proto',
    'pseudo',
    'pseudo',
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
    'Garage',
    'Yacht Rock',
    'Trap',
    'Witch House',
    'Outsider Folk',
]

const medium = [
    'comics',
    'music',
    'painting',
    'photography',
    'sculpture',
    'typography',
    'graphic design',
    'performance art',
]

const period = [
    'post-colonial',
    'crimson',
    'soft-focus',
    'Berlin',
    'neo-athletic',
    'late',
    'early',
    'plein air',
    'vampiric',
    'riot grrl',
]

const era = [
    '1950\'s',
    '1970\'s',
    '1980\'s',
    '1960\'s',
    '1990\'s',
]

const subEra = [
    'late',
    'early',
    'mid',
]

const region = [
    'Balearic',
    'Jamaican',
    'Michigander',
    'Mexican',
    'Thai',
    'Bi-coastal',
    'Trans-Atlantic',
    'north country',
    'Mancunian',
    'Liverpudlian',
    'Glaswegian',
    'Cockney',
]

const relation = [
    'cousin',
    'third cousin',
    'neighbor',
    'bowling partner',
    'surfing buddy',
    'golf caddy',
    'personal shopper',
    'roommate',
    'pen pal',
]



