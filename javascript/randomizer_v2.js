//RANDOMIZER THAT TAKES IN A SELECT OPTION TO SET THE FACTION. THAT ALLOWS THE REST OF THE onclick FUNCTION TO WORK.

(function () {
    //Making the document.getElementById a function and shorten it for refactoring.
    function gId(s) {
        return document.getElementById(s);
    }

    function gC(c) {
        return document.getElementsByClassName(c);
    }

    //Loading an object with Faction, Race, Class, and Gender values.
    let races = {
        faction: ["Horde", "Alliance"],
        race: {
            "Alliance": ["Dark Iron Dwarf", "Dwarf", "Mechagnome", "Gnome", "Human", "Kul-Tiran Human", "Night Elf", "Void Elf", "Dranei", "Light-Forged Draenei", "Worgen", "Pandaren"],
            "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf", "Goblin", "Pandaren", "Vulpera", "Zandalari Troll", "Mag'har Orc", "Highmountain Tauren", "Nightborne"]
        },
        class: {
            "Human": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Dark Iron Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Draenei": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Warrior"],
            "Gnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Light-Forged Draenei": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Warrior"],
            "Kul-Tiran Human": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Mechagnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Night Elf": ["Death Knight", "Demon Hunter", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warrior"],
            "Pandaren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
            "Void Elf": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Blood Elf": ["Death Knight", "Demon Hunter", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Goblin": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Highmountain Tauren": ["Death Knight", "Druid", "Hunter", "Monk", "Shaman", "Warrior"],
            "Mag'har Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Nightborne": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Tauren": ["Death Knight", "Druid", "Hunter", "Monk", "Paladin", "Priest", "Shaman", "Warrior"],
            "Pandaren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Undead": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Vulpera": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Zandalari Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warrior"],
        },
        gender: ["Male", "Female"],
        crest: {
            "Death Knight": ["../img/Death_Knight_Crest.webp"],
            "Demon Hunter": ["../img/demonHunterLogo.webp"],
            "Druid": ["../img/Druid_Crest.webp"],
            "Hunter": ["../img/Hunter_Crest.webp"],
            "Mage": ["../img/Mage_Crest.webp"],
            "Paladin": ["../img/Paladin_Crest.webp"],
            "Priest": ["../img/Priest_Crest.webp"],
            "Rogue": ["../img/Rogue_Crest.webp"],
            "Warlock": ["../img/Warlock_Crest.webp"],
            "Warrior": ["../img/Warrior_Crest.webp"]
        },
        factionCrest: {
            "Alliance": ['../img/Alliance_Crest.webp'],
            "Horde": ['../img/Horde_Crest.webp']
        },
        raceCrest: {
            "Human": ["../img/race_crest/Human_Crest.webp"],
            "Dark Iron Dwarf": ["../img/race_crest/Dark_Iron_crest.webp"],
            "Dwarf": ["../img/race_crest/Dwarf_Crest.webp"],
            "Draenei": ["../img/race_crest/Draenei_Crest.webp"],
            "Gnome": ["../img/race_crest/Gnome_Crest.webp"],
            "Light-Forged Draenei": ["../img/race_crest/Lightforged_Draenei_Crest.webp"],
            "Kul-Tiran Human": ["../img/race_crest/Kul_Tiran_crest.webp"],
            "Mechagnome": ["../img/race_crest/Mechagnome.webp"],
            "Night Elf": ["../img/race_crest/Night_Elf_Crest.webp"],
            "Pandaren": ["../img/race_crest/Pandaren_Crest2.webp"],
            "Worgen": ["../img/race_crest/Worgen-Icon.webp"],
            "Void Elf": ["../img/race_crest/Void_Elves_crest.webp"],
            "Blood Elf": ["../img/race_crest/Icon_of_Blood.webp"],
            "Goblin": ["../img/race_crest/Goblin-Icon.webp"],
            "Highmountain Tauren": ["../img/race_crest/Highmountain_Tauren_Crest.webp"],
            "Mag'har Orc": ["../img/race_crest/Mag'har_crest.webp"],
            "Nightborne": ["../img/race_crest/Nightborne_Crest.webp"],
            "Orc": ["../img/race_crest/Orc_Crest.webp"],
            "Tauren": ["../img/race_crest/Tauren_Crest.webp"],
            "Troll": ["../img/race_crest/Troll_Crest.webp"],
            "Undead": ["../img/race_crest/Forsaken_Crest.webp"],
            "Vulpera": ["../img/race_crest/Vulpera_crest.webp"],
            "Zandalari Troll": ["../img/race_crest/Zandalari_crest.webp"]
        }
    };



    // Onclick method that will launch the function
    gId("Submit").onclick = function () {

        //method that takes in a parameter, sets the key as the parameter, and then chooses a random value
        function _Select(obj, param) {
            let t = param ? obj[param] : obj;
            return t[Math.floor(Math.random() * t.length)];
        }

        //empty object
        let char = {
            faction: "",
            class: "",
            race: "",
            gender: "",
            crest: "",
            factionCrest: "",
            raceCrest: ""
        };

        //used to load the new, empty object
        char.faction = gId("Factions").value === "Random" ? _Select(races.faction) : gId("Factions").value;
        char.race = _Select(races.race, char.faction);
        char.class = _Select(races.class, char.race);
        char.gender = _Select(races.gender, char.gender);
        char.crest = _Select(races.crest, char.class);
        char.factionCrest = _Select(races.factionCrest, char.faction)
        char.raceCrest = _Select(races.raceCrest, char.race)

        //used to show the output
        gId("faction").innerHTML = char.faction;
        gId("class_choice").innerHTML = char.class;
        gId("race_choice").innerHTML = char.race;
        gId("gender").innerHTML = char.gender;
        gId("image_crest").src = char.crest;
        gId("faction_crest").src = char.factionCrest;
        gId("race_crest").src = char.raceCrest;

    };
})();




//BELOW IS AN ALTERNATE VERSION OF THE RANDOMIZER THAT INCLUDES SPEC >> THIS MAY BE INCLUDED LATER

/*
(function () {
    function gId(s) {
        return document.getElementById(s);
    }
    const character = {
        faction: ["Alliance", "Horde"],
        race: {
            "Alliance": ["Dark Iron Dwarf", "Dwarf", "Gnome", "Human", "Night Elf", "Dranei", "Light-Forged Draenei", "Worgen", "Pandaren"],
            "Horde": ["Mag'har Orc", "Orc", "Zandalari Troll", "Troll", "Highmountain Tauren", "Tauren", "Nightborne", "Undead", "Blood Elf", "Goblin", "Pandaren", "Vulpera"]
        },
        class: {
            "Human": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Dark Iron Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Draenei": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Warrior"],
            "Gnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Light-Forged Draenei": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Warrior"],
            "Kul-Tiran Human": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Mechagnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Night Elf": ["Death Knight", "Demon Hunter", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warrior"],
            "Pandaren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
            "Void Elf": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Blood Elf": ["Death Knight", "Demon Hunter", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
            "Goblin": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Highmountain Tauren": ["Death Knight", "Druid", "Hunter", "Monk", "Shaman", "Warrior"],
            "Mag'har Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Nightborne": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Tauren": ["Death Knight", "Druid", "Hunter", "Monk", "Paladin", "Priest", "Shaman", "Warrior"],
            "Pandaren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warrior"],
            "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Undead": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
            "Vulpera": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
            "Zandalari Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warrior"],
        },
        spec: {
            "Death Knight": ["Blood", "Frost", "Unholy"],
            "Demon Hunter": ["Havoc", "Vengeance"],
            "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
            "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
            "Mage": ["Arcane", "Fire", "Frost"],
            "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
            "Paladin": ["Holy", "Protection", "Retribution"],
            "Priest": ["Discipline", "Holy", "Shadow"],
            "Rogue": ["Assassination", "Outlaw", "Subtlety"],
            "Shaman": ["Elemental", "Enhancement", "Restoration"],
            "Warlock": ["Affliction", "Demonology", "Destruction"],
            "Warrior": ["Arms", "Fury", "Protection"]
        }
    };
    gId("Submit").onclick = function () {
        let c = {
            faction: "",
            race: "",
            sex: "",
            class: "",
            spec: "",
            prof: "",
            name: ""
        };
        c.faction = gId("Factions").value === "Random" ? _Select(character.faction) : gId("Factions").value;
        c.race = _Select(character.race, c.faction);
        c.sex = _Select(["Male", "Female"]);
        c.class = _Select(character.class, c.race);
        c.spec = _Select(character.spec, c.class);
        c.prof = _Select(["Mining & Engineering", "Mining & Jewelcrafting", "Mining & Blacksmithing", "Herbalism & Inscription", "Herbalism & Alchemy", "Skinning & Leatherworking", "Tailoring & Enchanting", "Mining and Herbalism"]);
        c.name = _Select(["Amraldin", "Kasdum", "Zazel", "Alphar", "Kobelph", "Fingoneth", "Lothelye", "Zopha", "Achiel", "Dallach", "Undan", "Bobafeet", "Sielah", "Dattboii", "Gavriel", "Hielat", "Gavraf", "Azrael", "Jarkin", "Galenwe", "Alsemayo", "Peniyah", "Lorfinar", "Hielik", "Pewpewcachoo", "Ramdonh", "Kaolm", "Jehanicus", "Geesus", "Kailorenn", "Doothidoo", "Raqiel", "Chanukka", "Jaims", "Gajdun", "Haik", "Moothi", "Wappers", "Punkins", "Geschenken", "Acoontin", "Gadorfy", "Rawrzien", "Tanntann", "Makm", "Nerde", "Gobbles", "Paha", "Nelophile", "Lenwe", "Felicus", "Illi-something", "something-adin", "Shaavingell", "Axxbom", "Kolomon", "Indil", "Jindjind", "Milemmir", "Giffn", "Kneppicus", "Werg", "Quanddo", "Cardtopian", "Amimmim", "Vanillor", "Meeseeks", "Mooana", "Mortien", "Maulz", "Hortler", "Kisto", "Phistor", "Mandorp", "Miskoo", "Lloqua", "Heis", "Poporazzi", "Pixulz", "Rauz", "Dimen", "Whytboi", "Smoak"]);

        function _Select(obj, param) {
            var t = param ? obj[param] : obj;
            return t[Math.floor(Math.random() * t.length)];
        }
        gId("gender").innerHTML = "Your character is part of the " + c.faction + " and is a " + c.sex + ", " + c.race + ", " + c.spec + " " + c.class + " with " + c.prof + " that is named " + c.name;
    };
})();
 */