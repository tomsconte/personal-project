function classGenerator() {
    let allianceClassRandomizer = ['Death Knight', 'Paladin', 'Rogue', 'Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Priest', 'Shaman', 'Warlock', 'Warrior'];
    let randomClass = allianceClassRandomizer[Math.floor(Math.random() * allianceClassRandomizer.length)];
    let deathKnightClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Light Forged Draenei', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let deathKnightClassRandomizer = deathKnightClass[Math.floor(Math.random() * deathKnightClass.length)]
    let demonHunterClass = ['Night Elf'];
    let demonHunterClassRandomizer = demonHunterClass[Math.floor(Math.random() * demonHunterClass.length)]
    let druidClass = ['Kul Tiran Human', 'Night Elf', 'Worgen'];
    let druidClassRandomizer = druidClass[Math.floor(Math.random() * druidClass.length)]
    let hunterClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Light Forged Draenei', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let hunterClassRandomizer = hunterClass[Math.floor(Math.random() * hunterClass.length)]
    let mageClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Light Forged Draenei', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Worgen', 'Void Elf'];
    let mageClassRandomizer = mageClass[Math.floor(Math.random() * mageClass.length)]
    let monkClass = ['Dark Iron Dwarf', 'Dwarf', 'Draenei', 'Gnome', 'Human', 'Kul Tiran Human', 'Mechagnome', 'Night Elf', 'Pandaren', 'Void Elf'];
    let monkClassRandomizer = monkClass[Math.floor(Math.random() * monkClass.length)]
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
            document.getElementById('race').innerText = 'Race: ' + deathKnightClassRandomizer;
            break;
        case 'Demon Hunter':
            document.getElementById('race').innerText = 'Race: ' + demonHunterClassRandomizer;
            break;
        case 'Druid':
            document.getElementById('race').innerText = 'Race: ' + druidClassRandomizer;
            break;
        case 'Hunter':
            document.getElementById('race').innerText = 'Race: ' + hunterClassRandomizer;
            break;
        case 'Mage':
            document.getElementById('race').innerText = 'Race: ' + mageClassRandomizer;
            break;
        case 'Monk':
            document.getElementById('race').innerText = 'Race: ' + monkClassRandomizer;
            break;
        case 'Priest':
            document.getElementById('race').innerText = 'Race: ' + priestClassRandomizer;
            break;
        case 'Shaman':
            document.getElementById('race').innerText = 'Race: ' + shamanClassRandomizer;
            break;
        case 'Rogue':
            document.getElementById('race').innerText = 'Race: ' + rogueClassRandomizer;
            break;
        case 'Paladin':
            document.getElementById('race').innerText = 'Race: ' + paladinClassRandomizer;
            break;
        case 'Warlock':
            document.getElementById('race').innerText = 'Race: ' + paladinClassRandomizer;
            break;
        case 'Warrior':
            document.getElementById('race').innerText = 'Race: ' + paladinClassRandomizer;
            break;
        default:
            console.log('Not Working');
    }
    document.getElementById('class').innerText = randomClass;
}