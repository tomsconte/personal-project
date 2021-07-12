
function randomizeObj(obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

const allianceDeathKnightClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Gnome',
    allianceRace5: 'Human',
    allianceRace6: 'Light Forged Draenei',
    allianceRace7: 'Kul Tiran Human',
    allianceRace8: 'Mechagnome',
    allianceRace9: 'Night Elf',
    allianceRace10: 'Pandaren',
    allianceRace11: 'Worgen',
    allianceRace12: 'Void Elf'
};

const allianceDemonHunterClass = {
    allianceRace1: 'Night Elf',
};

const allianceDruidClass = {
    allianceRace1: 'Night Elf',
    allianceRace2: 'Kul Tiran Human',
    allianceRace3: 'Worgen'
};

const allianceHunterClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Gnome',
    allianceRace5: 'Human',
    allianceRace6: 'Light Forged Draenei',
    allianceRace7: 'Kul Tiran Human',
    allianceRace8: 'Mechagnome',
    allianceRace9: 'Night Elf',
    allianceRace10: 'Pandaren',
    allianceRace11: 'Worgen',
    allianceRace12: 'Void Elf'
};

const allianceMageClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Gnome',
    allianceRace5: 'Human',
    allianceRace6: 'Light Forged Draenei',
    allianceRace7: 'Kul Tiran Human',
    allianceRace8: 'Mechagnome',
    allianceRace9: 'Night Elf',
    allianceRace10: 'Pandaren',
    allianceRace11: 'Worgen',
    allianceRace12: 'Void Elf'
};

const allianceMonkClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Gnome',
    allianceRace5: 'Human',
    allianceRace6: 'Kul Tiran Human',
    allianceRace7: 'Mechagnome',
    allianceRace8: 'Night Elf',
    allianceRace9: 'Pandaren',
    allianceRace10: 'Void Elf'
};


function classGenerator() {

    const allianceClassRandomizer = ['Death Knight', 'Paladin', 'Rogue', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Priest', 'Shaman', 'Warlock', 'Warrior'];
    let randomClass = allianceClassRandomizer[Math.floor(Math.random() * allianceClassRandomizer.length)];
    let allianceRaceRandomizer = [];
    let randomRace = allianceRaceRandomizer[Math.floor(Math.random() * allianceRaceRandomizer.length)];
    let paladinClass = ['Dark Iron Dwarf', 'Draenei', 'Dwarf', 'Human', 'Light Forged Draenei'];
    let paladinClassRandomizer = paladinClass[Math.floor(Math.random() * paladinClass.length)];
    let priestClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Light Forged Draenei', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let priestClassRandomizer = priestClass[Math.floor(Math.random() * priestClass.length)]
    let rogueClass = ['Dark Iron Dwarf', 'Dwarf', 'Gnome', 'Human', 'Kul Tiran Human', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let rogueClassRandomizer = rogueClass[Math.floor(Math.random() * rogueClass.length)]
    let shamanClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Kul Tiran Human'];
    let shamanClassRandomizer = shamanClass[Math.floor(Math.random() * shamanClass.length)]
    let warlockClass = ['Dark Iron Dwarf', 'Dwarf', 'Gnome', 'Human', 'Mechagnome', 'Worgen', 'Void Elf'];
    let warlockClassRandomizer = warlockClass[Math.floor(Math.random() * warlockClass.length)]
    let warriorClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Light Forged Draenei', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let warriorClassRandomizer = warriorClass[Math.floor(Math.random() * warriorClass.length)]
    let gender = ['Female', 'Male'];
    let genderRandomizer = gender[Math.floor(Math.random() * gender.length)]
    switch (randomClass) {
        case 'Death Knight':
            document.getElementById('race').innerText = randomizeObj(deathKnightClass);
            break;
        case 'Demon Hunter':
            document.getElementById('race').innerText = demonHunterClassRandomizer;
            break;
        case 'Druid':
            document.getElementById('race').innerText = druidClassRandomizer;
            break;
        case 'Hunter':
            document.getElementById('race').innerText = hunterClassRandomizer;
            break;
        case 'Mage':
            document.getElementById('race').innerText = mageClassRandomizer;
            break;
        case 'Monk':
            document.getElementById('race').innerText = monkClassRandomizer;
            break;
        case 'Priest':
            document.getElementById('race').innerText = priestClassRandomizer;
            break;
        case 'Shaman':
            document.getElementById('race').innerText = shamanClassRandomizer;
            break;
        case 'Rogue':
            document.getElementById('race').innerText = rogueClassRandomizer;
            break;
        case 'Paladin':
            document.getElementById('race').innerText = paladinClassRandomizer;
            break;
        case 'Warlock':
            document.getElementById('race').innerText = warlockClassRandomizer;
            break;
        case 'Warrior':
            document.getElementById('race').innerText = warriorClassRandomizer;
            break;
        default:
            console.log('Not Working');
    }
    document.getElementById('class').innerText = randomClass;
}