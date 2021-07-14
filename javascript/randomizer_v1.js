
function randomizeObj(obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

//Beginning of all Alliance classes!

const allAllianceClass = {
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

const alliancePaladinClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Human',
    allianceRace5: 'Light Forged Draenei',
};

const allianceRogueClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Gnome',
    allianceRace4: 'Human',
    allianceRace5: 'Kul Tiran Human',
    allianceRace6: 'Night Elf',
    allianceRace7: 'Pandaren',
    allianceRace8: 'Worgen',
    allianceRace9: 'Void Elf'
};

const allianceShamanClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Draenei',
    allianceRace4: 'Kul Tiran Human',
};

const allianceWarlockClass = {
    allianceRace1: 'Dark Iron Dwarf',
    allianceRace2: 'Dwarf',
    allianceRace3: 'Gnome',
    allianceRace4: 'Human',
    allianceRace5: 'Mechagnome',
    allianceRace6: 'Worgen',
    allianceRace7: 'Void Elf'
};

function classGenerator() {

    const allianceClassRandomizer = ['Death Knight', 'Paladin', 'Rogue', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Priest', 'Shaman', 'Warlock', 'Warrior'];
    let randomClass = allianceClassRandomizer[Math.floor(Math.random() * allianceClassRandomizer.length)];
    let gender = ['Female', 'Male'];
    let genderRandomizer = gender[Math.floor(Math.random() * gender.length)]
    switch (randomClass) {
        case 'Death Knight':
            document.getElementById('race').innerText = randomizeObj(allAllianceClass);
            break;
        case 'Demon Hunter':
            document.getElementById('race').innerText = randomizeObj(allianceDemonHunterClass);
            break;
        case 'Druid':
            document.getElementById('race').innerText = randomizeObj(allianceDruidClass);
            break;
        case 'Hunter':
            document.getElementById('race').innerText = randomizeObj(allAllianceClass);
            break;
        case 'Mage':
            document.getElementById('race').innerText = randomizeObj(allAllianceClass);
            break;
        case 'Monk':
            document.getElementById('race').innerText = randomizeObj(allianceMonkClass);
            break;
        case'Priest':
            document.getElementById('race').innerText = randomizeObj(allAllianceClass);
            break;
        case 'Shaman':
            document.getElementById('race').innerText = randomizeObj(allianceShamanClass);
            break;
        case 'Rogue':
            document.getElementById('race').innerText = randomizeObj(allianceRogueClass);
            break;
        case 'Paladin':
            document.getElementById('race').innerText = randomizeObj(alliancePaladinClass);
            break;
        case 'Warlock':
            document.getElementById('race').innerText = randomizeObj(allianceWarlockClass);
            break;
        case 'Warrior':
            document.getElementById('race').innerText = randomizeObj(allAllianceClass);
            break;
        default:
            console.log('Not Working');
    }
    document.getElementById('class').innerText = randomClass;
}

