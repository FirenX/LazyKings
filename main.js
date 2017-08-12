var canvas0 = document.getElementById("htmlcanvas");
var context0 = canvas0.getContext("2d");
var kongregate;
var cmouseposition;
var version = "1.00";
var gsbuffer = new ArrayBuffer(60000);
var gameState = new Int8Array(gsbuffer);
var currentview = 0;
var cmessage = "";
var cmessage2 = "";
var cmessage3 = "";
var chighlight = -1;
var ihighlight = -1;
var ihighlightt = 0;
var chighlightt = 0;
var ehighlight = -1;
var confirmtimer = 0;
var confirmtimer2 = 0;
var tutorialtimer = 0;
var savetimer = 60;
var hbackground = new Image(800, 600);
var obackground = new Image(800, 600);
var ebackground = new Image(800, 600);
var ubackground = new Image(800, 600);
var sbackground = new Image(800, 600);
var button00 = new Image(200, 50);
var hbuilding = new Image(160, 100);
var obuilding = new Image(160, 100);
var ebuilding = new Image(160, 100);
var ubuilding = new Image(160, 100);
var sbuilding = new Image(160, 100);
var buildinghighlight = new Image(78, 96);
var buildinghighlight0 = new Image(78, 96);
var buildinghighlight1 = new Image(78, 96);
var iconhighlight = new Image(25, 25);
var iconhighlight0 = new Image(25, 25);
var cdimage = new Image(20, 20);
var increase = new Image(20, 20);
var decrease = new Image(20, 20);
var fightoff = new Image(20, 20);
var fighton = new Image(20, 20);
var safeoff = new Image(20, 20);
var safeon = new Image(20, 20);
var safeyellow = new Image(20, 20);
var maxoff = new Image(20, 20);
var maxon = new Image(20, 20);
var achievement = new Image(20, 20);
var henemy00 = new hEnemy("Peasants", new Image(20, 20), 0, 80);
var henemy01 = new hEnemy("Wolves", new Image(20, 20), 1, 65);
var henemy02 = new hEnemy("Rogues", new Image(20, 20), 5, 36);
var henemy03 = new hEnemy("Witches", new Image(20, 20), 9, 35);
var henemy04 = new hEnemy("Orcs", new Image(20, 20), 7, 52);
var henemy05 = new hEnemy("Undead", new Image(20, 20), 3, 62);
var henemy06 = new hEnemy("Demons", new Image(20, 20), 6, 64);
var hResource00p = new Image(20, 20);
var hResource00 = new hResource(0, "Food", hResource00p);
var hResource01p = new Image(20, 20);
var hResource01 = new hResource(1, "Wood", hResource01p);
var hResource02p = new Image(20, 20);
var hResource02 = new hResource(2, "Peasants", hResource02p);
var hResource03p = new Image(20, 20);
var hResource03 = new hResource(3, "Stone", hResource03p);
var hResource04p = new Image(20, 20);
var hResource04 = new hResource(4, "Horses", hResource04p);
var hResource05p = new Image(20, 20);
var hResource05 = new hResource(5, "Gold", hResource05p);
var hResource06p = new Image(20, 20);
var hResource06 = new hResource(6, "Iron", hResource06p);
var hResource07p = new Image(20, 20);
var hResource07 = new hResource(7, "Weapons", hResource07p);
var hResource08p = new Image(20, 20);
var hResource08 = new hResource(8, "Soldiers", hResource08p);
var hResource09p = new Image(20, 20);
var hResource09 = new hResource(9, "Books", hResource09p);
var hResource10p = new Image(20, 20);
var hResource10 = new hResource(10, "Monks", hResource10p);
var hResource11p = new Image(20, 20);
var hResource11 = new hResource(11, "Knights", hResource11p);
var hResource12p = new Image(20, 20);
var hResource12 = new hResource(12, "Might", hResource12p);
var hResource14p = new Image(20, 20);
var hResource14 = new hResource(14, "Paladins", hResource14p);
var hBuilding00 = new hBuilding(0, "Farms", new resourceCost(0, 25, -1, 0, -1, 0, 25));
var hBuilding01 = new hBuilding(1, "Forests", new resourceCost(0, 14, -1, 0, -1, 0, 10));
var hBuilding02 = new hBuilding(2, "Homesteads", new resourceCost(1, 39, -1, 0, -1, 0, 25));
var hBuilding03 = new hBuilding(3, "Quarries", new resourceCost(2, 24, -1, 0, -1, 0, 14));
var hBuilding04 = new hBuilding(4, "Stables", new resourceCost(1, 12, -1, 0, -1, 0, 6));
var hBuilding05 = new hBuilding(5, "Horse Mills", new resourceCost(1, 16, 3, 9, -1, 0, 7));
var hBuilding06 = new hBuilding(6, "Lumber Mills", new resourceCost(1, 9, 6, 7, -1, 0, 3));
var hBuilding07 = new hBuilding(7, "Iron Mines", new resourceCost(1, 31, 2, 31, -1, 0, 12));
var hBuilding08 = new hBuilding(8, "Blacksmiths", new resourceCost(3, 60, 6, 52, -1, 0, 20));
var hBuilding09 = new hBuilding(9, "Trade Posts", new resourceCost(1, 6, -1, 0, -1, 0, 3));
var hBuilding10 = new hBuilding(10, "Barracks", new resourceCost(1, 54, 3, 45, -1, 0, 15));
var hBuilding11 = new hBuilding(11, "Castles", new resourceCost(3, 12, -1, 0, -1, 0, 3));
var hBuilding12 = new hBuilding(12, "Armories", new resourceCost(3, 7, 7, 6, -1, 0, 2));
var hBuilding13 = new hBuilding(13, "Monasteries", new resourceCost(3, 11, 9, 9, -1, 0, 3));
var hBuilding14 = new hBuilding(14, "Gold Mines", new resourceCost(1, 9, 2, 9, -1, 0, 2));
var hBuilding15 = new hBuilding(15, "Trebuchets", new resourceCost(1, 10, 6, 8, -1, 0, 2));
var hBuilding16 = new hBuilding(16, "Cathedrals", new resourceCost(3, 5, 5, 4, 9, 4, 1));
var hBuilding17 = new hBuilding(17, "Caravans", new resourceCost(0, 10, 1, 10, 4, 7, 3));
var hBuilding18 = new hBuilding(18, "Walls", new resourceCost(3, 26, -1, 0, -1, 0, 6));
var hBuilding19 = new hBuilding(19, "Keeps", new resourceCost(3, 44, -1, 0, -1, 0, 10));
var hBuilding20 = new hBuilding(20, "Thieves Guilds", new resourceCost(1, 5, 5, 3, -1, 0, 1));
var oresource00 = new oResource("Mud", new Image(20, 20));
var oresource01 = new oResource("Pigs", new Image(20, 20));
var oresource02 = new oResource("Meat", new Image(20, 20));
var oresource03 = new oResource("Orcs", new Image(20, 20));
var oresource04 = new oResource("Blood", new Image(20, 20));
var oresource05 = new oResource("Stone", new Image(20, 20));
var oresource06 = new oResource("Champions", new Image(20, 20));
var oresource07 = new oResource("Ogres", new Image(20, 20));
var oresource08 = new oResource("Renown", new Image(20, 20));
var oresource09 = new oResource("Wood", new Image(20, 20));
var oresource10 = new oResource("Catapults", new Image(20, 20));
var oresource11 = new oResource("Hydra Heads", new Image(20, 20));
var oresource12 = new oResource("Troll Health", new Image(20, 20));
var obuilding00 = new oBuilding("Mud Pits", 0, 25, -1, 0, -1, 0, 25);
var obuilding01 = new oBuilding("Pens", 0, 40, -1, 0, -1, 0, 20);
var obuilding02 = new oBuilding("Slaughterhouses", 0, 63, -1, 0, -1, 0, 25);
var obuilding03 = new oBuilding("Adobes", 0, 32, -1, 0, -1, 0, 20);
var obuilding04 = new oBuilding("Shrines", 0, 8, 4, 2, -1, 0, 2);
var obuilding05 = new oBuilding("Altars", 5, 6, -1, 0, -1, 0, 6);
var obuilding06 = new oBuilding("Arenas", 0, 32, 5, 8, -1, 0, 8);
var obuilding07 = new oBuilding("Dungeons", 4, 12, 5, 12, -1, 0, 6);
var obuilding08 = new oBuilding("Strongholds", 0, 17, 5, 8, -1, 0, 4);
var obuilding09 = new oBuilding("Swamps", 0, 14, 4, 8, -1, 0, 3);
var obuilding10 = new oBuilding("Caves", 3, 3, -1, 0, -1, 0, 1);
var obuilding11 = new oBuilding("Forts", 0, 5, 9, 2, -1, 0, 1);
var obuilding12 = new oBuilding("Workshops", 0, 6, 5, 3, 9, 2, 1);
var obuilding13 = new oBuilding("Towers", 9, 24, -1, 0, -1, 0, 15);
var obuilding14 = new oBuilding("Hydras", 1, 28, 4, 14, -1, 0, 7);
var obuilding15 = new oBuilding("Banners", 8, 4, 9, 2, -1, 0, 1);
var obuilding16 = new oBuilding("Trolls", 2, 10, -1, 0, -1, 0, 2);
var obuilding17 = new oBuilding("Dragons", 2, 6, 4, 4, 8, 5, 1);
var oenemy00 = new oenemy("Boars", new Image(20, 20), 2, 54);
var oenemy01 = new oenemy("Orcs", new Image(20, 20), 4, 29);
var oenemy02 = new oenemy("Humans", new Image(20, 20), 5, 21);
var oenemy03 = new oenemy("Ogres", new Image(20, 20), 8, 45);
var oenemy04 = new oenemy("Golems", new Image(20, 20), 0, 100);
var oenemy05 = new oenemy("Elves", new Image(20, 20), 9, 33);
var oenemy06 = new oenemy("Serpents", new Image(20, 20), 3, 64);
var eresource00 = new eResource("Saplings", new Image(20, 20));
var eresource01 = new eResource("Seeds", new Image(20, 20));
var eresource02 = new eResource("Fruit", new Image(20, 20));
var eresource03 = new eResource("Wood", new Image(20, 20));
var eresource04 = new eResource("Elves", new Image(20, 20));
var eresource05 = new eResource("Bows", new Image(20, 20));
var eresource06 = new eResource("Archers", new Image(20, 20));
var eresource07 = new eResource("Books", new Image(20, 20));
var eresource08 = new eResource("Stone", new Image(20, 20));
var eresource09 = new eResource("Unicorns", new Image(20, 20));
var eresource10 = new eResource("Druids", new Image(20, 20));
var eresource11 = new eResource("Eggs", new Image(20, 20));
var eresource12 = new eResource("Phoenixes", new Image(20, 20));
var ebuilding00 = new eBuilding("Groves", 0, 25, -1, 0, -1, 0, 25);
var ebuilding01 = new eBuilding("Orchards", 1, 25, -1, 0, -1, 0, 25);
var ebuilding02 = new eBuilding("Glades", 2, 25, -1, 0, -1, 0, 25);
var ebuilding03 = new eBuilding("Hives", 0, 12, -1, 0, -1, 0, 6);
var ebuilding04 = new eBuilding("Treehouses", 0, 45, 3, 15, -1, 0, 15);
var ebuilding05 = new eBuilding("Gatherings", 2, 15, 4, 10, -1, 0, 5);
var ebuilding06 = new eBuilding("Archery Ranges", 2, 20, 3, 5, -1, 0, 5);
var ebuilding07 = new eBuilding("Chapels", 0, 16, 7, 4, -1, 0, 4);
var ebuilding08 = new eBuilding("Meadows", 2, 15, -1, 0, -1, 0, 3);
var ebuilding09 = new eBuilding("Ateliers", 3, 30, 8, 60, -1, 0, 15);
var ebuilding10 = new eBuilding("Ents", 0, 125, -1, 0, -1, 0, 25);
var ebuilding11 = new eBuilding("Stonehenges", 8, 5, -1, 0, -1, 0, 1);
var ebuilding12 = new eBuilding("Nests", 0, 17, 11, 4, -1, 0, 3);
var eenemy00 = new eenemy("Boars", new Image(20, 20), 1, 80);
var eenemy01 = new eenemy("Settlers", new Image(20, 20), 3, 20);
var eenemy02 = new eenemy("Hunters", new Image(20, 20), 5, 30);
var eenemy03 = new eenemy("Missionaries", new Image(20, 20), 7, 23);
var eenemy04 = new eenemy("Unicorns", new Image(20, 20), 2, 106);
var eenemy05 = new eenemy("Ents", new Image(20, 20), 0, 105);
var eenemy06 = new eenemy("Undead", new Image(20, 20), 8, 82);
var eenemy07 = new eenemy("Phoenixes", new Image(20, 20), 11, 21);
var uresource00 = new uResource("Corpses", new Image(20, 20));
var uresource01 = new uResource("Stone", new Image(20, 20));
var uresource02 = new uResource("Wood", new Image(20, 20));
var uresource03 = new uResource("Skeletons", new Image(20, 20));
var uresource04 = new uResource("Ghosts", new Image(20, 20));
var uresource05 = new uResource("Coffins", new Image(20, 20));
var uresource06 = new uResource("Acolytes", new Image(20, 20));
var uresource07 = new uResource("Books", new Image(20, 20));
var uresource08 = new uResource("Liches", new Image(20, 20));
var uresource09 = new uResource("Gold", new Image(20, 20));
var uresource10 = new uResource("Limbs", new Image(20, 20));
var uresource11 = new uResource("Necromancers", new Image(20, 20));
var uresource12 = new uResource("Mummies", new Image(20, 20));
var ubuilding00 = new uBuilding("Graveyards", 0, 25, -1, 0, -1, 0, 25);
var ubuilding01 = new uBuilding("Necropolises", 0, 47, -1, 0, -1, 0, 25);
var ubuilding02 = new uBuilding("Barrows", 0, 50, -1, 0, -1, 0, 25);
var ubuilding03 = new uBuilding("Tombs", 0, 58, 1, 25, -1, 0, 25);
var ubuilding04 = new uBuilding("Crypts", 1, 29, -1, 0, -1, 0, 18);
var ubuilding05 = new uBuilding("Mires", 0, 13, 2, 4, -1, 0, 3);
var ubuilding06 = new uBuilding("Mansions", 1, 7, 2, 7, -1, 0, 4);
var ubuilding07 = new uBuilding("Sheds", 2, 8, -1, 0, -1, 0, 4);
var ubuilding08 = new uBuilding("Catacombs", 0, 24, 1, 12, -1, 0, 6);
var ubuilding09 = new uBuilding("Conclaves", 2, 8, 6, 8, -1, 0, 4);
var ubuilding10 = new uBuilding("Mass Graves", 0, 35, -1, 0, -1, 0, 7);
var ubuilding11 = new uBuilding("Mausoleums", 0, 12, 1, 8, -1, 0, 3);
var ubuilding12 = new uBuilding("Charnels", 1, 14, -1, 0, -1, 0, 5);
var ubuilding13 = new uBuilding("Sepulchres", 1, 30, 7, 18, -1, 0, 12);
var ubuilding14 = new uBuilding("Abominations", 0, 11, -1, 0, -1, 0, 2);
var ubuilding15 = new uBuilding("Obelisks", 1, 3, 7, 2, -1, 0, 1);
var ubuilding16 = new uBuilding("Pyramids", 1, 3, 9, 2, -1, 0, 1);
var uenemy00 = new uenemy("Peasants", new Image(20, 20), 0, 60);
var uenemy01 = new uenemy("Dwarves", new Image(20, 20), 1, 25);
var uenemy02 = new uenemy("Soldiers", new Image(20, 20), 3, 50);
var uenemy03 = new uenemy("Elves", new Image(20, 20), 2, 26);
var uenemy04 = new uenemy("Monks", new Image(20, 20), 6, 34);
var uenemy05 = new uenemy("Witches", new Image(20, 20), 7, 33);
var uenemy06 = new uenemy("Zombies", new Image(20, 20), 5, 36);
var uenemy07 = new uenemy("Southerners", new Image(20, 20), 9, 21);
var sresource00 = new sResource("Water", new Image(20, 20));
var sresource01 = new sResource("Feed", new Image(20, 20));
var sresource02 = new sResource("Slaves", new Image(20, 20));
var sresource03 = new sResource("Stone", new Image(20, 20));
var sresource04 = new sResource("Camels", new Image(20, 20));
var sresource05 = new sResource("Coins", new Image(20, 20));
var sresource06 = new sResource("Mercenaries", new Image(20, 20));
var sresource07 = new sResource("Cavalry", new Image(20, 20));
var sresource08 = new sResource("Wood", new Image(20, 20));
var sresource09 = new sResource("Ballistas", new Image(20, 20));
var sresource10 = new sResource("Elephants", new Image(20, 20));
var sresource11 = new sResource("Gems", new Image(20, 20));
var sresource12 = new sResource("Morale", new Image(20, 20));
var sbuilding00 = new sBuilding("Wells", 0, 25, -1, 0, -1, 0, 25);
var sbuilding01 = new sBuilding("Fields", 0, 30, -1, 0, -1, 0, 15);
var sbuilding02 = new sBuilding("Gardens", 0, 3, -1, 0, -1, 0, 1);
var sbuilding03 = new sBuilding("Huts", 1, 8, -1, 0, -1, 0, 3);
var sbuilding04 = new sBuilding("Plantations", 0, 18, 1, 14, -1, 0, 6);
var sbuilding05 = new sBuilding("Canals", 0, 18, 2, 12, -1, 0, 5);
var sbuilding06 = new sBuilding("Excavations", 2, 6, -1, 0, -1, 0, 2);
var sbuilding07 = new sBuilding("Coliseums", 3, 4, -1, 0, -1, 0, 1);
var sbuilding08 = new sBuilding("Prisons", 2, 7, 3, 7, -1, 0, 2);
var sbuilding09 = new sBuilding("Markets", 3, 11, -1, 0, -1, 0, 4);
var sbuilding10 = new sBuilding("Water Wheels", 3, 6, 8, 3, -1, 0, 2);
var sbuilding11 = new sBuilding("Ships", 8, 2, -1, 0, -1, 0, 1);
var sbuilding12 = new sBuilding("Fountains", 0, 6, 3, 4, -1, 0, 1);
var sbuilding13 = new sBuilding("Factories", 2, 4, 3, 5, 8, 3, 1);
var sbuilding14 = new sBuilding("Banks", 3, 4, 5, 3, -1, 0, 1);
var sbuilding15 = new sBuilding("Aquaducts", 3, 14, -1, 0, -1, 0, 3);
var sbuilding16 = new sBuilding("Ports", 3, 5, 8, 3, -1, 0, 1);
var sbuilding17 = new sBuilding("Palisades", 8, 8, -1, 0, -1, 0, 4);
var sbuilding18 = new sBuilding("Barns", 1, 18, 8, 9, -1, 0, 3);
var sbuilding19 = new sBuilding("Treasuries", 3, 10, 5, 9, -1, 0, 2);
var sbuilding20 = new sBuilding("Palaces", 3, 6, 5, 5, 11, 3, 1);
var sbuilding21 = new sBuilding("Mirrors", 5, 9, 11, 7, -1, 0, 2);
var senemy00 = new senemy("Rebels", new Image(20, 20), 2, 54);
var senemy01 = new senemy("Nomads", new Image(20, 20), 4, 39);
var senemy02 = new senemy("Northerners", new Image(20, 20), 8, 20);
var senemy03 = new senemy("Bandits", new Image(20, 20), 5, 63);
var senemy04 = new senemy("Undead", new Image(20, 20), 3, 66);
var senemy05 = new senemy("Elementals", new Image(20, 20), 0, 119);
var senemy06 = new senemy("Elephants", new Image(20, 20), 1, 96);
var senemy07 = new senemy("Dwarves", new Image(20, 20), 11, 52);
var interval0;
var interval1;

function string2ArrayBuffer(str){
    if(/[\u0080-\uffff]/.test(str)){
        throw new Error("this needs encoding, like UTF-8");
    }
    var arr = new Uint8Array(str.length);
    for(var i=str.length; i--; )
        arr[i] = str.charCodeAt(i);
    return arr.buffer;
}

function arrayBuffer2String(buffer){
    var arr = new Uint8Array(buffer);
    var str = String.fromCharCode.apply(String, arr);
    if(/[\u0080-\uffff]/.test(str)){
        throw new Error("this string seems to contain (still encoded) multibytes");
    }
    return str;
}

function copyBuffer(dest, src) {
	var destArray = new Int16Array(dest);
	var srcArray = new Int16Array(src);
	for (var i=srcArray.length; i--; ) {
		destArray[i] = srcArray[i];
	}
}

function bigInt() {
	this.data = new Int8Array(100);
	this.data.fill(0);
}

function pushBig(big, j) {
	var i = 0;
	while (i < 100) {
		gameState[i+j] = big.data[i];
		i++;
	}
}

function pullBig(big, j) {
	var i = 0;
	while (i < 100) {
		big.data[i] = gameState[i+j];
		i++;
	}
}

function copyBig(big1, big2) {
	var i = 0;
	while (i < 100) {
		big1.data[i] = big2.data[i];
		i++;
	}
}

function toSmall(big) {
	var i = 0;
	var r = 0;
	while (i < 10) {
		r += (big.data[i] * Math.pow(10, i));
		i++;
	}
	return r;
}

function compareBig(big1, big2) {
	var i = 99;
	var t = 2;
	while (t == 2 && i >= 0) {
		if (big1.data[i] > big2.data[i]) {
			t = 1;
		} else if (big2.data[i] > big1.data[i]) {
			t = 0;
		}
		i--;
	}
	return t;
}

function minoBig(big1, big2) {
	var temp = new bigInt();
	if (compareBig(big1, big2)) {
		copyBig(temp, big2);
	} else {
		copyBig(temp, big1);
	}
	return temp;
}

function minBig() {
	var temp = new bigInt();
	temp = arguments[0];
	var i = 1;
	while (i < arguments.length) {
		temp = minoBig(temp, arguments[i]);
		i++;
	}
	return temp;
}

function maxoBig(big1, big2) {
	var temp = new bigInt();
	if (compareBig(big1, big2)) {
		copyBig(temp, big1);
	} else {
		copyBig(temp, big2);
	}
	return temp;
}

function maxBig() {
	var temp = new bigInt();
	var i = 0;
	while (i < arguments.length) {
		temp = maxoBig(temp, arguments[i]);
		i++;
	}
	return temp;
}

function getpowerBig(big) {
	var i = 99;
	while ((big.data[i] == 0) && (i > 0)) {
		i--;
	}
	return i;
}

function fixBig(big) {
	var i = 0;
	while (i < 100) {
		while (big.data[i] > 9) {
			big.data[i+1]++;
			big.data[i] -= 10;
		}
		i++;
	}
}

function addSmall(big, small) {
	var i = 9;
	var s = small;
	while (s > 0) {
		while (s >= Math.pow(10, i)) {
			big.data[i]++;
			s -= Math.pow(10, i);
		}
		i--;
	}
	fixBig(big);
}

function compareSmall(big, small) {
	var temp = new bigInt();
	addSmall(temp, small);
	return compareBig(big, temp);
}

function subSmall (big, small) {
	var temp = new bigInt();
	addSmall(temp, small);
	subBig(big, temp);
}

function mulSmall (big, small) {
	var temp = new bigInt();
	addSmall (temp, small);
	mulBig(big, temp);
}

function divSmall(big1, small, big2) {
	var temp = new bigInt();
	addSmall (temp, small);
	divBig(big1, temp, big2);
}

function addBig(big1, big2) {
	var i = 0;
	var j = getpowerBig(big2);
	while (i <= j) {
		big1.data[i] += big2.data[i];
		i++;
	}
	fixBig(big1);
}

function subBig(big1, big2) {
	if (compareBig(big1, big2)) {
		temp = new bigInt();
		addBig(temp, big2);
		var i = 0;
		var j = getpowerBig(big1);
		while (i <= j) {
			if (temp.data[i] > big1.data[i]) {
				big1.data[i] += 10;
				temp.data[i+1]++;
			}
			big1.data[i] -= temp.data[i];
			i++;
		}
	} else {
		big1.data.fill(0);
	}
}

function mulBigo(big1, big2) {
	var temp = new bigInt();
	var i = 0;
	var j = 0;
	var im = getpowerBig(big1);
	var jm = getpowerBig(big2);
	while (i <= im) {
		while (j <= jm) {
			temp.data[i+j] += (big1.data[i] * big2.data[j]);
			j++;
		}
		fixBig(temp);
		j = 0;
		i++;
	}
	i = 0;
	while (i < 100) {
		big1.data[i] = temp.data[i];
		i++;
	}
}

function mulBig(big) {
	var temp = new bigInt();
	copyBig(temp, big);
	var i = 1;
	while (i < arguments.length) {
		mulBigo(temp, arguments[i]);
		i++;
	}
	copyBig(big, temp);
}

function shiftlBig(big) {
	var i = 0;
	while (i < 99) {
		big.data[i] = big.data[i+1];
		i++;
	}
}

function shiftrBig(big) {
	var i = 0;
	while (i < 99) {
		big.data[99 - i] = big.data[98 - i];
		i++;
	}
	big.data[0] = 0;
}

function divBig(big1, big2, big3) {
	var temp0 = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var power1 = getpowerBig(big1);
	var power2 = getpowerBig(big2);
	big3.data.fill(0);
	if ((power2 == 0) && (big2.data[0] == 0)) {
		if ((power1 == 0) && (big1.data[0] == 0)) {
			return;
		} else {
			big3.data[99] = 1;
			return;
		}
	}
	var a = (power1 - power2);
	var i = 0;
	while (i <= power2) {
		temp0.data[i+a] = big2.data[i];
		i++;
	}
	addBig(temp1, big1);
	while (a >= 0) {
		while (compareBig(temp1, temp0) && (compareSmall(temp1, 1)) && (getpowerBig(temp0) || temp0.data[0])) {
			big3.data[a]++;
			subBig(temp1, temp0);
		}
		shiftlBig(temp0);
		a--;
	}
	fixBig(big3);
}

function rootBig(big, n) {
	var p = getpowerBig(big);
	var temp = new bigInt();
	if (p > 8) {
		var m = p - 8;
		var i = m;
		copyBig(temp, big);
		while (i > 0) {
			shiftlBig(temp);
			i--;
		}
		p = m % n;
		i = Math.floor(m / n);
		while (p > 0) {
			shiftrBig(temp);
			p--;
		}
		var t = toSmall(temp);
		t = Math.floor(Math.pow(t, (1 / n)));
		temp.data.fill(0);
		addSmall(temp, t);
		while (i > 0) {
			shiftrBig(temp);
			i--;
		}
	} else {
		p = toSmall(big);
		p = Math.floor(Math.pow(p, (1 / n)));
		addSmall(temp, p);
	}
	return temp;
}

function displayBig(big) {
	var p = getpowerBig(big);
	p = Math.max(p, 0);
	var r = "";
	if (p < 5) {
		while (p >= 0) {
			r = r + big.data[p];
			p--;
		}
	} else if (p < 10) {
		r = r + big.data[p] + "." + big.data[p - 1] + big.data[p - 2] + "e" + p;
	} else {
		r = r + big.data[p] + "." + big.data[p - 1] + "e" + p;
	}
	return r;
}

function rootEnemies() {
	var temp = new bigInt();
	var temp2 = new bigInt();
	pullBig(temp, (currentview * 10000) + 1600);
	temp2 = rootBig(temp, 2);
	return "[" + displayBig(temp2) + "]";
}

function getPower(num, power) {
	temp = new bigInt();
	var mod = power % num;
	var div = Math.floor(power / num);
	if (num == 25) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 6) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 7) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 8) {
			temp.data[div] = 2;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 10) {
			temp.data[div] = 2;
			temp.data[div - 1] = 4;
		} else if (mod == 11) {
			temp.data[div] = 2;
			temp.data[div - 1] = 6;
		} else if (mod == 12) {
			temp.data[div] = 2;
			temp.data[div - 1] = 9;
		} else if (mod == 13) {
			temp.data[div] = 3;
			temp.data[div - 1] = 2;
		} else if (mod == 14) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 15) {
			temp.data[div] = 3;
			temp.data[div - 1] = 9;
		} else if (mod == 16) {
			temp.data[div] = 4;
			temp.data[div - 1] = 3;
		} else if (mod == 17) {
			temp.data[div] = 4;
			temp.data[div - 1] = 7;
		} else if (mod == 18) {
			temp.data[div] = 5;
			temp.data[div - 1] = 2;
		} else if (mod == 19) {
			temp.data[div] = 5;
			temp.data[div - 1] = 7;
		} else if (mod == 20) {
			temp.data[div] = 6;
			temp.data[div - 1] = 3;
		} else if (mod == 21) {
			temp.data[div] = 6;
			temp.data[div - 1] = 9;
		} else if (mod == 22) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 23) {
			temp.data[div] = 8;
			temp.data[div - 1] = 3;
		} else if (mod == 24) {
			temp.data[div] = 9;
			temp.data[div - 1] = 1;
		}
	} else if (num == 24) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 6) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 7) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 1;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 10) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 11) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 12) {
			temp.data[div] = 3;
			temp.data[div - 1] = 1;
		} else if (mod == 13) {
			temp.data[div] = 3;
			temp.data[div - 1] = 4;
		} else if (mod == 14) {
			temp.data[div] = 3;
			temp.data[div - 1] = 7;
		} else if (mod == 15) {
			temp.data[div] = 4;
			temp.data[div - 1] = 1;
		} else if (mod == 16) {
			temp.data[div] = 4;
			temp.data[div - 1] = 5;
		} else if (mod == 17) {
			temp.data[div] = 5;
		} else if (mod == 18) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 19) {
			temp.data[div] = 6;
			temp.data[div - 1] = 1;
		} else if (mod == 20) {
			temp.data[div] = 6;
			temp.data[div - 1] = 8;
		} else if (mod == 21) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 22) {
			temp.data[div] = 8;
			temp.data[div - 1] = 3;
		} else if (mod == 23) {
			temp.data[div] = 9;
			temp.data[div - 1] = 1;
		}
	} else if (num == 23) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 6) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 7) {
			temp.data[div] = 2;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 4;
		} else if (mod == 10) {
			temp.data[div] = 2;
			temp.data[div - 1] = 7;
		} else if (mod == 11) {
			temp.data[div] = 3;
		} else if (mod == 12) {
			temp.data[div] = 3;
			temp.data[div - 1] = 3;
		} else if (mod == 13) {
			temp.data[div] = 3;
			temp.data[div - 1] = 6;
		} else if (mod == 14) {
			temp.data[div] = 4;
		} else if (mod == 15) {
			temp.data[div] = 4;
			temp.data[div - 1] = 5;
		} else if (mod == 16) {
			temp.data[div] = 5;
		} else if (mod == 17) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 18) {
			temp.data[div] = 6;
			temp.data[div - 1] = 1;
		} else if (mod == 19) {
			temp.data[div] = 6;
			temp.data[div - 1] = 8;
		} else if (mod == 20) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 21) {
			temp.data[div] = 8;
			temp.data[div - 1] = 3;
		} else if (mod == 22) {
			temp.data[div] = 9;
			temp.data[div - 1] = 1;
		}
	} else if (num == 22) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 6) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 1;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 6;
		} else if (mod == 10) {
			temp.data[div] = 2;
			temp.data[div - 1] = 9;
		} else if (mod == 11) {
			temp.data[div] = 3;
			temp.data[div - 1] = 2;
		} else if (mod == 12) {
			temp.data[div] = 3;
			temp.data[div - 1] = 6;
		} else if (mod == 13) {
			temp.data[div] = 4;
		} else if (mod == 14) {
			temp.data[div] = 4;
			temp.data[div - 1] =5;
		} else if (mod == 15) {
			temp.data[div] = 5;
		} else if (mod == 16) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 17) {
			temp.data[div] = 6;
			temp.data[div - 1] = 1;
		} else if (mod == 18) {
			temp.data[div] = 6;
			temp.data[div - 1] = 8;
		} else if (mod == 19) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 20) {
			temp.data[div] = 8;
			temp.data[div - 1] = 3;
		} else if (mod == 21) {
			temp.data[div] = 9;
			temp.data[div - 1] = 1;
		}
	} else if (num == 21) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 6) {
			temp.data[div] = 2;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 10) {
			temp.data[div] = 3;
			temp.data[div - 1] = 1;
		} else if (mod == 11) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 12) {
			temp.data[div] = 3;
			temp.data[div - 1] = 9;
		} else if (mod == 13) {
			temp.data[div] = 4;
			temp.data[div - 1] = 3;
		} else if (mod == 14) {
			temp.data[div] = 4;
			temp.data[div - 1] =8;
		} else if (mod == 15) {
			temp.data[div] = 5;
			temp.data[div - 1] = 4;
		} else if (mod == 16) {
			temp.data[div] = 6;
		} else if (mod == 17) {
			temp.data[div] = 6;
			temp.data[div - 1] = 7;
		} else if (mod == 18) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 19) {
			temp.data[div] = 8;
			temp.data[div - 1] = 3;
		} else if (mod == 20) {
			temp.data[div] = 9;
			temp.data[div - 1] = 1;
		}
	} else if (num == 20) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 6) {
			temp.data[div] = 2;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 9) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 10) {
			temp.data[div] = 3;
			temp.data[div - 1] = 1;
		} else if (mod == 11) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 12) {
			temp.data[div] = 4;
		} else if (mod == 13) {
			temp.data[div] = 4;
			temp.data[div - 1] = 5;
		} else if (mod == 14) {
			temp.data[div] = 5;
		} else if (mod == 15) {
			temp.data[div] = 5;
			temp.data[div - 1] = 6;
		} else if (mod == 16) {
			temp.data[div] = 6;
			temp.data[div - 1] = 3;
		} else if (mod == 17) {
			temp.data[div] = 7;
		} else if (mod == 18) {
			temp.data[div] = 8;
		} else if (mod == 19) {
			temp.data[div] = 9;
		}
	} else if (num == 19) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 9) {
			temp.data[div] = 3;
			temp.data[div - 1] = 1;
		} else if (mod == 10) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 11) {
			temp.data[div] = 3;
			temp.data[div - 1] = 9;
		} else if (mod == 12) {
			temp.data[div] = 4;
			temp.data[div - 1] = 4;
		} else if (mod == 13) {
			temp.data[div] = 5;
		} else if (mod == 14) {
			temp.data[div] = 5;
			temp.data[div - 1] = 6;
		} else if (mod == 15) {
			temp.data[div] = 6;
			temp.data[div - 1] = 3;
		} else if (mod == 16) {
			temp.data[div] = 7;
		} else if (mod == 17) {
			temp.data[div] = 8;
		} else if (mod == 18) {
			temp.data[div] = 9;
		}
	} else if (num == 18) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 1;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 5) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 8) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 9) {
			temp.data[div] = 3;
			temp.data[div - 1] = 2;
		} else if (mod == 10) {
			temp.data[div] = 3;
			temp.data[div - 1] = 6;
		} else if (mod == 11) {
			temp.data[div] = 4;
		} else if (mod == 12) {
			temp.data[div] = 4;
			temp.data[div - 1] = 5;
		} else if (mod == 13) {
			temp.data[div] = 5;
			temp.data[div - 1] = 2;
		} else if (mod == 14) {
			temp.data[div] = 6;
		} else if (mod == 15) {
			temp.data[div] = 7;
		} else if (mod == 16) {
			temp.data[div] = 8;
		} else if (mod == 17) {
			temp.data[div] = 9;
		}
	} else if (num == 17) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 5) {
			temp.data[div] = 2;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 6;
		} else if (mod == 8) {
			temp.data[div] = 3;
		} else if (mod == 9) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 10) {
			temp.data[div] = 4;
		} else if (mod == 11) {
			temp.data[div] = 4;
			temp.data[div - 1] = 6;
		} else if (mod == 12) {
			temp.data[div] = 5;
			temp.data[div - 1] = 3;
		} else if (mod == 13) {
			temp.data[div] = 6;
		} else if (mod == 14) {
			temp.data[div] = 7;
		} else if (mod == 15) {
			temp.data[div] = 8;
		} else if (mod == 16) {
			temp.data[div] = 9;
		}
	} else if (num == 16) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 7) {
			temp.data[div] = 2;
			temp.data[div - 1] = 9;
		} else if (mod == 8) {
			temp.data[div] = 3;
			temp.data[div - 1] = 4;
		} else if (mod == 9) {
			temp.data[div] = 3;
			temp.data[div - 1] = 9;
		} else if (mod == 10) {
			temp.data[div] = 4;
			temp.data[div - 1] = 5;
		} else if (mod == 11) {
			temp.data[div] = 5;
			temp.data[div - 1] = 2;
		} else if (mod == 12) {
			temp.data[div] = 6;
		} else if (mod == 13) {
			temp.data[div] = 7;
		} else if (mod == 14) {
			temp.data[div] = 8;
		} else if (mod == 15) {
			temp.data[div] = 9;
		}
	} else if (num == 15) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 6;
		} else if (mod == 7) {
			temp.data[div] = 3;
		} else if (mod == 8) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 9) {
			temp.data[div] = 4;
		} else if (mod == 10) {
			temp.data[div] = 4;
			temp.data[div - 1] = 7;
		} else if (mod == 11) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 12) {
			temp.data[div] = 6;
			temp.data[div - 1] = 5;
		} else if (mod == 13) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		} else if (mod == 14) {
			temp.data[div] = 8;
			temp.data[div - 1] = 7;
		}
	} else if (num == 14) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 6;
		} else if (mod == 4) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 6;
		} else if (mod == 7) {
			temp.data[div] = 3;
		} else if (mod == 8) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 9) {
			temp.data[div] = 4;
			temp.data[div - 1] = 2;
		} else if (mod == 10) {
			temp.data[div] = 5;
		} else if (mod == 11) {
			temp.data[div] = 6;
		} else if (mod == 12) {
			temp.data[div] = 7;
		} else if (mod == 13) {
			temp.data[div] = 8;
			temp.data[div - 1] = 5;
		}
	} else if (num == 13) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 4) {
			temp.data[div] = 2;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 4;
		} else if (mod == 6) {
			temp.data[div] = 2;
			temp.data[div - 1] = 9;
		} else if (mod == 7) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 8) {
			temp.data[div] = 4;
			temp.data[div - 1] = 2;
		} else if (mod == 9) {
			temp.data[div] = 5;
		} else if (mod == 10) {
			temp.data[div] = 6;
		} else if (mod == 11) {
			temp.data[div] = 7;
		} else if (mod == 12) {
			temp.data[div] = 8;
			temp.data[div - 1] = 5;
		}
	} else if (num == 12) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 8;
		} else if (mod == 4) {
			temp.data[div] = 2;
			temp.data[div - 1] = 2;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 7;
		} else if (mod == 6) {
			temp.data[div] = 3;
			temp.data[div - 1] = 3;
		} else if (mod == 7) {
			temp.data[div] = 4;
		} else if (mod == 8) {
			temp.data[div] = 4;
			temp.data[div - 1] = 8;
		} else if (mod == 9) {
			temp.data[div] = 5;
			temp.data[div - 1] = 8;
		} else if (mod == 10) {
			temp.data[div] = 7;
		} else if (mod == 11) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		}
	} else if (num == 11) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 4) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 5) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 6) {
			temp.data[div] = 3;
			temp.data[div - 1] = 5;
		} else if (mod == 7) {
			temp.data[div] = 4;
			temp.data[div - 1] = 3;
		} else if (mod == 8) {
			temp.data[div] = 5;
			temp.data[div - 1] = 3;
		} else if (mod == 9) {
			temp.data[div] = 6;
			temp.data[div - 1] = 5;
		} else if (mod == 10) {
			temp.data[div] = 8;
		}
	} else if (num == 10) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 2;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 3) {
			temp.data[div] = 1;
			temp.data[div - 1] = 9;
		} else if (mod == 4) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 5) {
			temp.data[div] = 3;
			temp.data[div - 1] = 2;
		} else if (mod == 6) {
			temp.data[div] = 4;
		} else if (mod == 7) {
			temp.data[div] = 5;
		} else if (mod == 8) {
			temp.data[div] = 6;
			temp.data[div - 1] = 5;
		} else if (mod == 9) {
			temp.data[div] = 8;
		}
	} else if (num == 9) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 3) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 3;
		} else if (mod == 5) {
			temp.data[div] = 4;
		} else if (mod == 6) {
			temp.data[div] = 5;
		} else if (mod == 7) {
			temp.data[div] = 6;
			temp.data[div - 1] = 5;
		} else if (mod == 8) {
			temp.data[div] = 8;
		}
	} else if (num == 8) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 3;
		} else if (mod == 2) {
			temp.data[div] = 1;
			temp.data[div - 1] = 7;
		} else if (mod == 3) {
			temp.data[div] = 2;
			temp.data[div - 1] = 3;
		} else if (mod == 4) {
			temp.data[div] = 3;
		} else if (mod == 5) {
			temp.data[div] = 4;
		} else if (mod == 6) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 7) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		}
	} else if (num == 7) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 4;
		} else if (mod == 2) {
			temp.data[div] = 2;
		} else if (mod == 3) {
			temp.data[div] = 2;
			temp.data[div - 1] = 8;
		} else if (mod == 4) {
			temp.data[div] = 4;
		} else if (mod == 5) {
			temp.data[div] = 5;
			temp.data[div - 1] = 5;
		} else if (mod == 6) {
			temp.data[div] = 7;
			temp.data[div - 1] = 5;
		}
	} else if (num == 6) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 2) {
			temp.data[div] = 2;
		} else if (mod == 3) {
			temp.data[div] = 3;
		} else if (mod == 4) {
			temp.data[div] = 5;
		} else if (mod == 5) {
			temp.data[div] = 7;
		}
	} else if (num == 5) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 1;
			temp.data[div - 1] = 5;
		} else if (mod == 2) {
			temp.data[div] = 2;
			temp.data[div - 1] = 5;
		} else if (mod == 3) {
			temp.data[div] = 4;
		} else if (mod == 4) {
			temp.data[div] = 6;
		}
	} else if (num == 4) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 2;
		} else if (mod == 2) {
			temp.data[div] = 4;
		} else if (mod == 3) {
			temp.data[div] = 6;
		}
	} else if (num == 3) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 2;
		} else if (mod == 2) {
			temp.data[div] = 5;
		}
	} else if (num == 2) {
		if (mod == 0) {
			temp.data[div] = 1;
		} else if (mod == 1) {
			temp.data[div] = 3;
		}
	} else if (num == 1) {
		temp.data[div] = 1;
	}
	return temp;
}

function hEnemy(name, image, resource, base) {
	this.name = name;
	this.image = image;
	this.resource = resource;
	this.base = base;
}

function gethEnemy(n) {
	if (n == 0) {
		return henemy00;
	} else if (n == 1) {
		return henemy01;
	} else if (n == 2) {
		return henemy02;
	} else if (n == 3) {
		return henemy03;
	} else if (n == 4) {
		return henemy04;
	} else if (n == 5) {
		return henemy05;
	} else if (n == 6) {
		return henemy06;
	}
}

function gethMight() {
	var temp = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	var temp4 = new bigInt();
	pullBig(temp, 10800);
	pullBig(temp2, 13200);
	addSmall(temp2, 2);
	if (gameState[11911] > 2) {
		pullBig(temp3, 13100);
		divSmall(temp3, 3, temp4);
		addBig(temp2, temp4);
	}
	pullBig(temp3, 11100);
	mulBig(temp3, temp2);
	addBig(temp, temp3);
	addSmall(temp2, 1);
	pullBig(temp3, 11400);
	if (gameState[11909]) {
		pullBig(temp4, 13300);
		addBig(temp2, temp4);
	}
	mulBig(temp3, temp2);
	addBig(temp, temp3);
	if (gameState[21902]) {
		pullBig(temp2, 20600);
		addBig(temp, temp2);
		if (gameState[21902] > 2) {
			pullBig(temp2, 20700);
			pullBig(temp3, 23100);
			addSmall(temp3, 1);
			mulBig(temp2, temp3);
			addBig(temp, temp2);
		}
	}
	return temp;
}

function hLosses() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 11600);
	if (gameState[11991] == 2) {
		pullBig(temp1, 10900);
		pullBig(temp2, 13600);
		if (compareBig(temp1, temp2)) {
			copyBig(temp3, temp2);
		} else {
			copyBig(temp3, temp1);
		}
		pullBig(temp1, 11400);
		mulBig(temp1, temp3);
		mulSmall(temp1, 3);
		subBig(temp, temp1);
	}
	if (gameState[21902] > 3) {
		pullBig(temp1, 21000);
		subBig(temp, temp1);
	}
	temp1 = gethMight();
	pullBig(temp2, 13900);
	if (gameState[21902] > 1) {
		pullBig(temp3, 23300);
		addBig(temp2, temp3);
	}
	if (gameState[11911]) {
		pullBig(temp3, 13100);
		addBig(temp2, temp3);
	}
	temp3 = rootBig(temp1, 2);
	mulBig(temp2, temp3);
	if (gameState[11985] == 1) {
		var temp4 = new bigInt();
		pullBig(temp4, 13000);
		addSmall(temp4, 1);
		mulBig(temp2, temp4);
	}
	subBig(temp, temp2);
	mulBig(temp, temp);
	temp2.data.fill(0);
	divBig(temp, temp1, temp2);
	pullBig(temp, 11000);
	subBig(temp2, temp);
	if (gameState[31903]) {
		pullBig(temp, 31000);
		subBig(temp2, temp);
	}
	pullBig(temp, 13800);
	if (gameState[51906]) {
		pullBig(temp1, 53700);
		addBig(temp, temp1);
	}
	if (gameState[11911] > 1) {
		pullBig(temp1, 13100);
		addBig(temp, temp1);
	}
	mulBig(temp3, temp);
	if (gameState[11985] == 1) {
		pullBig(temp, 13000);
		addSmall(temp, 1);
		mulBig(temp3, temp);
	}
	subBig(temp2, temp3);
	if (gameState[11908]) {
		pullBig(temp, 11400);
		subBig(temp2, temp);
	}
	return temp2;
}

function hReward() {
	var temp = new bigInt();
	var temp2 = new bigInt();
	pullBig(temp2, 11800);
	addSmall(temp2, 100);
	pullBig(temp, 11500);
	temp = getPower(20, gethEnemy(gameState[11701]).base + toSmall(temp) - (5 * gameState[11701]) - 20);
	mulBig(temp, temp2);
	if (gameState[41906] && !gameState[41983] && (gameState[11701] == 5)) {
		var temp3 = new bigInt();
		pullBig(temp3, 42800);
		if (gameState[41991] == 2) {
			pullBig(temp2, 43600);
			addSmall(temp2, 1);
			mulBig(temp3, temp2);
		}
		addSmall(temp3, 100);
		mulBig(temp, temp3);
		if (gameState[41906] > 1) {
			pullBig(temp3, 41200);
			addSmall(temp3, 1000000);
			mulBig(temp, temp3);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
		}
		shiftlBig(temp);
		shiftlBig(temp);
	}
	shiftlBig(temp);
	shiftlBig(temp);
	return temp;
}

function hResource(id, name, image) {
	this.id = id;
	this.name = name;
	this.image = image;
}

function gethResource(n) {
	if (n == 0) {
		return hResource00;
	} else if (n == 1) {
		return hResource01;
	} else if (n == 2) {
		return hResource02;
	} else if (n == 3) {
		return hResource03;
	} else if (n == 4) {
		return hResource04;
	} else if (n == 5) {
		return hResource05;
	} else if (n == 6) {
		return hResource06;
	} else if (n == 7) {
		return hResource07;
	} else if (n == 8) {
		return hResource08;
	} else if (n == 9) {
		return hResource09;
	} else if (n == 10) {
		return hResource10;
	} else if (n == 11) {
		return hResource11;
	} else if (n == 12) {
		return hResource12;
	} else if (n == 14) {
		return hResource14;
	}
}

function hResourceImage(id) {
	if (id == 0) {
		return hResource00.image;
	} else if (id == 1) {
		return hResource01.image;
	} else if (id == 2) {
		return hResource02.image;
	} else if (id == 3) {
		return hResource03.image;
	} else if (id == 4) {
		return hResource04.image;
	} else if (id == 5) {
		return hResource05.image;
	} else if (id == 6) {
		return hResource06.image;
	} else if (id == 7) {
		return hResource07.image;
	} else if (id == 8) {
		return hResource08.image;
	} else if (id == 9) {
		return hResource09.image;
	} else if (id == 10) {
		return hResource10.image;
	} else if (id == 11) {
		return hResource11.image;
	} else if (id == 12) {
		return hResource12.image;
	} else if (id == 14) {
		return hResource14.image;
	}
}

function displayhResource(resource) {
	var y = 528 + (25 * (resource.id % 3));
	var x = 3 + (121 * Math.floor(resource.id / 3));
	context0.drawImage(resource.image, x, y, 20, 20);
	x += 23;
	y += 18;
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	var i = 0;
	var n = 0;
	pullBig(temp, 10000 + (100 * resource.id));
	if (resource.id == 0) {
		pullBig(temp1, 12000);
		if (gameState[11980] == 0) {
			pullBig(temp2, 12500);
			temp2.data[0] += 1;
			mulBig(temp1, temp2);
		}
		if (gameState[11988] == 1) {
			pullBig(temp2, 13300);
			temp2.data[0] += 1;
			mulBig(temp1, temp2);
		}
		if (gameState[11984] == 2) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 20);
			addBig(temp1, temp2);
		}
		if (gameState[11701] == 0) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11976] == 0) {
			pullBig(temp2, 12100);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (gameState[11977] == 0) {
			pullBig(temp2, 12200);
			if (gameState[11988] == 2) {
				pullBig(temp3, 13300);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (gameState[31902] && (gameState[31980] == 1)) {
				pullBig(temp3, 32500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if ((gameState[11978] == 0) && gameState[11901]) {
			pullBig(temp2, 12300);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if ((gameState[11982] == 0) && gameState[11901]) {
			pullBig(temp2, 12700);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if ((gameState[11981] == 0) && gameState[11901]) {
			pullBig(temp2, 12600);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if ((gameState[11989] == 0) && gameState[11901]) {
			pullBig(temp2, 13400);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if (gameState[11979] == 0) {
			pullBig(temp2, 12400);
			if (!gameState[11902]) {
				mulSmall(temp2, 2);
			}
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if (!gameState[11981] && !gameState[11976]) {
			pullBig(temp2, 12100);
			pullBig(temp3, 12600);
			mulBig(temp2, temp3);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if (gameState[11984] == 1) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 20);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if (gameState[11992] == 1) {
			pullBig(temp2, 13700);
			mulSmall(temp2, 50);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
	} else if (resource.id == 1) {
		if (!gameState[11976]) {
			pullBig(temp1, 12100);
		}
		if (!gameState[11981]) {
			pullBig(temp2, 12600);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[11701] == 1) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11984] == 4) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 10);
			addBig(temp1, temp2);
		} else if (gameState[11984] == 3) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 10);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (!gameState[11983]) {
			pullBig(temp2, 12800);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if ((gameState[11992] > 3) && (gameState[11992] < 8)) {
			pullBig(temp2, 13700);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 2) {
		if (!gameState[11977]) {
			pullBig(temp1, 12200);
		}
		if (gameState[11988] == 2) {
			pullBig(temp2, 13300);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[31902] && (gameState[31980] == 1)) {
			pullBig(temp2, 32500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if ((!gameState[11978]) && !gameState[11901]) {
			pullBig(temp2, 12300);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if ((!gameState[11982]) && !gameState[11901]) {
			pullBig(temp2, 12700);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (!gameState[11981] && !gameState[11976] && !gameState[11901]) {
			pullBig(temp2, 12600);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (!gameState[11985]) {
			pullBig(temp2, 13000);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (!gameState[11989] && !gameState[11901]) {
			pullBig(temp2, 13400);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (gameState[11988] == 4) {
			pullBig(temp2, 13300);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		} else if ((gameState[11988] == 3) & (gameState[11985] == 0)) {
			pullBig(temp2, 13000);
			pullBig(temp3, 13300);
			mulBig(temp2, temp3);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 3) {
		if (!gameState[11978]) {
			pullBig(temp1, 12300);
		}
		if (gameState[51986] == 8) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, getsMorale());
			addBig(temp1, temp2);
		}
		if (gameState[11701] == 5) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11984] == 6) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 5);
			addBig(temp1, temp2);
		} else if (gameState[11984] == 5) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 5);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (!gameState[11990]) {
			pullBig(temp2, 13500);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if ((gameState[11992] > 1) && (gameState[11992] < 4)) {
			pullBig(temp2, 13700);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 4) {
		if (gameState[11984] == 8) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 4);
			addBig(temp1, temp2);
		} 
		if (!gameState[11979]) {
			pullBig(temp2, 12400);
			addBig(temp1, temp2);
		}
		if (!gameState[11980] && !gameState[11910]) {
			pullBig(temp2, 12500);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (gameState[11984] == 7) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 4);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
		if (!gameState[11986]) {
			pullBig(temp2, 13100);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
	} else if (resource.id == 5) {
		if (gameState[11701] == 2) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if ((gameState[51989] == 1) && (gameState[51907] > 1)) {
			pullBig(temp2, 53100);
			pullBig(temp3, 53400);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[11989]) {
			pullBig(temp2, 13400);
			addBig(temp1, temp2);
		}
		if (gameState[11984]) {
			if (gameState[11984] & 1) {
				pullBig(temp2, 12900);
				addBig(temp1, temp2);
			} else {
				pullBig(temp2, 12900);
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
	} else if (resource.id == 6) {
		if (!gameState[11982]) {
			pullBig(temp1, 12700);
		}
		if (gameState[11701] == 6) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11984] == 10) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 3);
			addBig(temp1, temp2);
		} else if (gameState[11984] == 9) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 3);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (!gameState[11983]) {
			pullBig(temp2, 12800);
			if (n) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			}
		}
	} else if (resource.id == 7) {
		if (!gameState[11983]) {
			pullBig(temp1, 12800);
		}
		if (gameState[11701] == 4) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11984] == 12) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 2);
			addBig(temp1, temp2);
		} else if (gameState[11984] == 11) {
			pullBig(temp2, 12900);
			mulSmall(temp2, 2);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (!gameState[11985]) {
			pullBig(temp2, 13000);
			if (gameState[11988] == 3) {
				pullBig(temp3, 13300);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (gameState[11992] == 8) {
			pullBig(temp2, 13700);
			mulSmall(temp2, 5);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 8) {
		if (!gameState[11985]) {
			pullBig(temp1, 13000);
			if (gameState[11988] == 3) {
				pullBig(temp2, 13300);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
		if (gameState[51986] == 11) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, getsMorale());
			addBig(temp1, temp2);
		}
		if (gameState[11990] == 1) {
			pullBig(temp2, 13500);
			pullBig(temp3, 13300);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[11986]) {
			pullBig(temp2, 13100);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
	} else if (resource.id == 9) {
		if (gameState[11701] == 3) {
			pullBig(temp2, 14000);
			temp3 = hReward();
			shiftlBig(temp3);
			shiftlBig(temp3);
			shiftlBig(temp3);
			mulBig(temp2, temp3);
			pullBig(temp3, 14000);
			temp2 = maxBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11984] == 14) {
			pullBig(temp2, 12900);
			addBig(temp1, temp2);
		} else if (gameState[11984] == 13) {
			pullBig(temp2, 12900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
		if (gameState[11988]) {
			pullBig(temp2, 13300);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (gameState[11990] == 1) {
			pullBig(temp2, 13500);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if (gameState[11991] == 1) {
			pullBig(temp2, 13600);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
		if ((gameState[11992] > 8) && (gameState[11992] < 11)) {
			pullBig(temp2, 13700);
			if (!n) {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					n = 1;
				}
			} else {
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 10) {
		if (gameState[11988] == 4) {
			pullBig(temp1, 13300);
		}
	} else if (resource.id == 11) {
		if (!gameState[11986]) {
			pullBig(temp1, 13100);
		}
		if (gameState[11991] == 1) {
			pullBig(temp2, 13600);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				n = 1;
			}
		}
	} else if (resource.id == 12) {
		temp = gethMight();
		if (!gameState[11985]) {
			pullBig(temp1, 13000);
			if (gameState[11988] == 3) {
				pullBig(temp2, 13300);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
		if (!gameState[11986]) {
			pullBig(temp3, 13200);
			addSmall(temp3, 1);
			pullBig(temp2, 13100);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[11991] == 1) {
			pullBig(temp2, 13600);
			if (gameState[11909]) {
				pullBig(temp3, 13300);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			addBig(temp1, temp2);
		}
		if (gameState[21902]) {
			if (gameState[21981] == 1) {
				pullBig(temp2, 22600);
				addBig(temp1, temp2);
			}
			if ((gameState[21985] == 0) && (gameState[21902] > 2)) {
				pullBig(temp2, 23000);
				pullBig(temp3, 23100);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
				addBig(temp1, temp2);
			}
		}
	} else if (resource.id == 14) {
		if (gameState[11991] == 1) {
			pullBig(temp1, 13600);
		}
	}
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp), x, y);
	if (n) {
		context0.fillStyle = "#FF0000";
		context0.fillText("-" + displayBig(temp1), x + 48, y);
	} else {
		context0.fillStyle = "#00FF00";
		context0.fillText("+" + displayBig(temp1), x + 44, y);
	}
}

function resourceCost(id1, base1, id2, base2, id3, base3, power) {
	this.id1 = id1;
	this.base1 = base1;
	this.id2 = id2;
	this.base2 = base2;
	this.id3 = id3;
	this.base3 = base3;
	this.power = power;
}

function hBuilding(id, name, cost) {
	this.id = id;
	this.name = name;
	this.cost = cost;
}

function displayhBuilding(building) {
	var x = 160 * (Math.floor(building.id / 5));
	var y = 25 + (100 * (building.id % 5));
	context0.drawImage(hbuilding, x, y, 160, 100);
	var temp = new bigInt();
	var j = building.id;
	pullBig(temp, 12000 + (100 * building.id));
	var t = displayBig(temp) + " " + building.name;
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(t, x + 4, y + 20);
	var image = hResourceImage(building.cost.id1);
	var cost = getPower(building.cost.power, (building.cost.base1 + toSmall(temp)));
	context0.drawImage(image, x + 4, y + 27, 20, 20);
	context0.fillText(displayBig(cost), x + 28, y + 42);
	if (building.cost.id2 != -1) {
		image = hResourceImage(building.cost.id2);
		cost = getPower(building.cost.power, (building.cost.base2 + toSmall(temp)));
		context0.drawImage(image, x + 4, y + 49, 20, 20);
		context0.fillText(displayBig(cost), x + 28, y + 64);
	}
	if (building.cost.id3 != -1) {
		image = hResourceImage(building.cost.id3);
		cost = getPower(building.cost.power, (building.cost.base3 + toSmall(temp)));
		context0.drawImage(image, x + 4, y + 71, 20, 20);
		context0.fillText(displayBig(cost), x + 28, y + 86);
	}
	if (building.id == 0) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(hResource00p, x + 120, y + 27, 20, 20);
	} else if (building.id == 1) {
		if (gameState[11976] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource01p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
		}
	} else if (building.id == 2) {
		if (gameState[11977] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource02p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
		}
	} else if (building.id == 3) {
		if (gameState[11978] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource03p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			if (gameState[11901]) {
				context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
			} else {
				context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			}
		}
	} else if (building.id == 4) {
		if (gameState[11979] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource04p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			if (gameState[11902]) {
				context0.fillText("-", x + 106, y + 64);
			} else {
				context0.fillText("-2", x + 101, y + 64);
			}
			context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
		}
	} else if (building.id == 5) {
		if (gameState[11980] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource00p, x + 120, y + 27, 20, 20);
			if (!gameState[11910]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(hResource04p, x + 120, y + 49, 20, 20);
			}
		}
	}  else if (building.id == 6) {
		if (gameState[11981] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource01p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			if (gameState[11901]) {
				context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
			} else {
				context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			}
		}
	} else if (building.id == 7) {
		if (gameState[11982] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource06p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			if (gameState[11901]) {
				context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
			} else {
				context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			}
		}
	} else if (building.id == 8) {
		if (gameState[11983] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource07p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource01p, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource06p, x + 120, y + 71, 20, 20);
		}
	} else if (building.id == 9) {
		if (gameState[11984] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-20", x + 90, y + 64);
			context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+20", x + 88, y + 42);
			context0.drawImage(hResource00p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 3) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 106, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-10", x + 90, y + 64);
			context0.drawImage(hResource01p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 4) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+10", x + 88, y + 42);
			context0.drawImage(hResource01p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 5) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-5", x + 98, y + 64);
			context0.drawImage(hResource03p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 6) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+5", x + 96, y + 42);
			context0.drawImage(hResource03p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 7) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-4", x + 98, y + 64);
			context0.drawImage(hResource04p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 8) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+4", x + 96, y + 42);
			context0.drawImage(hResource04p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 9) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-3", x + 98, y + 64);
			context0.drawImage(hResource06p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 10) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+3", x + 96, y + 42);
			context0.drawImage(hResource06p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 11) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-2", x + 98, y + 64);
			context0.drawImage(hResource07p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 12) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+2", x + 96, y + 42);
			context0.drawImage(hResource07p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 13) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
		} else if (gameState[11984] == 14) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource09p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource05p, x + 120, y + 49, 20, 20);
		}
	} else if (building.id == 10) {
		if (gameState[11985] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource08p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource07p, x + 120, y + 71, 20, 20);
		} else if (gameState[11968]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource08p, x + 120, y + 27, 20, 20);
		}
	} else if (building.id == 11) {
		if (gameState[11986] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource11p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource04p, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource08p, x + 120, y + 71, 20, 20);
		}
	} else if (building.id == 12) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource12p, x + 120, y + 27, 20, 20);
	} else if (building.id == 13) {
		if (gameState[11988] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource00p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
		} else if (gameState[11988] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource02p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
		} else if (gameState[11988] == 3) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(hResource08p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
		} else if (gameState[11988] == 4) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource10p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource09p, x + 120, y + 71, 20, 20);
		}
	} else if (building.id == 14) {
		if (gameState[11989] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource05p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			if (gameState[11901]) {
				context0.drawImage(hResource00p, x + 120, y + 49, 20, 20);
			} else {
				context0.drawImage(hResource02p, x + 120, y + 49, 20, 20);
			}
		}
	} else if (building.id == 15) {
		if (gameState[11990] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(gethEnemy(gameState[11701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource03p, x + 120, y + 49, 20, 20);
		} else if (gameState[11990] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource08p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(gethEnemy(gameState[11701]).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource09p, x + 120, y + 71, 20, 20);
		}
	} else if (building.id == 16) {
		if (gameState[11991] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(hResource14p, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(hResource11p, x + 120, y + 71, 20, 20);
		} else if (gameState[11991] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			if (gameState[11701] == 0) {
				context0.drawImage(hResource02p, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 1) {
				context0.drawImage(henemy01.image, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 2) {
				context0.drawImage(henemy02.image, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 3) {
				context0.drawImage(henemy03.image, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 4) {
				context0.drawImage(henemy04.image, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 5) {
				context0.drawImage(henemy05.image, x + 120, y + 27, 20, 20);
			} else if (gameState[11701] == 6) {
				context0.drawImage(henemy06.image, x + 120, y + 27, 20, 20);
			}
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(hResource09p, x + 120, y + 49, 20, 20);
		}
	} else if (building.id == 17) {
		if (!gameState[11992]) {
		}
		else if (gameState[11992] < 2) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-50", x + 90, y + 42);
			context0.drawImage(hResource00p, x + 120, y + 27, 20, 20);
		} else if (gameState[11992] < 4) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(hResource03p, x + 120, y + 27, 20, 20);
		} else if (gameState[11992] < 8) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(hResource01p, x + 120, y + 27, 20, 20);
		} else if (gameState[11992] < 9) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-5", x + 108, y + 42);
			context0.drawImage(hResource07p, x + 120, y + 27, 20, 20);
		} else if (gameState[11992] < 11) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(hResource09p, x + 120, y + 27, 20, 20);
		}
	} else if (building.id == 18) {
		context0.fillStyle = "#00FF00";
		context0.fillText("*", x + 104, y + 42);
		context0.drawImage(hResource08p, x + 120, y + 27, 20, 20);
	} else if (building.id == 19) {
		context0.fillStyle = "#00FF00";
		context0.fillText("-", x + 106, y + 42);
		context0.drawImage(gethEnemy(gameState[11701]).image, x + 120, y + 27, 20, 20);
	} else if (building.id == 20) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(gethResource(gethEnemy(gameState[11701]).resource).image, x + 120, y + 27, 20, 20);
	}
}

function clickhBuilding(building) {
	var cond1 = 0;
	var cond2 = 0;
	var cond3 = 0;
	temp0 = new bigInt();
	temp1 = new bigInt();
	temp2 = new bigInt();
	temp3 = new bigInt();
	temp4 = new bigInt();
	temp5 = new bigInt();
	temp6 = new bigInt();
	pullBig(temp0, 10000 + (100 * building.cost.id1));
	pullBig(temp1, 12000 + (100 * building.id));
	var a = toSmall(temp1);
	temp2 = getPower(building.cost.power, (a + building.cost.base1));
	if (compareBig(temp0, temp2)) {
		cond1 = 1;
	}
	if (building.cost.id2 == -1) {
		cond2 = 1;
	} else {
		pullBig(temp3, 10000 + (100 * building.cost.id2));
		temp4 = getPower(building.cost.power, (a + building.cost.base2));
		if (compareBig(temp3, temp4)) {
			cond2 = 1;
		}
	}
	if (building.cost.id3 == -1) {
		cond3 = 1;
	} else {
		pullBig(temp5, 10000 + (100 * building.cost.id3));
		temp6 = getPower(building.cost.power, (a + building.cost.base3));
		if (compareBig(temp5, temp6)) {
			cond3 = 1;
		}
	}
	if (cond1 && cond2 && cond3) {
		chighlightt = 4;
		subBig(temp0, temp2);
		pushBig(temp0, 10000 + (100 * building.cost.id1));
		if (building.cost.id2 != -1) {
			subBig(temp3, temp4);
			pushBig(temp3, 10000 + (100 * building.cost.id2));
		}
		if (building.cost.id3 != -1) {
			subBig(temp5, temp6);
			pushBig(temp5, 10000 + (100 * building.cost.id3));
		}
		addSmall(temp1, 1);
		pushBig(temp1, 12000 + (100 * building.id));
		gameState[11950 + building.id] = 1;
	} else {
		chighlightt = -4;
	}
}

function oenemy(name, image, resource, base) {
	this.name = name;
	this.image = image;
	this.resource = resource;
	this.base = base;
}

function getoEnemy(n) {
	if (n == 0) {
		return oenemy00;
	} else if (n == 1) {
		return oenemy01;
	} else if (n == 2) {
		return oenemy02;
	} else if (n == 3) {
		return oenemy03;
	} else if (n == 4) {
		return oenemy04;
	} else if (n == 5) {
		return oenemy05;
	} else if (n == 6) {
		return oenemy06;
	}
}

function oLosses() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	var temp4 = new bigInt();
	var temp5 = new bigInt();
	var root = new bigInt();
	pullBig(temp, 21600);
	pullBig(temp2, 21000);
	if (gameState[21903]) {
		pullBig(temp3, 21100);
		addBig(temp2, temp3);
	}
	mulSmall(temp2, gameState[21702] + 1);
	subBig(temp, temp2);
	root = rootBig(temp, 2);
	pullBig(temp2, 23300);
	if ((gameState[21983] == 0) || gameState[21908]) {
		pullBig(temp3, 22800);
		addSmall(temp3, 1);
		mulBig(temp2, temp3);
	}
	temp3 = rootBig(temp, 2);
	mulBig(temp2, temp3);
	subBig(temp, temp2);
	pullBig(temp2, 20600);
	subBig(temp, temp2);
	pullBig(temp2, 21100);
	if (gameState[21984] == 2) {
		pullBig(temp3, 22900);
		addSmall(temp3, 3);
		mulBig(temp2, temp3);
	} else {
		mulSmall(temp2, 3);
	}
	subBig(temp, temp2);
	if (gameState[21987] == 2) {
		pullBig(temp1, 20500);
		pullBig(temp2, 23200);
		if (compareBig(temp1, temp2)) {
			copyBig(temp3, temp2);
		} else {
			copyBig(temp3, temp1);
		}
		pullBig(temp1, 21000);
		mulBig(temp1, temp3);
		mulSmall(temp1, 3);
		subBig(temp, temp1);
	}
	if ((gameState[21990] == 2) && getpowerBig(temp)) {
		pullBig(temp1, 20700);
		pullBig(temp2, 23500);
		if (compareBig(temp1, temp2)) {
			copyBig(temp3, temp2);
		} else {
			copyBig(temp3, temp1);
		}
		mulBig(temp1, temp3);
		pullBig(temp3, 23100);
		mulBig(temp1, temp3);
		subBig(temp, temp1);
	}
	if (gameState[21991] == 1) {
		pullBig(temp2, 21200);
		pullBig(temp3, 23600);
		mulBig(temp2, root);
		mulBig(temp2, temp3);
		subBig(temp, temp2);
	}
	pullBig(temp2, 20700);
	pullBig(temp3, 23100);
	addSmall(temp3, 2);
	temp5.data[0] = 1;
	if (gameState[21979] == 2) {
		pullBig(temp4, 20400);
		pullBig(temp5, 22400);
		if (compareBig(temp4, temp5)) {
			copyBig(temp4, temp5);
		}
		addSmall(temp4, 1);
		mulBig(temp3, temp4);
		copyBig(temp5, temp4);
	}
	addSmall(temp4, 1);
	mulBig(temp3, temp2);
	if (compareBig(temp, temp3)) {
		subBig(temp, temp3);
		divBig(temp, temp5, temp3);
		addBig(temp3, temp2);
		copyBig(temp, temp3);
	} else {
		pullBig(temp2, 23100);
		addSmall(temp2, 2);
		mulBig(temp2, temp5);
		divBig(temp, temp2, temp3);
		copyBig(temp, temp3);
	}
	return temp;
}

function oResource(name, image) {
	this.name = name;
	this.image = image;
}

function getoResource(n) {
	if (n == 0) {
		return oresource00;
	} else if (n == 1) {
		return oresource01;
	} else if (n == 2) {
		return oresource02;
	} else if (n == 3) {
		return oresource03;
	} else if (n == 4) {
		return oresource04;
	} else if (n == 5) {
		return oresource05;
	} else if (n == 6) {
		return oresource06;
	} else if (n == 7) {
		return oresource07;
	} else if (n == 8) {
		return oresource08;
	} else if (n == 9) {
		return oresource09;
	} else if (n == 10) {
		return oresource10;
	} else if (n == 11) {
		return oresource11;
	} else if (n == 12) {
		return oresource12;
	}
}

function displayoResource(n) {
	var y = 528 + (25 * (n % 3));
	var x = 3 + (121 * Math.floor(n / 3));
	context0.drawImage(getoResource(n).image, x, y, 20, 20);
	x += 23;
	y += 18;
	var ne = 0;
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 20000 + (100 * n));
	if (n == 0) {
		pullBig(temp1, 22000);
		if (gameState[21979] == 1) {
			pullBig(temp2, 22400);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[21984] == 0) {
			pullBig(temp2, 22900);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[21976] == 0) {
			pullBig(temp2, 22100);
			if (gameState[21984] == 1) {
				pullBig(temp3, 22900);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (!gameState[21991] && gameState[21904]) {
			pullBig(temp2, 23600);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 1) {
		if (gameState[21976] == 0) {
			pullBig(temp1, 22100);
		}
		if (gameState[21984] == 1) {
			pullBig(temp2, 22900);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[21977] == 0) {
			pullBig(temp2, 22200);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 2) {
		if (gameState[21977] == 0) {
			pullBig(temp1, 22200);
		}
		if (gameState[11992] == 1) {
			pullBig(temp2, 13700);
			mulSmall(temp2, 50);
			addBig(temp1, temp2);
		}
		if ((gameState[21980] == 1) && (gameState[21901] > 1)) {
			pullBig(temp2, 22500);
			addBig(temp1, temp2);
		}
		if ((gameState[21981] == 1) && (gameState[21901] > 1)) {
			pullBig(temp2, 22600);
			addBig(temp1, temp2);
		}
		if ((gameState[21982] == 1) && (gameState[21901] > 1)) {
			pullBig(temp2, 22700);
			if (gameState[21905]) {
				pullBig(temp3, 23700);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			addBig(temp1, temp2);
		}
		if (gameState[21978] == 0) {
			pullBig(temp2, 22300);
			if (gameState[21990] == 1) {
				pullBig(temp3, 23500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (gameState[21985] == 0) {
			pullBig(temp2, 23000);
			mulSmall(temp2, 2);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if ((!gameState[21978]) && (gameState[21983] == 1)) {
			pullBig(temp2, 22300);
			pullBig(temp3, 22800);
			mulBig(temp2, temp3);
			if (gameState[21990] == 1) {
				pullBig(temp3, 23500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 3) {
		if (gameState[21978] == 0) {
			pullBig(temp1, 22300);
		}
		if (gameState[21983] == 1) {
			pullBig(temp2, 22800);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[21990] == 1) {
			pullBig(temp2, 23500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[21980] == 1) {
			pullBig(temp2, 22500);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (gameState[21982] == 1) {
			pullBig(temp2, 22700);
			if ((gameState[21992] == 1) || gameState[21905]) {
				pullBig(temp3, 23700);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[21981] == 1) {
			pullBig(temp2, 22600);
			mulSmall(temp2, 2);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 4) {
		if (gameState[21980] == 1) {
			pullBig(temp1, 22500);
		}
		if (gameState[41904] && (gameState[41984] == 1)) {
			pullBig(temp2, 42900);
			addBig(temp1, temp2);
		}
		if (gameState[21979] == 1) {
			pullBig(temp2, 22400);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (gameState[21985] == 0) {
			pullBig(temp2, 23000);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 5) {
		if (gameState[11992] == 2) {
			pullBig(temp1, 13700);
		}
		if (gameState[51986] == 9) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			addBig(temp1, temp2);
		}
		if (gameState[21987] == 1) {
			pullBig(temp2, 23200);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (!gameState[21991] && !gameState[21904]) {
			pullBig(temp2, 23600);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 6) {
		if (gameState[21981] == 1) {
			pullBig(temp1, 22600);
		}
	} else if (n == 7) {
		if (!gameState[21985]) {
			pullBig(temp1, 23000);
		}
	} else if (n == 8) {
		if (gameState[21982] == 1) {
			pullBig(temp1, 22700);
			if ((gameState[21992] == 1) || gameState[21905]) {
				pullBig(temp2, 23700);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
		if (gameState[21990] == 0) {
			pullBig(temp2, 20300);
			var i = getpowerBig(temp2);
			pullBig(temp2, 23500);
			mulSmall(temp2, i);
			addBig(temp1, temp2);
		}
		if (gameState[21978] == 0) {
			if (gameState[21990] == 1) {
				pullBig(temp2, 23500);
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
			if (gameState[21983] == 1) {
				pullBig(temp2, 22800);
				if (ne) {
					addBig(temp1, temp2);
				} else {
					if (compareBig(temp1, temp2)) {
						subBig(temp1, temp2);
					} else {
						subBig(temp2, temp1);
						copyBig(temp1, temp2);
						ne = 1;
					}
				}
			}
		}
	} else if (n == 9) {
		if (gameState[11992] == 4) {
			pullBig(temp1, 13700);
		}
		if (gameState[21987] == 1) {
			pullBig(temp2, 23200);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 10) {
		if (gameState[21987] == 1) {
			pullBig(temp1, 23200);
		}
	} else if (n == 12) {
		if (gameState[21991] == 2) {
			pullBig(temp1, 23600);
		}
	}
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp), x, y);
	if (ne) {
		context0.fillStyle = "#FF0000";
		context0.fillText("-" + displayBig(temp1), x + 48, y);
	} else {
		context0.fillStyle = "#00FF00";
		context0.fillText("+" + displayBig(temp1), x + 44, y);
	}
}

function oBuilding(name, r1, b1, r2, b2, r3, b3, power) {
	this.name = name;
	this.r1 = r1;
	this.b1 = b1;
	this.r2 = r2;
	this.b2 = b2;
	this.r3 = r3;
	this.b3 = b3;
	this.power = power;
}

function getoBuilding(n) {
	if (n == 0) {
		return obuilding00;
	} else if (n == 1) {
		return obuilding01;
	} else if (n == 2) {
		return obuilding02;
	} else if (n == 3) {
		return obuilding03;
	} else if (n == 4) {
		return obuilding04;
	} else if (n == 5) {
		return obuilding05;
	} else if (n == 6) {
		return obuilding06;
	} else if (n == 7) {
		return obuilding07;
	} else if (n == 8) {
		return obuilding08;
	} else if (n == 9) {
		return obuilding09;
	} else if (n == 10) {
		return obuilding10;
	} else if (n == 11) {
		return obuilding11;
	} else if (n == 12) {
		return obuilding12;
	} else if (n == 13) {
		return obuilding13;
	} else if (n == 14) {
		return obuilding14;
	} else if (n == 15) {
		return obuilding15;
	} else if (n == 16) {
		return obuilding16;
	} else if (n == 17) {
		return obuilding17;
	}
}

function displayoBuilding(n) {
	var x = 160 * (Math.floor(n / 5));
	var y = 25 + (100 * (n % 5));
	context0.drawImage(obuilding, x, y, 160, 100);
	var temp = new bigInt();
	pullBig(temp, 22000 + (100 * n));
	var building = getoBuilding(n);
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp) + " " + building.name, x + 4, y + 20);
	context0.drawImage(getoResource(building.r1).image, x + 4, y + 27, 20, 20);
	context0.fillText(displayBig(getPower(building.power, (building.b1 + toSmall(temp)))), x + 28, y + 42);
	if (building.r2 != -1) {
		context0.drawImage(getoResource(building.r2).image, x + 4, y + 49, 20, 20);
		context0.fillText(displayBig(getPower(building.power, (building.b2 + toSmall(temp)))), x + 28, y + 64);
		if (building.r3 != -1) {
			context0.drawImage(getoResource(building.r3).image, x + 4, y + 71, 20, 20);
			context0.fillText(displayBig(getPower(building.power, (building.b3 + toSmall(temp)))), x + 28, y + 86);
		}
	}
	if (n == 0) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getoResource(0).image, x + 120, y + 27, 20, 20);
	} else if (n == 1) {
		if (gameState[21976] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 2) {
		if (gameState[21977] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(2).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(1).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 3) {
		if (gameState[21978] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 4) {
		if (gameState[21979] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(0).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(4).image, x + 120, y + 49, 20, 20);
		} else if (gameState[21979] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(3).image, x + 120, y + 27, 20, 20);
			if (gameState[21960]) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 64);
				context0.drawImage(getoResource(7).image, x + 120, y + 49, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 86);
				context0.drawImage(getoResource(4).image, x + 120, y + 71, 20, 20);
			} else {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(4).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 5) {
		if (gameState[21980] == 1) {
			if (gameState[21901] > 1) {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(2).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 64);
				context0.drawImage(getoResource(4).image, x + 120, y + 49, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 86);
				context0.drawImage(getoResource(3).image, x + 120, y + 71, 20, 20);
			} else {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(4).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(3).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 6) {
		if (gameState[21981] == 1) {
			if (gameState[21901] > 1) {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(2).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 64);
				context0.drawImage(getoResource(6).image, x + 120, y + 49, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-2", x + 101, y + 86);
				context0.drawImage(getoResource(3).image, x + 120, y + 71, 20, 20);
			} else {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(6).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-2", x + 101, y + 64);
				context0.drawImage(getoResource(3).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 7) {
		if (gameState[21982] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("%", x + 101, y + 42);
			context0.drawImage(getoResource(getoEnemy(gameState[21701]).resource).image, x + 120, y + 27, 20, 20);
		} else if (gameState[21982] == 1) {
			if (gameState[21901] > 1) {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(2).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 64);
				context0.drawImage(getoResource(8).image, x + 120, y + 49, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 86);
				context0.drawImage(getoResource(3).image, x + 120, y + 71, 20, 20);
			} else {
				context0.fillStyle = "#00FF00";
				context0.fillText("+", x + 104, y + 42);
				context0.drawImage(getoResource(8).image, x + 120, y + 27, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(3).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 8) {
		if (gameState[21983] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(8).image, x + 120, y + 49, 20, 20);
		} else if ((gameState[21983] == 0) && gameState[21963]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 9) {
		if (gameState[21984] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(0).image, x + 120, y + 27, 20, 20);
		} else if (gameState[21984] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(1).image, x + 120, y + 27, 20, 20);
		} else if (gameState[21984] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 10) {
		if (!gameState[21985]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(7).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-2", x + 101, y + 64);
			context0.drawImage(getoResource(2).image, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getoResource(4).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 11) {
		context0.fillStyle = "#00FF00";
		context0.fillText("*", x + 104, y + 42);
		context0.drawImage(getoResource(7).image, x + 120, y + 27, 20, 20);
	} else if (n == 12) {
		if (gameState[21987] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(10).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(5).image, x + 120, y + 49, 20, 20);
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getoResource(9).image, x + 120, y + 71, 20, 20);
		} else if (gameState[21987] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
			if (gameState[21904]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(0).image, x + 120, y + 49, 20, 20);
			} else {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(5).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 13) {
		context0.fillStyle = "#00FF00";
		context0.fillText("-", x + 106, y + 42);
		context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
	} else if (n == 14) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getoResource(11).image, x + 120, y + 27, 20, 20);
	} else if (n == 15) {
		if (gameState[21990] == 0) {
			context0.fillStyle = "#00FF00";
			var tempmess = new bigInt();
			pullBig(tempmess, 20300);
			var lilmess = getpowerBig(tempmess);
			tempmess.data.fill(0);
			addSmall(tempmess, lilmess);
			context0.fillText("+" + displayBig(tempmess), x + 96 - (8 * getpowerBig(tempmess)), y + 42);
			context0.drawImage(getoResource(8).image, x + 120, y + 27, 20, 20);
		} else if (gameState[21990] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getoResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(8).image, x + 120, y + 49, 20, 20);
		} else if (gameState[21990] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(7).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 16) {
		if (gameState[21991] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
			if (gameState[21904]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(0).image, x + 120, y + 49, 20, 20);
			} else {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getoResource(5).image, x + 120, y + 49, 20, 20);
			}
		} else if (gameState[21991] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getoResource(12).image, x + 120, y + 49, 20, 20);
		} else if (gameState[21991] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getoResource(12).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 17) {
		if (gameState[21992] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getoEnemy(gameState[21701]).image, x + 120, y + 27, 20, 20);
		} else if (gameState[21992] == 1) {
			if (gameState[21982] == 0) {
				context0.fillStyle = "#00FF00";
				context0.fillText("%", x + 101, y + 42);
				context0.drawImage(getoResource(getoEnemy(gameState[21701]).resource).image, x + 120, y + 27, 20, 20);
			} else if (gameState[21982] == 1) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 42);
				context0.drawImage(getoResource(8).image, x + 120, y + 27, 20, 20);
			}
		}
	}
}

function clickoBuilding(n) {
	var cond1 = 0;
	var cond2 = 0;
	var cond3 = 0;
	var building = getoBuilding(n);
	temp0 = new bigInt();
	temp1 = new bigInt();
	temp2 = new bigInt();
	temp3 = new bigInt();
	temp4 = new bigInt();
	temp5 = new bigInt();
	temp6 = new bigInt();
	pullBig(temp0, 20000 + (100 * building.r1));
	pullBig(temp1, 22000 + (100 * n));
	var a = toSmall(temp1);
	temp2 = getPower(building.power, a + building.b1);
	if (compareBig(temp0, temp2)) {
		cond1 = 1;
	}
	if (building.r2 == -1) {
		cond2 = 1;
	} else {
		pullBig(temp3, 20000 + (100 * building.r2));
		temp4 = getPower(building.power, (a + building.b2));
		if (compareBig(temp3, temp4)) {
			cond2 = 1;
		}
	}
	if (building.r3 == -1) {
		cond3 = 1;
	} else {
		pullBig(temp5, 20000 + (100 * building.r3));
		temp6 = getPower(building.power, (a + building.b3));
		if (compareBig(temp5, temp6)) {
			cond3 = 1;
		}
	}
	if (cond1 && cond2 && cond3) {
		chighlightt = 4;
		subBig(temp0, temp2);
		pushBig(temp0, 20000 + (100 * building.r1));
		if (building.r2 != -1) {
			subBig(temp3, temp4);
			pushBig(temp3, 20000 + (100 * building.r2));
		}
		if (building.r3 != -1) {
			subBig(temp5, temp6);
			pushBig(temp5, 20000 + (100 * building.r3));
		}
		addSmall(temp1, 1);
		pushBig(temp1, 22000 + (100 * n));
		gameState[21950 + n] = 1;
		if (n == 14) {
			pullBig(temp1, 21100);
			addSmall(temp1, 5);
			pushBig(temp1, 21100);
			pullBig(temp1, 26100);
			addSmall(temp1, 5);
			pushBig(temp1, 26100);
		} else if (n == 16) {
			pullBig(temp1, 21200);
			addSmall(temp1, 100);
			pushBig(temp1, 21200);
			pullBig(temp1, 26200);
			addSmall(temp1, 100);
			pushBig(temp1, 26200);
		}
	} else {
		chighlightt = -4;
	}
}

function eenemy(name, image, resource, base) {
	this.name = name;
	this.image = image;
	this.resource = resource;
	this.base = base;
}

function geteEnemy(n) {
	if (n == 0) {
		return eenemy00;
	} else if (n == 1) {
		return eenemy01;
	} else if (n == 2) {
		return eenemy02;
	} else if (n == 3) {
		return eenemy03;
	} else if (n == 4) {
		return eenemy04;
	} else if (n == 5) {
		return eenemy05;
	} else if (n == 6) {
		return eenemy06;
	} else if (n == 7) {
		return eenemy07;
	}
}

function eLosses() {
	if (!gameState[31956]) {
		return "";
	}
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 31600);
	pullBig(temp1, 31000);
	mulSmall(temp1, 1 + gameState[31702]);
	subBig(temp, temp1);
	temp2 = rootBig(temp, 2);
	if (!gameState[31962]) {
		if (!gameState[31985]) {
			pullBig(temp1, 33000);
			mulBig(temp1, temp2);
			if ((gameState[31982] == 2) || gameState[31909]) {
				pullBig(temp2, 32700);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
			subBig(temp, temp1);
		}
		if (!gameState[31986]) {
			pullBig(temp1, 31000);
			mulSmall(temp1, 2);
			pullBig(temp2, 33100);
			mulBig(temp1, temp2);
			subBig(temp, temp1);
		}
		pullBig(temp1, 30600);
		subBig(temp, temp1);
		return ", Archers Needed: " + displayBig(temp);
	}
	if (!gameState[31985]) {
		pullBig(temp1, 33000);
		mulBig(temp1, temp2);
		if ((gameState[31982] == 2) || gameState[31909]) {
			pullBig(temp3, 32700);
			addSmall(temp3, 1);
			mulBig(temp1, temp3);
		}
		subBig(temp, temp1);
	}
	if (!gameState[31986]) {
		pullBig(temp1, 31000);
		mulSmall(temp1, 2);
		pullBig(temp3, 33100);
		mulBig(temp1, temp3);
		subBig(temp, temp1);
	}
	pullBig(temp1, 30600);
	subBig(temp, temp1);
	divBig(temp, temp2, temp1);
	return ", Expected Losses: " + displayBig(temp1);
}

function eResource(name, image) {
	this.name = name;
	this.image = image;
}

function geteResource(n) {
	if (n == 0) {
		return eresource00;
	} else if (n == 1) {
		return eresource01;
	} else if (n == 2) {
		return eresource02;
	} else if (n == 3) {
		return eresource03;
	} else if (n == 4) {
		return eresource04;
	} else if (n == 5) {
		return eresource05;
	} else if (n == 6) {
		return eresource06;
	} else if (n == 7) {
		return eresource07;
	} else if (n == 8) {
		return eresource08;
	} else if (n == 9) {
		return eresource09;
	} else if (n == 10) {
		return eresource10;
	} else if (n == 11) {
		return eresource11;
	} else if (n == 12) {
		return eresource12;
	}
}

function displayeResource(n) {
	var y = 528 + (25 * (n % 3));
	var x = 3 + (121 * Math.floor(n / 3));
	if ((gameState[31986] == 0) && (n == 10)) {
		context0.drawImage(henemy01.image, x, y, 20, 20);
	} else {
		context0.drawImage(geteResource(n).image, x, y, 20, 20);
	}
	x += 23;
	y += 18;
	var ne = 0;
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 30000 + (100 * n));
	if (n == 0) {
		if (gameState[31977] == 0) {
			pullBig(temp1, 32200);
		}
		if (!gameState[31980]) {
			pullBig(temp2, 32500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (!gameState[31982]) {
			pullBig(temp2, 32700);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (!gameState[31984]) {
			pullBig(temp2, 32900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 1) {
		pullBig(temp1, 32000);
		if (gameState[31978] == 0) {
			pullBig(temp2, 32300);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[31982] == 0) {
			pullBig(temp2, 32700);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if ((gameState[31977] == 0) && !gameState[31901]) {
			pullBig(temp2, 32200);
			if (gameState[31980] == 0) {
				pullBig(temp3, 32500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (gameState[31982] == 0) {
				pullBig(temp3, 32700);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 2) {
		pullBig(temp1, 32100);
		if (gameState[31978] == 0) {
			pullBig(temp2, 32300);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (gameState[31980] == 0) {
			pullBig(temp2, 32500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
			subSmall(temp2, 1);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[31980] == 2) {
			pullBig(temp2, 32500);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[31979] == 0) {
			pullBig(temp2, 32400);
			if (gameState[31980] == 1) {
				pullBig(temp3, 32500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
				subSmall(temp3, 1);
				addBig(temp2, temp3);
			}
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[31983] == 0) {
			pullBig(temp2, 32800);
			mulSmall(temp2, 3);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 3) {
		if (gameState[11992] == 5) {
			pullBig(temp1, 13700);
		}
	} else if (n == 4) {
		if (gameState[31979] == 0) {
			pullBig(temp1, 32400);
		}
		if (gameState[31980] == 1) {
			pullBig(temp2, 32500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
			if (gameState[31908]) {
				subSmall(temp2, 1);
				subBig(temp1, temp2);
			}
		}
		if (gameState[31981] == 0) {
			pullBig(temp2, 32600);
			if (gameState[31980] == 2) {
				pullBig(temp3, 32500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (gameState[31986] == 1) {
			pullBig(temp2, 33100);
			if (ne == 1) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 5) {
		if (!gameState[31984]) {
			pullBig(temp1, 32900);
		}
		if (gameState[11992] == 8) {
			pullBig(temp2, 13700);
			mulSmall(temp2, 5);
			addBig(temp1, temp2);
		}
		if (gameState[31981] == 0) {
			pullBig(temp2, 32600);
			if (gameState[31980] == 2) {
				pullBig(temp3, 32500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 6) {
		if (gameState[31981] == 0) {
			pullBig(temp1, 32600);
			if (gameState[31980] == 2) {
				pullBig(temp2, 32500);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
	} else if (n == 7) {
		if (gameState[11992] == 9) {
			pullBig(temp1, 13700);
		}
		if (gameState[31986] == 1) {
			pullBig(temp2, 33100);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 8) {
		if (gameState[31985] == 1) {
			pullBig(temp1, 33000);
		}
		if ((gameState[31982] == 2) || gameState[31909]) {
			pullBig(temp2, 32700);
			mulBig(temp2, temp1);
			addBig(temp1, temp2);
		}
	} else if (n == 9) {
		if (gameState[31983] == 0) {
			pullBig(temp1, 32800);
		} else if (gameState[31983] == 1) {
			pullBig(temp1, 32800);
			ne = 1;
		}
	} else if (n == 10) {
		if (gameState[31986] == 1) {
			pullBig(temp1, 33100);
		}
	} else if (n == 11) {
		if ((gameState[31987] == 0) && (gameState[31962])) {
			pullBig(temp1, 33200);
			if (gameState[21906] && !gameState[21992]) {
				pullBig(temp2, 23700);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
			ne = 1;
		}
	} else if (n == 12) {
		if (gameState[31987] == 0) {
			pullBig(temp1, 33200);
			if (gameState[21906] && !gameState[21992]) {
				pullBig(temp2, 23700);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
	}
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp), x, y);
	if (ne) {
		context0.fillStyle = "#FF0000";
		context0.fillText("-" + displayBig(temp1), x + 48, y);
	} else {
		context0.fillStyle = "#00FF00";
		context0.fillText("+" + displayBig(temp1), x + 44, y);
	}
}

function eBuilding(name, r1, b1, r2, b2, r3, b3, power) {
	this.name = name;
	this.r1 = r1;
	this.b1 = b1;
	this.r2 = r2;
	this.b2 = b2;
	this.r3 = r3;
	this.b3 = b3;
	this.power = power;
}

function geteBuilding(n) {
	if (n == 0) {
		return ebuilding00;
	} else if (n == 1) {
		return ebuilding01;
	} else if (n == 2) {
		return ebuilding02;
	} else if (n == 3) {
		return ebuilding03;
	} else if (n == 4) {
		return ebuilding04;
	} else if (n == 5) {
		return ebuilding05;
	} else if (n == 6) {
		return ebuilding06;
	} else if (n == 7) {
		return ebuilding07;
	} else if (n == 8) {
		return ebuilding08;
	} else if (n == 9) {
		return ebuilding09;
	} else if (n == 10) {
		return ebuilding10;
	} else if (n == 11) {
		return ebuilding11;
	} else if (n == 12) {
		return ebuilding12;
	}
}

function displayeBuilding(n) {
	var x = 160 * (Math.floor(n / 5));
	var y = 25 + (100 * (n % 5));
	context0.drawImage(ebuilding, x, y, 160, 100);
	var temp = new bigInt();
	pullBig(temp, 32000 + (100 * n));
	var building = geteBuilding(n);
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp) + " " + building.name, x + 4, y + 20);
	context0.drawImage(geteResource(building.r1).image, x + 4, y + 27, 20, 20);
	context0.fillText(displayBig(getPower(building.power, (building.b1 + toSmall(temp)))), x + 28, y + 42);
	if (building.r2 != -1) {
		context0.drawImage(geteResource(building.r2).image, x + 4, y + 49, 20, 20);
		context0.fillText(displayBig(getPower(building.power, (building.b2 + toSmall(temp)))), x + 28, y + 64);
		if (building.r3 != -1) {
			context0.drawImage(geteResource(building.r3).image, x + 4, y + 71, 20, 20);
			context0.fillText(displayBig(getPower(building.power, (building.b3 + toSmall(temp)))), x + 28, y + 86);
		}
	}
	if (n == 0) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(geteResource(1).image, x + 120, y + 27, 20, 20);
	} else if (n == 1) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(geteResource(2).image, x + 120, y + 27, 20, 20);
	} else if (n == 2) {
		if (gameState[31977] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(0).image, x + 120, y + 27, 20, 20);
			if (!gameState[31901]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(geteResource(1).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 3) {
		if (gameState[31978] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
		} else if (gameState[31978] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(geteResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 4) {
		if (gameState[31979] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(4).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 5) {
		if (gameState[31980] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(geteResource(0).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(geteResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[31980] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(geteResource(4).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
			if (gameState[31908]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 86);
				context0.drawImage(geteResource(4).image, x + 120, y + 71, 20, 20);
			}
		} else if (gameState[31980] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(geteResource(6).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 6) {
		if (gameState[31981] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(6).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(4).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(geteResource(5).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 7) {
		if ((gameState[31982] == 1)) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
		} else if (gameState[31982] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(geteResource(0).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 64);
			context0.drawImage(geteResource(1).image, x + 120, y + 49, 20, 20);
		} else if (gameState[31982] == 2) {
			if (gameState[31985] == 0) {
				context0.fillStyle = "#00FF00";
				context0.fillText("-", x + 106, y + 42);
				context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
			} else if (gameState[31985] == 1) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 106, y + 42);
				context0.drawImage(geteResource(8).image, x + 120, y + 27, 20, 20);
			}
		}
	} else if (n == 8) {
		if (gameState[31983] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(9).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-3", x + 101, y + 64);
			context0.drawImage(geteResource(2).image, x + 120, y + 49, 20, 20);
		} else if (gameState[31983] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(9).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 9) {
		if (gameState[31984] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 10) {
		if ((gameState[31985] == 1)) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 106, y + 42);
			context0.drawImage(geteResource(8).image, x + 120, y + 27, 20, 20);
		} else if (gameState[31985] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 11) {
		if (gameState[31986] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(geteEnemy(gameState[31701]).image, x + 120, y + 27, 20, 20);
		} else if (gameState[31986] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 106, y + 42);
			context0.drawImage(geteResource(10).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(4).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(geteResource(7).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 12) {
		if (gameState[31987] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(geteResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(geteResource(11).image, x + 120, y + 49, 20, 20);
		}
	}
}

function clickeBuilding(n) {
	var cond1 = 0;
	var cond2 = 0;
	var cond3 = 0;
	var building = geteBuilding(n);
	temp0 = new bigInt();
	temp1 = new bigInt();
	temp2 = new bigInt();
	temp3 = new bigInt();
	temp4 = new bigInt();
	temp5 = new bigInt();
	temp6 = new bigInt();
	pullBig(temp0, 30000 + (100 * building.r1));
	pullBig(temp1, 32000 + (100 * n));
	var a = toSmall(temp1);
	temp2 = getPower(building.power, a + building.b1);
	if (compareBig(temp0, temp2)) {
		cond1 = 1;
	}
	if (building.r2 == -1) {
		cond2 = 1;
	} else {
		pullBig(temp3, 30000 + (100 * building.r2));
		temp4 = getPower(building.power, (a + building.b2));
		if (compareBig(temp3, temp4)) {
			cond2 = 1;
		}
	}
	if (building.r3 == -1) {
		cond3 = 1;
	} else {
		pullBig(temp5, 30000 + (100 * building.r3));
		temp6 = getPower(building.power, (a + building.b3));
		if (compareBig(temp5, temp6)) {
			cond3 = 1;
		}
	}
	if (cond1 && cond2 && cond3) {
		chighlightt = 4;
		subBig(temp0, temp2);
		pushBig(temp0, 30000 + (100 * building.r1));
		if (building.r2 != -1) {
			subBig(temp3, temp4);
			pushBig(temp3, 30000 + (100 * building.r2));
		}
		if (building.r3 != -1) {
			subBig(temp5, temp6);
			pushBig(temp5, 30000 + (100 * building.r3));
		}
		addSmall(temp1, 1);
		pushBig(temp1, 32000 + (100 * n));
		gameState[31950 + n] = 1;
	} else {
		chighlightt = -4;
	}
}

function uenemy(name, image, resource, base) {
	this.name = name;
	this.image = image;
	this.resource = resource;
	this.base = base;
}

function getuEnemy(n) {
	if (n == 0) {
		return uenemy00;
	} else if (n == 1) {
		return uenemy01;
	} else if (n == 2) {
		return uenemy02;
	} else if (n == 3) {
		return uenemy03;
	} else if (n == 4) {
		return uenemy04;
	} else if (n == 5) {
		return uenemy05;
	} else if (n == 6) {
		return uenemy06;
	} else if (n == 7) {
		return uenemy07;
	}
}

function uLosses() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	pullBig(temp, 41600);
	pullBig(temp1, 40400);
	subBig(temp, temp1);
	pullBig(temp2, 40800);
	mulSmall(temp2, gameState[41702] + 1);
	subBig(temp, temp2);
	if (gameState[41989] == 1) {
		pullBig(temp1, 43400);
		pullBig(temp2, 41000);
		addBig(temp2, temp1);
		mulBig(temp1, temp2);
		subBig(temp, temp1);
	}
	if (!gameState[41990]) {
		pullBig(temp1, 43500);
		addSmall(temp1, 1);
		divBig(temp, temp1, temp2);
		copyBig(temp, temp2);
	}
	return temp;
}

function uResource(name, image) {
	this.name = name;
	this.image = image;
}

function getuResource(n) {
	if (n == 0) {
		return uresource00;
	} else if (n == 1) {
		return uresource01;
	} else if (n == 2) {
		return uresource02;
	} else if (n == 3) {
		return uresource03;
	} else if (n == 4) {
		return uresource04;
	} else if (n == 5) {
		return uresource05;
	} else if (n == 6) {
		return uresource06;
	} else if (n == 7) {
		return uresource07;
	} else if (n == 8) {
		return uresource08;
	} else if (n == 9) {
		return uresource09;
	} else if (n == 10) {
		return uresource10;
	} else if (n == 11) {
		return uresource11;
	} else if (n == 12) {
		return uresource12;
	}
}

function displayuResource(n) {
	var y = 528 + (25 * (n % 3));
	var x = 3 + (121 * Math.floor(n / 3));
	context0.drawImage(getuResource(n).image, x, y, 20, 20);
	x += 23;
	y += 18;
	var ne = 0;
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 40000 + (100 * n));
	if (n == 0) {
		pullBig(temp1, 42000);
		if (!gameState[41980]) {
			pullBig(temp2, 42500);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
		if (!gameState[41984]) {
			pullBig(temp2, 42900);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		} else if (gameState[41984] == 1) {
			pullBig(temp2, 42900);
			addBig(temp1, temp2);
		}
		if ((gameState[31980] == 1) && gameState[31908]) {
			pullBig(temp2, 32500);
			addBig(temp1, temp2);
		}
		if (!gameState[41976]) {
			pullBig(temp2, 42100);
			pullBig(temp3, 43200);
			addSmall(temp3, 1);
			mulBig(temp2, temp3);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} if (!gameState[41989]) {
			pullBig(temp2, 43400);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 1) {
		if (gameState[11992] == 3) {
			pullBig(temp1, 13700);
		}
		if (gameState[51986] == 10) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			addBig(temp1, temp2);
		}
	} else if (n == 2) {
		if (gameState[11992] == 6) {
			pullBig(temp1, 13700);
		}
		if (!gameState[41982]) {
			pullBig(temp2, 42700);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 3) {
		if (!gameState[41976]) {
			pullBig(temp1, 42100);
			pullBig(temp2, 43200);
			addSmall(temp2, 1);
			mulBig(temp1, temp2);
		}
	} else if (n == 4) {
		if (gameState[41984] == 1) {
			pullBig(temp1, 42900);
		}
		if ((gameState[31980] == 1) && gameState[31908]) {
			pullBig(temp2, 32500);
			addBig(temp1, temp2);
		}
		if (gameState[21907] && (gameState[21980] == 1)) {
			pullBig(temp2, 22500);
			addBig(temp1, temp2);
		}
	} else if (n == 5) {
		if (!gameState[41982]) {
			pullBig(temp1, 42700);
		}
	}  else if (n == 6) {
		if (gameState[41984] == 1) {
			pullBig(temp2, 42900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if ((gameState[41984] == 2) && gameState[41905]) {
			pullBig(temp2, 42900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} if (gameState[41990] == 1) {
			pullBig(temp2, 43500);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 7) {
		if (gameState[11992] == 10) {
			pullBig(temp1, 13700);
		}
		if (gameState[41984] == 2) {
			pullBig(temp2, 42900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} if (gameState[41990] == 1) {
			pullBig(temp2, 43500);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		} if (gameState[41991] == 1) {
			pullBig(temp2, 43600);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 10) {
		if (!gameState[41989]) {
			pullBig(temp1, 43400);
			addBig(temp1, temp1);
		}
	} else if (n == 11) {
		if (gameState[41990] == 1) {
			pullBig(temp1, 43500);
		}
	}
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp), x, y);
	if (ne) {
		context0.fillStyle = "#FF0000";
		context0.fillText("-" + displayBig(temp1), x + 48, y);
	} else {
		context0.fillStyle = "#00FF00";
		context0.fillText("+" + displayBig(temp1), x + 44, y);
	}
}

function uBuilding(name, r1, b1, r2, b2, r3, b3, power) {
	this.name = name;
	this.r1 = r1;
	this.b1 = b1;
	this.r2 = r2;
	this.b2 = b2;
	this.r3 = r3;
	this.b3 = b3;
	this.power = power;
}

function getuBuilding(n) {
	if (n == 0) {
		return ubuilding00;
	} else if (n == 1) {
		return ubuilding01;
	} else if (n == 2) {
		return ubuilding02;
	} else if (n == 3) {
		return ubuilding03;
	} else if (n == 4) {
		return ubuilding04;
	} else if (n == 5) {
		return ubuilding05;
	} else if (n == 6) {
		return ubuilding06;
	} else if (n == 7) {
		return ubuilding07;
	} else if (n == 8) {
		return ubuilding08;
	} else if (n == 9) {
		return ubuilding09;
	} else if (n == 10) {
		return ubuilding10;
	} else if (n == 11) {
		return ubuilding11;
	} else if (n == 12) {
		return ubuilding12;
	} else if (n == 13) {
		return ubuilding13;
	} else if (n == 14) {
		return ubuilding14;
	} else if (n == 15) {
		return ubuilding15;
	} else if (n == 16) {
		return ubuilding16;
	}
}

function displayuBuilding(n) {
	var x = 160 * (Math.floor(n / 5));
	var y = 25 + (100 * (n % 5));
	context0.drawImage(ubuilding, x, y, 160, 100);
	var temp = new bigInt();
	pullBig(temp, 42000 + (100 * n));
	var building = getuBuilding(n);
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp) + " " + building.name, x + 4, y + 20);
	context0.drawImage(getuResource(building.r1).image, x + 4, y + 27, 20, 20);
	context0.fillText(displayBig(getPower(building.power, (building.b1 + toSmall(temp)))), x + 28, y + 42);
	if (building.r2 != -1) {
		context0.drawImage(getuResource(building.r2).image, x + 4, y + 49, 20, 20);
		context0.fillText(displayBig(getPower(building.power, (building.b2 + toSmall(temp)))), x + 28, y + 64);
		if (building.r3 != -1) {
			context0.drawImage(getuResource(building.r3).image, x + 4, y + 71, 20, 20);
			context0.fillText(displayBig(getPower(building.power, (building.b3 + toSmall(temp)))), x + 28, y + 86);
		}
	}
	if (n == 0) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getuResource(0).image, x + 120, y + 27, 20, 20);
	} else if (n == 1) {
		if (!gameState[41976]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 2) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getuResource(0).image, x + 120, y + 27, 20, 20);
	} else if (n == 3) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
	} else if (n == 4) {
		context0.fillStyle = "#00FF00";
		context0.fillText("*", x + 104, y + 42);
		context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
	} else if (n == 5) {
		if (!gameState[41980]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getuResource(0).image, x + 120, y + 27, 20, 20);
		} else {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getuResource(4).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 6) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getuResource(4).image, x + 120, y + 27, 20, 20);
	} else if (n == 7) {
		if (!gameState[41982]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 8) {
		context0.fillStyle = "#00FF00";
		context0.fillText("%", x + 101, y + 42);
		context0.drawImage(getuResource(getuEnemy(gameState[41701]).resource).image, x + 120, y + 27, 20, 20);
	} else if (n == 9) {
		if (!gameState[41984]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getuResource(0).image, x + 120, y + 27, 20, 20);
			if (gameState[41903]) {
				context0.fillStyle = "#00FF00";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getuEnemy(gameState[41701]).image, x + 120, y + 49, 20, 20);
			}
		} else if (gameState[41984] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(0).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 64);
			context0.drawImage(getuResource(4).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getuResource(6).image, x + 120, y + 71, 20, 20);
		} else if (gameState[41984] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getuEnemy(gameState[41701]).image, x + 120, y + 27, 20, 20);
			if (gameState[41905]) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getuResource(6).image, x + 120, y + 49, 20, 20);
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 86);
				context0.drawImage(getuResource(7).image, x + 120, y + 71, 20, 20);
			} else {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", x + 106, y + 64);
				context0.drawImage(getuResource(7).image, x + 120, y + 49, 20, 20);
			}
		}
	} else if (n == 10) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
	} else if (n == 11) {
		if (!gameState[41986]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(8).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(7).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 12) {
		if (!gameState[41976]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 13) {
		context0.fillStyle = "#00FF00";
		context0.fillText("*", x + 104, y + 42);
		context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
	} else if (n == 14) {
		if (!gameState[41989]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+2", x + 96, y + 42);
			context0.drawImage(uresource10.image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(uresource00.image, x + 120, y + 49, 20, 20);
		} else if (gameState[41989] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getuEnemy(gameState[41701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 64);
			context0.drawImage(getuResource(10).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 15) {
		if (!gameState[41990]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getuResource(3).image, x + 120, y + 27, 20, 20);
		} else if (gameState[41990] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(11).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(6).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getuResource(7).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 16) {
		if (!gameState[41991]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getuResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(7).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getuResource(9).image, x + 120, y + 71, 20, 20);
		} else if (gameState[41991] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getuEnemy(gameState[41701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getuResource(7).image, x + 120, y + 49, 20, 20);
		} else if (gameState[41991] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("%", x + 101, y + 42);
			context0.drawImage(getuResource(getuEnemy(gameState[41701]).resource).image, x + 120, y + 27, 20, 20);
		}
	}
}

function clickuBuilding(n) {
	var cond1 = 0;
	var cond2 = 0;
	var cond3 = 0;
	var building = getuBuilding(n);
	temp0 = new bigInt();
	temp1 = new bigInt();
	temp2 = new bigInt();
	temp3 = new bigInt();
	temp4 = new bigInt();
	temp5 = new bigInt();
	temp6 = new bigInt();
	pullBig(temp0, 40000 + (100 * building.r1));
	pullBig(temp1, 42000 + (100 * n));
	var a = toSmall(temp1);
	temp2 = getPower(building.power, a + building.b1);
	if (compareBig(temp0, temp2)) {
		cond1 = 1;
	}
	if (building.r2 == -1) {
		cond2 = 1;
	} else {
		pullBig(temp3, 40000 + (100 * building.r2));
		temp4 = getPower(building.power, (a + building.b2));
		if (compareBig(temp3, temp4)) {
			cond2 = 1;
		}
	}
	if (building.r3 == -1) {
		cond3 = 1;
	} else {
		pullBig(temp5, 40000 + (100 * building.r3));
		temp6 = getPower(building.power, (a + building.b3));
		if (compareBig(temp5, temp6)) {
			cond3 = 1;
		}
	}
	if (cond1 && cond2 && cond3) {
		chighlightt = 4;
		subBig(temp0, temp2);
		pushBig(temp0, 40000 + (100 * building.r1));
		if (building.r2 != -1) {
			subBig(temp3, temp4);
			pushBig(temp3, 40000 + (100 * building.r2));
		}
		if (building.r3 != -1) {
			subBig(temp5, temp6);
			pushBig(temp5, 40000 + (100 * building.r3));
		}
		addSmall(temp1, 1);
		pushBig(temp1, 42000 + (100 * n));
		gameState[41950 + n] = 1;
	} else {
		chighlightt = -4;
	}
}

function senemy(name, image, resource, base) {
	this.name = name;
	this.image = image;
	this.resource = resource;
	this.base = base;
}

function getsEnemy(n) {
	if (n == 0) {
		return senemy00;
	} else if (n == 1) {
		return senemy01;
	} else if (n == 2) {
		return senemy02;
	} else if (n == 3) {
		return senemy03;
	} else if (n == 4) {
		return senemy04;
	} else if (n == 5) {
		return senemy05;
	} else if (n == 6) {
		return senemy06;
	} else if (n == 7) {
		return senemy07;
	}
}

function getsMorale() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	pullBig(temp, 52200);
	if (gameState[51983] == 1) {
		pullBig(temp1, 52800);
		addBig(temp, temp1);
	}
	if (gameState[51982] == 0) {
		pullBig(temp1, 52700);
		addBig(temp, temp1);
	}
	if (gameState[51987] == 0) {
		pullBig(temp1, 53200);
		addBig(temp, temp1);
		addBig(temp, temp1);
	}
	if (gameState[51988] == 1) {
		pullBig(temp1, 53300);
		addBig(temp, temp1);
	}
	if (gameState[51994] == 1) {
		pullBig(temp1, 53900);
		addBig(temp, temp1);
	}
	if (gameState[51995] == 1) {
		pullBig(temp1, 54000);
		mulSmall(temp1, 2);
		addBig(temp, temp1);
	}
	if (gameState[51903]) {
		pullBig(temp1, 54800);
		var i = 0;
		i = getpowerBig(temp1);
		addSmall(temp, i);
	}
	if (gameState[51904]) {
		pullBig(temp1, 51000);
		addBig(temp, rootBig(temp1, 7));
	}
	if (gameState[21902] > 4) {
		pullBig(temp1, 23500);
		addBig(temp, temp1);
	}
	return temp;
}

function sLosses() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	pullBig(temp, 51600);
	pullBig(temp1, 50700);
	subBig(temp, temp1);
	temp1 = getsMorale();
	pullBig(temp2, 51000);
	mulBig(temp2, temp1);
	subBig(temp, temp2);
	pullBig(temp2, 50900);
	mulSmall(temp2, 1 + gameState[51702]);
	subBig(temp, temp2);
	if (gameState[51909]) {
		pullBig(temp2, 51000);
		pullBig(temp3, 30600);
		mulBig(temp2, temp3);
		temp3 = rootBig(temp2, 2);
		mulSmall(temp3, 1 + gameState[51702]);
		subBig(temp, temp3);
	}
	divBig(temp, temp1, temp2);
	pullBig(temp, 53700);
	mulBig(temp, temp1);
	mulBig(temp, temp1);
	mulBig(temp, temp1);
	subBig(temp2, temp);
	return temp2;
}

function sResource(name, image) {
	this.name = name;
	this.image = image;
}

function getsResource(n) {
	if (n == 0) {
		return sresource00;
	} else if (n == 1) {
		return sresource01;
	} else if (n == 2) {
		return sresource02;
	} else if (n == 3) {
		return sresource03;
	} else if (n == 4) {
		return sresource04;
	} else if (n == 5) {
		return sresource05;
	} else if (n == 6) {
		return sresource06;
	} else if (n == 7) {
		return sresource07;
	} else if (n == 8) {
		return sresource08;
	} else if (n == 9) {
		return sresource09;
	} else if (n == 10) {
		return sresource10;
	} else if (n == 11) {
		return sresource11;
	} else if (n == 12) {
		return sresource12;
	}
}

function displaysResource(n) {
	var y = 528 + (25 * (n % 3));
	var x = 3 + (121 * Math.floor(n / 3));
	context0.drawImage(getsResource(n).image, x, y, 20, 20);
	x += 23;
	y += 18;
	var ne = 0;
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp3 = new bigInt();
	var morale = new bigInt();
	morale = getsMorale();
	pullBig(temp, 50000 + (100 * n));
	if (n == 0) {
		pullBig(temp1, 52000);
		if (!gameState[51980]) {
			pullBig(temp2, 52000);
			pullBig(temp3, 52500);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[51990]) {
			pullBig(temp2, 52000);
			if (!gameState[51980]) {
				pullBig(temp3, 52500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			pullBig(temp3, 53500);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[51995]) {
			pullBig(temp2, 52000);
			if (!gameState[51980]) {
				pullBig(temp3, 52500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (!gameState[51990]) {
				pullBig(temp3, 53500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			pullBig(temp3, 54000);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[51976]) {
			pullBig(temp2, 52100);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (!gameState[51979]) {
			pullBig(temp2, 52400);
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if ((gameState[51980] == 1) && (!gameState[51976] || !gameState[51979])) {
			temp2.data.fill(0);
			if (!gameState[51976]) {
				pullBig(temp2, 52100);
			}
			if (!gameState[51979]) {
				pullBig(temp3, 52400);
				mulBig(temp3, morale);
				addBig(temp2, temp3);
			}
			pullBig(temp3, 52500);
			addSmall(temp2, 1);
			mulBig(temp2, temp3);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (!gameState[51985] && !gameState[51976]) {
			pullBig(temp2, 53000);
			if (gameState[51980] == 1) {
				pullBig(temp3, 52500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			pullBig(temp3, 52100);
			mulBig(temp3, temp2);
			pullBig(temp2, 53000);
			addBig(temp2, temp3);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if ((gameState[51990] == 1) && !gameState[51978]) {
			pullBig(temp2, 53500);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 1) {
		if (!gameState[51976]) {
			pullBig(temp1, 52100);
			if (gameState[51980] == 1) {
				pullBig(temp2, 52500);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
			if (!gameState[51985]) {
				pullBig(temp2, 53000);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
		}
		if (!gameState[51979]) {
			pullBig(temp2, 52400);
			if (gameState[51980] == 1) {
				pullBig(temp3, 52500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (gameState[51986] == 2) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (gameState[51984] == 1) {
			pullBig(temp2, 52900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 2) {
			pullBig(temp2, 52900);
			addBig(temp1, temp2);
		}
		if (!gameState[51978]) {
			pullBig(temp2, 52300);
			if (gameState[51990] == 1) {
				pullBig(temp3, 53500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51986] == 1) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51995] == 1) {
			pullBig(temp2, 54000);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 2) {
		if (!gameState[51978]) {
			pullBig(temp1, 52300);
			if (gameState[51990] == 1) {
				pullBig(temp2, 53500);
				addSmall(temp2, 1);
				mulBig(temp1, temp2);
			}
			mulBig(temp1, morale);
		}
		if (gameState[51984] == 3) {
			pullBig(temp2, 52900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 4) {
			pullBig(temp2, 52900);
			addBig(temp1, temp2);
		}
		if (!gameState[51979]) {
			pullBig(temp2, 52400);
			if (gameState[51980] == 1) {
				pullBig(temp3, 52500);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (!gameState[51981]) {
			pullBig(temp2, 52600);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51983] == 1) {
			pullBig(temp2, 52800);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51982] == 0) {
			pullBig(temp2, 52700);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51986]) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (!gameState[51988]) {
			pullBig(temp2, 53300);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 3) {
		if (!gameState[51981]) {
			pullBig(temp1, 52600);
			mulBig(temp1, morale);
		}
		if (gameState[51986] == 4) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		} else if ((gameState[51986] == 3) || (gameState[51986] == 8)) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if ((gameState[51986] == 9) || (gameState[51986] == 10)) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
	} else if (n == 4) {
		if (gameState[51984] == 6) {
			pullBig(temp1, 52900);
		} else if (gameState[51984] == 5) {
			pullBig(temp2, 52900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if (gameState[51982] == 1) {
			pullBig(temp2, 52700);
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (gameState[51986] == 5) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 5) {
		if (!gameState[51982]) {
			pullBig(temp1, 52700);
		}
		if ((gameState[51989] == 1) && gameState[51907]) {
			pullBig(temp3, 12900);
			pullBig(temp2, 13700);
			addBig(temp2, temp3);
			pullBig(temp3, 53400);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (!gameState[51981] && gameState[51901]) {
			pullBig(temp2, 52600);
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (!gameState[51989]) {
			pullBig(temp2, 53400);
			addBig(temp1, temp2);
		}
		if (gameState[51987] == 1) {
			pullBig(temp2, 53200);
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (gameState[51991] == 1) {
			pullBig(temp2, 53600);
			pullBig(temp3, 53100);
			mulBig(temp2, temp3);
			addBig(temp1, temp2);
		}
		if (gameState[51986] == 1) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		} else if (gameState[51986] == 3) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			mulSmall(temp2, 2);
			addBig(temp1, temp2);
		} else if (gameState[51986] == 5) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			mulSmall(temp2, 3);
			addBig(temp1, temp2);
		}
		if (gameState[51984] == 2) {
			pullBig(temp2, 52900);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 1) {
			pullBig(temp2, 52900);
			if (gameState[51989] == 1) {
				pullBig(temp3, 53400);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			addBig(temp1, temp2);
		} else if (gameState[51984] == 4) {
			pullBig(temp2, 52900);
			addBig(temp2, temp2);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 3) {
			pullBig(temp2, 52900);
			if (gameState[51989] == 1) {
				pullBig(temp3, 53400);
				addSmall(temp3, 2);
				mulBig(temp2, temp3);
			} else {
				addBig(temp2, temp2);
			}
				addBig(temp1, temp2);
		} else if (gameState[51984] == 6) {
			pullBig(temp2, 52900);
			mulSmall(temp2, 3);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 5) {
			pullBig(temp2, 52900);
			if (gameState[51989] == 1) {
				pullBig(temp3, 53400);
				addSmall(temp3, 3);
				mulBig(temp2, temp3);
			} else {
				mulSmall(temp2, 3);
			}
				addBig(temp1, temp2);
		} else if (gameState[51984] == 7) {
			pullBig(temp2, 52900);
			mulSmall(temp2, 5);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 9) {
			pullBig(temp2, 52900);
			mulSmall(temp2, 50);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		} else if (gameState[51984] == 8) {
			pullBig(temp2, 52900);
			if (gameState[51989] == 1) {
				pullBig(temp3, 53400);
				addSmall(temp3, 50);
				mulBig(temp2, temp3);
			} else {
				mulSmall(temp2, 50);
			}
				addBig(temp1, temp2);
		}
		if (gameState[51986] == 2) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		} else if (gameState[51986] == 4) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			mulSmall(temp2, 2);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		} else if (gameState[51986] == 6) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			mulSmall(temp2, 5);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if ((gameState[51994] == 1) || (gameState[51994] == 2)) {
			pullBig(temp2, 53900);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
		if (!gameState[51987]) {
			pullBig(temp2, 53200);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 6) {
		if (gameState[51984] == 7) {
			pullBig(temp1, 52900);
		}
		if (gameState[51994] == 2) {
			pullBig(temp2, 53900);
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (gameState[51986] == 6) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			addBig(temp1, temp2);
		}
		if (gameState[51982] == 1) {
			pullBig(temp2, 52700);
			mulBig(temp2, morale);
			if (compareBig(temp1, temp2)) {
				subBig(temp1, temp2);
			} else {
				subBig(temp2, temp1);
				copyBig(temp1, temp2);
				ne = 1;
			}
		}
		if ((gameState[51986] == 7) || (gameState[51986] == 11)) {
			pullBig(temp2, 53100);
			if (!gameState[51991]) {
				pullBig(temp3, 53600);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			mulBig(temp2, morale);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 7) {
		if (gameState[51982] == 1) {
			pullBig(temp1, 52700);
			mulBig(temp1, morale);
		}
	} else if (n == 8) {
		if (gameState[11992] == 7) {
			pullBig(temp1, 13700);
		}
		if (!gameState[51988]) {
			pullBig(temp2, 53300);
			if (ne) {
				addBig(temp1, temp2);
			} else {
				if (compareBig(temp1, temp2)) {
					subBig(temp1, temp2);
				} else {
					subBig(temp2, temp1);
					copyBig(temp1, temp2);
					ne = 1;
				}
			}
		}
	} else if (n == 9) {
		if (!gameState[51988]) {
			pullBig(temp1, 53300);
		}
	} else if (n == 11) {
		if (gameState[51984] == 8) {
			pullBig(temp1, 52900);
			ne = 1;
		} else if (gameState[51984] == 9) {
			pullBig(temp1, 52900);
		}
	} else if (n == 12) {
		copyBig(temp, morale);
	}
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp), x, y);
	if (n != 12) {
		if (ne) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(temp1), x + 48, y);
		} else {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(temp1), x + 44, y);
		}
	}
}

function sBuilding(name, r1, b1, r2, b2, r3, b3, power) {
	this.name = name;
	this.r1 = r1;
	this.b1 = b1;
	this.r2 = r2;
	this.b2 = b2;
	this.r3 = r3;
	this.b3 = b3;
	this.power = power;
}

function getsBuilding(n) {
	if (n == 0) {
		return sbuilding00;
	} else if (n == 1) {
		return sbuilding01;
	} else if (n == 2) {
		return sbuilding02;
	} else if (n == 3) {
		return sbuilding03;
	} else if (n == 4) {
		return sbuilding04;
	} else if (n == 5) {
		return sbuilding05;
	} else if (n == 6) {
		return sbuilding06;
	} else if (n == 7) {
		return sbuilding07;
	} else if (n == 8) {
		return sbuilding08;
	} else if (n == 9) {
		return sbuilding09;
	} else if (n == 10) {
		return sbuilding10;
	} else if (n == 11) {
		return sbuilding11;
	} else if (n == 12) {
		return sbuilding12;
	} else if (n == 13) {
		return sbuilding13;
	} else if (n == 14) {
		return sbuilding14;
	} else if (n == 15) {
		return sbuilding15;
	} else if (n == 16) {
		return sbuilding16;
	} else if (n == 17) {
		return sbuilding17;
	} else if (n == 18) {
		return sbuilding18;
	} else if (n == 19) {
		return sbuilding19;
	} else if (n == 20) {
		return sbuilding20;
	} else if (n == 21) {
		return sbuilding21;
	}
}

function displaysBuilding(n) {
	var x = 160 * (Math.floor(n / 5));
	var y = 25 + (100 * (n % 5));
	context0.drawImage(sbuilding, x, y, 160, 100);
	var temp = new bigInt();
	pullBig(temp, 52000 + (100 * n));
	var building = getsBuilding(n);
	context0.fillStyle = "gold";
	context0.font="16px Times New Roman";
	context0.fillText(displayBig(temp) + " " + building.name, x + 4, y + 20);
	context0.drawImage(getsResource(building.r1).image, x + 4, y + 27, 20, 20);
	context0.fillText(displayBig(getPower(building.power, (building.b1 + toSmall(temp)))), x + 28, y + 42);
	if (building.r2 != -1) {
		context0.drawImage(getsResource(building.r2).image, x + 4, y + 49, 20, 20);
		context0.fillText(displayBig(getPower(building.power, (building.b2 + toSmall(temp)))), x + 28, y + 64);
		if (building.r3 != -1) {
			context0.drawImage(getsResource(building.r3).image, x + 4, y + 71, 20, 20);
			context0.fillText(displayBig(getPower(building.power, (building.b3 + toSmall(temp)))), x + 28, y + 86);
		}
	}
	var morale = new bigInt();
	morale = getsMorale();
	if (n == 0) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getsResource(0).image, x + 120, y + 27, 20, 20);
	} else if (n == 1) {
		if (!gameState[51976]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 2) {
		context0.fillStyle = "#00FF00";
		context0.fillText("+", x + 104, y + 42);
		context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
	} else if (n == 3) {
		if (!gameState[51978]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(2).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(1).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 4) {
		if (!gameState[51979]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(0).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 5) {
		if (!gameState[51980]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(0).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51980] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 6) {
		if (!gameState[51981]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 7) {
		if (!gameState[51982]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 64);
			context0.drawImage(getsResource(12).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51982] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(7).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(4).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 86);
			context0.drawImage(getsResource(6).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 8) {
		if (!gameState[51983]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(2).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51983] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 9) {
		if (gameState[51984] == 1) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			if (gameState[51989] == 1) {
				pullBig(bigmess, 53400);
			}
			addSmall(bigmess, 1);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(1).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 3) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			if (gameState[51989] == 1) {
				pullBig(bigmess, 53400);
			}
			addSmall(bigmess, 2);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 4) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(2).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-2", x + 98, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 5) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			if (gameState[51989] == 1) {
				pullBig(bigmess, 53400);
			}
			addSmall(bigmess, 3);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(4).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 6) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(4).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-3", x + 98, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 7) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(6).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-5", x + 98, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 8) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			if (gameState[51989] == 1) {
				pullBig(bigmess, 53400);
			}
			addSmall(bigmess, 50);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(11).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51984] == 9) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(11).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-50", x + 90, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 10) {
		if (!gameState[51985]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 11) {
		if (gameState[51986] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(1).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 3) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			bigmess = getsMorale();
			mulSmall(bigmess, 2);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(3).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 4) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			bigmess = getsMorale();
			mulSmall(bigmess, 2);
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(bigmess), x + 98 - (8 * getpowerBig(bigmess)), y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 5) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			bigmess = getsMorale();
			mulSmall(bigmess, 3);
			context0.fillText("+" + displayBig(bigmess), x + 96 - (8 * getpowerBig(bigmess)), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(4).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 6) {
			context0.fillStyle = "#00FF00";
			var bigmess = new bigInt();
			bigmess = getsMorale();
			mulSmall(bigmess, 5);
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(6).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(bigmess), x + 98 - (8 * getpowerBig(bigmess)), y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 7) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getsEnemy(gameState[51701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(6).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51986] == 8) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		} else if ((gameState[51986] == 9) || (gameState[51986] == 10)) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 42);
			context0.drawImage(getsResource(3).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51986] == 11) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-" + displayBig(getsMorale()), x + 98 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(6).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(2).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 12) {
		if (!gameState[51987]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+2", x + 96, y + 42);
			context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51987] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 13) {
		if (!gameState[51988]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(9).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(8).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(2).image, x + 120, y + 71, 20, 20);
		} else if (gameState[51988] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 14) {
		if (!gameState[51989]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51989] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 15) {
		if (!gameState[51990]) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(0).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51990] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(2).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(0).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 16) {
		if (!gameState[51991]) {
			if ((gameState[51986] == 1) || (gameState[51986] == 3) || (gameState[51986] == 5)) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 42);
				context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
			} else if (gameState[51986] == 2) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 42);
				context0.drawImage(getsResource(1).image, x + 120, y + 27, 20, 20);
			} else if (gameState[51986] == 4) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 42);
				context0.drawImage(getsResource(3).image, x + 120, y + 27, 20, 20);
			} else if (gameState[51986] == 6) {
				context0.fillStyle = "#00FF00";
				context0.fillText("*", x + 104, y + 42);
				context0.drawImage(getsResource(6).image, x + 120, y + 27, 20, 20);
			} else if (gameState[51986] == 7) {
				context0.fillStyle = "#00FF00";
				context0.fillText("-", x + 106, y + 42);
				context0.drawImage(getsEnemy(gameState[51701]).image, x + 120, y + 27, 20, 20);
			}
		} else {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
		}
	} else if (n == 17) {
		context0.fillStyle = "#00FF00";
		context0.fillText("*", x + 104, y + 42);
		context0.drawImage(getsResource(6).image, x + 120, y + 27, 20, 20);
	} else if (n == 18) {
		if (gameState[51701] == 6) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(10).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-10", x + 90, y + 64);
			context0.drawImage(getsResource(1).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 19) {
		if (gameState[51994] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(5).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51994] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+", x + 104, y + 42);
			context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(5).image, x + 120, y + 49, 20, 20);
		} else if (gameState[51994] == 2) {
			context0.fillStyle = "#00FF00";
			context0.fillText("-", x + 104, y + 42);
			context0.drawImage(getsEnemy(gameState[51701]).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#00FF00";
			context0.fillText("+" + displayBig(getsMorale()), x + 96 - (8 * getpowerBig(getsMorale())), y + 64);
			context0.drawImage(getsResource(6).image, x + 120, y + 49, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 86);
			context0.drawImage(getsResource(5).image, x + 120, y + 71, 20, 20);
		}
	} else if (n == 20) {
		if (gameState[51995] == 0) {
			context0.fillStyle = "#00FF00";
			context0.fillText("*", x + 104, y + 42);
			context0.drawImage(getsResource(0).image, x + 120, y + 27, 20, 20);
		} else if (gameState[51995] == 1) {
			context0.fillStyle = "#00FF00";
			context0.fillText("+2", x + 96, y + 42);
			context0.drawImage(getsResource(12).image, x + 120, y + 27, 20, 20);
			context0.fillStyle = "#FF0000";
			context0.fillText("-", x + 106, y + 64);
			context0.drawImage(getsResource(1).image, x + 120, y + 49, 20, 20);
		}
	} else if (n == 21) {
		context0.fillStyle = "#00FF00";
		context0.fillText("-", x + 104, y + 42);
		context0.drawImage(getsEnemy(gameState[51701]).image, x + 120, y + 27, 20, 20);
	}
}

function clicksBuilding(n) {
	var cond1 = 0;
	var cond2 = 0;
	var cond3 = 0;
	var building = getsBuilding(n);
	temp0 = new bigInt();
	temp1 = new bigInt();
	temp2 = new bigInt();
	temp3 = new bigInt();
	temp4 = new bigInt();
	temp5 = new bigInt();
	temp6 = new bigInt();
	pullBig(temp0, 50000 + (100 * building.r1));
	pullBig(temp1, 52000 + (100 * n));
	var a = toSmall(temp1);
	temp2 = getPower(building.power, a + building.b1);
	if (compareBig(temp0, temp2)) {
		cond1 = 1;
	}
	if (building.r2 == -1) {
		cond2 = 1;
	} else {
		pullBig(temp3, 50000 + (100 * building.r2));
		temp4 = getPower(building.power, (a + building.b2));
		if (compareBig(temp3, temp4)) {
			cond2 = 1;
		}
	}
	if (building.r3 == -1) {
		cond3 = 1;
	} else {
		pullBig(temp5, 50000 + (100 * building.r3));
		temp6 = getPower(building.power, (a + building.b3));
		if (compareBig(temp5, temp6)) {
			cond3 = 1;
		}
	}
	if (cond1 && cond2 && cond3) {
		chighlightt = 4;
		subBig(temp0, temp2);
		pushBig(temp0, 50000 + (100 * building.r1));
		if (building.r2 != -1) {
			subBig(temp3, temp4);
			pushBig(temp3, 50000 + (100 * building.r2));
		}
		if (building.r3 != -1) {
			subBig(temp5, temp6);
			pushBig(temp5, 50000 + (100 * building.r3));
		}
		addSmall(temp1, 1);
		pushBig(temp1, 52000 + (100 * n));
		gameState[51950 + n] = 1;
	} else {
		chighlightt = -4;
	}
}

function hardReset() {
	var i = 0;
	gameState.fill(0);
	newGame();
}

function postNew() {
	if (gameState[11901]) {
		hBuilding03.cost.id1 = 0;
		hBuilding03.cost.power = 16;
		hBuilding06.cost.power = 4;
		hBuilding07.cost.id2 = 0;
		hBuilding07.cost.power = 14;
		hBuilding14.cost.id2 = 0;
		hBuilding14.cost.power = 3;
	}
	if (gameState[11902]) {
		hBuilding04.cost.power = 10;
	}
	if (gameState[11910]) {
		hBuilding05.cost.power = 9;
		hBuilding05.name = "Windmills";
	}
}

function newGame() {
	var i = 0;
	var j = 5;
	var k = 1;
	while (k <= j) {
		i = 0;
		while (i < 1800) {
			gameState[(10000 * k) + i] = 0;
			i++;
		}
		i = 1950;
		while (i < 4500) {
			gameState[(10000 * k) + i] = 0;
			i++;
		}
		i = 4600;
		while (i < 4700) {
			gameState[(10000 * k) + i] = 0;
			i++;
		}
		i = 4800;
		while (i < 4900) {
			gameState[(10000 * k) + i] = 0;
			i++;
		}
		k++;
	}
	k = 1;
	i = 0;
	var temp0 = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	while (k <= j) {
		pullBig(temp0, (10000 * k) + 6500);
		if (getpowerBig(temp0)) {
			currentview = 99;
			addSmall(temp2, 1);
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 6500 + (100 * i));
				addBig(temp1, temp0);
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 7500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			var l = 0;
			var m = 0;
			while (l < 6) {
				pullBig(temp1, 5000 + (100 * l) + (10000 * k));
				i = getpowerBig(temp1);
				if (k == 1) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 2) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 3) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 7;
					} else if (l == 3) {
						m = 4;
					} else if (l == 4) {
						m = 6;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 4) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 5;
					} else if (l == 2) {
						m = 4;
					} else if (l == 3) {
						m = 7;
					} else if (l == 4) {
						m = 4;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 5) {
					if (l == 0) {
						m = 8;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 6;
					}
				}
				if (i > m) {
					addSmall(temp2, i - m);
				}
				l++;
			}
		}
		i = 0;
		while (i < 25) {
			subSmall(temp2, gameState[(10000 * k) + 1900 + i]);
			i++;
		}
		pushBig(temp2, (10000 * k) + 1800);
		temp2.data.fill(0);
		i = 0;
		k++;
	}
	gameState[0] = 7;
	gameState[11501] = 2;
	gameState[21501] = 2;
	gameState[31501] = 2;
	gameState[41501] = 2;
	gameState[51501] = 2;
	gameState[11602] = 1;
	gameState[21602] = 1;
	gameState[31602] = 1;
	gameState[41602] = 1;
	gameState[51602] = 1;
	gameState[10001] = 1;
	gameState[11984] = 1;
	gameState[11988] = 1;
	gameState[11991] = 1;
	gameState[20001] = 1;
	gameState[21979] = 1;
	gameState[21980] = 1;
	gameState[21981] = 1;
	gameState[21983] = 1;
	gameState[21987] = 1;
	gameState[30001] = 1;
	gameState[31978] = 1;
	gameState[31986] = 1;
	gameState[40001] = 1;
	gameState[50001] = 1;
	gameState[51984] = 1;
	gameState[51986] = 1;
}

function getSaveObject() {
	var a = {};
	a.version = version;
	a.gsbufferString = arrayBuffer2String(gsbuffer);
	return btoa(JSON.stringify(a));
}

/* function saveGame() {
	var temp = new Int16Array(gsbuffer);
	localStorage.setItem("LazyKings00", String.fromCharCode.apply(null, temp));
} */

function saveLocal() {
	localStorage.setItem("LazyKings01", getSaveObject());
}

/* function loadGame() {
	var temp = new Int16Array(gsbuffer);
	var temp2 = localStorage["LazyKings00"];
	if (temp2 != null) {
		var i = 0;
		while (i < 30000) {
			temp[i] = temp2.charCodeAt(i);
			i++;
		}
	}
	if (gameState[0] == 0) {
		if (gameState[31950] == 0) {
			gameState[30001] = 1;
		}
		var i = 4600;
		while (i < 5000) {
			gameState[10000 + i] = 0;
			gameState[20000 + i] = 0;
			gameState[30000 + i] = 0;
			i++;
		}
		i = 9500;
		while (i < 10000) {
			gameState[10000 + i] = 0;
			gameState[20000 + i] = 0;
			gameState[30000 + i] = 0;
			i++;
		}
		var temp3 = new bigInt();
		pullBig(temp3, 14500);
		addSmall(temp3, 20);
		pushBig(temp3, 14500);
		pullBig(temp3, 24500);
		addSmall(temp3, 20);
		pushBig(temp3, 24500);
		pullBig(temp3, 34500);
		addSmall(temp3, 20);
		pushBig(temp3, 34500);
		temp3.data.fill(0);
		temp3.data[1] = 2;
		pushBig(temp3, 11500);
		pushBig(temp3, 21500);
		pushBig(temp3, 31500);
		temp3.data[1] = 0;
		temp3.data[2] = 1;
		pushBig(temp3, 11600);
		pushBig(temp3, 21600);
		pushBig(temp3, 31600);
		gameState[11700] = 0;
		gameState[21700] = 0;
		gameState[31700] = 0;
		gameState[11701] = 0;
		gameState[21701] = 0;
		gameState[31701] = 0;
		gameState[0] = 1;
	}
	if (gameState[0] == 1) {
		gameState[40001] = 1;
		gameState[41501] = 2;
		gameState[41602] = 1;
		gameState[44501] = 2;
		gameState[0] = 2;
	}
	if (gameState[0] == 2) {
		while (gameState[11901] > 1) {
			gameState[11901]--;
			gameState[11900]++;
		}
		gameState[0] = 3;
	}
	if (gameState[0] == 3) {
		gameState[50001] = 1;
		gameState[51501] = 2;
		gameState[51602] = 1;
		gameState[54501] = 2;
		gameState[51984] = 1;
		gameState[51986] = 1;
		gameState[0] = 4;
	}
	if (gameState[0] == 4) {
		var i = 0;
		while (i < 10000) {
			gameState[50000 + i] = 0;
			i++;
		}
		gameState[50001] = 1;
		gameState[51501] = 2;
		gameState[51602] = 1;
		gameState[54501] = 2;
		gameState[51984] = 1;
		gameState[51986] = 1;
		gameState[0] = 5;
	}
	if ((gameState[0] == 5) || (gameState[0] == 6)) {
		var i = 1;
		while (i < 6) {
			if (gameState[(10000 * i) + 1900] > 50) {
				var j = 1;
				while (j < 6) {
					gameState[(10000 * i) + 1900] = 0;
					j++;
				}
			}
			i++;
		}
		if (gameState[20609]) {
			newGame();
		}
		gameState[0] = 7;
	}
	postNew();
} */

function loadSaveObject(a) {
	copyBuffer(gsbuffer, string2ArrayBuffer(a.gsbufferString).slice(0));
}

function submitscore() {
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	var temp0 = new bigInt();
	var k = 1;
	var i = 0;
	var j = 5;
	while (k <= j) {
		pullBig(temp0, (10000 * k) + 6500);
		if (getpowerBig(temp0)) {
			addSmall(temp2, 1);
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 6500 + (100 * i));
				addBig(temp1, temp0);
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 7500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			var l = 0;
			var m = 0;
			while (l < 6) {
				pullBig(temp1, 5000 + (100 * l) + (10000 * k));
				i = getpowerBig(temp1);
				if (k == 1) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 2) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 3) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 7;
					} else if (l == 3) {
						m = 4;
					} else if (l == 4) {
						m = 6;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 4) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 5;
					} else if (l == 2) {
						m = 4;
					} else if (l == 3) {
						m = 7;
					} else if (l == 4) {
						m = 4;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 5) {
					if (l == 0) {
						m = 8;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 6;
					}
				}
				if (i > m) {
					addSmall(temp2, i - m);
				}
				l++;
			}
		}
		if (getpowerBig(temp2) || temp2.data[0]) {
			if (k == 1) {
				kongregate.stats.submit("Human Achievement Points", toSmall(temp2));
			} else if (k == 2) {
				kongregate.stats.submit("Orc Achievement Points", toSmall(temp2));
			} else if (k == 3) {
				kongregate.stats.submit("Elf Achievement Points", toSmall(temp2));
			} else if (k == 4) {
				kongregate.stats.submit("Undead Achievement Points", toSmall(temp2));
			} else if (k == 5) {
				kongregate.stats.submit("Southerner Achievement Points", toSmall(temp2));
			}
		}
		i = 1;
		i += gameState[1000];
		kongregate.stats.submit("Races Unlocked", i);
		temp2.data.fill(0);
		i = 0;
		k++;
	}
}

function start0() {
	hbackground.src = "images/hbackground.jpg";
	obackground.src = "images/obackground.jpg";
	ebackground.src = "images/ebackground.jpg";
	ubackground.src = "images/ubackground.jpg";
	sbackground.src = "images/sbackground.jpg";
	button00.src = "images/button00.jpg";
	hbuilding.src = "images/hbuilding.jpg";
	obuilding.src = "images/obuilding.jpg";
	ebuilding.src = "images/ebuilding.png";
	ubuilding.src = "images/ubuilding.jpg";
	sbuilding.src = "images/sbuilding.jpg";
	buildinghighlight.src = "images/buildinghighlight.png";
	buildinghighlight0.src = "images/buildinghighlight0.png";
	buildinghighlight1.src = "images/buildinghighlight1.png";
	iconhighlight.src = "images/iconhighlight.png";
	iconhighlight0.src = "images/iconhighlight0.png";
	cdimage.src = "images/cooldown.png";
	increase.src = "images/increase.png";
	decrease.src = "images/decrease.png";
	fightoff.src = "images/fightoff.png";
	fighton.src = "images/fighton.png";
	safeoff.src = "images/safeoff.png";
	safeon.src = "images/safeon.png";
	safeyellow.src = "images/safeyellow.png";
	maxoff.src = "images/maxoff.png";
	maxon.src = "images/maxon.png";
	achievement.src = "images/achievement.png";
	henemy00.image.src = "images/hResource02.png";
	henemy01.image.src = "images/henemy01.png";
	henemy02.image.src = "images/henemy02.png";
	henemy03.image.src = "images/henemy03.png";
	henemy04.image.src = "images/henemy04.png";
	henemy05.image.src = "images/henemy05.png";
	henemy06.image.src = "images/henemy06.png";
	hResource00p.src = "images/hResource00.png";
	hResource01p.src = "images/hResource01.png";
	hResource02p.src = "images/hResource02.png";
	hResource03p.src = "images/hResource03.png";
	hResource04p.src = "images/hResource04.png";
	hResource05p.src = "images/hResource05.png";
	hResource06p.src = "images/hResource06.png";
	hResource07p.src = "images/hResource07.png";
	hResource08p.src = "images/hResource08.png";
	hResource09p.src = "images/hResource09.png";
	hResource10p.src = "images/hResource10.png";
	hResource11p.src = "images/hResource11.png";
	hResource12p.src = "images/hResource12.png";
	hResource14p.src = "images/hResource14.png";
	oresource00.image.src = "images/oResource00.png";
	oresource01.image.src = "images/oResource01.png";
	oresource02.image.src = "images/oResource02.png";
	oresource03.image.src = "images/henemy04.png";
	oresource04.image.src = "images/oResource04.png";
	oresource05.image.src = "images/hResource03.png";
	oresource06.image.src = "images/oResource06.png";
	oresource07.image.src = "images/oResource07.png";
	oresource08.image.src = "images/oResource08.png";
	oresource09.image.src = "images/hResource01.png";
	oresource10.image.src = "images/oResource10.png";
	oresource11.image.src = "images/oResource11.png";
	oresource12.image.src = "images/maxoff.png";
	oenemy00.image.src = "images/oenemy00.png";
	oenemy01.image.src = "images/henemy04.png";
	oenemy02.image.src = "images/hResource08.png";
	oenemy03.image.src = "images/oResource07.png";
	oenemy04.image.src = "images/oenemy04.png";
	oenemy05.image.src = "images/oenemy05.png";
	oenemy06.image.src = "images/oResource11.png";
	eresource00.image.src = "images/eresource00.png";
	eresource01.image.src = "images/eresource01.png";
	eresource02.image.src = "images/eresource02.png";
	eresource03.image.src = "images/hResource01.png";
	eresource04.image.src = "images/oenemy05.png";
	eresource05.image.src = "images/eresource05.png";
	eresource06.image.src = "images/eresource06.png";
	eresource07.image.src = "images/hResource09.png";
	eresource08.image.src = "images/hResource03.png";
	eresource09.image.src = "images/eresource09.png";
	eresource10.image.src = "images/eresource10.png";
	eresource11.image.src = "images/eresource11.png";
	eresource12.image.src = "images/eresource12.png";
	eenemy00.image.src = "images/oenemy00.png";
	eenemy01.image.src = "images/hResource02.png";
	eenemy02.image.src = "images/eresource06.png";
	eenemy03.image.src = "images/hResource10.png";
	eenemy04.image.src = "images/eresource09.png";
	eenemy05.image.src = "images/eresource00.png";
	eenemy06.image.src = "images/henemy05.png";
	eenemy07.image.src = "images/eresource12.png";
	uresource00.image.src = "images/uresource00.png";
	uresource01.image.src = "images/hResource03.png";
	uresource02.image.src = "images/hResource01.png";
	uresource03.image.src = "images/henemy05.png";
	uresource04.image.src = "images/uresource04.png";
	uresource05.image.src = "images/uresource05.png";
	uresource06.image.src = "images/uresource06.png";
	uresource07.image.src = "images/hResource09.png";
	uresource08.image.src = "images/uresource08.png";
	uresource09.image.src = "images/hResource05.png";
	uresource10.image.src = "images/uresource10.png";
	uresource11.image.src = "images/uresource11.png";
	uresource12.image.src = "images/uresource12.png";
	uenemy00.image.src = "images/hResource02.png";
	uenemy01.image.src = "images/uenemy01.png";
	uenemy02.image.src = "images/hResource08.png";
	uenemy03.image.src = "images/oenemy05.png";
	uenemy04.image.src = "images/hResource10.png";
	uenemy05.image.src = "images/henemy03.png";
	uenemy06.image.src = "images/uresource00.png";
	uenemy07.image.src = "images/sresource07.png";
	sresource00.image.src = "images/sresource00.png";
	sresource01.image.src = "images/hResource00.png";
	sresource02.image.src = "images/sresource02.png";
	sresource03.image.src = "images/hResource03.png";
	sresource04.image.src = "images/sresource04.png";
	sresource05.image.src = "images/sresource05.png";
	sresource06.image.src = "images/sresource06.png";
	sresource07.image.src = "images/sresource07.png";
	sresource08.image.src = "images/hResource01.png";
	sresource09.image.src = "images/eresource05.png";
	sresource10.image.src = "images/sresource10.png";
	sresource11.image.src = "images/sresource11.png";
	sresource12.image.src = "images/oResource08.png";
	senemy00.image.src = "images/oResource08.png";
	senemy01.image.src = "images/sresource04.png";
	senemy02.image.src = "images/hResource08.png";
	senemy03.image.src = "images/henemy02.png";
	senemy04.image.src = "images/henemy05.png";
	senemy05.image.src = "images/sresource00.png";
	senemy06.image.src = "images/sresource10.png";
	senemy07.image.src = "images/uenemy01.png";
	gameState.fill(0);
	var localSaveString = localStorage["LazyKings01"];
	if (localSaveString != null) {
		var localSaveObject = JSON.parse(atob(localSaveString));
		if (localSaveObject != null) {
			loadSaveObject(localSaveObject);
		}
	}
	if (!gameState[11950]) {
		var temp = new bigInt();
		pullBig(temp, 15000);
		if (!getpowerBig(temp)) {
			newGame();
		}
	}
	canvas0.addEventListener("mousedown", userClick, false);
	canvas0.addEventListener("mousemove", userMove, false);
	interval0 = setInterval(updateview, 50);
	interval1 = setInterval(updateh, 1000);
}

function updateh() {
	var food = new bigInt();
	var totalfood = new bigInt();
	var farms = new bigInt();
	var wood = new bigInt();
	var totalwood = new bigInt();
	var forests = new bigInt();
	var peasants = new bigInt();
	var totalpeasants = new bigInt();
	var homesteads = new bigInt();
	var stone = new bigInt();
	var totalstone = new bigInt();
	var quarries = new bigInt();
	var horses = new bigInt();
	var totalhorses = new bigInt();
	var stables = new bigInt();
	var horsemills = new bigInt();
	var gold = new bigInt();
	var totalgold = new bigInt();
	var tradeposts = new bigInt();
	var iron = new bigInt();
	var totaliron = new bigInt();
	var ironmines = new bigInt();
	var lumbermills = new bigInt();
	var weapons = new bigInt();
	var totalweapons = new bigInt();
	var blacksmiths = new bigInt();
	var soldiers = new bigInt();
	var totalsoldiers = new bigInt();
	var barracks = new bigInt();
	var knights = new bigInt();
	var totalknights = new bigInt();
	var castles = new bigInt();
	var armories = new bigInt();
	var goldmines = new bigInt();
	var books = new bigInt();
	var totalbooks = new bigInt();
	var monks = new bigInt();
	var totalmonks = new bigInt();
	var monasteries = new bigInt();
	var trebuchets = new bigInt();
	var paladins = new bigInt();
	var totalpaladins = new bigInt();
	var cathedrals = new bigInt();
	var caravans = new bigInt();
	var walls = new bigInt();
	var thieves = new bigInt();
	var keeps = new bigInt();
	pullBig(food, 10000);
	pullBig(totalfood, 15000);
	pullBig(farms, 12000);
	pullBig(wood, 10100);
	pullBig(totalwood, 15100);
	pullBig(forests, 12100);
	pullBig(peasants, 10200);
	pullBig(totalpeasants, 15200);
	pullBig(homesteads, 12200);
	pullBig(stone, 10300);
	pullBig(totalstone, 15300);
	pullBig(quarries, 12300);
	pullBig(horses, 10400);
	pullBig(totalhorses, 15400);
	pullBig(stables, 12400);
	pullBig(horsemills, 12500);
	pullBig(gold, 10500);
	pullBig(totalgold, 15500);
	pullBig(tradeposts, 12900);
	pullBig(iron, 10600);
	pullBig(totaliron, 15600);
	pullBig(ironmines, 12700);
	pullBig(lumbermills, 12600);
	pullBig(weapons, 10700);
	pullBig(totalweapons, 15700);
	pullBig(blacksmiths, 12800);
	pullBig(soldiers, 10800);
	pullBig(totalsoldiers, 15800);
	pullBig(barracks, 13000);
	pullBig(knights, 11100);
	pullBig(totalknights, 16100);
	pullBig(castles, 13100);
	pullBig(armories, 13200);
	pullBig(goldmines, 13400);
	pullBig(books, 10900);
	pullBig(totalbooks, 15900);
	pullBig(monks, 11000);
	pullBig(totalmonks, 16000);
	pullBig(monasteries, 13300);
	pullBig(trebuchets, 13500);
	pullBig(paladins, 11400);
	pullBig(totalpaladins, 16400);
	pullBig(cathedrals, 13600);
	pullBig(caravans, 13700);
	pullBig(walls, 13800);
	pullBig(thieves, 14000);
	pullBig(keeps, 13900);
	if (gameState[11911]) {
		addBig(keeps, castles);
		if (gameState[11911] > 1) {
			addBig(walls, castles);
			if (gameState[11911] > 2) {
				var temp = new bigInt();
				divSmall(castles, 3, temp);
				addBig(armories, temp);
			}
		}
	}
	if (gameState[51906]) {
		var temp = new bigInt();
		pullBig(temp, 53700);
		addBig(walls, temp);
	}
	if ((gameState[51989] == 1) && (gameState[51907] > 1)) {
		var temp = new bigInt();
		pullBig(temp, 53100);
		var temp1 = new bigInt();
		pullBig(temp1, 53400);
		mulBig(temp, temp1);
		addBig(gold, temp);
		addBig(totalgold, temp);
	}
	var millsused = new bigInt();
	addBig(food, farms);
	addBig(totalfood, farms);
	if (gameState[11970]) {
		var temp = hReward();
		var temp1 = new bigInt();
		temp1.data[0] = 1;
		shiftlBig(temp);
		shiftlBig(temp);
		shiftlBig(temp);
		temp = maxBig(temp, temp1);
		mulBig(temp, thieves);
		if (gameState[11701] == 0) {
			addBig(food, temp);
			addBig(totalfood, temp);
		} else if (gameState[11701] == 1) {
			addBig(wood, temp);
			addBig(totalwood, temp);
		} else if (gameState[11701] == 2) {
			addBig(gold, temp);
			addBig(totalgold, temp);
		} else if (gameState[11701] == 3) {
			addBig(books, temp);
			addBig(totalbooks, temp);
		} else if (gameState[11701] == 4) {
			addBig(weapons, temp);
			addBig(totalweapons, temp);
		} else if (gameState[11701] == 5) {
			addBig(stone, temp);
			addBig(totalstone, temp);
		} else if (gameState[11701] == 6) {
			addBig(iron, temp);
			addBig(totaliron, temp);
		}
	}
	if (!gameState[11976]) {
		if (compareBig(food, forests)) {
			subBig(food, forests);
			addBig(wood, forests);
			addBig(totalwood, forests);
		} else {
			addBig(wood, food);
			addBig(totalwood, food);
			food.data.fill(0);
		}
	}
	if (!gameState[11977]) {
		if ((gameState[31902]) && (gameState[31980] == 1)) {
			var temp = new bigInt();
			pullBig(temp, 32500);
			addSmall(temp, 1);
			mulBig(homesteads, temp);
		}
		if (compareBig(food, homesteads)) {
			subBig(food, homesteads);
			addBig(peasants, homesteads);
			addBig(totalpeasants, homesteads);
		} else {
			addBig(peasants, food);
			addBig(totalpeasants, food);
			food.data.fill(0);
		}
		pullBig(homesteads, 12200);
	}
	if (!gameState[11978]) {
		if (!gameState[11901]) {
			if (compareBig(peasants, quarries)) {
				subBig(peasants, quarries);
				addBig(stone, quarries);
				addBig(totalstone, quarries);
			} else {
				addBig(stone, peasants);
				addBig(totalstone, peasants);
				peasants.data.fill(0);
			}
		} else {
			if (compareBig(food, quarries)) {
				subBig(food, quarries);
				addBig(stone, quarries);
				addBig(totalstone, quarries);
			} else {
				addBig(stone, food);
				addBig(totalstone, food);
				food.data.fill(0);
			}
		}
	}
	if (!gameState[11979]) {
		var temp = new bigInt();
		addBig(temp, stables);
		if (!gameState[11902]) {
			addBig(temp, stables);
		}
		if (compareBig(food, temp)) {
			subBig(food, temp);
			addBig(horses, stables);
			addBig(totalhorses, stables);
		} else {
			if (!gameState[11902]) {
				var temp1 = (food.data[0] & 1);
				divSmall(food, 2, temp);
				addBig(horses, temp);
				addBig(totalhorses, temp);
				food.data.fill(0);
				food.data[0] = temp1;
			} else {
				addBig(horses, food);
				addBig(totalhorses, food);
				food.data.fill(0);
			}
		}
	}
	if (!gameState[11980]) {
		if (!gameState[11910]) {
			if (compareBig(horses, horsemills)) {
				mulBig(farms, horsemills);
				subBig(horses, horsemills);
				addBig(food, farms);
				addBig(totalfood, farms);
				copyBig(millsused, horsemills);
			} else {
				mulBig(farms, horses);
				addBig(food, farms);
				addBig(totalfood, farms);
				copyBig(millsused, horses);
				horses.data.fill(0);
			}
			pullBig(farms, 12000);
		} else {
			copyBig(millsused, farms);
			mulBig(millsused, horsemills);
			addBig(food, millsused);
			addBig(totalfood, millsused);
			copyBig(millsused, horsemills);
		}
	}
	if (!gameState[11981]) {
		if (!gameState[11976]) {
			var temp = new bigInt();
			if (!gameState[11901]) {
				if (compareBig(peasants, lumbermills)) {
					copyBig(temp, lumbermills);
					subBig(peasants, lumbermills);
				} else {
					copyBig(temp, peasants);
					peasants.data.fill(0);
				}
				mulBig(temp, forests);
				if (compareBig(food, temp)) {
					subBig(food, temp);
					addBig(wood, temp);
					addBig(totalwood, temp);
				} else {
					addBig(wood, food);
					addBig(totalwood, food);
					food.data.fill(0);
				}
			} else {
				if (compareBig(food, lumbermills)) {
					copyBig(temp, lumbermills);
					subBig(food, lumbermills);
				} else {
					copyBig(temp, food);
					food.data.fill(0);
				}
				mulBig(temp, forests);
				if (compareBig(food, temp)) {
					subBig(food, temp);
					addBig(wood, temp);
					addBig(totalwood, temp);
				} else {
					addBig(wood, food);
					addBig(totalwood, food);
					food.data.fill(0);
				}
			}
		}
	}
	if (!gameState[11982]) {
		if (!gameState[11901]) {
			if (compareBig(peasants, ironmines)) {
				subBig(peasants, ironmines);
				addBig(iron, ironmines);
				addBig(totaliron, ironmines);
			} else {
				addBig(iron, peasants);
				addBig(totaliron, peasants);
				peasants.data.fill(0);
			}
		} else {
			if (compareBig(food, ironmines)) {
				subBig(food, ironmines);
				addBig(iron, ironmines);
				addBig(totaliron, ironmines);
			} else {
				addBig(iron, food);
				addBig(totaliron, food);
				food.data.fill(0);
			}
		}
	}
	if (!gameState[11983]) {
		var temp = new bigInt();
		if (compareBig(wood, iron)) {
			copyBig(temp, iron);
		} else {
			copyBig(temp, wood);
		}
		if (compareBig(temp, blacksmiths)) {
			subBig(wood, blacksmiths);
			subBig(iron, blacksmiths);
			addBig(weapons, blacksmiths);
			addBig(totalweapons, blacksmiths);
		} else {
			addBig(weapons, temp);
			addBig(totalweapons, temp);
			subBig(wood, temp);
			subBig(iron, temp);
		}
	}
	if (!gameState[11720]) {
	if (gameState[11984] == 1) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 20);
		if (compareBig(food, temp)) {
			subBig(food, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(food, 20, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 20);
			subBig(food, temp);
		}
	} else if (gameState[11984] == 2) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 20);
			addBig(food, temp);
			addBig(totalfood, temp);
		} else {
			mulSmall(gold, 20);
			addBig(food, gold);
			addBig(totalfood, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 3) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 10);
		if (compareBig(wood, temp)) {
			subBig(wood, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(wood, 10, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 10);
			subBig(wood, temp);
		}
	} else if (gameState[11984] == 4) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 10);
			addBig(wood, temp);
			addBig(totalwood, temp);
		} else {
			mulSmall(gold, 10);
			addBig(wood, gold);
			addBig(totalwood, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 5) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 5);
		if (compareBig(stone, temp)) {
			subBig(stone, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(food, 5, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 5);
			subBig(stone, temp);
		}
	} else if (gameState[11984] == 6) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 5);
			addBig(stone, temp);
			addBig(totalstone, temp);
		} else {
			mulSmall(gold, 5);
			addBig(stone, gold);
			addBig(totalstone, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 7) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 4);
		if (compareBig(horses, temp)) {
			subBig(horses, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(horses, 4, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 4);
			subBig(horses, temp);
		}
	} else if (gameState[11984] == 8) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 4);
			addBig(horses, temp);
			addBig(totalhorses, temp);
		} else {
			mulSmall(gold, 4);
			addBig(horses, gold);
			addBig(totalhorses, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 9) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 3);
		if (compareBig(iron, temp)) {
			subBig(iron, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(iron, 3, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 3);
			subBig(iron, temp);
		}
	} else if (gameState[11984] == 10) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 3);
			addBig(iron, temp);
			addBig(totaliron, temp);
		} else {
			mulSmall(gold, 3);
			addBig(iron, gold);
			addBig(totaliron, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 11) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		mulSmall(temp, 2);
		if (compareBig(weapons, temp)) {
			subBig(weapons, temp);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			divSmall(weapons, 2, temp);
			addBig(gold, temp);
			addBig(totalgold, temp);
			mulSmall(temp, 2);
			subBig(weapons, temp);
		}
	} else if (gameState[11984] == 12) {
		var temp = new bigInt();
		copyBig(temp, tradeposts);
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			mulSmall(temp, 2);
			addBig(weapons, temp);
			addBig(totalweapons, temp);
		} else {
			mulSmall(gold, 2);
			addBig(weapons, gold);
			addBig(totalweapons, gold);
			gold.data.fill(0);
		}
	} else if (gameState[11984] == 13) {
		if (compareBig(books, tradeposts)) {
			subBig(books, tradeposts);
			addBig(gold, tradeposts);
			addBig(totalgold, tradeposts);
		} else {
			addBig(gold, books);
			addBig(totalgold, books);
			books.data.fill(0);
		}
	} else if (gameState[11984] == 14) {
		if (compareBig(gold, tradeposts)) {
			subBig(gold, tradeposts);
			addBig(books, tradeposts);
			addBig(totalbooks, tradeposts);
		} else {
			addBig(books, gold);
			addBig(totalbooks, gold);
			gold.data.fill(0);
		}
	}
	}
	if (!gameState[11985]) {
		var temp = new bigInt();
		if (compareBig(peasants, weapons)) {
			copyBig(temp, weapons);
		} else {
			copyBig(temp, peasants);
		}
		if (compareBig(temp, barracks)) {
			subBig(peasants, barracks);
			subBig(weapons, barracks);
			addBig(soldiers, barracks);
			addBig(totalsoldiers, barracks);
		} else {
			addBig(soldiers, temp);
			addBig(totalsoldiers, temp);
			subBig(peasants, temp);
			subBig(weapons, temp);
		}
	}
	if (!gameState[11986]) {
		var temp = new bigInt();
		if (compareBig(horses, soldiers)) {
			copyBig(temp, soldiers);
		} else {
			copyBig(temp, horses);
		}
		if (compareBig(temp, castles)) {
			subBig(horses, castles);
			subBig(soldiers, castles);
			addBig(knights, castles);
			addBig(totalknights, castles);
		} else {
			addBig(knights, temp);
			addBig(totalknights, temp);
			subBig(horses, temp);
			subBig(soldiers, temp);
		}
	}
	if (gameState[11988] == 1) {
		addSmall(millsused, 1);
		mulBig(millsused, farms);
		if (compareBig(books, monasteries)) {
			mulBig(millsused, monasteries);
			addBig(food, millsused);
			addBig(totalfood, millsused);
			subBig(books, monasteries);
		} else {
			mulBig(millsused, books);
			addBig(food, millsused);
			addBig(totalfood, millsused);
			books.data.fill(0);
		}
	} else if (gameState[11988] == 2) {
		if (!gameState[11977]) {
			var temp = new bigInt();
			if (compareBig(books, monasteries)) {
				copyBig(temp, monasteries);
				subBig(books, monasteries);
			} else {
				copyBig(temp, books);
				books.data.fill(0);
			}
			if (gameState[31902] && (gameState[31980] == 1)) {
				var temp2 = new bigInt();
				pullBig(temp2, 32500);
				addSmall(temp2, 1);
				mulBig(temp, temp2);
			}
			mulBig(temp, homesteads);
			if (compareBig(food, temp)) {
				subBig(food, temp);
				addBig(peasants, temp);
				addBig(totalpeasants, temp);
			} else {
				addBig(peasants, food);
				addBig(totalpeasants, food);
				food.data.fill(0);
			}
		}
	} else if (gameState[11988] == 3) {
		if (!gameState[11985]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			if (compareBig(books, monasteries)) {
				copyBig(temp, monasteries);
				subBig(books, monasteries);
			} else {
				copyBig(temp, books);
				books.data.fill(0);
			}
			mulBig(temp, barracks);
			if (compareBig(peasants, weapons)) {
				copyBig(temp2, weapons);
			} else {
				copyBig(temp2, peasants);
			}
			if (compareBig(temp2, temp)) {
				subBig(peasants, temp);
				subBig(weapons, temp);
				addBig(soldiers, temp);
				addBig(totalsoldiers, temp);
			} else {
				subBig(peasants, temp2);
				subBig(weapons, temp2);
				addBig(soldiers, temp2);
				addBig(totalsoldiers, temp2);
			}
		}
	} else if (gameState[11988] == 4) {
		var temp = new bigInt();
		if (compareBig(peasants, books)) {
			copyBig(temp, books);
		} else {
			copyBig(temp, peasants);
		}
		if (compareBig(temp, monasteries)) {
			subBig(peasants, monasteries);
			subBig(books, monasteries);
			addBig(monks, monasteries);
			addBig(totalmonks, monasteries);
		} else {
			addBig(monks, temp);
			addBig(totalmonks, temp);
			subBig(peasants, temp);
			subBig(books, temp);
		}
	}
	if (!gameState[11989]) {
		if (!gameState[11901]) {
			if (compareBig(peasants, goldmines)) {
				subBig(peasants, goldmines);
				addBig(gold, goldmines);
				addBig(totalgold, goldmines);
			} else {
				addBig(gold, peasants);
				addBig(totalgold, peasants);
				peasants.data.fill(0);
			}
		} else {
			if (compareBig(food, goldmines)) {
				subBig(food, goldmines);
				addBig(gold, goldmines);
				addBig(totalgold, goldmines);
			} else {
				addBig(gold, food);
				addBig(totalgold, food);
				food.data.fill(0);
			}
		}
	}
	if (!gameState[11990]) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		pullBig(temp, 11600);
		if (getpowerBig(temp) || temp.data[0]) {
			temp2 = rootBig(temp, 2);
			if (compareBig(stone, trebuchets)) {
				mulBig(temp2, trebuchets);
				subBig(stone, trebuchets);
			} else {
				mulBig(temp2, stone);
				stone.data.fill(0);
			}
			subBig(temp, temp2);
			pushBig(temp, 11600);
		}
	} else if (gameState[11990] == 1) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		pullBig(temp, 11600);
		if (compareBig(books, trebuchets)) {
			copyBig(temp2, trebuchets);
		} else {
			copyBig(temp2, books);
		}
		subBig(books, temp2);
		mulBig(temp2, monasteries);
		subBig(temp, temp2);
		pushBig(temp, 11600);
		addBig(soldiers, temp2);
		addBig(totalsoldiers, temp2);
	}
	if (gameState[11991] == 1) {
		var temp = new bigInt();
		if (compareBig(books, knights)) {
			copyBig(temp, knights);
		} else {
			copyBig(temp, books);
		}
		if (compareBig(temp, cathedrals)) {
			subBig(books, cathedrals);
			subBig(knights, cathedrals);
			addBig(paladins, cathedrals);
			addBig(totalpaladins, cathedrals);
		} else {
			addBig(paladins, temp);
			addBig(totalpaladins, temp);
			subBig(books, temp);
			subBig(knights, temp);
		}
	}
	if (gameState[11992] == 1) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		pullBig(temp2, 20200);
		var temp3 = new bigInt();
		pullBig(temp3, 25200);
		addBig(temp, caravans);
		mulSmall(temp, 50);
		if (compareBig(food, temp)) {
			subBig(food, temp);
			addBig(temp2, temp);
			addBig(temp3, temp);
		} else {
			addBig(temp2, food);
			addBig(temp3, food);
			food.data.fill(0);
		}
		pushBig(temp2, 20200);
		pushBig(temp3, 25200);
	} else if (gameState[11992] == 2) {
		var temp = new bigInt();
		pullBig(temp, 20500);
		var temp2 = new bigInt();
		pullBig(temp2, 25500);
		if (compareBig(stone, caravans)) {
			subBig(stone, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, stone);
			addBig(temp2, stone);
			stone.data.fill(0);
		}
		pushBig(temp, 20500);
		pushBig(temp2, 25500);
	} else if (gameState[11992] == 3) {
		var temp = new bigInt();
		pullBig(temp, 40100);
		var temp2 = new bigInt();
		pullBig(temp2, 45100);
		if (compareBig(stone, caravans)) {
			subBig(stone, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, stone);
			addBig(temp2, stone);
			stone.data.fill(0);
		}
		pushBig(temp, 40100);
		pushBig(temp2, 45100);
	} else if (gameState[11992] == 4) {
		var temp = new bigInt();
		pullBig(temp, 20900);
		var temp2 = new bigInt();
		pullBig(temp2, 25900);
		if (compareBig(wood, caravans)) {
			subBig(wood, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, wood);
			addBig(temp2, wood);
			wood.data.fill(0);
		}
		pushBig(temp, 20900);
		pushBig(temp2, 25900);
	} else if (gameState[11992] == 5) {
		var temp = new bigInt();
		pullBig(temp, 30300);
		var temp2 = new bigInt();
		pullBig(temp2, 35300);
		if (compareBig(wood, caravans)) {
			subBig(wood, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, wood);
			addBig(temp2, wood);
			wood.data.fill(0);
		}
		pushBig(temp, 30300);
		pushBig(temp2, 35300);
	} else if (gameState[11992] == 6) {
		var temp = new bigInt();
		pullBig(temp, 40200);
		var temp2 = new bigInt();
		pullBig(temp2, 45200);
		if (compareBig(wood, caravans)) {
			subBig(wood, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, wood);
			addBig(temp2, wood);
			wood.data.fill(0);
		}
		pushBig(temp, 40200);
		pushBig(temp2, 45200);
	} else if (gameState[11992] == 7) {
		var temp = new bigInt();
		pullBig(temp, 50800);
		var temp2 = new bigInt();
		pullBig(temp2, 55800);
		if (compareBig(wood, caravans)) {
			subBig(wood, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, wood);
			addBig(temp2, wood);
			wood.data.fill(0);
		}
		pushBig(temp, 50800);
		pushBig(temp2, 55800);
	} else if (gameState[11992] == 8) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		pullBig(temp2, 30500);
		var temp3 = new bigInt();
		pullBig(temp3, 35500);
		addBig(temp, caravans);
		mulSmall(temp, 5);
		if (compareBig(weapons, temp)) {
			subBig(weapons, temp);
			addBig(temp2, temp);
			addBig(temp3, temp);
		} else {
			addBig(temp2, weapons);
			addBig(temp3, weapons);
			weapons.data.fill(0);
		}
		pushBig(temp2, 30500);
		pushBig(temp3, 35500);
	} else if (gameState[11992] == 9) {
		var temp = new bigInt();
		pullBig(temp, 30700);
		var temp2 = new bigInt();
		pullBig(temp2, 35700);
		if (compareBig(books, caravans)) {
			subBig(books, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, books);
			addBig(temp2, books);
			books.data.fill(0);
		}
		pushBig(temp, 30700);
		pushBig(temp2, 35700);
	} else if (gameState[11992] == 10) {
		var temp = new bigInt();
		pullBig(temp, 40700);
		var temp2 = new bigInt();
		pullBig(temp2, 45700);
		if (compareBig(books, caravans)) {
			subBig(books, caravans);
			addBig(temp, caravans);
			addBig(temp2, caravans);
		} else {
			addBig(temp, books);
			addBig(temp2, books);
			books.data.fill(0);
		}
		pushBig(temp, 40700);
		pushBig(temp2, 45700);
	}
	if (gameState[11702] == 0) {
		if (gameState[11700]) {
			var temp = new bigInt();
			pullBig(temp, 11600);
			var temp2 = new bigInt();
			var temp3 = new bigInt();
			temp3 = gethMight();
			var temp4 = new bigInt();
			var temp5 = new bigInt();
			temp5.data.fill(0);
			if (gameState[11991] == 2) {
				if (compareBig(books, cathedrals)) {
					copyBig(temp4, cathedrals);
				} else {
					copyBig(temp4, books);
				}
				copyBig(temp5, temp4);
				mulBig(temp4, paladins);
				mulSmall(temp4, 3);
				subBig(temp, temp4);
			}
			if (gameState[21902] > 3) {
				pullBig(temp2, 21000);
				subBig(temp, temp2);
			}
			temp3 = gethMight();
			temp2 = rootBig(temp3, 2);
			copyBig(temp3, keeps);
			if (gameState[21902] > 1) {
				var tempwtf = new bigInt();
				pullBig(tempwtf, 23300);
				addBig(temp3, tempwtf);
			}
			mulBig(temp2, temp3);
			if (gameState[11985] == 1) {
				pullBig(temp3, 13000);
				addSmall(temp3, 1);
				mulBig(temp2, temp3);
			}
			temp3 = gethMight();
			subBig(temp, temp2);
			copyBig(temp2, temp);
			mulBig(temp, temp2);
			divBig(temp, temp3, temp2);
			subBig(temp2, monks);
			if (gameState[31903]) {
				pullBig(temp, 31000);
				subBig(temp2, temp);
			}
			temp = gethMight();
			temp3 = rootBig(temp, 2);
			mulBig(temp3, walls);
			if (gameState[11985] == 1) {
				addSmall(barracks, 1);
				mulBig(temp3, barracks);
				subSmall(barracks, 1);
			}
			subBig(temp2, temp3);
			if (gameState[11908]) {
				subBig(temp2, paladins);
			}
			var templive = new bigInt();
			copyBig(templive, soldiers);
			if (gameState[11905]) {
				if (compareBig(peasants, weapons)) {
					copyBig(temp3, weapons);
				} else {
					copyBig(temp3, peasants);
				}
				addBig(templive, temp3);
			}
			temp3.data.fill(0);
			if ((compareBig(templive, temp2) && (!gameState[11704])) || compareBig(temp3, temp2) || (compareBig(peasants, temp2) && compareBig(weapons, temp2) && (gameState[11704] == 2))) {
				subBig(books, temp5);
				gameState[11702] = 60 - gameState[11900];
				copyBig(temp3, temp2);
				if (gameState[11905]) {
					if (compareBig(peasants, weapons)) {
						copyBig(templive, weapons);
					} else {
						copyBig(templive, peasants);
					}
					if (compareBig(templive, temp2)) {
						subBig(peasants, temp2);
						subBig(weapons, temp2);
						temp2.data.fill(0);
					} else {
						subBig(peasants, templive);
						subBig(weapons, templive);
						subBig(temp2, templive);
					}
				}
				subBig(soldiers, temp2);
				if (gameState[11906]) {
					addBig(weapons, temp3);
					addBig(totalweapons, temp3);
				}
				if (gameState[11907]) {
					pullBig(temp2, 40300);
					addBig(temp2, temp3);
					pushBig(temp2, 40300);
					pullBig(temp2, 45300);
					addBig(temp2, temp3);
					pushBig(temp2, 45300);
				}
				pullBig(temp2, 11800);
				addSmall(temp2, 100);
				pullBig(temp, 11500);
				temp = getPower(20, gethEnemy(gameState[11701]).base + toSmall(temp) - (5 * gameState[11701]) - 20);
				mulBig(temp, temp2);
				if (gameState[41906] && !gameState[41983] && (gameState[11701] == 5)) {
					pullBig(temp3, 42800);
					if (gameState[41991] == 2) {
						pullBig(temp4, 43600);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
					}
					addSmall(temp3, 100);
					mulBig(temp, temp3);
					if (gameState[41906] > 1) {
						pullBig(temp3, 41200);
						addSmall(temp3, 1000000);
						mulBig(temp, temp3);
						shiftlBig(temp);
						shiftlBig(temp);
						shiftlBig(temp);
						shiftlBig(temp);
						shiftlBig(temp);
						shiftlBig(temp);
					}
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
				if (gameState[11701] == 0) {
					addBig(food, temp);
					addBig(totalfood, temp);
				} else if (gameState[11701] == 1) {
					addBig(wood, temp);
					addBig(totalwood, temp);
				} else if (gameState[11701] == 2) {
					addBig(gold, temp);
					addBig(totalgold, temp);
				} else if (gameState[11701] == 3) {
					addBig(books, temp);
					addBig(totalbooks, temp);
				} else if (gameState[11701] == 4) {
					addBig(weapons, temp);
					addBig(totalweapons, temp);
				} else if (gameState[11701] == 5) {
					addBig(stone, temp);
					addBig(totalstone, temp);
				} else if (gameState[11701] == 6) {
					addBig(iron, temp);
					addBig(totaliron, temp);
				}
				pullBig(temp, 11500);
				if (gameState[11701] == gameState[11703]) {
					gameState[11703]++;
				}
				if ((gameState[11701] == 4) && !gameState[1000]) {
					gameState[1000] = 1;
					kongregate.stats.submit("Races Unlocked", 2);
				}
				temp2 = getPower(10, toSmall(temp));
				if (gameState[41901]) {
					temp3 = rootBig(temp2, 2);
					pullBig(temp5, 42200);
					mulBig(temp5, temp3);
					pullBig(temp4, 40000);
					addBig(temp4, temp5);
					pushBig(temp4, 40000);
					pullBig(temp4, 45000);
					addBig(temp4, temp5);
					pushBig(temp4, 45000);
					if (gameState[41901] > 4) {
						pullBig(temp5, 43000);
						mulBig(temp5, temp3);
						pullBig(temp4, 40300);
						addBig(temp4, temp5);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp5);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 1) {
						pullBig(temp3, 42300);
						pullBig(temp4, 42400);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 43200);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 2) {
						pullBig(temp3, 42600);
						if (gameState[41980] == 1) {
							pullBig(temp4, 42500);
							addSmall(temp4, 1);
							mulBig(temp3, temp4);
						}
						pullBig(temp4, 40400);
						addBig(temp4, temp3);
						pushBig(temp4, 40400);
						pullBig(temp4, 45400);
						addBig(temp4, temp3);
						pushBig(temp4, 45400);
					}
					if (gameState[41901] > 3) {
						pullBig(temp3, 40500);
						pullBig(temp4, 40000);
						addBig(temp4, temp3);
						pushBig(temp4, 40000);
						pullBig(temp4, 45000);
						addBig(temp4, temp3);
						pushBig(temp4, 45000);
					}
					if ((gameState[41901] > 5) && !gameState[41986]) {
						pullBig(temp3, 43100);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40800);
						addBig(temp3, temp5);
						pushBig(temp3, 40800);
						pullBig(temp3, 45800);
						addBig(temp3, temp5);
						pushBig(temp3, 45800);
					}
					if (gameState[41901] > 6) {
						pullBig(temp3, 41100);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if ((gameState[41901] > 7) && !gameState[41991]) {
						pullBig(temp3, 40900);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp4, 43600);
						if (compareBig(temp4, temp5)) {
						} else {
							copyBig(temp5, temp4);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40900);
						subBig(temp3, temp5);
						pushBig(temp3, 40900);
						pullBig(temp3, 41200);
						addBig(temp3, temp5);
						pushBig(temp3, 41200);
						pullBig(temp3, 46200);
						addBig(temp3, temp5);
						pushBig(temp3, 46200);
					}
				}
				pullBig(temp3, 16500 + (100 * gameState[11701]));
				addBig(temp3, temp2);
				pushBig(temp3, 16500 + (100 * gameState[11701]));
				pullBig(temp3, 17500 + (100 * gameState[11701]));
				if (compareBig(temp2, temp3)) {
					pushBig(temp2, 17500 + (100 * gameState[11701]));
				}
				pushBig(temp2, 11600);
				pullBig(temp2, 14500);
				if (compareBig(temp, temp2)) {
					addSmall(temp, 1);
					pushBig(temp, 14500);
				}
				if (gameState[11705]) {
					pullBig(temp, 14500);
					pushBig(temp, 11500);
					temp2 = getPower(10, toSmall(temp));
					pushBig(temp2, 11600);
				}
			}
		}
	}
	pushBig(food, 10000);
	pushBig(totalfood, 15000);
	pushBig(wood, 10100);
	pushBig(totalwood, 15100);
	pushBig(peasants, 10200);
	pushBig(totalpeasants, 15200);
	pushBig(stone, 10300);
	pushBig(totalstone, 15300);
	pushBig(horses, 10400);
	pushBig(totalhorses, 15400);
	pushBig(gold, 10500);
	pushBig(totalgold, 15500);
	pushBig(iron, 10600);
	pushBig(totaliron, 15600);
	pushBig(weapons, 10700);
	pushBig(totalweapons, 15700);
	pushBig(soldiers, 10800);
	pushBig(totalsoldiers, 15800);
	pushBig(knights, 11100);
	pushBig(totalknights, 16100);
	pushBig(books, 10900);
	pushBig(totalbooks, 15900);
	pushBig(monks, 11000);
	pushBig(totalmonks, 16000);
	pushBig(paladins, 11400);
	pushBig(totalpaladins, 16400);
	if (savetimer == 0) {
		if ((currentview < 50) || (currentview > 100)) {
/* 			saveGame(); */
			saveLocal();
		}
		savetimer = 60;
	}
	if (gameState[11702] > 0) {
		gameState[11702]--;
	}
	if (gameState[11720] > 0) {
		gameState[11720]--;
	}
	savetimer--;
	if (gameState[1000]) {
		updateo();
	}
	userMove(cmouseposition);
}

function updateo() {
	var mud = new bigInt();
	var totalmud = new bigInt();
	var mudpits = new bigInt();
	var pigs = new bigInt();
	var totalpigs = new bigInt();
	var pens = new bigInt();
	var meat = new bigInt();
	var totalmeat = new bigInt();
	var slaughterhouses = new bigInt();
	var orcs = new bigInt();
	var totalorcs = new bigInt();
	var adobes = new bigInt();
	var blood = new bigInt();
	var totalblood = new bigInt();
	var shrines = new bigInt();
	var stone = new bigInt();
	var totalstone = new bigInt();
	var altars = new bigInt();
	var champions = new bigInt();
	var totalchampions = new bigInt();
	var arenas = new bigInt();
	var dungeons = new bigInt();
	var renown = new bigInt();
	var totalrenown = new bigInt();
	var strongholds = new bigInt();
	var ogres = new bigInt();
	var totalogres = new bigInt();
	var caves = new bigInt();
	var swamps = new bigInt();
	var wood = new bigInt();
	var totalwood = new bigInt();
	var towers = new bigInt();
	var forts = new bigInt();
	var catapults = new bigInt();
	var totalcatapults = new bigInt();
	var workshops = new bigInt();
	var heads = new bigInt();
	var totalheads = new bigInt();
	var hydras = new bigInt();
	var banners = new bigInt();
	var health = new bigInt();
	var totalhealth = new bigInt();
	var trolls = new bigInt();
	var dragons = new bigInt();
	pullBig(mud, 20000);
	pullBig(totalmud, 25000);
	pullBig(mudpits, 22000);
	pullBig(pigs, 20100);
	pullBig(totalpigs, 25100);
	pullBig(pens, 22100);
	pullBig(meat, 20200);
	pullBig(totalmeat, 25200);
	pullBig(slaughterhouses, 22200);
	pullBig(orcs, 20300);
	pullBig(totalorcs, 25300);
	pullBig(adobes, 22300);
	pullBig(blood, 20400);
	pullBig(totalblood, 25400);
	pullBig(shrines, 22400);
	pullBig(stone, 20500);
	pullBig(totalstone, 25500);
	pullBig(altars, 22500);
	pullBig(champions, 20600);
	pullBig(totalchampions, 25600);
	pullBig(arenas, 22600);
	pullBig(dungeons, 22700);
	pullBig(renown, 20800);
	pullBig(totalrenown, 25800);
	pullBig(strongholds, 22800);
	pullBig(ogres, 20700);
	pullBig(totalogres, 25700);
	pullBig(caves, 23000);
	pullBig(swamps, 22900);
	pullBig(wood, 20900);
	pullBig(totalwood, 25900);
	pullBig(towers, 23300);
	pullBig(forts, 23100);
	pullBig(catapults, 21000);
	pullBig(totalcatapults, 26000);
	pullBig(workshops, 23200);
	pullBig(heads, 21100);
	pullBig(totalheads, 26100);
	pullBig(hydras, 23400);
	pullBig(banners, 23500);
	pullBig(health, 21200);
	pullBig(totalhealth, 26200);
	pullBig(trolls, 23600);
	pullBig(dragons, 23700);
	var swampsused = 1;
	var strongholdsused = new bigInt();
	addSmall(strongholdsused, 1);
	if (gameState[21984] == 0) {
		addSmall(swamps, 1);
		swampsused = toSmall(swamps);
		mulBig(mudpits, swamps);
		addBig(mud, mudpits);
		addBig(totalmud, mudpits);
		pullBig(swamps, 22900);
		pullBig(mudpits, 22000);
	} else {
		addBig(mud, mudpits);
		addBig(totalmud, mudpits);
	}
	if (gameState[21976] == 0) {
		if (gameState[21984] == 1) {
			addSmall(swamps, 1);
			mulBig(pens, swamps);
		}
		if (compareBig(mud, pens)) {
			subBig(mud, pens);
			addBig(pigs, pens);
			addBig(totalpigs, pens);
		} else {
			addBig(pigs, mud);
			addBig(totalpigs, mud);
			mud.data.fill(0);
		}
		pullBig(swamps, 22900);
		pullBig(pens, 22100);
	}
	if (gameState[21977] == 0) {
		if (compareBig(pigs, slaughterhouses)) {
			subBig(pigs, slaughterhouses);
			addBig(meat, slaughterhouses);
			addBig(totalmeat, slaughterhouses);
		} else {
			addBig(meat, pigs);
			addBig(totalmeat, pigs);
			pigs.data.fill(0);
		}
	}
	if (gameState[21978] == 0) {
		if (compareBig(meat, adobes)) {
			subBig(meat, adobes);
			addBig(orcs, adobes);
			addBig(totalorcs, adobes);
		} else {
			addBig(orcs, meat);
			addBig(totalorcs, meat);
			meat.data.fill(0);
		}
	}
	if (gameState[21979] == 1) {
		mulSmall(mudpits, swampsused);
		if (compareBig(blood, shrines)) {
			mulBig(mudpits, shrines);
			subBig(blood, shrines);
			addBig(mud, mudpits);
			addBig(totalmud, mudpits);
		} else {
			mulBig(mudpits, blood);
			addBig(mud, mudpits);
			addBig(totalmud, mudpits);
			blood.data.fill(0);
		}
		pullBig(mudpits, 22000);
	}
	if (gameState[21980] == 1) {
		if (compareBig(orcs, altars)) {
			subBig(orcs, altars);
			addBig(blood, altars);
			addBig(totalblood, altars);
			if (gameState[21901] > 1) {
				addBig(meat, altars);
				addBig(totalmeat, altars);
			}
			if (gameState[21907]) {
				var tempghosts = new bigInt();
				pullBig(tempghosts, 40400);
				addBig(tempghosts, altars);
				pushBig(tempghosts, 40400);
				pullBig(tempghosts, 45400);
				addBig(tempghosts, altars);
				pushBig(tempghosts, 45400);
			}
		} else {
			addBig(blood, orcs);
			addBig(totalblood, orcs);
			if (gameState[21901] > 1) {
				addBig(meat, orcs);
				addBig(totalmeat, orcs);
			}
			if (gameState[21907]) {
				var tempghosts = new bigInt();
				pullBig(tempghosts, 40400);
				addBig(tempghosts, orcs);
				pushBig(tempghosts, 40400);
				pullBig(tempghosts, 45400);
				addBig(tempghosts, orcs);
				pushBig(tempghosts, 45400);
			}
			orcs.data.fill(0);
		}
	}
	if (gameState[21981] == 1) {
		var temp = new bigInt();
		addBig(temp, arenas);
		addBig(temp, arenas);
		if (compareBig(orcs, temp)) {
			subBig(orcs, temp);
			addBig(champions, arenas);
			addBig(totalchampions, arenas);
			if (gameState[21901] > 1) {
				addBig(meat, arenas);
				addBig(totalmeat, arenas);
			}
		} else {
			var temp1 = (orcs.data[0] & 1);
			divSmall(orcs, 2, temp);
			addBig(champions, temp);
			addBig(totalchampions, temp);
			if (gameState[21901] > 1) {
				addBig(meat, temp);
				addBig(totalmeat, temp);
			}
			orcs.data.fill(0);
			orcs.data[0] = temp1;
		}
	}
	if (gameState[21982] == 1) {
		if ((gameState[21992] == 1) || gameState[21905]) {
			addSmall(dragons, 1);
			mulBig(dungeons, dragons);
			subSmall(dragons, 1);
		}
		if (compareBig(orcs, dungeons)) {
			subBig(orcs, dungeons);
			addBig(renown, dungeons);
			addBig(totalrenown, dungeons);
			if (gameState[21901] > 1) {
				addBig(meat, dungeons);
				addBig(totalmeat, dungeons);
			}
		} else {
			addBig(renown, orcs);
			addBig(totalrenown, orcs);
			if (gameState[21901] > 1) {
				addBig(meat, orcs);
				addBig(totalmeat, orcs);
			}
			orcs.data.fill(0);
		}
		pullBig(dungeons, 22700);
	}
	if (gameState[21983] == 1) {
		if (!gameState[21978]) {
			var temp = new bigInt();
			if (compareBig(renown, strongholds)) {
				copyBig(temp, strongholds);
				subBig(renown, strongholds);
			} else {
				copyBig(temp, renown);
				renown.data.fill(0);
			}
			addBig(strongholdsused, temp);
			mulBig(temp, adobes);
			if (compareBig(meat, temp)) {
				subBig(meat, temp);
				addBig(orcs, temp);
				addBig(totalorcs, temp);
			} else {
				addBig(orcs, meat);
				addBig(totalorcs, meat);
				meat.data.fill(0);
			}
		}
	}
	if (!gameState[21985]) {
		var temp = new bigInt();
		var temp1 = 0;
		copyBig(temp, blood);
		addBig(temp, temp);
		if (compareBig(temp, meat)) {
			copyBig(temp, caves);
			addBig(temp, temp);
			if (compareBig(meat, temp)) {
				subBig(meat, temp);
				subBig(blood, caves);
				addBig(ogres, caves);
				addBig(totalogres, caves);
			} else {
				temp1 = (meat.data[0] & 1);
				divSmall(meat, 2, temp);
				subBig(blood, temp);
				addBig(ogres, temp);
				addBig(totalogres, temp);
				meat.data.fill(0);
				meat.data[0] = temp1;
			}
		} else {
			if (compareBig(blood, caves)) {
				subBig(blood, caves);
				subBig(meat, caves);
				subBig(meat, caves);
				addBig(ogres, caves);
				addBig(totalogres, caves);
			} else {
				subBig(meat, blood);
				subBig(meat, blood);
				addBig(ogres, blood);
				addBig(totalogres, blood);
				blood.data.fill(0);
			}
		}
	}
	if (gameState[21987] == 1) {
		var temp = new bigInt();
		if (compareBig(stone, wood)) {
			copyBig(temp, wood);
		} else {
			copyBig(temp, stone);
		}
		if (compareBig(temp, workshops)) {
			subBig(stone, workshops);
			subBig(wood, workshops);
			addBig(catapults, workshops);
			addBig(totalcatapults, workshops);
		} else {
			subBig(stone, temp);
			subBig(wood, temp);
			addBig(catapults, temp);
			addBig(totalcatapults, temp);
		}
	}
	if (gameState[21990] == 0) {
		var asdfbig = new bigInt();
		var asdf = getpowerBig(orcs);
		addSmall(asdfbig, asdf);
		mulBig(asdfbig, banners);
		addBig(renown, asdfbig);
		addBig(totalrenown, asdfbig);
	} else if (gameState[21990] == 1) {
		if (!gameState[21978]) {
			var temp = new bigInt();
			if (compareBig(renown, banners)) {
				copyBig(temp, banners);
				subBig(renown, banners);
			} else {
				copyBig(temp, renown);
				renown.data.fill(0);
			}
			mulBig(temp, strongholdsused);
			mulBig(temp, adobes);
			if (compareBig(meat, temp)) {
				subBig(meat, temp);
				addBig(orcs, temp);
				addBig(totalorcs, temp);
			} else {
				addBig(orcs, meat);
				addBig(totalorcs, meat);
				meat.data.fill(0);
			}
		}
	}
	if (gameState[21991] == 0) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		pullBig(temp, 21600);
		if (getpowerBig(temp) || temp.data[0]) {
			temp2 = rootBig(temp, 2);
			if (gameState[21904]) {
				if (compareBig(mud, trolls)) {
					mulBig(temp2, trolls);
					subBig(mud, trolls);
				} else {
					mulBig(temp2, mud);
					mud.data.fill(0);
				}
			} else {
				if (compareBig(stone, trolls)) {
					mulBig(temp2, trolls);
					subBig(stone, trolls);
				} else {
					mulBig(temp2, stone);
					stone.data.fill(0);
				}
			}
			subBig(temp, temp2);
			pushBig(temp, 21600);
		}
	} else if (gameState[21991] == 2) {
		var temp = new bigInt();
		copyBig(temp, trolls);
		mulSmall(temp, 100);
		subBig(temp, health);
		if (compareBig(temp, trolls)) {
			addBig(health, trolls);
			addBig(totalhealth, trolls);
		} else {
			addBig(health, temp);
			addBig(totalhealth, temp);
		}
	}
	if (gameState[21992] == 0) {
		var temp = new bigInt();
		pullBig(temp, 21600);
		var temp2 = new bigInt();
		temp2 = rootBig(temp, 2);
		mulBig(temp2, dragons);
		subBig(temp, temp2);
		pushBig(temp, 21600);
	}
	var temp = new bigInt();
	pullBig(temp, 21600);
	subBig(temp, catapults);
	if (gameState[21903]) {
		subBig(temp, heads);
	}
	pushBig(temp, 21600);
	if ((gameState[21702] == 0) && (gameState[21700])) {
		var temp = new bigInt();
		pullBig(temp, 21600);
		var temp1 = new bigInt();
		var temp2 = new bigInt();
		var temp3 = new bigInt();
		var temp4 = new bigInt();
		var temp5 = new bigInt();
		var temp6 = new bigInt();
		var temp7 = new bigInt();
		var temp8 = new bigInt();
		var root = new bigInt();
		temp1 = rootBig(temp, 2);
		copyBig(root, temp1);
		mulBig(temp1, towers);
		if ((gameState[21983] == 0) || gameState[21908]) {
			addSmall(strongholds, 1);
			mulBig(temp1, strongholds);
			subSmall(strongholds, 1);
		}
		subBig(temp, temp1);
		copyBig(temp1, heads);
		if (gameState[21984] == 2) {
			addSmall(swamps, 3);
			mulBig(temp1, swamps);
			subSmall(swamps, 3);
		} else {
			mulSmall(temp1, 3);
		}
		subBig(temp, temp1);
		if (gameState[21987] == 2) {
			if (gameState[21904]) {
				if (compareBig(mud, workshops)) {
					copyBig(temp4, workshops);
				} else {
					copyBig(temp4, mud);
				}
			} else {
				if (compareBig(stone, workshops)) {
					copyBig(temp4, workshops);
				} else {
					copyBig(temp4, stone);
				}
			}
			copyBig(temp5, temp4);
			mulBig(temp4, catapults);
			mulSmall(temp4, 3);
			subBig(temp, temp4);
		}
		subBig(temp, champions);
		if ((gameState[21990] == 2) && getpowerBig(temp)) {
			if (compareBig(ogres, banners)) {
				copyBig(temp4, banners);
			} else {
				copyBig(temp4, ogres);
			}
			copyBig(temp7, temp4);
			mulBig(temp4, forts);
			mulBig(temp4, ogres);
			subBig(temp, temp4);
		}
		if ((gameState[21991] == 1) && getpowerBig(temp)) {
			var tempbrawl = new bigInt();
			var tempmess = new bigInt();
			copyBig(tempbrawl, root);
			mulBig(tempbrawl, trolls);
			divBig(temp, tempbrawl, tempmess);
			if (compareBig(health, tempmess)) {
				copyBig(temp8, tempmess);
				temp.data.fill(0);
			} else {
				copyBig(temp8, health);
				mulBig(temp8, root);
				mulBig(temp8, trolls);
				subBig(temp, temp8);
				copyBig(temp8, health);
			}
		}
		temp4.data.fill(0);
		copyBig(temp1, ogres);
		addSmall(forts, 2);
		addSmall(temp4, 1);
		if ((gameState[21979] == 2) && getpowerBig(temp)) {
			if (compareBig(blood, shrines)) {
				copyBig(temp4, shrines);
			} else {
				copyBig(temp4, blood);
			}
			copyBig(temp6, temp4);
			addSmall(temp4, 1);
			mulBig(forts, temp4);
		}
		mulBig(temp1, forts);
		if (compareBig(temp, temp1)) {
			subBig(temp, temp1);
			divBig(temp, temp4, temp1);
			addBig(temp1, ogres);
			copyBig(temp, temp1);
		} else {
			divBig(temp, forts, temp1);
			copyBig(temp, temp1);
		}
		pullBig(forts, 23100);
		temp1.data.fill(0);
		if ((compareBig(orcs, temp) && (!gameState[21704])) || compareBig(temp1, temp) || (compareBig(ogres, temp) && compareBig(orcs, temp) && (gameState[21704] == 2))) {
			gameState[21702] = 60 - gameState[21900];
			subBig(orcs, temp);
			if (gameState[21901]) {
				addBig(meat, temp);
				addBig(totalmeat, temp);
			}
			if (gameState[21904]) {
				subBig(mud, temp5);
			} else {
				subBig(stone, temp5);
			}
			subBig(blood, temp6);
			subBig(ogres, temp7);
			subBig(health, temp8);
			pullBig(temp, 21500);
			var temp0 = new bigInt();
			temp = getPower(20, getoEnemy(gameState[21701]).base + toSmall(temp) - (5 * gameState[21701]) - 20);
			if (gameState[21982] == 0) {
				copyBig(temp0, temp);
				mulBig(temp0, dungeons);
				if ((gameState[21992] == 1) || gameState[21905]) {
					addSmall(dragons, 1);
					mulBig(temp0, dragons);
					subSmall(dragons, 1);
				}
				shiftlBig(temp0);
				shiftlBig(temp0);
				addBig(temp, temp0);
			}
			pullBig(temp0, 21800);
			addSmall(temp0, 100);
			mulBig(temp, temp0);
			shiftlBig(temp);
			shiftlBig(temp);
			if (gameState[21701] == 0) {
				addBig(meat, temp);
				addBig(totalmeat, temp);
			} else if (gameState[21701] == 1) {
				addBig(blood, temp);
				addBig(totalblood, temp);
			} else if (gameState[21701] == 2) {
				addBig(stone, temp);
				addBig(totalstone, temp);
			} else if (gameState[21701] == 3) {
				addBig(renown, temp);
				addBig(totalrenown, temp);
			} else if (gameState[21701] == 4) {
				addBig(mud, temp);
				addBig(totalmud, temp);
			} else if (gameState[21701] == 5) {
				addBig(wood, temp);
				addBig(totalwood, temp);
			} else if (gameState[21701] == 6) {
				addBig(orcs, temp);
				addBig(totalorcs, temp);
			}
			addBig(heads, hydras);
			addBig(totalheads, hydras);
			pullBig(temp, 21500);
			if (gameState[21701] == gameState[21703]) {
				gameState[21703]++;
			}
			if ((gameState[21701] == 5) && (gameState[1000] == 1)) {
				gameState[1000] = 2;
				kongregate.stats.submit("Races Unlocked", 3);
			}
			temp2 = getPower(10, toSmall(temp));
			if (gameState[41901]) {
					temp3 = rootBig(temp2, 2);
					pullBig(temp5, 42200);
					mulBig(temp5, temp3);
					pullBig(temp4, 40000);
					addBig(temp4, temp5);
					pushBig(temp4, 40000);
					pullBig(temp4, 45000);
					addBig(temp4, temp5);
					pushBig(temp4, 45000);
					if (gameState[41901] > 4) {
						pullBig(temp5, 43000);
						mulBig(temp5, temp3);
						pullBig(temp4, 40300);
						addBig(temp4, temp5);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp5);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 1) {
						pullBig(temp3, 42300);
						pullBig(temp4, 42400);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 43200);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 2) {
						pullBig(temp3, 42600);
						if (gameState[41980] == 1) {
							pullBig(temp4, 42500);
							addSmall(temp4, 1);
							mulBig(temp3, temp4);
						}
						pullBig(temp4, 40400);
						addBig(temp4, temp3);
						pushBig(temp4, 40400);
						pullBig(temp4, 45400);
						addBig(temp4, temp3);
						pushBig(temp4, 45400);
					}
					if (gameState[41901] > 3) {
						pullBig(temp3, 40500);
						pullBig(temp4, 40000);
						addBig(temp4, temp3);
						pushBig(temp4, 40000);
						pullBig(temp4, 45000);
						addBig(temp4, temp3);
						pushBig(temp4, 45000);
					}
					if ((gameState[41901] > 5) && !gameState[41986]) {
						pullBig(temp3, 43100);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40800);
						addBig(temp3, temp5);
						pushBig(temp3, 40800);
						pullBig(temp3, 45800);
						addBig(temp3, temp5);
						pushBig(temp3, 45800);
					}
					if (gameState[41901] > 6) {
						pullBig(temp3, 41100);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if ((gameState[41901] > 7) && !gameState[41991]) {
						pullBig(temp3, 40900);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp4, 43600);
						if (compareBig(temp4, temp5)) {
						} else {
							copyBig(temp5, temp4);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40900);
						subBig(temp3, temp5);
						pushBig(temp3, 40900);
						pullBig(temp3, 41200);
						addBig(temp3, temp5);
						pushBig(temp3, 41200);
						pullBig(temp3, 46200);
						addBig(temp3, temp5);
						pushBig(temp3, 46200);
					}
				}
			pullBig(temp0, 26500 + (100 * gameState[21701]));
			addBig(temp0, temp2);
			pushBig(temp0, 26500 + (100 * gameState[21701]));
			pullBig(temp0, 27500 + (100 * gameState[21701]));
			if (compareBig(temp2, temp0)) {
				pushBig(temp2, 27500 + (100 * gameState[21701]));
			}
			pushBig(temp2, 21600);
			pullBig(temp2, 24500);
			if (compareBig(temp, temp2)) {
				addSmall(temp, 1);
				pushBig(temp, 24500);
			}
			if (gameState[21705]) {
				pullBig(temp, 24500);
				pushBig(temp, 21500);
				temp2 = getPower(10, toSmall(temp));
				pushBig(temp2, 21600);
			}
		}
	}
	pushBig(mud, 20000);
	pushBig(totalmud, 25000);
	pushBig(pigs, 20100);
	pushBig(totalpigs, 25100);
	pushBig(meat, 20200);
	pushBig(totalmeat, 25200);
	pushBig(orcs, 20300);
	pushBig(totalorcs, 25300);
	pushBig(blood, 20400);
	pushBig(totalblood, 25400);
	pushBig(stone, 20500);
	pushBig(totalstone, 25500);
	pushBig(champions, 20600);
	pushBig(totalchampions, 25600);
	pushBig(renown, 20800);
	pushBig(totalrenown, 25800);
	pushBig(ogres, 20700);
	pushBig(totalogres, 25700);
	pushBig(wood, 20900);
	pushBig(totalwood, 25900);
	pushBig(catapults, 21000);
	pushBig(totalcatapults, 26000);
	pushBig(heads, 21100);
	pushBig(totalheads, 26100);
	pushBig(health, 21200);
	pushBig(totalhealth, 26200);
	if (gameState[21702] > 0) {
		gameState[21702]--;
	}
	if (gameState[1000] > 1) {
		updatee();
	}
}

function updatee() {
	var saplings = new bigInt();
	var totalsaplings = new bigInt();
	var groves = new bigInt();
	var seeds = new bigInt();
	var totalseeds = new bigInt();
	var fruit = new bigInt();
	var totalfruit = new bigInt();
	var orchards = new bigInt();
	var glades = new bigInt();
	var hives = new bigInt();
	var wood = new bigInt();
	var totalwood = new bigInt();
	var elves = new bigInt();
	var totalelves = new bigInt();
	var treehouses = new bigInt();
	var gatherings = new bigInt();
	var bows = new bigInt();
	var totalbows = new bigInt();
	var archers = new bigInt();
	var totalarchers = new bigInt();
	var ranges = new bigInt();
	var books = new bigInt();
	var totalbooks = new bigInt();
	var chapels = new bigInt();
	var unicorns = new bigInt();
	var totalunicorns = new bigInt();
	var meadows = new bigInt();
	var stone = new bigInt();
	var totalstone = new bigInt();
	var ents = new bigInt();
	var ateliers = new bigInt();
	var druids = new bigInt();
	var totaldruids = new bigInt();
	var stonehenges = new bigInt();
	var eggs = new bigInt();
	var totaleggs = new bigInt();
	var phoenixes = new bigInt();
	var totalphoenixes = new bigInt();
	var nests = new bigInt();
	pullBig(saplings, 30000);
	pullBig(totalsaplings, 35000);
	pullBig(groves, 32000);
	pullBig(seeds, 30100);
	pullBig(totalseeds, 35100);
	pullBig(fruit, 30200);
	pullBig(totalfruit, 35200);
	pullBig(orchards, 32100);
	pullBig(glades, 32200);
	pullBig(hives, 32300);
	pullBig(wood, 30300);
	pullBig(totalwood, 35300);
	pullBig(elves, 30400);
	pullBig(totalelves, 35400);
	pullBig(treehouses, 32400);
	pullBig(gatherings, 32500);
	pullBig(bows, 30500);
	pullBig(totalbows, 35500);
	pullBig(archers, 30600);
	pullBig(totalarchers, 35600);
	pullBig(ranges, 32600);
	pullBig(books, 30700);
	pullBig(totalbooks, 35700);
	pullBig(chapels, 32700);
	pullBig(unicorns, 30900);
	pullBig(totalunicorns, 35900);
	pullBig(meadows, 32800);
	pullBig(stone, 30800);
	pullBig(totalstone, 35800);
	pullBig(ents, 33000);
	pullBig(ateliers, 32900);
	pullBig(druids, 31000);
	pullBig(totaldruids, 36000);
	pullBig(stonehenges, 33100);
	pullBig(eggs, 31100);
	pullBig(totaleggs, 36100);
	pullBig(phoenixes, 31200);
	pullBig(totalphoenixes, 36200);
	pullBig(nests, 33200);
	addBig(seeds, groves);
	addBig(totalseeds, groves);
	if ((gameState[31982] == 1) && gameState[31905]) {
		var tempab = new bigInt();
		pullBig(tempab, 31600);
		var temprb = new bigInt();
		temprb = rootBig(tempab, 2);
		mulBig(temprb, chapels);
		subBig(tempab, temprb);
		pushBig(tempab, 31600);
	}
	if (gameState[31978] == 0) {
		mulBig(hives, groves);
		addBig(seeds, hives);
		addBig(totalseeds, hives);
		pullBig(hives, 32300);
		mulBig(hives, orchards);
		addBig(fruit, hives);
		addBig(totalfruit, hives);
		pullBig(hives, 32300);
	}
	if (gameState[31982] == 0) {
		mulBig(chapels, groves);
		if (gameState[31978] == 0) {
			addSmall(hives, 1);
			mulBig(chapels, hives);
			subSmall(hives, 1);
		}
		addBig(seeds, chapels);
		addBig(totalseeds, chapels);
		pullBig(chapels, 32700);
	}
	addBig(fruit, orchards);
	addBig(totalfruit, orchards);
	if (gameState[31980] == 0) {
		mulBig(gatherings, orchards);
		if (gameState[31978] == 0) {
			addSmall(hives, 1);
			mulBig(gatherings, hives);
			subSmall(hives, 1);
		}
		addBig(fruit, gatherings);
		addBig(totalfruit, gatherings);
		pullBig(gatherings, 32500);
		subBig(fruit, gatherings);
	}
	if (gameState[31977] == 0) {
		if ((compareBig(seeds, glades)) || (gameState[31901])) {
			if (!gameState[31901]) {
				subBig(seeds, glades);
			}
			addBig(saplings, glades);
			addBig(totalsaplings, glades);
		} else {
			addBig(saplings, seeds);
			addBig(totalsaplings, seeds);
			seeds.data.fill(0);
		}
	}
	if (gameState[31978] == 1) {
		var temp = new bigInt();
		pullBig(temp, 31600);
		if (gameState[31982] == 1) {
			mulBig(chapels, hives);
			subBig(temp, chapels);
			pullBig(chapels, 32700);
		}
		subBig(temp, hives);
		pushBig(temp, 31600);
	}
	if (gameState[31979] == 0) {
		if (compareBig(fruit, treehouses)) {
			subBig(fruit, treehouses);
			addBig(elves, treehouses);
			addBig(totalelves, treehouses);
		} else {
			addBig(elves, fruit);
			addBig(totalelves, fruit);
			fruit.data.fill(0);
		}
	}
	if (gameState[31980] == 0) {
		if (!gameState[31977]) {
			mulBig(gatherings, glades);
			if ((compareBig(seeds, gatherings)) || (gameState[31901])) {
				if (!gameState[31901]) {
					subBig(seeds, gatherings);
				}
				addBig(saplings, gatherings);
				addBig(totalsaplings, gatherings);
			} else {
				addBig(saplings, seeds);
				addBig(totalsaplings, seeds);
				seeds.data.fill(0);
			}
			pullBig(gatherings, 32500);
		}
	} else if (gameState[31980] == 1) {
		if (gameState[31908]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			if (compareBig(fruit, elves)) {
				copyBig(temp, elves);
			} else {
				copyBig(temp, fruit);
			}
			if (compareBig(temp, gatherings)) {
				subBig(fruit, gatherings);
				subBig(elves, gatherings);
				pullBig(temp2, 40000);
				addBig(temp2, gatherings);
				pushBig(temp2, 40000);
				pullBig(temp2, 45000);
				addBig(temp2, gatherings);
				pushBig(temp2, 45000);
				pullBig(temp2, 40400);
				addBig(temp2, gatherings);
				pushBig(temp2, 40400);
				pullBig(temp2, 45400);
				addBig(temp2, gatherings);
				pushBig(temp2, 45400);
				if (!gameState[31979]) {
					copyBig(temp2, treehouses);
					mulBig(temp2, gatherings);
					if (compareBig(fruit, temp2)) {
						subBig(fruit, temp2);
						addBig(elves, temp2);
						addBig(totalelves, temp2);
					} else {
						addBig(elves, fruit);
						addBig(totalelves, fruit);
						fruit.data.fill(0);
					}
				}
			} else {
				subBig(fruit, temp);
				subBig(elves, temp);
				pullBig(temp2, 40000);
				addBig(temp2, temp);
				pushBig(temp2, 40000);
				pullBig(temp2, 45000);
				addBig(temp2, temp);
				pushBig(temp2, 45000);
				pullBig(temp2, 40400);
				addBig(temp2, temp);
				pushBig(temp2, 40400);
				pullBig(temp2, 45400);
				addBig(temp2, temp);
				pushBig(temp2, 45400);
				if (!gameState[31979]) {
					copyBig(temp2, treehouses);
					mulBig(temp2, temp);
					if (compareBig(fruit, temp2)) {
						subBig(fruit, temp2);
						addBig(elves, temp2);
						addBig(totalelves, temp22);
					} else {
						addBig(elves, fruit);
						addBig(totalelves, fruit);
						fruit.data.fill(0);
					}
				}
			}
		} else if (!gameState[31979]) {
			var temp = new bigInt();
			if (compareBig(fruit, gatherings)) {
				copyBig(temp, gatherings);
				subBig(fruit, gatherings);
			} else {
				copyBig(temp, fruit);
				fruit.data.fill(0);
			}
			mulBig(temp, treehouses);
			if (compareBig(fruit, temp)) {
				subBig(fruit, temp);
				addBig(elves, temp);
				addBig(totalelves, temp);
			} else {
				addBig(elves, fruit);
				addBig(totalelves, fruit);
				fruit.data.fill(0);
			}
		}
	} else if ((gameState[31980] == 2) && (!gameState[31981])) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		if (compareBig(fruit, gatherings)) {
			copyBig(temp, gatherings);
			subBig(fruit, gatherings);
		} else {
			copyBig(temp, fruit);
			fruit.data.fill(0);
		}
		mulBig(temp, ranges);
		if (compareBig(elves, bows)) {
			copyBig(temp2, bows);
		} else {
			copyBig(temp2, elves);
		}
		if (compareBig(temp2, temp)) {
			subBig(elves, temp);
			subBig(bows, temp);
			addBig(archers, temp);
			addBig(totalarchers, temp);
		} else {
			subBig(elves, temp2);
			subBig(bows, temp2);
			addBig(archers, temp2);
			addBig(totalarchers, temp2);
		}
	}
	if (gameState[31981] == 0) {
		var temp = new bigInt();
		if (compareBig(elves, bows)) {
			copyBig(temp, bows);
		} else {
			copyBig(temp, elves);
		}
		if (compareBig(temp, ranges)) {
			subBig(elves, ranges);
			subBig(bows, ranges);
			addBig(archers, ranges);
			addBig(totalarchers, ranges);
		} else {
			subBig(elves, temp);
			subBig(bows, temp);
			addBig(archers, temp);
			addBig(totalarchers, temp);
		}
	}
	if (gameState[31982] == 0) {
		if (gameState[31980] == 0) {
			addSmall(gatherings, 1);
			mulBig(chapels, gatherings);
			subSmall(gatherings, 1);
		}
		mulBig(chapels, glades);
		if ((compareBig(seeds, chapels)) || (gameState[31901])) {
			addBig(saplings, chapels);
			addBig(totalsaplings, chapels);
			if (!gameState[31901]) {
				subBig(seeds, chapels);
			}
		} else {
			addBig(saplings, seeds);
			addBig(totalsaplings, seeds);
			seeds.data.fill(0);
		}
		pullBig(chapels, 32700);
	}
	if (gameState[31983] == 0) {
		mulSmall(meadows, 3);
		if (compareBig(fruit, meadows)) {
			subBig(fruit, meadows);
			pullBig(meadows, 32800);
			addBig(unicorns, meadows);
			addBig(totalunicorns, meadows);
		} else {
			while (compareSmall(fruit, 3)) {
				subSmall(fruit, 3);
				addSmall(unicorns, 1);
				addSmall(totalunicorns, 1);
			}
			pullBig(meadows, 32800);
		}
	} else if (gameState[31983] == 1) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		var temp3 = new bigInt();
		var temp4 = new bigInt();
		if (gameState[31906]) {
			pullBig(temp3, 11600);
			temp4 = rootBig(temp3, 2);
		}
		pullBig(temp, 31600);
		if (getpowerBig(temp) || temp.data[0] || gameState[31906]) {
			temp2 = rootBig(temp, 2);
			if (compareBig(unicorns, meadows)) {
				mulBig(temp2, meadows);
				subBig(unicorns, meadows);
				if (gameState[31906]) {
					mulBig(temp4, meadows);
				}
			} else {
				mulBig(temp2, unicorns);
				if (gameState[31906]) {
					mulBig(temp4, unicorns);
				}
				unicorns.data.fill(0);
			}
			if (gameState[31906]) {
				subBig(temp3, temp4);
				pushBig(temp3, 11600);
			}
			subBig(temp, temp2);
			pushBig(temp, 31600);
		}
	}
	if (gameState[31984] == 0) {
		if (compareBig(saplings, ateliers)) {
			addBig(bows, ateliers);
			addBig(totalbows, ateliers);
			subBig(saplings, ateliers);
		} else {
			addBig(bows, saplings);
			addBig(totalbows, saplings);
			saplings.data.fill(0);
		}
	}
	if (gameState[31985] == 1) {
		addBig(stone, ents);
		addBig(totalstone, ents);
		if ((gameState[31982] == 2) || gameState[31909]) {
			mulBig(chapels, ents);
			addBig(stone, chapels);
			addBig(totalstone, chapels);
			pullBig(chapels, 32700);
		}
	}
	if (gameState[31986] == 1) {
		var temp = new bigInt();
		if (compareBig(elves, books)) {
			copyBig(temp, books);
		} else {
			copyBig(temp, elves);
		}
		if (compareBig(temp, stonehenges)) {
			subBig(elves, stonehenges);
			subBig(books, stonehenges);
			addBig(druids, stonehenges);
			addBig(totaldruids, stonehenges);
		} else {
			subBig(elves, temp);
			subBig(books, temp);
			addBig(druids, temp);
			addBig(totaldruids, temp);
		}
	}
	if (gameState[31987] == 0) {
		if (gameState[21906] && !gameState[21992]) {
			var tempdrag = new bigInt();
			pullBig(tempdrag, 23700);
			addSmall(tempdrag, 1);
			mulBig(nests, tempdrag);
		}
		if (compareBig(eggs, nests)) {
			addBig(phoenixes, nests);
			addBig(totalphoenixes, nests);
			subBig(eggs, nests);
		} else {
			addBig(phoenixes, eggs);
			addBig(totalphoenixes, eggs);
			eggs.data.fill(0);
		}
		pullBig(nests, 33200);
	}
	var temp = new bigInt();
	pullBig(temp, 31600);
	subBig(temp, druids);
	pushBig(temp, 31600);
	if ((gameState[31702] == 0) && (gameState[31700])) {
		var temp = new bigInt();
		var temp2 = new bigInt();
		var temp3 = new bigInt();
		var temp4 = new bigInt();
		var temp5 = new bigInt();
		pullBig(temp, 31600);
		temp2 = rootBig(temp, 2);
		if (gameState[31985] == 0) {
			temp2 = rootBig(temp, 2);
			mulBig(temp2, ents);
			if ((gameState[31982] == 2) || gameState[31909]) {
				addSmall(chapels, 1);
				mulBig(temp2, chapels);
				subSmall(chapels, 1);
			}
			addBig(temp3, temp2);
		}
		temp2 = rootBig(temp, 2);
		mulBig(temp2, phoenixes);
		addBig(temp3, temp2);
		subBig(temp, temp3);
		if (!gameState[31986]) {
			copyBig(temp2, druids);
			mulSmall(temp2, 2);
			mulBig(temp2, stonehenges);
			subBig(temp, temp2);
		}
		if (compareBig(archers, temp)) {
			pullBig(temp, 31600);
			temp2 = rootBig(temp, 2);
			subBig(temp, archers);
			if (!gameState[31986]) {
				copyBig(temp3, druids);
				mulSmall(temp3, 2);
				mulBig(temp3, stonehenges);
				subBig(temp, temp3);
			}
			copyBig(temp3, temp2);
			if (gameState[31985] == 0) {
				mulBig(temp3, ents);
				if ((gameState[31982] == 2) || gameState[31909]) {
					addSmall(chapels, 1);
					mulBig(temp3, chapels);
					subSmall(chapels, 1);
				}
				subBig(temp, temp3);
			}
			if (compareSmall(temp, 0)) {
				divBig(temp, temp2, temp3);
				subBig(phoenixes, temp3);
				addBig(eggs, temp3);
				addBig(totaleggs, temp3);
			}
			gameState[31702] = 60 - gameState[31900];
			pullBig(temp, 31500);
			var temp0 = new bigInt();
			temp = getPower(20, geteEnemy(gameState[31701]).base + toSmall(temp) - (5 * gameState[31701]) - 20);
			pullBig(temp0, 31800);
			addSmall(temp0, 100);
			mulBig(temp, temp0);
			if (gameState[41906] && !gameState[41983] && (gameState[31701] == 6)) {
				pullBig(temp3, 42800);
				if (gameState[41991] == 2) {
					pullBig(temp4, 43600);
					addSmall(temp4, 1);
					mulBig(temp3, temp4);
				}
				addSmall(temp3, 100);
				mulBig(temp, temp3);
				if (gameState[41906] > 1) {
					pullBig(temp3, 41200);
					addSmall(temp3, 1000000);
					mulBig(temp, temp3);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
			}
			shiftlBig(temp);
			shiftlBig(temp);
			if (gameState[31701] == 0) {
				addBig(seeds, temp);
				addBig(totalseeds, temp);
				if (gameState[31904]) {
					pullBig(temp0, 20100);
					mulSmall(temp, 5);
					shiftlBig(temp);
					shiftlBig(temp);
					addBig(temp0, temp);
					pushBig(temp0, 20100);
					pullBig(temp0, 25100);
					addBig(temp0, temp);
					pushBig(temp0, 25100);
				}
			} else if (gameState[31701] == 1) {
				addBig(wood, temp);
				addBig(totalwood, temp);
			} else if (gameState[31701] == 2) {
				addBig(bows, temp);
				addBig(totalbows, temp);
			} else if (gameState[31701] == 3) {
				addBig(books, temp);
				addBig(totalbooks, temp);
				if (gameState[31907]) {
					pullBig(temp2, 10900);
					addBig(temp2, temp);
					pushBig(temp2, 10900);
					pullBig(temp2, 15900);
					addBig(temp2, temp);
					pushBig(temp2, 15900);
					pullBig(temp2, 40700);
					addBig(temp2, temp);
					pushBig(temp2, 40700);
					pullBig(temp2, 45700);
					addBig(temp2, temp);
					pushBig(temp2, 45700);
				}
			} else if (gameState[31701] == 4) {
				addBig(fruit, temp);
				addBig(totalfruit, temp);
			} else if (gameState[31701] == 5) {
				addBig(saplings, temp);
				addBig(totalsaplings, temp);
			} else if (gameState[31701] == 6) {
				addBig(stone, temp);
				addBig(totalstone, temp);
			} else if (gameState[31701] == 7) {
				addBig(eggs, temp);
				addBig(totaleggs, temp);
			}
			pullBig(temp, 31500);
			if (gameState[31701] == gameState[31703]) {
				gameState[31703]++;
			}
			if ((gameState[31701] == 6) && (gameState[1000] == 2)) {
				gameState[1000] = 3;
				kongregate.stats.submit("Races Unlocked", 4);
			}
			temp2 = getPower(10, toSmall(temp));
			if (gameState[41901]) {
					temp3 = rootBig(temp2, 2);
					pullBig(temp5, 42200);
					mulBig(temp5, temp3);
					pullBig(temp4, 40000);
					addBig(temp4, temp5);
					pushBig(temp4, 40000);
					pullBig(temp4, 45000);
					addBig(temp4, temp5);
					pushBig(temp4, 45000);
					if (gameState[41901] > 4) {
						pullBig(temp5, 43000);
						mulBig(temp5, temp3);
						pullBig(temp4, 40300);
						addBig(temp4, temp5);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp5);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 1) {
						pullBig(temp3, 42300);
						pullBig(temp4, 42400);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 43200);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if (gameState[41901] > 2) {
						pullBig(temp3, 42600);
						if (gameState[41980] == 1) {
							pullBig(temp4, 42500);
							addSmall(temp4, 1);
							mulBig(temp3, temp4);
						}
						pullBig(temp4, 40400);
						addBig(temp4, temp3);
						pushBig(temp4, 40400);
						pullBig(temp4, 45400);
						addBig(temp4, temp3);
						pushBig(temp4, 45400);
					}
					if (gameState[41901] > 3) {
						pullBig(temp3, 40500);
						pullBig(temp4, 40000);
						addBig(temp4, temp3);
						pushBig(temp4, 40000);
						pullBig(temp4, 45000);
						addBig(temp4, temp3);
						pushBig(temp4, 45000);
					}
					if ((gameState[41901] > 5) && !gameState[41986]) {
						pullBig(temp3, 43100);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40800);
						addBig(temp3, temp5);
						pushBig(temp3, 40800);
						pullBig(temp3, 45800);
						addBig(temp3, temp5);
						pushBig(temp3, 45800);
					}
					if (gameState[41901] > 6) {
						pullBig(temp3, 41100);
						pullBig(temp4, 40300);
						addBig(temp4, temp3);
						pushBig(temp4, 40300);
						pullBig(temp4, 45300);
						addBig(temp4, temp3);
						pushBig(temp4, 45300);
					}
					if ((gameState[41901] > 7) && !gameState[41991]) {
						pullBig(temp3, 40900);
						pullBig(temp4, 40700);
						if (compareBig(temp3, temp4)) {
							copyBig(temp5, temp4);
						} else {
							copyBig(temp5, temp3);
						}
						pullBig(temp4, 43600);
						if (compareBig(temp4, temp5)) {
						} else {
							copyBig(temp5, temp4);
						}
						pullBig(temp3, 40700);
						subBig(temp3, temp5);
						pushBig(temp3, 40700);
						pullBig(temp3, 40900);
						subBig(temp3, temp5);
						pushBig(temp3, 40900);
						pullBig(temp3, 41200);
						addBig(temp3, temp5);
						pushBig(temp3, 41200);
						pullBig(temp3, 46200);
						addBig(temp3, temp5);
						pushBig(temp3, 46200);
					}
				}
			pullBig(temp0, 36500 + (100 * gameState[31701]));
			addBig(temp0, temp2);
			pushBig(temp0, 36500 + (100 * gameState[31701]));
			pullBig(temp0, 37500 + (100 * gameState[31701]));
			if (compareBig(temp2, temp0)) {
				pushBig(temp2, 37500 + (100 * gameState[31701]));
			}
			pushBig(temp2, 31600);
			pullBig(temp2, 34500);
			if (compareBig(temp, temp2)) {
				addSmall(temp, 1);
				pushBig(temp, 34500);
			}
			if (gameState[31705]) {
				pullBig(temp, 34500);
				pushBig(temp, 31500);
				temp2 = getPower(10, toSmall(temp));
				pushBig(temp2, 31600);
			}
		}
	}
	pushBig(saplings, 30000);
	pushBig(totalsaplings, 35000);
	pushBig(seeds, 30100);
	pushBig(totalseeds, 35100);
	pushBig(fruit, 30200);
	pushBig(totalfruit, 35200);
	pushBig(wood, 30300);
	pushBig(totalwood, 35300);
	pushBig(elves, 30400);
	pushBig(totalelves, 35400);
	pushBig(bows, 30500);
	pushBig(totalbows, 35500);
	pushBig(archers, 30600);
	pushBig(totalarchers, 35600);
	pushBig(books, 30700);
	pushBig(totalbooks, 35700);
	pushBig(unicorns, 30900);
	pushBig(totalunicorns, 35900);
	pushBig(stone, 30800);
	pushBig(totalstone, 35800);
	pushBig(druids, 31000);
	pushBig(totaldruids, 36000);
	pushBig(eggs, 31100);
	pushBig(totaleggs, 36100);
	pushBig(phoenixes, 31200);
	pushBig(totalphoenixes, 36200);
	if (gameState[31702] > 0) {
		gameState[31702]--;
	}
	if (gameState[1000] > 2) {
		updateu();
	}
}

function updateu() {
	var corpses = new bigInt();
	var totalcorpses = new bigInt();
	var graveyards = new bigInt();
	var skeletons = new bigInt();
	var totalskeletons = new bigInt();
	var necropolis = new bigInt();
	var barrows = new bigInt();
	var stone = new bigInt();
	var totalstone = new bigInt();
	var tombs = new bigInt();
	var crypts = new bigInt();
	var catacombs = new bigInt();
	var wood = new bigInt();
	var totalwood = new bigInt();
	var mires = new bigInt();
	var ghosts = new bigInt();
	var totalghosts = new bigInt();
	var mansions = new bigInt();
	var coffins = new bigInt();
	var totalcoffins = new bigInt();
	var sheds = new bigInt();
	var acolytes = new bigInt();
	var totalacolytes = new bigInt();
	var conclaves = new bigInt();
	var books = new bigInt();
	var totalbooks = new bigInt();
	var liches = new bigInt();
	var totalliches = new bigInt();
	var mausoleums = new bigInt();
	var charnels = new bigInt();
	var sepulchres = new bigInt();
	var massgraves = new bigInt();
	var necromancers = new bigInt();
	var totalnecromancers = new bigInt();
	var obelisks = new bigInt();
	var limbs = new bigInt();
	var totallimbs = new bigInt();
	var abominations = new bigInt();
	var gold = new bigInt();
	var totalgold = new bigInt();
	var mummies = new bigInt();
	var totalmummies = new bigInt();
	var pyramids = new bigInt();
	pullBig(corpses, 40000);
	pullBig(totalcorpses, 45000);
	pullBig(graveyards, 42000);
	pullBig(skeletons, 40300);
	pullBig(totalskeletons, 45300);
	pullBig(necropolis, 42100);
	pullBig(barrows, 42200);
	pullBig(stone, 40100);
	pullBig(totalstone, 45100);
	pullBig(tombs, 42300);
	pullBig(crypts, 42400);
	pullBig(catacombs, 42800);
	pullBig(wood, 40200);
	pullBig(totalwood, 45200);
	pullBig(mires, 42500);
	pullBig(ghosts, 40400);
	pullBig(totalghosts, 45400);
	pullBig(mansions, 42600);
	pullBig(coffins, 40500);
	pullBig(totalcoffins, 45500);
	pullBig(sheds, 42700);
	pullBig(acolytes, 40600);
	pullBig(totalacolytes, 45600);
	pullBig(conclaves, 42900);
	pullBig(books, 40700);
	pullBig(totalbooks, 45700);
	pullBig(liches, 40800);
	pullBig(totalliches, 45800);
	pullBig(mausoleums, 43100);
	pullBig(charnels, 43200);
	pullBig(sepulchres, 43300);
	pullBig(massgraves, 43000);
	pullBig(necromancers, 41100);
	pullBig(totalnecromancers, 46100);
	pullBig(obelisks, 43500);
	pullBig(limbs, 41000);
	pullBig(totallimbs, 46000);
	pullBig(abominations, 43400);
	pullBig(gold, 40900);
	pullBig(totalgold, 45900);
	pullBig(mummies, 41200);
	pullBig(totalmummies, 46200);
	pullBig(pyramids, 43600);
	addBig(corpses, graveyards);
	addBig(totalcorpses, graveyards);
	if (!gameState[41980]) {
		mulBig(mires, graveyards);
		addBig(corpses, mires);
		addBig(totalcorpses, mires);
		pullBig(mires, 42500);
	}
	if (!gameState[41984]) {
		mulBig(conclaves, graveyards);
		if (!gameState[41980]) {
			addSmall(mires, 1);
			mulBig(conclaves, mires);
			subSmall(mires, 1);
		}
		addBig(corpses, conclaves);
		addBig(totalcorpses, conclaves);
		pullBig(conclaves, 42900);
		if (gameState[41903]) {
			var tempe = new bigInt();
			var tempr = new bigInt();
			pullBig(tempe, 41600);
			tempr = rootBig(tempe, 2);
			mulBig(tempr, conclaves);
			subBig(tempe, tempr);
			pushBig(tempe, 41600);
		}
	}
	if (!gameState[41976]) {
		addSmall(charnels, 1);
		mulBig(necropolis, charnels);
		subSmall(charnels, 1);
		if (compareBig(corpses, necropolis)) {
			subBig(corpses, necropolis);
			addBig(skeletons, necropolis);
			addBig(totalskeletons, necropolis);
		} else {
			addBig(skeletons, corpses);
			addBig(totalskeletons, corpses);
			corpses.data.fill(0);
		}
		pullBig(necropolis, 42100);
	}
	if (!gameState[41982]) {
		if (compareBig(wood, sheds)) {
			subBig(wood, sheds);
			addBig(coffins, sheds);
			addBig(totalcoffins, sheds);
		} else {
			addBig(coffins, wood);
			addBig(totalcoffins, wood);
			wood.data.fill(0);
		}
	}
	var temp = new bigInt();
	var temp2 = new bigInt();
	if (gameState[41984] == 1) {
		var tempb = new bigInt();
		if (compareBig(acolytes, conclaves)) {
			subBig(acolytes, conclaves);
			addBig(corpses, conclaves);
			addBig(totalcorpses, conclaves);
			addBig(ghosts, conclaves);
			addBig(totalghosts, conclaves);
			if (gameState[41904]) {
				pullBig(tempb, 20400);
				addBig(tempb, conclaves);
				pushBig(tempb, 20400);
				pullBig(tempb, 25400);
				addBig(tempb, conclaves);
				pushBig(tempb, 25400);
			}
		} else {
			addBig(corpses, acolytes);
			addBig(totalcorpses, acolytes);
			addBig(ghosts, acolytes);
			addBig(totalghosts, acolytes);
			if (gameState[41904]) {
				pullBig(tempb, 20400);
				addBig(tempb, acolytes);
				pushBig(tempb, 20400);
				pullBig(tempb, 25400);
				addBig(tempb, acolytes);
				pushBig(tempb, 25400);
			}
			acolytes.data.fill(0);
		}
	} else if (gameState[41984] == 2) {
		if (gameState[41905]) {
			var tempf = new bigInt();
			var i = 1;
			if (compareBig(acolytes, books)) {
				copyBig(tempf, books);
			} else {
				copyBig(tempf, acolytes);
			}
			if (compareBig(tempf, conclaves)) {
				subBig(books, conclaves);
				subBig(acolytes, conclaves);
				while (i <= 5) {
					pullBig(temp, (10000 * i) + 1600);
					temp2 = rootBig(temp, 2);
					mulBig(temp2, conclaves);
					subBig(temp, temp2);
					pushBig(temp, (10000 * i) + 1600);
					i++;
				}
			} else {
				subBig(books, tempf);
				subBig(acolytes, tempf);
				while (i <= 5) {
					pullBig(temp, (10000 * i) + 1600);
					temp2 = rootBig(temp, 2);
					mulBig(temp2, tempf);
					subBig(temp, temp2);
					pushBig(temp, (10000 * i) + 1600);
					i++;
				}
			}
		} else {
			pullBig(temp, 41600);
			if (getpowerBig(temp) || temp.data[0]) {
				temp2 = rootBig(temp, 2);
				if (compareBig(books, conclaves)) {
					mulBig(temp2, conclaves);
					subBig(books, conclaves);
				} else {
					mulBig(temp2, books);
					books.data.fill(0);
				}
				subBig(temp, temp2);
				pushBig(temp, 41600);
			}
		}
	}
	if (!gameState[41989]) {
		copyBig(temp, abominations);
		if (compareBig(corpses, abominations)) {
			subBig(corpses, abominations);
			mulSmall(temp, 2);
			addBig(limbs, temp);
			addBig(totallimbs, temp);
		} else {
			mulSmall(corpses, 2);
			addBig(limbs, corpses);
			addBig(totallimbs, corpses);
			corpses.data.fill(0);
		}
	}
	if (gameState[41990] == 1) {
		if (compareBig(acolytes, books)) {
			copyBig(temp, books);
		} else {
			copyBig(temp, acolytes);
		}
		if (compareBig(temp, obelisks)) {
			subBig(acolytes, obelisks);
			subBig(books, obelisks);
			addBig(necromancers, obelisks);
			addBig(totalnecromancers, obelisks);
		} else {
			subBig(acolytes, temp);
			subBig(books, temp);
			addBig(necromancers, temp);
			addBig(totalnecromancers, temp);
		}
	}
	if (gameState[41991] == 1) {
		pullBig(temp, 41600);
		if (compareBig(books, pyramids)) {
			copyBig(temp2, pyramids);
		} else {
			copyBig(temp2, books);
		}
		subBig(books, temp2);
		mulBig(temp2, mummies);
		subBig(temp, temp2);
		pushBig(temp, 41600);
	}
	pullBig(temp, 41600);
	subBig(temp, liches);
	pushBig(temp, 41600);
	if ((gameState[41702] == 0) && (gameState[41700])) {
		pullBig(temp, 41600);
		var temp1 = new bigInt();
		subBig(temp, ghosts);
		if (gameState[41989] == 1) {
			copyBig(temp1, abominations);
			addBig(limbs, abominations);
			mulBig(temp1, limbs);
			subBig(limbs, abominations);
			subBig(temp, temp1);
		}
		if (!gameState[41990]) {
			addSmall(obelisks, 1);
			divBig(temp, obelisks, temp1);
			subSmall(obelisks, 1);
			copyBig(temp, temp1);
		}
		temp1.data.fill(0);
		if ((compareBig(skeletons, temp) && (!gameState[41704])) || compareBig(temp1, temp)) {
			gameState[41702] = 60 - gameState[41900];
			subBig(skeletons, temp);
			if (gameState[41902]) {
				addBig(corpses, temp);
				addBig(totalcorpses, temp);
			}
			pullBig(temp, 41500);
			temp = getPower(20, getuEnemy(gameState[41701]).base + toSmall(temp) - (5 * gameState[41701]) - 20);
			pullBig(temp1, 41800);
			addSmall(temp1, 100);
			mulBig(temp, temp1);
			shiftlBig(temp);
			shiftlBig(temp);
			copyBig(temp1, catacombs);
			if (gameState[41991] == 2) {
				addSmall(pyramids, 1);
				mulBig(temp1, pyramids);
				subSmall(pyramids, 1);
			}
			addSmall(temp1, 100);
			mulBig(temp, temp1);
			copyBig(temp1, mummies);
			addSmall(temp1, 1000000);
			mulBig(temp, temp1);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			if (gameState[41701] == 0) {
				addBig(corpses, temp);
				addBig(totalcorpses, temp);
			} else if (gameState[41701] == 1) {
				addBig(stone, temp);
				addBig(totalstone, temp);
			} else if (gameState[41701] == 2) {
				addBig(skeletons, temp);
				addBig(totalskeletons, temp);
			} else if (gameState[41701] == 3) {
				addBig(wood, temp);
				addBig(totalwood, temp);
			} else if (gameState[41701] == 4) {
				addBig(acolytes, temp);
				addBig(totalacolytes, temp);
			} else if (gameState[41701] == 5) {
				addBig(books, temp);
				addBig(totalbooks, temp);
			} else if (gameState[41701] == 6) {
				addBig(coffins, temp);
				addBig(totalcoffins, temp);
			} else if (gameState[41701] == 7) {
				addBig(gold, temp);
				addBig(totalgold, temp);
			}
			addBig(corpses, coffins);
			addBig(totalcorpses, coffins);
			addBig(skeletons, necromancers);
			addBig(totalskeletons, necromancers);
			copyBig(temp, crypts);
			addSmall(temp, 1);
			mulBig(temp, tombs);
			addSmall(sepulchres, 1);
			mulBig(temp, sepulchres);
			subSmall(sepulchres, 1);
			addBig(skeletons, temp);
			addBig(totalskeletons, temp);
			addBig(ghosts, mansions);
			addBig(totalghosts, mansions);
			if (gameState[41980] == 1) {
				copyBig(temp, mansions);
				mulBig(temp, mires);
				addBig(ghosts, temp);
				addBig(totalghosts, temp);
			}
			if (!gameState[41986]) {
				if (compareBig(books, mausoleums)) {
					subBig(books, mausoleums);
					addBig(liches, mausoleums);
					addBig(totalliches, mausoleums);
				} else {
					addBig(liches, books);
					addBig(totalliches, books);
					books.data.fill(0);
				}
			}
			if (gameState[41989] == 1) {
				addBig(limbs, abominations);
				addBig(totallimbs, abominations);
			}
			if (!gameState[41991]) {
				if (compareBig(books, gold)) {
					copyBig(temp, gold);
				} else {
					copyBig(temp, books);
				}
				if (compareBig(temp, pyramids)) {
					subBig(books, pyramids);
					subBig(gold, pyramids);
					addBig(mummies, pyramids);
					addBig(totalmummies, pyramids);
				} else {
					addBig(mummies, temp);
					addBig(totalmummies, temp);
					subBig(books, temp);
					subBig(gold, temp);
				}
			}
			pullBig(temp, 41500);
			if (gameState[41701] == gameState[41703]) {
				gameState[41703]++;
			}
			temp2 = getPower(10, toSmall(temp));
			temp1 = rootBig(temp2, 2);
			mulBig(temp1, barrows);
			addBig(corpses, temp1);
			addBig(totalcorpses, temp1);
			temp1 = rootBig(temp2, 2);
			mulBig(temp1, massgraves);
			addBig(skeletons, temp1);
			addBig(totalskeletons, temp1);
			pullBig(temp1, 46500 + (100 * gameState[41701]));
			addBig(temp1, temp2);
			pushBig(temp1, 46500 + (100 * gameState[41701]));
			pullBig(temp1, 47500 + (100 * gameState[41701]));
			if (compareBig(temp2, temp1)) {
				pushBig(temp2, 47500 + (100 * gameState[41701]));
			}
			if ((gameState[41701] == 7) && (gameState[1000] == 3)) {
				gameState[1000] = 4;
				kongregate.stats.submit("Races Unlocked", 5);
			}
			pushBig(temp2, 41600);
			pullBig(temp2, 44500);
			if (compareBig(temp, temp2)) {
				addSmall(temp, 1);
				pushBig(temp, 44500);
			}
			if (gameState[41705]) {
				pullBig(temp, 44500);
				pushBig(temp, 41500);
				temp2 = getPower(10, toSmall(temp));
				pushBig(temp2, 41600);
			}
		}
	}
	pushBig(corpses, 40000);
	pushBig(totalcorpses, 45000);
	pushBig(skeletons, 40300);
	pushBig(totalskeletons, 45300);
	pushBig(stone, 40100);
	pushBig(totalstone, 45100);
	pushBig(wood, 40200);
	pushBig(totalwood, 45200);
	pushBig(ghosts, 40400);
	pushBig(totalghosts, 45400);
	pushBig(coffins, 40500);
	pushBig(totalcoffins, 45500);
	pushBig(acolytes, 40600);
	pushBig(totalacolytes, 45600);
	pushBig(books, 40700);
	pushBig(totalbooks, 45700);
	pushBig(liches, 40800);
	pushBig(totalliches, 45800);
	pushBig(necromancers, 41100);
	pushBig(totalnecromancers, 46100);
	pushBig(limbs, 41000);
	pushBig(totallimbs, 46000);
	pushBig(gold, 40900);
	pushBig(totalgold, 45900);
	pushBig(mummies, 41200);
	pushBig(totalmummies, 46200);
	if (gameState[41702] > 0) {
		gameState[41702]--;
	}
	if (gameState[1000] > 3) {
		updates();
	}
}

function updates() {
	var water = new bigInt();
	var totalwater = new bigInt();
	var wells = new bigInt();
	var feed = new bigInt();
	var totalfeed = new bigInt();
	var fields = new bigInt();
	var morale = new bigInt();
	var gardens = new bigInt();
	var slaves = new bigInt();
	var totalslaves = new bigInt();
	var huts = new bigInt();
	var plantations = new bigInt();
	var canals = new bigInt();
	var stone = new bigInt();
	var totalstone = new bigInt();
	var excavations = new bigInt();
	var coins = new bigInt();
	var totalcoins = new bigInt();
	var markets = new bigInt();
	var mercenaries = new bigInt();
	var totalmercenaries = new bigInt();
	var prisons = new bigInt();
	var camels = new bigInt();
	var totalcamels = new bigInt();
	var cavalry = new bigInt();
	var totalcavalry = new bigInt();
	var coliseums = new bigInt();
	var wood = new bigInt();
	var totalwood = new bigInt();
	var waterwheels = new bigInt();
	var ships = new bigInt();
	var banks = new bigInt();
	var fountains = new bigInt();
	var aquaducts = new bigInt();
	var ballistas = new bigInt();
	var totalballistas = new bigInt();
	var factories = new bigInt();
	var palisades = new bigInt();
	var ports = new bigInt();
	var elephants = new bigInt();
	var totalelephants = new bigInt();
	var barns = new bigInt();
	var treasuries = new bigInt();
	var gems = new bigInt();
	var totalgems = new bigInt();
	var palaces = new bigInt();
	var mirrors = new bigInt();
	var losses = new bigInt();
	var totallosses = new bigInt();
	var maxloss = new bigInt();
	var totalmaxloss = new bigInt();
	pullBig(water, 50000);
	pullBig(totalwater, 55000);
	pullBig(wells, 52000);
	pullBig(feed, 50100);
	pullBig(totalfeed, 55100);
	pullBig(fields, 52100);
	pullBig(morale, 51200);
	pullBig(gardens, 52200);
	pullBig(slaves, 50200);
	pullBig(totalslaves, 55200);
	pullBig(huts, 52300);
	pullBig(plantations, 52400);
	pullBig(canals, 52500);
	pullBig(stone, 50300);
	pullBig(totalstone, 55300);
	pullBig(excavations, 52600);
	pullBig(coins, 50500);
	pullBig(totalcoins, 55500);
	pullBig(markets, 52900);
	pullBig(mercenaries, 50600);
	pullBig(totalmercenaries, 55600);
	pullBig(prisons, 52800);
	pullBig(camels, 50400);
	pullBig(totalcamels, 55400);
	pullBig(cavalry, 50700);
	pullBig(totalcavalry, 55700);
	pullBig(coliseums, 52700);
	pullBig(wood, 50800);
	pullBig(totalwood, 55800);
	pullBig(waterwheels, 53000);
	pullBig(ships, 53100);
	pullBig(banks, 53400);
	pullBig(fountains, 53200);
	pullBig(aquaducts, 53500);
	pullBig(ballistas, 50900);
	pullBig(totalballistas, 55900);
	pullBig(factories, 53300);
	pullBig(palisades, 53700);
	pullBig(ports, 53600);
	pullBig(elephants, 51000);
	pullBig(totalelephants, 56000);
	pullBig(barns, 53800);
	pullBig(treasuries, 53900);
	pullBig(gems, 51100);
	pullBig(totalgems, 56100);
	pullBig(palaces, 54000);
	pullBig(mirrors, 54100);
	pullBig(losses, 54800);
	pullBig(totallosses, 54900);
	pullBig(maxloss, 54600);
	pullBig(totalmaxloss, 54700);
	var temp = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();	
	var temp3 = new bigInt();
	var temp4 = new bigInt();
	var temp5 = new bigInt();
	if (!gameState[51991]) {
		addSmall(ports, 1);
		mulBig(ships, ports);
		subSmall(ports, 1);
	} else if (gameState[51991] == 1) {
		copyBig(temp, ports);
		mulBig(temp, ships);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	}
	addBig(morale, gardens);
	if (gameState[51988] == 1) {
		addBig(morale, factories);
	}
	if (gameState[51903]) {
		var i = 0;
		i = getpowerBig(losses);
		addSmall(morale, i);
	}
	if (gameState[21902] > 4) {
		pullBig(temp, 23500);
		addBig(morale, temp);
	}
	if (gameState[51904]) {
		addBig(morale, rootBig(elephants, 7));
	}
	if (gameState[51982] == 0) {
		temp = minBig(slaves, coliseums);
		subBig(slaves, temp);
		addBig(morale, temp);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	}
	if (gameState[51983] == 1) {
		temp = minBig(slaves, prisons);
		subBig(slaves, temp);
		addBig(morale, temp);
	}
	if (gameState[51987] == 0) {
		temp = minBig(coins, fountains);
		subBig(coins, temp);
		mulSmall(temp, 2);
		addBig(morale, temp);
	} else if (gameState[51987] == 1) {
		copyBig(temp, fountains);
		mulBig(temp, morale);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	}
	if (gameState[51995] == 1) {
		temp = minBig(feed, palaces);
		subBig(feed, temp);
		mulSmall(temp, 2);
		addBig(morale, temp);
	}
	if (gameState[51994] == 1) {
		temp = minBig(coins, treasuries);
		subBig(coins, temp);
		addBig(morale, temp);
	} else if (gameState[51994] == 2) {
		temp = minBig(coins, treasuries);
		subBig(coins, temp);
		mulBig(temp, morale);
		pullBig(temp1, 51600);
		subBig(temp1, temp);
		pushBig(temp1, 51600);
		addBig(mercenaries, temp);
		addBig(totalmercenaries, temp);
	}
	addBig(water, wells);
	addBig(totalwater, wells);
	if (!gameState[51976]) {
		copyBig(temp, fields);
		if (!gameState[51985]) {
			temp5 = minBig(water, waterwheels);
			subBig(water, temp5);
			addSmall(temp5, 1);
			mulBig(temp, temp5);
		}
		temp = minBig(water, temp);
		subBig(water, temp);
		addBig(feed, temp);
		addBig(totalfeed, temp);
	}
	if (!gameState[51978]) {
		copyBig(temp, huts);
		mulBig(temp, morale);
		temp = minBig(feed, temp);
		subBig(feed, temp);
		addBig(slaves, temp);
		addBig(totalslaves, temp);
	}
	if (!gameState[51979]) {
		temp = minBig(slaves, plantations);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, water);
		subBig(water, temp);
		addBig(feed, temp);
		addBig(totalfeed, temp);
	}
	if (!gameState[51980]) {
		copyBig(temp, wells);
		mulBig(temp, canals);
		addBig(water, temp);
		addBig(totalwater, temp);
	} else if ((gameState[51980] == 1) && compareBig(water, canals) && (!gameState[51976] || !gameState[51979])) {
		subBig(water, canals);
		if (!gameState[51976]) 	{
			copyBig(temp, fields);
			mulBig(temp, canals);
			if (!gameState[51985]) {
				mulBig(temp, temp5);
			}
			temp = minBig(water, temp);
			subBig(water, temp);
			addBig(feed, temp);
			addBig(totalfeed, temp);
		}
		if (!gameState[51979]) {
			copyBig(temp, plantations);
			mulBig(temp, canals);
			temp = minBig(slaves, temp);
			subBig(slaves, temp);
			mulBig(temp, morale);
			temp = minBig(water, temp);
			subBig(water, temp);
			addBig(feed, temp);
			addBig(totalfeed, temp);
		}
	}
	if (!gameState[51981]) {
		temp = minBig(slaves, excavations);
		subBig(slaves, temp);
		if (gameState[51901] > 1) {
			var g = toSmall(morale);
			var i = 0;
			while (g > 99) {
				i += 3;
				g -= 100;
			}
			copyBig(temp2, temp);
			var k = Math.floor(Math.random() * 100);
			if (k < g) {
				i += 3;
			}
			mulSmall(temp2, i);
			addBig(gems, temp2);
			addBig(totalgems, temp2);
		}
		mulBig(temp, morale);
		addBig(stone, temp);
		addBig(totalstone, temp);
		if (gameState[51901]) {
			addBig(coins, temp);
			addBig(totalcoins, temp);
		}
	}
	if (gameState[51982] == 1) {
		copyBig(temp, coliseums);
		mulBig(temp, morale);
		temp = minBig(temp, camels);
		temp = minBig(temp, mercenaries);
		subBig(camels, temp);
		subBig(mercenaries, temp);
		addBig(cavalry, temp);
		addBig(totalcavalry, temp);
	}
	if (!gameState[51720]) {
	if (gameState[51984] == 1) {
		temp = minBig(feed, markets);
		subBig(feed, temp);
		if (gameState[51989] == 1) {
			copyBig(temp1, banks);
			addSmall(temp1, 1);
			mulBig(temp, temp1);
		}
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51984] == 2) {
		temp = minBig(coins, markets);
		subBig(coins, temp);
		addBig(feed, temp);
		addBig(totalfeed, temp);
	} else if (gameState[51984] == 3) {
		temp = minBig(slaves, markets);
		subBig(slaves, temp);
		if (gameState[51989] == 1) {
			copyBig(temp1, banks);
			addSmall(temp1, 2);
			mulBig(temp, temp1);
		} else {
			addBig(temp, temp);
		}
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51984] == 4) {
		copyBig(temp, markets);
		addBig(temp, temp);
		temp = minBig(temp, coins);
		divSmall(temp, 2, temp1);
		addBig(slaves, temp1);
		addBig(totalslaves, temp1);
		addBig(temp1, temp1);
		subBig(coins, temp1);
	} else if (gameState[51984] == 5) {
		temp = minBig(camels, markets);
		subBig(camels, temp);
		if (gameState[51989] == 1) {
			copyBig(temp1, banks);
			addSmall(temp1, 3);
			mulBig(temp, temp1);
		} else {
			mulSmall(temp, 3);
		}
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51984] == 6) {
		copyBig(temp, markets);
		mulSmall(temp, 3);
		temp = minBig(temp, coins);
		divSmall(temp, 3, temp1);
		addBig(camels, temp1);
		addBig(totalcamels, temp1);
		mulSmall(temp1, 3);
		subBig(coins, temp1);
	} else if (gameState[51984] == 7) {
		copyBig(temp, markets);
		mulSmall(temp, 5);
		temp = minBig(temp, coins);
		divSmall(temp, 5, temp1);
		addBig(mercenaries, temp1);
		addBig(totalmercenaries, temp1);
		mulSmall(temp1, 5);
		subBig(coins, temp1);
	} else if (gameState[51984] == 8) {
		temp = minBig(gems, markets);
		subBig(gems, temp);
		if (gameState[51989] == 1) {
			copyBig(temp1, banks);
			addSmall(temp1, 50);
			mulBig(temp, temp1);
		} else {
			mulSmall(temp, 50);
		}
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51984] == 9) {
		copyBig(temp, markets);
		mulSmall(temp, 50);
		temp = minBig(temp, coins);
		divSmall(temp, 50, temp1);
		addBig(gems, temp1);
		addBig(totalgems, temp1);
		mulSmall(temp1, 50);
		subBig(coins, temp1);
	}
	}
	if (!gameState[51721]) {
	if (gameState[51986] == 1) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, feed);
		subBig(feed, temp);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51986] == 2) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, coins);
		subBig(coins, temp);
		addBig(feed, temp);
		addBig(totalfeed, temp);
	} else if (gameState[51986] == 3) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, stone);
		subBig(stone, temp);
		mulSmall(temp, 2);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51986] == 4) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		mulSmall(temp, 2);
		temp = minBig(temp, coins);
		divSmall(temp, 2, temp1);
		addBig(stone, temp1);
		addBig(totalstone, temp1);
		mulSmall(temp1, 2);
		subBig(coins, temp1);
	} else if (gameState[51986] == 5) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, camels);
		subBig(camels, temp);
		mulSmall(temp, 3);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	} else if (gameState[51986] == 6) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		mulSmall(temp, 5);
		temp = minBig(temp, coins);
		divSmall(temp, 5, temp1);
		addBig(mercenaries, temp1);
		addBig(totalmercenaries, temp1);
		mulSmall(temp1, 5);
		subBig(coins, temp1);
	} else if (gameState[51986] == 7) {
		pullBig(temp1, 51600);
		if (compareSmall(temp1, 1)) {
			temp = minBig(ships, slaves);
			subBig(slaves, temp);
			mulBig(temp, morale);
			temp = minBig(temp, mercenaries);
			subBig(mercenaries, temp);
			addBig(losses, temp);
			addBig(totallosses, temp);
			if (compareBig(temp, maxloss)) {
				copyBig(maxloss, temp);
				if (compareBig(temp, totalmaxloss)) {
					copyBig(totalmaxloss, temp);
				}
			}
			mulBig(temp, morale);
			mulBig(temp, morale);
			subBig(temp1, temp);
			if (gameState[51905]) {
				temp = rootBig(elephants, 2);
				mulBig(temp, morale);
				subBig(temp1, temp);
			}
			pushBig(temp1, 51600);
		}
	} else if (gameState[51986] == 8) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, stone);
		subBig(stone, temp);
		pullBig(temp1, 10300);
		addBig(temp1, temp);
		pushBig(temp1, 10300);
		pullBig(temp1, 15300);
		addBig(temp1, temp);
		pushBig(temp1, 15300);
	} else if (gameState[51986] == 9) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		temp = minBig(temp, stone);
		subBig(stone, temp);
		pullBig(temp1, 20500);
		addBig(temp1, temp);
		pushBig(temp1, 20500);
		pullBig(temp1, 25500);
		addBig(temp1, temp);
		pushBig(temp1, 25500);
	} else if (gameState[51986] == 10) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		temp = minBig(temp, stone);
		subBig(stone, temp);
		pullBig(temp1, 40100);
		addBig(temp1, temp);
		pushBig(temp1, 40100);
		pullBig(temp1, 45100);
		addBig(temp1, temp);
		pushBig(temp1, 45100);
	} else if (gameState[51986] == 11) {
		temp = minBig(ships, slaves);
		subBig(slaves, temp);
		mulBig(temp, morale);
		temp = minBig(temp, mercenaries);
		subBig(mercenaries, temp);
		pullBig(temp1, 10800);
		addBig(temp1, temp);
		pushBig(temp1, 10800);
		pullBig(temp1, 15800);
		addBig(temp1, temp);
		pushBig(temp1, 15800);
	}
	}
	if (!gameState[51989]) {
		addBig(coins, banks);
		addBig(totalcoins, banks);
	} else if ((gameState[51989] == 1) && gameState[51907]) {
		pullBig(temp, 12900);
		pullBig(temp1, 13700);
		addBig(temp, temp1);
		mulBig(temp, banks);
		addBig(coins, temp);
		addBig(totalcoins, temp);
	}
	if (!gameState[51990]) {
		copyBig(temp, wells);
		if (!gameState[51980]) {
			addSmall(canals, 1);
			mulBig(temp, canals);
			subSmall(canals, 1);
		}
		mulBig(temp, aquaducts);
		addBig(water, temp);
		addBig(totalwater, temp);
	} else if ((gameState[51990] == 1) && !gameState[51978]) {
		temp = minBig(water, aquaducts);
		subBig(water, temp);
		copyBig(temp1, huts);
		mulBig(temp1, temp);
		mulBig(temp1, morale);
		temp = minBig(temp1, feed);
		subBig(feed, temp);
		addBig(slaves, temp);
		addBig(totalslaves, temp);
	}
	if (!gameState[51988]) {
		temp = minBig(slaves, factories);
		temp = minBig(temp, wood);
		subBig(slaves, temp);
		subBig(wood, temp);
		addBig(ballistas, temp);
		addBig(totalballistas, temp);
	}
	if (!gameState[51995]) {
		copyBig(temp, wells);
		if (!gameState[51980]) {
			addSmall(canals, 1);
			mulBig(temp, canals);
			subSmall(canals, 1);
		}
		if (!gameState[51990]) {
			addSmall(aquaducts, 1);
			mulBig(temp, aquaducts);
			subSmall(aquaducts, 1);
		}
		mulBig(temp, palaces);
		addBig(water, temp);
		addBig(totalwater, temp);
	}
	pullBig(temp, 51600);
	temp1 = rootBig(temp, 2);
	mulBig(temp1, mirrors);
	subBig(temp, temp1);
	subBig(temp, ballistas);
	if (gameState[51909]) {
		pullBig(temp1, 30600);
		mulBig(temp1, elephants);
		subBig(temp, rootBig(temp1, 2));
	}
	pushBig(temp, 51600);
	if ((gameState[51702] == 0) && (gameState[51700])) {
		pullBig(temp, 51600);
		subBig(temp, cavalry);
		copyBig(temp1, elephants);
		mulBig(temp1, morale);
		subBig(temp, temp1);
		divBig(temp, morale, temp1);
		copyBig(temp, palisades);
		mulBig(temp, morale);
		mulBig(temp, morale);
		mulBig(temp, morale);
		subBig(temp1, temp);
		if ((compareBig(mercenaries, temp1) && !gameState[51704]) || !compareSmall(temp1, 1)) {
			gameState[51702] = 60 - gameState[51900];
			subBig(mercenaries, temp1);
			addBig(losses, temp1);
			addBig(totallosses, temp1);
			if (compareBig(temp1, maxloss)) {
				copyBig(maxloss, temp1);
				if (compareBig(temp1, totalmaxloss)) {
					copyBig(totalmaxloss, temp1);
				}
			}
			mulSmall(temp1, 4);
			addBig(coins, temp1);
			addBig(totalcoins, temp1);
			pullBig(temp, 51500);
			temp = getPower(20, getsEnemy(gameState[51701]).base + toSmall(temp) - (5 * gameState[51701]) - 20);
			pullBig(temp1, 51800);
			addSmall(temp1, 100);
			mulBig(temp, temp1);
			if (gameState[41906] && !gameState[41983] && (gameState[51701] == 4)) {
				pullBig(temp3, 42800);
				if (gameState[41991] == 2) {
					pullBig(temp4, 43600);
					addSmall(temp4, 1);
					mulBig(temp3, temp4);
				}
				addSmall(temp3, 100);
				mulBig(temp, temp3);
				if (gameState[41906] > 1) {
					pullBig(temp3, 41200);
					addSmall(temp3, 1000000);
					mulBig(temp, temp3);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
			}
			shiftlBig(temp);
			shiftlBig(temp);
			if (gameState[51701] == 0) {
				addBig(slaves, temp);
				addBig(totalslaves, temp);
			} else if (gameState[51701] == 1) {
				addBig(camels, temp);
				addBig(totalcamels, temp);
			} else if (gameState[51701] == 2) {
				addBig(wood, temp);
				addBig(totalwood, temp);
			} else if (gameState[51701] == 3) {
				addBig(coins, temp);
				addBig(totalcoins, temp);
			} else if (gameState[51701] == 4) {
				addBig(stone, temp);
				addBig(totalstone, temp);
			} else if (gameState[51701] == 5) {
				addBig(water, temp);
				addBig(totalwater, temp);
			} else if (gameState[51701] == 6) {
				addBig(feed, temp);
				addBig(totalfeed, temp);
				copyBig(temp, barns);
				addBig(elephants, temp);
				addBig(totalelephants, temp);
				mulSmall(temp, 10);
				subBig(feed, temp);
			} else if (gameState[51701] == 7) {
				addBig(gems, temp);
				addBig(totalgems, temp);
			}
			if (!gameState[51994]) {
				copyBig(temp, treasuries);
				mulBig(temp, morale);
				mulBig(temp, morale);
				addBig(coins, temp);
				addBig(totalcoins, temp);
			}
			pullBig(temp, 51500);
			if (gameState[51701] == gameState[51703]) {
				gameState[51703]++;
			}
			temp2 = getPower(10, toSmall(temp));
			if (!gameState[51983]) {
				temp3 = rootBig(temp2, 2);
				addBig(slaves, temp3);
				addBig(totalslaves, temp3);
			}
			if (gameState[41901]) {
				temp3 = rootBig(temp2, 2);
				pullBig(temp5, 42200);
				mulBig(temp5, temp3);
				pullBig(temp4, 40000);
				addBig(temp4, temp5);
				pushBig(temp4, 40000);
				pullBig(temp4, 45000);
				addBig(temp4, temp5);
				pushBig(temp4, 45000);
				if (gameState[41901] > 4) {
					pullBig(temp5, 43000);
					mulBig(temp5, temp3);
					pullBig(temp4, 40300);
					addBig(temp4, temp5);
					pushBig(temp4, 40300);
					pullBig(temp4, 45300);
					addBig(temp4, temp5);
					pushBig(temp4, 45300);
				}
				if (gameState[41901] > 1) {
					pullBig(temp3, 42300);
					pullBig(temp4, 42400);
					addSmall(temp4, 1);
					mulBig(temp3, temp4);
					pullBig(temp4, 43200);
					addSmall(temp4, 1);
					mulBig(temp3, temp4);
					pullBig(temp4, 40300);
					addBig(temp4, temp3);
					pushBig(temp4, 40300);
					pullBig(temp4, 45300);
					addBig(temp4, temp3);
					pushBig(temp4, 45300);
				}
				if (gameState[41901] > 2) {
					pullBig(temp3, 42600);
					if (gameState[41980] == 1) {
						pullBig(temp4, 42500);
						addSmall(temp4, 1);
						mulBig(temp3, temp4);
					}
					pullBig(temp4, 40400);
					addBig(temp4, temp3);
					pushBig(temp4, 40400);
					pullBig(temp4, 45400);
					addBig(temp4, temp3);
					pushBig(temp4, 45400);
				}
				if (gameState[41901] > 3) {
					pullBig(temp3, 40500);
					pullBig(temp4, 40000);
					addBig(temp4, temp3);
					pushBig(temp4, 40000);
					pullBig(temp4, 45000);
					addBig(temp4, temp3);
					pushBig(temp4, 45000);
				}
				if ((gameState[41901] > 5) && !gameState[41986]) {
					pullBig(temp3, 43100);
					pullBig(temp4, 40700);
					if (compareBig(temp3, temp4)) {
						copyBig(temp5, temp4);
					} else {
						copyBig(temp5, temp3);
					}
					pullBig(temp3, 40700);
					subBig(temp3, temp5);
					pushBig(temp3, 40700);
					pullBig(temp3, 40800);
					addBig(temp3, temp5);
					pushBig(temp3, 40800);
					pullBig(temp3, 45800);
					addBig(temp3, temp5);
					pushBig(temp3, 45800);
				}
				if (gameState[41901] > 6) {
					pullBig(temp3, 41100);
					pullBig(temp4, 40300);
					addBig(temp4, temp3);
					pushBig(temp4, 40300);
					pullBig(temp4, 45300);
					addBig(temp4, temp3);
					pushBig(temp4, 45300);
				}
				if ((gameState[41901] > 7) && !gameState[41991]) {
					pullBig(temp3, 40900);
					pullBig(temp4, 40700);
					if (compareBig(temp3, temp4)) {
						copyBig(temp5, temp4);
					} else {
						copyBig(temp5, temp3);
					}
					pullBig(temp4, 43600);
					if (compareBig(temp4, temp5)) {
					} else {
						copyBig(temp5, temp4);
					}
					pullBig(temp3, 40700);
					subBig(temp3, temp5);
					pushBig(temp3, 40700);
					pullBig(temp3, 40900);
					subBig(temp3, temp5);
					pushBig(temp3, 40900);
					pullBig(temp3, 41200);
					addBig(temp3, temp5);
					pushBig(temp3, 41200);
					pullBig(temp3, 46200);
					addBig(temp3, temp5);
					pushBig(temp3, 46200);
				}
			}
			pullBig(temp1, 56500 + (100 * gameState[51701]));
			addBig(temp1, temp2);
			pushBig(temp1, 56500 + (100 * gameState[51701]));
			pullBig(temp1, 57500 + (100 * gameState[51701]));
			if (compareBig(temp2, temp1)) {
				pushBig(temp2, 57500 + (100 * gameState[51701]));
			}
			pushBig(temp2, 51600);
			pullBig(temp2, 54500);
			if (compareBig(temp, temp2)) {
				addSmall(temp, 1);
				pushBig(temp, 54500);
			}
			if (gameState[51705]) {
				pullBig(temp, 54500);
				pushBig(temp, 51500);
				temp2 = getPower(10, toSmall(temp));
				pushBig(temp2, 51600);
			}
		}
	}
	pushBig(water, 50000);
	pushBig(totalwater, 55000);
	pushBig(feed, 50100);
	pushBig(totalfeed, 55100);
	pushBig(slaves, 50200);
	pushBig(totalslaves, 55200);
	pushBig(stone, 50300);
	pushBig(totalstone, 55300);
	pushBig(coins, 50500);
	pushBig(totalcoins, 55500);
	pushBig(mercenaries, 50600);
	pushBig(totalmercenaries, 55600);
	pushBig(camels, 50400);
	pushBig(totalcamels, 55400);
	pushBig(cavalry, 50700);
	pushBig(totalcavalry, 55700);
	pushBig(wood, 50800);
	pushBig(totalwood, 55800);
	pushBig(ballistas, 50900);
	pushBig(totalballistas, 55900);
	pushBig(elephants, 51000);
	pushBig(totalelephants, 56000);
	pushBig(gems, 51100);
	pushBig(totalgems, 56100);
	pushBig(losses, 54800);
	pushBig(totallosses, 54900);
	pushBig(maxloss, 54600);
	pushBig(totalmaxloss, 54700);
	if (gameState[51702] > 0) {
		gameState[51702]--;
	}
	if (gameState[51720] > 0) {
		gameState[51720]--;
	}
	if (gameState[51721] > 0) {
		gameState[51721]--;
	}
}

function updateview() {
	if (currentview == 101) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.font="20px Times New Roman";
		context0.fillStyle = "gold";
		var temp0 = new bigInt();
		var temph = new bigInt();
		var tempo = new bigInt();
		pullBig(temp0, 16500);
		if (getpowerBig(temp0)) {
			addSmall(temph, 1);
			context0.drawImage(achievement, 15, 62, 20, 20);
			var temp1 = new bigInt();
			var i = 1;
			while (i <= 7) {
				pullBig(temp1, 16500 + (100 * i));
				addBig(temp0, temp1);
				i++;
			}
			i = getpowerBig(temp0);
			if (i > 2) {
				addSmall(temph, i - 2);
			}
			i++;
			temp1.data.fill(0);
			temp1.data[i] = 1;
			context0.fillText("Total Enemies Killed: " + displayBig(temp0) + " / " + displayBig(temp1), 40, 80);
			i = 0;
			temp1.data.fill(0);
			while (i < 7) {
				pullBig(temp0, 17500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			temp0.data.fill(0);
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temph, i - 2);
			}
			i++;
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 92, 20, 20);
			context0.fillText("Largest Army Defeated: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 110);
			temp0.data.fill(0);
			pullBig(temp1, 15000);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(temph, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 122, 20, 20);
			context0.fillText("Total Food Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 140);
			temp0.data.fill(0);
			pullBig(temp1, 15100);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(temph, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 152, 20, 20);
			context0.fillText("Total Wood Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 170);
			temp0.data.fill(0);
			pullBig(temp1, 15200);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(temph, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 182, 20, 20);
			context0.fillText("Total Peasants Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 200);
			temp0.data.fill(0);
			pullBig(temp1, 15300);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(temph, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 212, 20, 20);
			context0.fillText("Total Stone Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 230);
			temp0.data.fill(0);
			pullBig(temp1, 15400);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(temph, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 242, 20, 20);
			context0.fillText("Total Horses Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 260);
			temp0.data.fill(0);
			pullBig(temp1, 15500);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(temph, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 272, 20, 20);
			context0.fillText("Total Gold Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 290);
		} else {
			context0.drawImage(achievement, 15, 62, 20, 20);
			context0.fillText("Win a battle", 40, 80);
		}
		context0.drawImage(achievement, 15, 302, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(temph), 40, 320);
		if (gameState[1000]) {
			context0.fillText("Humans:", 10, 50);
			context0.fillStyle = "black";
			context0.font="20px Times New Roman";
			context0.drawImage(button00, 300, 500, 200, 50);
			context0.fillText("Orcs", 382, 530);
		}
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.fillText("Rewards", 118, 530);
	} else if (currentview == 102) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.font="20px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Orcs:", 10, 50);
		var temp0 = new bigInt();
		var temph = new bigInt();
		var tempo = new bigInt();
		pullBig(temp0, 26500);
		if (getpowerBig(temp0)) {
			addSmall(tempo, 1);
			context0.drawImage(achievement, 15, 62, 20, 20);
			var temp1 = new bigInt();
				var i = 1;
			while (i <= 7) {
				pullBig(temp1, 26500 + (100 * i));
				addBig(temp0, temp1);
				i++;
			}
			i = getpowerBig(temp0);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp1.data.fill(0);
			temp1.data[i] = 1;
			context0.fillText("Total Enemies Killed: " + displayBig(temp0) + " / " + displayBig(temp1), 40, 80);
			i = 0;
			temp1.data.fill(0);
			while (i < 7) {
				pullBig(temp0, 27500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			temp0.data.fill(0);
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 92, 20, 20);
			context0.fillText("Largest Army Defeated: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 110);
			temp0.data.fill(0);
			pullBig(temp1, 25000);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 122, 20, 20);
			context0.fillText("Total Mud Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 140);
			temp0.data.fill(0);
			pullBig(temp1, 25100);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 152, 20, 20);
			context0.fillText("Total Pigs Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 170);
			temp0.data.fill(0);
			pullBig(temp1, 25200);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 182, 20, 20);
			context0.fillText("Total Meat Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 200);
			temp0.data.fill(0);
			pullBig(temp1, 25300);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 212, 20, 20);
			context0.fillText("Total Orcs Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 230);
			temp0.data.fill(0);
			pullBig(temp1, 25400);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(tempo, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 242, 20, 20);
			context0.fillText("Total Blood Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 260);
			temp0.data.fill(0);
			pullBig(temp1, 25500);
			i = getpowerBig(temp1);
			if (i > 4) {
				addSmall(tempo, i - 4);
			}
			i = Math.max(i + 1, 5);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 272, 20, 20);
			context0.fillText("Total Stone Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 290);
		} else {
			context0.drawImage(achievement, 15, 62, 20, 20);
			context0.fillText("Win a battle", 40, 80);
		}
		context0.drawImage(achievement, 15, 302, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(tempo), 40, 320);
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 1) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Elves", 378, 530);
		}
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.fillText("Rewards", 118, 530);
	} else if (currentview == 103) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.font="20px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Elves:", 10, 50);
		var temp0 = new bigInt();
		var temph = new bigInt();
		var tempo = new bigInt();
		pullBig(temp0, 36500);
		if (getpowerBig(temp0)) {
			addSmall(tempo, 1);
			context0.drawImage(achievement, 15, 62, 20, 20);
			var temp1 = new bigInt();
				var i = 1;
			while (i <= 8) {
				pullBig(temp1, 36500 + (100 * i));
				addBig(temp0, temp1);
				i++;
			}
			i = getpowerBig(temp0);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp1.data.fill(0);
			temp1.data[i] = 1;
			context0.fillText("Total Enemies Killed: " + displayBig(temp0) + " / " + displayBig(temp1), 40, 80);
			i = 0;
			temp1.data.fill(0);
			while (i < 8) {
				pullBig(temp0, 37500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			temp0.data.fill(0);
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 92, 20, 20);
			context0.fillText("Largest Army Defeated: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 110);
			temp0.data.fill(0);
			pullBig(temp1, 35000);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 122, 20, 20);
			context0.fillText("Total Saplings Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 140);
			temp0.data.fill(0);
			pullBig(temp1, 35100);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 152, 20, 20);
			context0.fillText("Total Seeds Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 170);
			temp0.data.fill(0);
			pullBig(temp1, 35200);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 182, 20, 20);
			context0.fillText("Total Fruit Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 200);
			temp0.data.fill(0);
			pullBig(temp1, 35300);
			i = getpowerBig(temp1);
			if (i > 4) {
				addSmall(tempo, i - 4);
			}
			i = Math.max(i + 1, 5);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 212, 20, 20);
			context0.fillText("Total Wood Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 230);
			temp0.data.fill(0);
			pullBig(temp1, 35400);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 242, 20, 20);
			context0.fillText("Total Elves Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 260);
			temp0.data.fill(0);
			pullBig(temp1, 35500);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(tempo, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 272, 20, 20);
			context0.fillText("Total Bows Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 290);
		} else {
			context0.drawImage(achievement, 15, 62, 20, 20);
			context0.fillText("Win a battle", 40, 80);
		}
		context0.drawImage(achievement, 15, 302, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(tempo), 40, 320);
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 2) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Undead", 372, 530);
		}
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.fillText("Rewards", 118, 530);
	} else if (currentview == 104) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.font="20px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Undead:", 10, 50);
		var temp0 = new bigInt();
		var temph = new bigInt();
		var tempo = new bigInt();
		pullBig(temp0, 46500);
		if (getpowerBig(temp0)) {
			addSmall(tempo, 1);
			context0.drawImage(achievement, 15, 62, 20, 20);
			var temp1 = new bigInt();
				var i = 1;
			while (i <= 8) {
				pullBig(temp1, 46500 + (100 * i));
				addBig(temp0, temp1);
				i++;
			}
			i = getpowerBig(temp0);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp1.data.fill(0);
			temp1.data[i] = 1;
			context0.fillText("Total Enemies Killed: " + displayBig(temp0) + " / " + displayBig(temp1), 40, 80);
			i = 0;
			temp1.data.fill(0);
			while (i < 8) {
				pullBig(temp0, 47500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			temp0.data.fill(0);
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 92, 20, 20);
			context0.fillText("Largest Army Defeated: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 110);
			temp0.data.fill(0);
			pullBig(temp1, 45000);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 122, 20, 20);
			context0.fillText("Total Corpses Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 140);
			temp0.data.fill(0);
			pullBig(temp1, 45100);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(tempo, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 152, 20, 20);
			context0.fillText("Total Stone Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 170);
			temp0.data.fill(0);
			pullBig(temp1, 45200);
			i = getpowerBig(temp1);
			if (i > 4) {
				addSmall(tempo, i - 4);
			}
			i = Math.max(i + 1, 5);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 182, 20, 20);
			context0.fillText("Total Wood Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 200);
			temp0.data.fill(0);
			pullBig(temp1, 45300);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 212, 20, 20);
			context0.fillText("Total Skeletons Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 230);
			temp0.data.fill(0);
			pullBig(temp1, 45400);
			i = getpowerBig(temp1);
			if (i > 4) {
				addSmall(tempo, i - 4);
			}
			i = Math.max(i + 1, 5);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 242, 20, 20);
			context0.fillText("Total Ghosts Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 260);
			temp0.data.fill(0);
			pullBig(temp1, 45500);
			i = getpowerBig(temp1);
			if (i > 4) {
				addSmall(tempo, i - 4);
			}
			i = Math.max(i + 1, 5);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 272, 20, 20);
			context0.fillText("Total Coffins Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 290);
		} else {
			context0.drawImage(achievement, 15, 62, 20, 20);
			context0.fillText("Win a battle", 40, 80);
		}
		context0.drawImage(achievement, 15, 302, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(tempo), 40, 320);
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 3) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Southerners", 355, 530);
		}
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.fillText("Rewards", 118, 530);
	} else if (currentview == 105) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.font="20px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Southerners:", 10, 50);
		var temp0 = new bigInt();
		var temph = new bigInt();
		var tempo = new bigInt();
		pullBig(temp0, 56500);
		if (getpowerBig(temp0)) {
			addSmall(tempo, 1);
			context0.drawImage(achievement, 15, 62, 20, 20);
			var temp1 = new bigInt();
				var i = 1;
			while (i <= 8) {
				pullBig(temp1, 56500 + (100 * i));
				addBig(temp0, temp1);
				i++;
			}
			i = getpowerBig(temp0);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp1.data.fill(0);
			temp1.data[i] = 1;
			context0.fillText("Total Enemies Killed: " + displayBig(temp0) + " / " + displayBig(temp1), 40, 80);
			i = 0;
			temp1.data.fill(0);
			while (i < 8) {
				pullBig(temp0, 57500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			temp0.data.fill(0);
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(tempo, i - 2);
			}
			i++;
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 92, 20, 20);
			context0.fillText("Largest Army Defeated: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 110);
			temp0.data.fill(0);
			pullBig(temp1, 55000);
			i = getpowerBig(temp1);
			if (i > 8) {
				addSmall(tempo, i - 8);
			}
			i = Math.max(i + 1, 9);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 122, 20, 20);
			context0.fillText("Total Water Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 140);
			temp0.data.fill(0);
			pullBig(temp1, 55100);
			i = getpowerBig(temp1);
			if (i > 7) {
				addSmall(tempo, i - 7);
			}
			i = Math.max(i + 1, 8);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 152, 20, 20);
			context0.fillText("Total Feed Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 170);
			temp0.data.fill(0);
			pullBig(temp1, 55200);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 182, 20, 20);
			context0.fillText("Total Slaves Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 200);
			temp0.data.fill(0);
			pullBig(temp1, 55300);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 212, 20, 20);
			context0.fillText("Total Stone Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 230);
			temp0.data.fill(0);
			pullBig(temp1, 55400);
			i = getpowerBig(temp1);
			if (i > 5) {
				addSmall(tempo, i - 5);
			}
			i = Math.max(i + 1, 6);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 242, 20, 20);
			context0.fillText("Total Camels Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 260);
			temp0.data.fill(0);
			pullBig(temp1, 55500);
			i = getpowerBig(temp1);
			if (i > 6) {
				addSmall(tempo, i - 6);
			}
			i = Math.max(i + 1, 7);
			temp0.data[i] = 1;
			context0.drawImage(achievement, 15, 272, 20, 20);
			context0.fillText("Total Coins Obtained: " + displayBig(temp1) + " / " + displayBig(temp0), 40, 290);
		} else {
			context0.drawImage(achievement, 15, 62, 20, 20);
			context0.fillText("Win a battle", 60, 130);
		}
		context0.drawImage(achievement, 15, 302, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(tempo), 40, 320);
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 4) {
			context0.fillText("Humans", 372, 530);
		}
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.fillText("Rewards", 118, 530);
	} else if (currentview == 0) {
		context0.drawImage(hbackground, 0, 0, 800, 600);
		context0.drawImage(button00, 300, 420, 200, 50);
		context0.fillStyle = "black";
		context0.font="20px Times New Roman";
		context0.drawImage(button00, 300, 180, 200, 50);
		context0.drawImage(button00, 300, 260, 200, 50);
		context0.drawImage(button00, 300, 340, 200, 50);
		context0.fillText("Achievements", 345, 450);
		context0.fillText("Tutorial", 368, 210);
		context0.fillText("Continue", 365, 370);
		if (confirmtimer == 0) {
			var temp = new bigInt();
			pullBig(temp, 14500);
			if (compareSmall(temp, 21)) {
				context0.fillText("Reset", 379, 290);
			} else {
				context0.fillText("New Game", 355, 290);
			}
		} else {
			context0.fillText("Are you sure?", 345, 290);
			confirmtimer--;
		}
		context0.drawImage(button00, 550, 500, 200, 50);
		if (confirmtimer2 == 0) {
			context0.fillText("HARD RESET", 592, 530);
		} else {
			context0.fillText("REALLY?!?!?", 596, 530);
			confirmtimer2--;
		}
	} else if (currentview == 1) {
		context0.fillStyle = "black";
		context0.drawImage(hbackground, 0, 0, 800, 600);
		context0.globalAlpha = 0.8;
		context0.fillRect(0, 525, 800, 75);
		context0.globalAlpha = 1;
		displayhResource(hResource00);
		displayhBuilding(hBuilding00);
		if (gameState[11950]) {
			displayhBuilding(hBuilding01);
		}
		if (gameState[11951]) {
			displayhResource(hResource01);
			displayhBuilding(hBuilding02);
		}
		if (gameState[11952]) {
			displayhResource(hResource02);
			displayhBuilding(hBuilding03);
		}
		if (gameState[11953]) {
			displayhResource(hResource03);
			displayhBuilding(hBuilding04);
			displayhBuilding(hBuilding05);
		}
		if (gameState[11954]) {
			displayhResource(hResource04);
			displayhBuilding(hBuilding09);
			if (gameState[11955]) {
				displayhBuilding(hBuilding07);
			}
		}
		if (gameState[11957]) {
			displayhResource(hResource06);
			displayhBuilding(hBuilding06);
			displayhBuilding(hBuilding08);
		}
		if (gameState[11958]) {
			displayhResource(hResource07);
			displayhBuilding(hBuilding10);
		}
		if (gameState[11959] || (gameState[11703] > 2)) {
			displayhResource(hResource05);
		}
		if (gameState[11959] && gameState[11903]) {
			displayhBuilding(hBuilding17);
		}
		if (gameState[11960]) {
			displayhResource(hResource08);
			displayhResource(hResource12);
			context0.font="16px Times New Roman";
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp2, 11800);
			addSmall(temp2, 100);
			context0.fillStyle = "gold";
			context0.drawImage(gethEnemy(gameState[11701]).image, 731, 528, 20, 20);
			context0.drawImage(gethResource(gethEnemy(gameState[11701]).resource).image, 731, 553, 20, 20);
			pullBig(temp, 11500);
			temp = getPower(20, toSmall(temp) + gethEnemy(gameState[11701]).base - (5 * gameState[11701]) - 20);
			mulBig(temp, temp2);
			if (gameState[41906] && !gameState[41983] && (gameState[11701] == 5)) {
				pullBig(temp2, 42800);
				var temp3 = new bigInt();
				if (gameState[41991] == 2) {
					pullBig(temp3, 43600);
					addSmall(temp3, 1);
					mulBig(temp2, temp3);
				}
				addSmall(temp2, 100);
				mulBig(temp, temp2);
				if (gameState[41906] > 1) {
					pullBig(temp3, 41200);
					addSmall(temp3, 1000000);
					mulBig(temp, temp3);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
			}
			shiftlBig(temp);
			shiftlBig(temp);
			context0.fillText(displayBig(temp), 754, 571);
			pullBig(temp, 11600);
			context0.fillText(displayBig(temp), 754, 546);
			context0.drawImage(cdimage, 731, 578, 20, 20);
			context0.fillText(String(gameState[11702]), 754, 596);
			pullBig(temp2, 14500);
			var enemies0 = 0;
			if (gameState[11703] && compareSmall(temp2, 25)) {
				while (enemies0 < 7) {
					if ((gameState[11703] >= enemies0) && compareSmall(temp2, 20 + (5 * enemies0))) {
						context0.drawImage(gethEnemy(enemies0).image, 610 + (25 * (enemies0 % 3)), 527 + (25 * Math.floor(enemies0 / 3)), 20, 20);
					}
					enemies0++;
				}
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[11701] % 3)), 525 + (25 * Math.floor(gameState[11701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[11701] % 3)), 525 + (25 * Math.floor(gameState[11701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[11701] % 3)), 525 + (25 * Math.floor(gameState[11701] / 3)), 25, 25);
			}
			if (ehighlight != -1) {
				context0.drawImage(iconhighlight, 608 + (25 * (ehighlight % 3)), 525 + (25 * Math.floor(ehighlight / 3)), 25, 25);
			}
			pullBig(temp, 11500);
			if (compareBig(temp, temp2)) {
			} else {
				context0.drawImage(increase, 710, 539, 20, 20);
			}
			if (compareSmall(temp, 21 + (5 * gameState[11701]))) {
				context0.drawImage(decrease, 710, 564, 20, 20);
			}
			if (gameState[11700] == 1) {
				context0.drawImage(fighton, 690, 527, 20, 20);
			} else {
				context0.drawImage(fightoff, 690, 527, 20, 20);
			}
			if (compareSmall(temp2, 23)) {
				if (gameState[11704] == 1) {
					context0.drawImage(safeon, 690, 552, 20, 20);
				} else if (gameState[11704] == 0) {
					context0.drawImage(safeoff, 690, 552, 20, 20);
				} else if (gameState[11704] == 2) {
					context0.drawImage(safeyellow, 690, 552, 20, 20);
				}
			}
			if (compareSmall(temp2, 22)) {
				if (gameState[11705] == 1) {
					context0.drawImage(maxon, 690, 577, 20, 20);
				} else {
					context0.drawImage(maxoff, 690, 577, 20, 20);
				}
			}
		}
		if (gameState[11703]) {
			displayhBuilding(hBuilding11);
		}
		if (gameState[11961]) {
			displayhResource(hResource11);
			if ((gameState[11703] > 2)) {
				displayhBuilding(hBuilding12);
			}
		}
		if ((gameState[11703] > 2) && gameState[11904]) {
			displayhBuilding(hBuilding20);
		}
		if ((gameState[11703] > 1)) {
			displayhBuilding(hBuilding14);
		}
		if ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]) || (gameState[31907] && (gameState[31703] > 3))) {
			displayhResource(hResource09);
			displayhBuilding(hBuilding13);
		}
		if ((gameState[11703] > 4)) {
			displayhBuilding(hBuilding15);
		}
		if (gameState[11963]) {
			displayhResource(hResource10);
		}
		if (gameState[11965]) {
			displayhBuilding(hBuilding18);
		}
		if ((gameState[11703] > 5)) {
			displayhBuilding(hBuilding16);
		}
		if (gameState[11966]) {
			displayhResource(hResource14);
		}
		if (gameState[11968]) {
			displayhBuilding(hBuilding19);
		}
		if (chighlight != -1) {
			if (chighlightt == 0) {
				context0.drawImage(buildinghighlight, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt > 0) {
				chighlightt--;
				context0.drawImage(buildinghighlight1, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt < 0) {
				chighlightt++;
				context0.drawImage(buildinghighlight0, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			}
		}
		if (tutorialtimer != 0) {
			context0.fillStyle = "red";
			context0.font="40px Times New Roman";
			context0.strokeStyle = "red";
			context0.lineWidth = 4;
			if (tutorialtimer == 5) {
				context0.fillText("These are your resources", 200, 180);
				context0.fillText("(Click to continue)", 250, 240);
				context0.strokeRect(2, 525, 500, 73);
				context0.beginPath();
				context0.moveTo(380, 280);
				context0.lineTo(70, 510);
				context0.lineTo(90, 510);
				context0.moveTo(68, 511);
				context0.lineTo(72, 490);
				context0.stroke();
			} else if (tutorialtimer == 4) {
				context0.fillText("Click here to build a farm", 180, 280);
				context0.strokeRect(2, 25, 79, 100);
				context0.beginPath();
				context0.moveTo(380, 230);
				context0.lineTo(90, 120);
				context0.lineTo(95, 140);
				context0.moveTo(90, 120);
				context0.lineTo(110, 115);
				context0.stroke();
			} else if (tutorialtimer == 3) {
				context0.fillText("Click here to change", 250, 310);
				context0.fillText("a building's orders", 270, 370);
				context0.strokeRect(82, 125, 78, 100);
				context0.beginPath();
				context0.moveTo(380, 260);
				context0.lineTo(170, 220);
				context0.lineTo(184, 210);
				context0.moveTo(170, 220);
				context0.lineTo(180, 234);
				context0.stroke();
			} else if (tutorialtimer == 2) {
				context0.fillText("The game will autosave every 60 seconds", 70, 230);
				context0.fillText("(Click to continue)", 250, 290);
			} else if (tutorialtimer == 1) {
				context0.fillText("Click here to exit to menu", 190, 310);
				context0.fillText("and save the game immediately", 145, 370);
				context0.fillText("(Click to finish the tutorial)", 180, 430);
				context0.strokeRect(773, 2, 25, 25);
				context0.beginPath();
				context0.moveTo(380, 260);
				context0.lineTo(760, 40);
				context0.lineTo(740, 40);
				context0.moveTo(764, 39);
				context0.lineTo(750, 57);
				context0.stroke();
			}
		}
	} else if (currentview == 2) {
		context0.drawImage(obackground, 0, 0, 800, 600);
		context0.fillStyle = "black";
		context0.globalAlpha = 0.8;
		context0.fillRect(0, 525, 800, 75);
		context0.globalAlpha = 1;
		displayoResource(0);
		displayoBuilding(0);
		if (gameState[21950]) {
			displayoBuilding(1);
		}
		if (gameState[21951] || (gameState[31904] && (gameState[31703] > 0))) {
			displayoResource(1);
		}
		if (gameState[21951]) {
			displayoBuilding(2);
		}
		if (gameState[21952]) {
			displayoResource(2);
			displayoBuilding(3);
		}
		if (gameState[21953]) {
			displayoResource(3);
			context0.font="16px Times New Roman";
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp2, 21800);
			addSmall(temp2, 100);
			context0.fillStyle = "gold";
			context0.drawImage(getoEnemy(gameState[21701]).image, 731, 528, 20, 20);
			context0.drawImage(getoResource(getoEnemy(gameState[21701]).resource).image, 731, 553, 20, 20);
			pullBig(temp, 21500);
			temp = getPower(20, toSmall(temp) + getoEnemy(gameState[21701]).base - (5 * gameState[21701]) - 20);
			mulBig(temp, temp2);
			shiftlBig(temp);
			shiftlBig(temp);
			if (gameState[21982] == 0) {
				pullBig(temp2, 22700);
				if ((gameState[21992] == 1) || gameState[21905]) {
					var tempdragons = new bigInt();
					pullBig(tempdragons, 23700);
					addSmall(tempdragons, 1);
					mulBig(temp2, tempdragons);
				}
				addSmall(temp2, 100);
				mulBig(temp, temp2);
				shiftlBig(temp);
				shiftlBig(temp);
			}
			context0.fillText(displayBig(temp), 754, 571);
			pullBig(temp, 21600);
			context0.fillText(displayBig(temp), 754, 546);
			context0.drawImage(cdimage, 731, 578, 20, 20);
			context0.fillText(String(gameState[21702]), 754, 596);
			pullBig(temp2, 24500);
			var enemies0 = 0;
			if (gameState[21703] && compareSmall(temp2, 25)) {
				while (enemies0 < 7) {
					if (gameState[21703] && (gameState[21703] >= enemies0) && compareSmall(temp2, 20 + (5 * enemies0))) {
						context0.drawImage(getoEnemy(enemies0).image, 610 + (25 * (enemies0 % 3)), 527 + (25 * Math.floor(enemies0 / 3)), 20, 20);
					}
					enemies0++;
				}
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[21701] % 3)), 525 + (25 * Math.floor(gameState[21701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[21701] % 3)), 525 + (25 * Math.floor(gameState[21701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[21701] % 3)), 525 + (25 * Math.floor(gameState[21701] / 3)), 25, 25);
			}
			if (ehighlight != -1) {
				context0.drawImage(iconhighlight, 608 + (25 * (ehighlight % 3)), 525 + (25 * Math.floor(ehighlight / 3)), 25, 25);
			}
			pullBig(temp, 21500);
			if (compareBig(temp, temp2)) {
			} else {
				context0.drawImage(increase, 710, 539, 20, 20);
			}
			if (compareSmall(temp, 21 + (5 * gameState[21701]))) {
				context0.drawImage(decrease, 710, 564, 20, 20);
			}
			if (gameState[21700] == 1) {
				context0.drawImage(fighton, 690, 527, 20, 20);
			} else {
				context0.drawImage(fightoff, 690, 527, 20, 20);
			}
			if (gameState[21704] == 1) {
				context0.drawImage(safeon, 690, 552, 20, 20);
			} else if (gameState[21704] == 0) {
				context0.drawImage(safeoff, 690, 552, 20, 20);
			} else if (gameState[21704] == 2) {
				context0.drawImage(safeyellow, 690, 552, 20, 20);
			}
			if (gameState[21705] == 1) {
				context0.drawImage(maxon, 690, 577, 20, 20);
			} else {
				context0.drawImage(maxoff, 690, 577, 20, 20);
			}
		}
		if ((gameState[21703] > 1) || (gameState[41905] && gameState[41959])) {
			displayoResource(4);
		}
		if (gameState[21703] > 1) {
			displayoBuilding(4);
		}
		if (gameState[21703] > 2) {
			displayoResource(5);
			displayoBuilding(5);
		}
		if (gameState[21955]) {
			displayoBuilding(6);
		}
		if (gameState[21956]) {
			displayoResource(6);
			displayoBuilding(7);
		}
		if ((gameState[21703] > 3)) {
			displayoBuilding(8);
			displayoResource(8);
		}
		if (gameState[21958]) {
			displayoBuilding(10);
		}
		if (gameState[21959]) {
			displayoBuilding(14);
		}
		if (gameState[21960]) {
			displayoResource(7);
		}
		if (gameState[21703] > 4) {
			displayoBuilding(9);
		}
		if ((gameState[21703] > 5) || (gameState[21963])) {
			displayoResource(9);
			displayoBuilding(13);
		}
		if (gameState[21963] && gameState[21960]) {
			displayoBuilding(11);
		}
		if (gameState[21961]) {
			displayoBuilding(12);
		}
		if (gameState[21962]) {
			displayoResource(10);
		}
		if (gameState[21964]) {
			displayoResource(11);
		}
		if ((gameState[21703] > 6) && gameState[21961]) {
			displayoBuilding(15);
		}
		if ((gameState[21703] > 6) && gameState[21964]) {
			displayoBuilding(16);
		}
		if (gameState[21966]) {
			displayoResource(12);
			if (gameState[21957]) {
				displayoBuilding(17);
			}
		}
		if (chighlight != -1) {
			if (chighlightt == 0) {
				context0.drawImage(buildinghighlight, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt > 0) {
				chighlightt--;
				context0.drawImage(buildinghighlight1, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt < 0) {
				chighlightt++;
				context0.drawImage(buildinghighlight0, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			}
		}
	} else if (currentview == 3) {
		context0.fillStyle = "black";
		context0.drawImage(ebackground, 0, 0, 800, 600);
		context0.globalAlpha = 0.8;
		context0.fillRect(0, 525, 800, 75);
		context0.globalAlpha = 1;
		displayeResource(0);
		displayeBuilding(0);
		if (gameState[31950]) {
			displayeResource(1);
			displayeBuilding(1);
		}
		if (gameState[31951]) {
			displayeResource(2);
			displayeBuilding(2);
		}
		if (gameState[31952]) {
			displayeBuilding(3);
		}
		if (gameState[31953]) {
			context0.font="16px Times New Roman";
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp2, 31800);
			addSmall(temp2, 100);
			context0.fillStyle = "gold";
			context0.drawImage(geteEnemy(gameState[31701]).image, 731, 528, 20, 20);
			context0.drawImage(geteResource(geteEnemy(gameState[31701]).resource).image, 731, 553, 20, 20);
			pullBig(temp, 31500);
			temp = getPower(20, toSmall(temp) + geteEnemy(gameState[31701]).base - (5 * gameState[31701]) - 20);
			mulBig(temp, temp2);
			if (gameState[41906] && !gameState[41983] && (gameState[31701] == 6)) {
				pullBig(temp2, 42800);
				var temp3 = new bigInt();
				if (gameState[41991] == 2) {
					pullBig(temp3, 43600);
					addSmall(temp3, 1);
					mulBig(temp2, temp3);
				}
				addSmall(temp2, 100);
				mulBig(temp, temp2);
				if (gameState[41906] > 1) {
					pullBig(temp3, 41200);
					addSmall(temp3, 1000000);
					mulBig(temp, temp3);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
			}
			shiftlBig(temp);
			shiftlBig(temp);
			context0.fillText(displayBig(temp), 754, 571);
			pullBig(temp, 31600);
			context0.fillText(displayBig(temp), 754, 546);
			context0.drawImage(cdimage, 731, 578, 20, 20);
			context0.fillText(String(gameState[31702]), 754, 596);
			pullBig(temp2, 34500);
			var enemies0 = 0;
			if (gameState[31703] && compareSmall(temp2, 25)) {
				while (enemies0 < 8) {
					if (gameState[31703] && (gameState[31703] >= enemies0) && compareSmall(temp2, 20 + (5 * enemies0))) {
						context0.drawImage(geteEnemy(enemies0).image, 610 + (25 * (enemies0 % 3)), 527 + (25 * Math.floor(enemies0 / 3)), 20, 20);
					}
					enemies0++;
				}
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[31701] % 3)), 525 + (25 * Math.floor(gameState[31701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[31701] % 3)), 525 + (25 * Math.floor(gameState[31701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[31701] % 3)), 525 + (25 * Math.floor(gameState[31701] / 3)), 25, 25);
			}
			if (ehighlight != -1) {
				context0.drawImage(iconhighlight, 608 + (25 * (ehighlight % 3)), 525 + (25 * Math.floor(ehighlight / 3)), 25, 25);
			}
			pullBig(temp, 31500);
			if (compareBig(temp, temp2)) {
			} else {
				context0.drawImage(increase, 710, 539, 20, 20);
			}
			if (compareSmall(temp, 21 + (5 * gameState[31701]))) {
				context0.drawImage(decrease, 710, 564, 20, 20);
			}
			if (gameState[31700] == 1) {
				context0.drawImage(fighton, 690, 527, 20, 20);
			} else {
				context0.drawImage(fightoff, 690, 527, 20, 20);
			}
			if (gameState[31705] == 1) {
				context0.drawImage(maxon, 690, 577, 20, 20);
			} else {
				context0.drawImage(maxoff, 690, 577, 20, 20);
			}
		}
		if ((gameState[31703] > 1)) {
			displayeResource(3);
			displayeBuilding(4);
		}
		if (gameState[31954]) {
			displayeResource(4);
			displayeBuilding(5);
		}
		if ((gameState[31703] > 2)) {
			displayeResource(5);
			if (gameState[31954]) {
				displayeBuilding(6);
			}
		}
		if (gameState[31956]) {
			displayeResource(6);
		}
		if ((gameState[31703] > 3)) {
			displayeResource(7);
			displayeBuilding(7);
		}
		if ((gameState[31703] > 4)) {
			displayeBuilding(8);
		}
		if (gameState[31958]) {
			displayeResource(9);
		}
		if ((gameState[31703] > 5)) {
			displayeBuilding(10);
		}
		if (gameState[31960]) {
			displayeResource(8);
			displayeBuilding(9);
		}
		if ((gameState[31703] > 6) && gameState[31959]) {
			displayeBuilding(11);
		}
		if (gameState[31961]) {
			displayeResource(10);
		}
		if ((gameState[31703] > 7) || gameState[31962]) {
			displayeResource(11);
			displayeBuilding(12);
		}
		if (gameState[31962]) {
			displayeResource(12);
		}
		if (chighlight != -1) {
			if (chighlightt == 0) {
				context0.drawImage(buildinghighlight, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt > 0) {
				chighlightt--;
				context0.drawImage(buildinghighlight1, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt < 0) {
				chighlightt++;
				context0.drawImage(buildinghighlight0, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			}
		}
	} else if (currentview == 4) {
		context0.fillStyle = "black";
		context0.drawImage(ubackground, 0, 0, 800, 600);
		context0.globalAlpha = 0.8;
		context0.fillRect(0, 525, 800, 75);
		context0.globalAlpha = 1;
		displayuResource(0);
		displayuBuilding(0);
		if (gameState[41950]) {
			displayuBuilding(1);
		}
		if (gameState[41951] || ((gameState[11907]) && (gameState[11960]))) {
			displayuResource(3);
		}
		if (gameState[41951]) {
			context0.font="16px Times New Roman";
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp2, 41800);
			addSmall(temp2, 100);
			context0.fillStyle = "gold";
			context0.drawImage(getuEnemy(gameState[41701]).image, 731, 528, 20, 20);
			context0.drawImage(getuResource(getuEnemy(gameState[41701]).resource).image, 731, 553, 20, 20);
			pullBig(temp, 41500);
			temp = getPower(20, toSmall(temp) + getuEnemy(gameState[41701]).base - (5 * gameState[41701]) - 20);
			mulBig(temp, temp2);
			if (!gameState[41983]) {
				pullBig(temp2, 42800);
				if (gameState[41991] == 2) {
					var tempdragons = new bigInt();
					pullBig(tempdragons, 43600);
					addSmall(tempdragons, 1);
					mulBig(temp2, tempdragons);
				}
				addSmall(temp2, 100);
				mulBig(temp, temp2);
				shiftlBig(temp);
				shiftlBig(temp);
			}
			pullBig(temp2, 41200);
			addSmall(temp2, 1000000);
			mulBig(temp, temp2);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			shiftlBig(temp);
			context0.fillText(displayBig(temp), 754, 571);
			pullBig(temp, 41600);
			context0.fillText(displayBig(temp), 754, 546);
			context0.drawImage(cdimage, 731, 578, 20, 20);
			context0.fillText(String(gameState[41702]), 754, 596);
			pullBig(temp2, 44500);
			var enemies0 = 0;
			if (gameState[41703] && compareSmall(temp2, 25)) {
				while (enemies0 < 8) {
					if (gameState[41703] && (gameState[41703] >= enemies0) && compareSmall(temp2, 20 + (5 * enemies0))) {
						context0.drawImage(getuEnemy(enemies0).image, 610 + (25 * (enemies0 % 3)), 527 + (25 * Math.floor(enemies0 / 3)), 20, 20);
					}
					enemies0++;
				}
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[41701] % 3)), 525 + (25 * Math.floor(gameState[41701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[41701] % 3)), 525 + (25 * Math.floor(gameState[41701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[41701] % 3)), 525 + (25 * Math.floor(gameState[41701] / 3)), 25, 25);
			}
			if (ehighlight != -1) {
				context0.drawImage(iconhighlight, 608 + (25 * (ehighlight % 3)), 525 + (25 * Math.floor(ehighlight / 3)), 25, 25);
			}
			pullBig(temp, 41500);
			if (compareBig(temp, temp2)) {
			} else {
				context0.drawImage(increase, 710, 539, 20, 20);
			}
			if (compareSmall(temp, 21 + (5 * gameState[41701]))) {
				context0.drawImage(decrease, 710, 564, 20, 20);
			}
			if (gameState[41700] == 1) {
				context0.drawImage(fighton, 690, 527, 20, 20);
			} else {
				context0.drawImage(fightoff, 690, 527, 20, 20);
			}
			if (gameState[41704] == 1) {
				context0.drawImage(safeon, 690, 552, 20, 20);
			} else {
				context0.drawImage(safeoff, 690, 552, 20, 20);
			}
			if (gameState[41705] == 1) {
				context0.drawImage(maxon, 690, 577, 20, 20);
			} else {
				context0.drawImage(maxoff, 690, 577, 20, 20);
			}
		}
		if (gameState[41703]) {
			displayuBuilding(2);
		}
		if (gameState[41703] > 1) {
			displayuResource(1);
			displayuBuilding(3);
		}
		if ((gameState[41703] > 2) && gameState[41953]) {
			displayuBuilding(4);
		}
		if (gameState[41954]) {
			displayuBuilding(8);
		}
		if (gameState[41703] > 3) {
			displayuResource(2);
			displayuBuilding(5);
		}
		if (gameState[41955]) {
			displayuBuilding(6);
		}
		if ((gameState[41956]) || (gameState[21907] && gameState[21955]) || (gameState[31955] && gameState[31908])) {
			displayuResource(4);
		}
		if (gameState[41956]) {
			displayuBuilding(7);
		}
		if (gameState[41957] || (gameState[41703] > 6)) {
			displayuResource(5);
		}
		if (gameState[41703] > 4) {
			displayuResource(6);
			displayuBuilding(9);
		}
		if (gameState[41959]) {
			displayuBuilding(12);
		}
		if ((gameState[41703] > 5) || (gameState[31907] && (gameState[31703] > 3))) {
			displayuResource(7);
		}
		if (gameState[41703] > 5) {
			displayuBuilding(11);
		}
		if (gameState[41961]) {
			displayuResource(8);
			if (gameState[41953]) {
				displayuBuilding(13);
			}
		}
		if (gameState[41703] > 6) {
			displayuBuilding(10);
		}
		if (gameState[41960]) {
			displayuBuilding(15);
		}
		if (gameState[41964]) {
			displayuResource(10);
		}
		if (gameState[41965]) {
			displayuResource(11);
			displayuBuilding(14);
		}
		if (gameState[41703] > 7) {
			displayuResource(9);
			if (gameState[41958] || gameState[41966]) {
				displayuBuilding(16);
			}
		}
		if (gameState[41966]) {
			displayuResource(12);
		}
		if (chighlight != -1) {
			if (chighlightt == 0) {
				context0.drawImage(buildinghighlight, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt > 0) {
				chighlightt--;
				context0.drawImage(buildinghighlight1, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt < 0) {
				chighlightt++;
				context0.drawImage(buildinghighlight0, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			}
		}
	} else if (currentview == 5) {
		context0.fillStyle = "black";
		context0.drawImage(sbackground, 0, 0, 800, 600);
		context0.globalAlpha = 0.8;
		context0.fillRect(0, 525, 800, 75);
		context0.globalAlpha = 1;
		displaysResource(0);
		displaysBuilding(0);
		if (gameState[51950]) {
			displaysBuilding(1);
		}
		if (gameState[51951]) {
			displaysResource(1);
			displaysBuilding(2);
		}
		if (gameState[51952]) {
			displaysResource(12);
			displaysBuilding(3);
		}
		if (gameState[51953]) {
			displaysResource(2);
			displaysBuilding(4);
		}
		if (gameState[51954]) {
			displaysBuilding(5);
		}
		if (gameState[51955]) {
			displaysBuilding(6);
		}
		if (gameState[51956]) {
			displaysResource(3);
			displaysBuilding(9);
		}
		if (gameState[51959] || (gameState[51956] && gameState[51901])) {
			displaysResource(5);
		}
		if (gameState[51959]) {
			displaysResource(6);
			context0.font="16px Times New Roman";
			var temp = new bigInt();
			var temp2 = new bigInt();
			var temp3 = new bigInt();
			pullBig(temp2, 51800);
			addSmall(temp2, 100);
			context0.fillStyle = "gold";
			context0.drawImage(getsEnemy(gameState[51701]).image, 731, 528, 20, 20);
			context0.drawImage(getsResource(getsEnemy(gameState[51701]).resource).image, 731, 553, 20, 20);
			pullBig(temp, 51500);
			temp = getPower(20, toSmall(temp) + getsEnemy(gameState[51701]).base - (5 * gameState[51701]) - 20);
			mulBig(temp, temp2);
			if (gameState[41906] && !gameState[41983] && (gameState[51701] == 4)) {
				pullBig(temp2, 42800);
				var temp3 = new bigInt();
				if (gameState[41991] == 2) {
					pullBig(temp3, 43600);
					addSmall(temp3, 1);
					mulBig(temp2, temp3);
				}
				addSmall(temp2, 100);
				mulBig(temp, temp2);
				if (gameState[41906] > 1) {
					pullBig(temp3, 41200);
					addSmall(temp3, 1000000);
					mulBig(temp, temp3);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
				}
				shiftlBig(temp);
				shiftlBig(temp);
			}
			shiftlBig(temp);
			shiftlBig(temp);
			context0.fillText(displayBig(temp), 754, 571);
			pullBig(temp, 51600);
			context0.fillText(displayBig(temp), 754, 546);
			context0.drawImage(cdimage, 731, 578, 20, 20);
			context0.fillText(String(gameState[51702]), 754, 596);
			pullBig(temp2, 54500);
			var enemies0 = 0;
			if (gameState[51703] && compareSmall(temp2, 25)) {
				while (enemies0 < 8) {
					if (gameState[51703] && (gameState[51703] >= enemies0) && compareSmall(temp2, 20 + (5 * enemies0))) {
						context0.drawImage(getsEnemy(enemies0).image, 610 + (25 * (enemies0 % 3)), 527 + (25 * Math.floor(enemies0 / 3)), 20, 20);
					}
					enemies0++;
				}
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[51701] % 3)), 525 + (25 * Math.floor(gameState[51701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[51701] % 3)), 525 + (25 * Math.floor(gameState[51701] / 3)), 25, 25);
				context0.drawImage(iconhighlight0, 608 + (25 * (gameState[51701] % 3)), 525 + (25 * Math.floor(gameState[51701] / 3)), 25, 25);
			}
			if (ehighlight != -1) {
				context0.drawImage(iconhighlight, 608 + (25 * (ehighlight % 3)), 525 + (25 * Math.floor(ehighlight / 3)), 25, 25);
			}
			pullBig(temp, 51500);
			if (compareBig(temp, temp2)) {
			} else {
				context0.drawImage(increase, 710, 539, 20, 20);
			}
			if (compareSmall(temp, 21 + (5 * gameState[51701]))) {
				context0.drawImage(decrease, 710, 564, 20, 20);
			}
			if (gameState[51700] == 1) {
				context0.drawImage(fighton, 690, 527, 20, 20);
			} else {
				context0.drawImage(fightoff, 690, 527, 20, 20);
			}
			if (gameState[51704] == 1) {
				context0.drawImage(safeon, 690, 552, 20, 20);
			} else {
				context0.drawImage(safeoff, 690, 552, 20, 20);
			}
			if (gameState[51705] == 1) {
				context0.drawImage(maxon, 690, 577, 20, 20);
			} else {
				context0.drawImage(maxoff, 690, 577, 20, 20);
			}
		}
		if (gameState[51703] > 0) {
			displaysBuilding(8);
		}
		if (gameState[51703] > 1) {
			displaysResource(4);
			displaysBuilding(7);
		}
		if (gameState[51957]) {
			displaysResource(7);
		}
		if (gameState[51703] > 2) {
			displaysResource(8);
			displaysBuilding(10);
		}
		if (gameState[51960]) {
			displaysBuilding(11);
		}
		if (gameState[51703] > 3) {
			displaysBuilding(14);
		}
		if (gameState[51963]) {
			displaysResource(9);
		}
		if (gameState[51964]) {
			displaysBuilding(12);
		}
		if (gameState[51703] > 4) {
			displaysBuilding(15);
		}
		if (gameState[51965]) {
			displaysBuilding(13);
		}
		if (gameState[51703] > 5) {
			displaysBuilding(17);
		}
		if (gameState[51967] && gameState[51961]) {
			displaysBuilding(16);
		}
		if (gameState[51703] > 6) {
			displaysBuilding(18);
		}
		if (gameState[51968]) {
			displaysResource(10);
			displaysBuilding(19);
		}
		if ((gameState[51703] > 7) || (gameState[51901] && gameState[51956])) {
			displaysResource(11);
		}
		if (gameState[51703] > 7) {
			displaysBuilding(20);
		}
		if (gameState[51970]) {
			displaysBuilding(21);
		}
		if (chighlight != -1) {
			if (chighlightt == 0) {
				context0.drawImage(buildinghighlight, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt > 0) {
				chighlightt--;
				context0.drawImage(buildinghighlight1, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			} else if (chighlightt < 0) {
				chighlightt++;
				context0.drawImage(buildinghighlight0, Math.floor(chighlight / 5) * 80, 27 + (100 * (chighlight % 5)), 78, 96);
			}
		}
	} else if (currentview == 99) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 550, 520, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Continue", 615, 550);
		context0.globalAlpha = 0.2;
		context0.fillRect(300, 520, 200, 50);
		context0.globalAlpha = 1;
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		var temp0 = new bigInt();
		pullBig(temp0, 11800);
		context0.drawImage(achievement, 35, 70, 20, 20);
		context0.fillText("Achievement Points: " + displayBig(temp0), 60, 90);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp0) + "%", 360, 90);
		if (compareSmall(temp0, 1) && (gameState[11900] < 59)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 123);
			context0.font="28px Times New Roman";
		}
		if (gameState[11900] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 136);
		}
		if (gameState[11900] == 59) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, 60);
		subSmall(temp0, gameState[11900]);
		context0.fillText("Fight Timer: " + displayBig(temp0), 60, 130);
		if (gameState[11902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Miniature Horses", 60, 210);
		if (gameState[11901]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("OSHA", 60, 170);
		if (gameState[11904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Thieves Guild", 60, 290);
		if (gameState[11905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Militia", 60, 330);
		if (gameState[11906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Looting", 60, 370);
		if (gameState[11908]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Holy Shield", 60, 450);
		if (gameState[11909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Divine Strength", 60, 490);
		if (gameState[11910]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Windmills", 460, 130);
		context0.font="28px Times New Roman";
		pullBig(temp0, 11800);
		if (compareSmall(temp0, 1) && (gameState[11911] < 3)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 435, 163);
			context0.font="28px Times New Roman";
		}
		if (gameState[11911] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 437, 176);
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[11911]);
		if (gameState[11911] == 3) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		context0.fillText("Castle Defense: " + displayBig(temp0), 460, 170);
		if (gameState[1000]) {
			context0.fillStyle = "gold";
			context0.fillText("Humans: ", 10, 50);
			context0.fillStyle = "black";
			context0.drawImage(button00, 300, 520, 200, 50);
			context0.font="20px Times New Roman";
			context0.fillText("Orcs", 382, 550);
			context0.font="28px Times New Roman";
			pullBig(temp0, 11800);
			if (compareSmall(temp0, 1) && ((gameState[11903] < 3) || ((gameState[1000] > 1) && (gameState[11903] < 5)))) {
				context0.font="22px Times New Roman";
				context0.fillStyle = "#00FF00";
				context0.fillText("+", 35, 243);
				context0.font="28px Times New Roman";
			}
			if (gameState[11903] > 0) {
				context0.fillStyle = "#FF0000";
				context0.fillText("-", 37, 256);
			}
			temp0.data.fill(0);
			addSmall(temp0, gameState[11903]);
			if (gameState[11903] == 5) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "gold";
			}
			context0.fillText("Trade Routes: " + displayBig(temp0), 60, 250);
			if (gameState[1000] > 2) {
				if (gameState[11907]) {
					context0.fillStyle = "#00FF00";
				} else {
					context0.fillStyle = "#FF0000";
				}
				context0.fillText("Unholy Alliance", 60, 410);
			}
		}
	} else if (currentview == 98) {
		var temp0 = new bigInt();
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 550, 520, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Continue", 615, 550);
		context0.drawImage(button00, 300, 520, 200, 50);
		if (gameState[1000] == 1) {
			context0.fillText("Humans", 372, 550);
		} else {
			context0.fillText("Elves", 378, 550);
		}
		context0.fillStyle = "gold";
		context0.font="28px Times New Roman";
		context0.fillText("Orcs: ", 10, 50);
		context0.drawImage(achievement, 35, 70, 20, 20);
		pullBig(temp0, 21800);
		context0.fillText("Achievement Points: " + displayBig(temp0), 60, 90);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp0) + "%", 360, 90);
		if (compareSmall(temp0, 1) && (gameState[21900] < 59)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 123);
			context0.font="28px Times New Roman";
		}
		if (gameState[21900] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 136);
		}
		if (gameState[21900] == 59) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, 60);
		subSmall(temp0, gameState[21900]);
		context0.fillText("Fight Timer: " + displayBig(temp0), 60, 130);
		pullBig(temp0, 21800);
		if (compareSmall(temp0, 1) && (gameState[21901] < 2)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 163);
			context0.font="28px Times New Roman";
		}
		if (gameState[21901] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 176);
		}
		if (gameState[21901] == 2) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[21901]);
		context0.fillText("Cannibalism: " + displayBig(temp0), 60, 170);
		pullBig(temp0, 21800);
		if (compareSmall(temp0, 1) && (gameState[21902] < 5)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 203);
			context0.font="28px Times New Roman";
		}
		if (gameState[21902] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 216);
		}
		if (gameState[11902] == 5) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[21902]);
		context0.fillText("Human Alliance: " + displayBig(temp0), 60, 210);
		if (gameState[21903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Venom", 60, 250);
		if (gameState[21904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Mudslinging", 60, 290);
		if (gameState[21905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("The Best Defense", 60, 330);
		if (gameState[21908]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Tower Defense", 60, 450);
		if (gameState[1000] > 1) {
			if (gameState[21906]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Friendly Fire", 60, 370);
		}
		if (gameState[1000] > 2) {
			if (gameState[21907]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Shared Fate", 60, 410);
		}
	} else if (currentview == 97) {
		var temp0 = new bigInt();
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 550, 520, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Continue", 615, 550);
		context0.drawImage(button00, 300, 520, 200, 50);
		if (gameState[1000] == 2) {
			context0.fillText("Humans", 372, 550);
		} else {
			context0.fillText("Undead", 372, 550);
		}
		context0.fillStyle = "gold";
		context0.font="28px Times New Roman";
		context0.fillText("Elves: ", 10, 50);
		context0.drawImage(achievement, 35, 70, 20, 20);
		pullBig(temp0, 31800);
		context0.fillText("Achievement Points: " + displayBig(temp0), 60, 90);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp0) + "%", 360, 90);
		if (compareSmall(temp0, 1) && (gameState[31900] < 59)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 123);
			context0.font="28px Times New Roman";
		}
		if (gameState[31900] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 136);
		}
		if (gameState[31900] == 59) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, 60);
		subSmall(temp0, gameState[31900]);
		context0.fillText("Fight Timer: " + displayBig(temp0), 60, 130);
		if (gameState[31901]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Vegetative Reproduction", 60, 170);
		if (gameState[31902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Interracial Marriage", 60, 210);
		if (gameState[31903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Alternative Medicine", 60, 250);
		if (gameState[31904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Live Traps", 60, 290);
		if (gameState[31905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Africanized Bees", 60, 330);
		if (gameState[31906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("The Light Brigade", 60, 370);
		if (gameState[31907]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Shared Knowledge", 60, 410);
		if (gameState[1000] > 2) {
			if (gameState[31908]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Dancing with Death", 60, 450);
		}
		if (gameState[31909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Tireless Watchers", 60, 490);
	} else if (currentview == 96) {
		var temp0 = new bigInt();
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 550, 520, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Continue", 615, 550);
		context0.drawImage(button00, 300, 520, 200, 50);
		if (gameState[1000] == 3) {
			context0.fillText("Humans", 372, 550);
		} else {
			context0.fillText("Southerners", 355, 550);
		}
		context0.fillStyle = "gold";
		context0.font="28px Times New Roman";
		context0.fillText("Undead: ", 10, 50);
		context0.drawImage(achievement, 35, 70, 20, 20);
		pullBig(temp0, 41800);
		context0.fillText("Achievement Points: " + displayBig(temp0), 60, 90);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp0) + "%", 360, 90);
		if (compareSmall(temp0, 1) && (gameState[41900] < 59)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 123);
			context0.font="28px Times New Roman";
		}
		if (gameState[41900] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 136);
		}
		if (gameState[41900] == 59) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, 60);
		subSmall(temp0, gameState[41900]);
		context0.fillText("Fight Timer: " + displayBig(temp0), 60, 130);
		pullBig(temp0, 41800);
		if (compareSmall(temp0, 1) && (gameState[41901] < 8)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 163);
			context0.font="28px Times New Roman";
		}
		if (gameState[41901] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 176);
		}
		if (gameState[41901] == 8) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[41901]);
		context0.fillText("Dead Wagons: " + displayBig(temp0), 60, 170);
		if (gameState[41902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Recycling", 60, 210);
		if (gameState[41903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Acid Rain", 60, 250);
		if (gameState[41904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Shared Blood", 60, 290);
		if (gameState[41905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Armageddon", 60, 330);
		pullBig(temp0, 41800);
		if (compareSmall(temp0, 1) && (gameState[41906] < 2)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 363);
			context0.font="28px Times New Roman";
		}
		if (gameState[41906] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 376);
		}
		if (gameState[41906] == 2) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[41906]);
		context0.fillText("Grave Robbing: " + displayBig(temp0), 60, 370);
	} else if (currentview == 95) {
		var temp0 = new bigInt();
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 550, 520, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Continue", 615, 550);
		context0.drawImage(button00, 300, 520, 200, 50);
		if (gameState[1000] == 4) {
			context0.fillText("Humans", 372, 550);
		} else {
			
		}
		context0.fillStyle = "gold";
		context0.font="28px Times New Roman";
		context0.fillText("Southerners: ", 10, 50);
		context0.drawImage(achievement, 35, 70, 20, 20);
		pullBig(temp0, 51800);
		context0.fillText("Achievement Points: " + displayBig(temp0), 60, 90);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp0) + "%", 360, 90);
		if (compareSmall(temp0, 1) && (gameState[51900] < 59)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 123);
			context0.font="28px Times New Roman";
		}
		if (gameState[51900] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 136);
		}
		if (gameState[51900] == 59) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, 60);
		subSmall(temp0, gameState[51900]);
		context0.fillText("Fight Timer: " + displayBig(temp0), 60, 130);
		pullBig(temp0, 51800);
		if (compareSmall(temp0, 1) && (gameState[51901] < 2)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 163);
			context0.font="28px Times New Roman";
		}
		if (gameState[51901] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 176);
		}
		if (gameState[51901] == 2) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[51901]);
		context0.fillText("Buried Treasure: " + displayBig(temp0), 60, 170);
		if (gameState[51902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Life Insurance", 60, 210);
		if (gameState[51903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Memorial", 60, 250);
		if (gameState[51904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Inspiration", 60, 290);
		if (gameState[51905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Hannibalism", 60, 330);
		if (gameState[51906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Great Wall", 60, 370);
		pullBig(temp0, 51800);
		if (compareSmall(temp0, 1) && (gameState[51907] < 2)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 403);
			context0.font="28px Times New Roman";
		}
		if (gameState[51907] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 416);
		}
		if (gameState[51907] == 2) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[51907]);
		context0.fillText("International Banking: " + displayBig(temp0), 60, 410);
		pullBig(temp0, 51800);
		if (compareSmall(temp0, 1) && (gameState[51908] < 2)) {
			context0.font="22px Times New Roman";
			context0.fillStyle = "#00FF00";
			context0.fillText("+", 35, 443);
			context0.font="28px Times New Roman";
		}
		if (gameState[51908] > 0) {
			context0.fillStyle = "#FF0000";
			context0.fillText("-", 37, 456);
		}
		if (gameState[51908] == 2) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "gold";
		}
		temp0.data.fill(0);
		addSmall(temp0, gameState[51908]);
		context0.fillText("Trade Winds: " + displayBig(temp0), 60, 450);
		if (gameState[51909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Howdahs", 60, 490);
	} else if (currentview == 201) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Achievements", 95, 530);
		if (gameState[1000]) {
			context0.drawImage(button00, 300, 500, 200, 50);
			context0.fillText("Orcs", 382, 530);
		}
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		var temp = new bigInt();
		pullBig(temp, 11800);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp) + "%", 60, 90);
		temp.data.fill(0);
		addSmall(temp, 60);
		subSmall(temp, gameState[11900]);
		context0.fillText("Fight Timer: " + displayBig(temp), 60, 130);
		if (gameState[11901]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("OSHA", 60, 170);
		if (gameState[11902] == 0) {
			context0.fillStyle = "#FF0000";
		} else {
			context0.fillStyle = "#00FF00";
		}
		context0.fillText("Miniature Horses", 60, 210);
		if (gameState[11904] == 0) {
			context0.fillStyle = "#FF0000";
		} else {
			context0.fillStyle = "#00FF00";
		}
		context0.fillText("Thieves Guild", 60, 290);
		if (gameState[11905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Militia", 60, 330);
		if (gameState[11906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Looting", 60, 370);
		if (gameState[11908]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Holy Shield", 60, 450);
		if (gameState[11909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Divine Strength", 60, 490);
		if (gameState[11910]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Windmills", 460, 130);
		context0.fillStyle = "gold";
		context0.fillText("Castle Defense:", 460, 170);
		context0.fillStyle = "#00FF00";
		if (gameState[11911] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 640, 170);
		if (gameState[11911] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 660, 170);
		if (gameState[11911] < 3) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("3", 680, 170);
		if (gameState[1000]) {
			context0.fillStyle = "gold";
			context0.fillText("Humans: ", 10, 50);
			context0.fillText("Trade Routes:", 60, 250);
			context0.fillStyle = "#00FF00";
			if (gameState[11903] < 1) {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("1", 225, 250);
			if (gameState[11903] < 2) {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("2", 245, 250);
			if (gameState[11903] < 3) {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("3", 265, 250);
			if (gameState[1000] > 1) {
				if (gameState[11903] < 4) {
					context0.fillStyle = "#FF0000";
				}
				context0.fillText("4", 285, 250);
				if (gameState[11903] < 5) {
					context0.fillStyle = "#FF0000";
				}
				context0.fillText("5", 305, 250);
				if (gameState[1000] > 2) {
					if (gameState[11907]) {
						context0.fillStyle = "#00FF00";
					} else {
						context0.fillStyle = "#FF0000";
					}
					context0.fillText("Unholy Alliance", 60, 410);
				}
			}
		}
		pullBig(temp, 16500);
		if (getpowerBig(temp)) {
			var temp2 = new bigInt();
			addSmall(temp2, 1);
			var temp3 = new bigInt();
			var i = 0;
			while (i < 10) {
				pullBig(temp, 16500 + (100 * i));
				addBig(temp3, temp);
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp3.data.fill(0);
			while (i < 10) {
				pullBig(temp, 17500 + (100 * i));
				if (compareBig(temp, temp3)) {
					copyBig(temp3, temp);
				}
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			var j = 0;
			var k = 0;
			while (i < 6) {
				pullBig(temp, 15000 + (100 * i));
				j = getpowerBig(temp);
				if (i == 0) {
					k = 7;
				} else if (i == 1) {
					k = 6;
				} else if (i == 2) {
					k = 6;
				} else if (i == 3) {
					k = 6;
				} else if (i == 4) {
					k = 5;
				} else if (i == 5) {
					k = 5;
				}
				if (j > k) {
					addSmall(temp2, j - k);
				}
				i++;
			}
			pullBig(temp, 11800);
			subBig(temp2, temp);
			i = 0;
			while (i < 50) {
				subSmall(temp2, gameState[11900 + i]);
				i++;
			}
			context0.fillStyle = "gold";
			context0.fillText("Unspent Achievement", 520, 520);
			context0.fillText("Points: " + displayBig(temp2), 520, 550);
		}
	} else if (currentview == 202) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Achievements", 95, 530);
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 1) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Elves", 378, 530);
		}
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Orcs: ", 10, 50);
		var temp = new bigInt();
		pullBig(temp, 21800);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp) + "%", 60, 90);
		temp.data.fill(0);
		addSmall(temp, 60);
		subSmall(temp, gameState[21900]);
		context0.fillText("Fight Timer: " + displayBig(temp), 60, 130);
		context0.fillStyle = "gold";
		context0.fillText("Cannibalism:", 60, 170);
		context0.fillStyle = "#00FF00";
		if (gameState[21901] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 215, 170);
		if (gameState[21901] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 235, 170);
		context0.fillStyle = "gold";
		context0.fillText("Human Alliance:", 60, 210);
		context0.fillStyle = "#00FF00";
		if (gameState[21902] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 258, 210);
		if (gameState[21902] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 278, 210);
		if (gameState[21902] < 3) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("3", 298, 210);
		if (gameState[21902] < 4) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("4", 318, 210);
		if (gameState[21902] < 5) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("5", 338, 210);
		if (gameState[21903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Venom", 60, 250);
		if (gameState[21904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Mudslinging", 60, 290);
		if (gameState[21905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("The Best Defense", 60, 330);
		if (gameState[21908]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Tower Defense", 60, 450);
		if (gameState[1000] > 1) {
			if (gameState[21906]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Friendly Fire", 60, 370);
		}
		if (gameState[1000] > 2) {
			if (gameState[21907]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Shared Fate", 60, 410);
		}
		pullBig(temp, 26500);
		if (getpowerBig(temp)) {
			var temp2 = new bigInt();
			addSmall(temp2, 1);
			var temp3 = new bigInt();
			var i = 0;
			while (i < 10) {
				pullBig(temp, 26500 + (100 * i));
				addBig(temp3, temp);
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp3.data.fill(0);
			while (i < 10) {
				pullBig(temp, 27500 + (100 * i));
				if (compareBig(temp, temp3)) {
					copyBig(temp3, temp);
				}
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			var j = 0;
			var k = 0;
			while (i < 6) {
				pullBig(temp, 25000 + (100 * i));
				j = getpowerBig(temp);
				if (i == 0) {
					k = 7;
				} else if (i == 1) {
					k = 6;
				} else if (i == 2) {
					k = 6;
				} else if (i == 3) {
					k = 6;
				} else if (i == 4) {
					k = 5;
				} else if (i == 5) {
					k = 4;
				}
				if (j > k) {
					addSmall(temp2, j - k);
				}
				i++;
			}
			pullBig(temp, 21800);
			subBig(temp2, temp);
			i = 0;
			while (i < 50) {
				subSmall(temp2, gameState[21900 + i]);
				i++;
			}
			context0.fillStyle = "gold";
			context0.fillText("Unspent Achievement", 520, 520);
			context0.fillText("Points: " + displayBig(temp2), 520, 550);
		}
	} else if (currentview == 203) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Achievements", 95, 530);
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 2) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Undead", 372, 530);
		}
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Elves: ", 10, 50);
		var temp = new bigInt();
		pullBig(temp, 31800);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp) + "%", 60, 90);
		temp.data.fill(0);
		addSmall(temp, 60);
		subSmall(temp, gameState[31900]);
		context0.fillText("Fight Timer: " + displayBig(temp), 60, 130);
		if (gameState[31901]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Vegetative Reproduction", 60, 170);
		if (gameState[31902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Interracial Marriage", 60, 210);
		if (gameState[31903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Alternative Medicine", 60, 250);
		if (gameState[31904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Live Traps", 60, 290);
		if (gameState[31905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Africanized Bees", 60, 330);
		if (gameState[31906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("The Light Brigade", 60, 370);
		if (gameState[31907]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Shared Knowledge", 60, 410);
		if (gameState[1000] > 2) {
			if (gameState[31908]) {
				context0.fillStyle = "#00FF00";
			} else {
				context0.fillStyle = "#FF0000";
			}
			context0.fillText("Dancing with Death", 60, 450);
		}
		if (gameState[31909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Tireless Watchers", 60, 490);
		pullBig(temp, 36500);
		if (getpowerBig(temp)) {
			var temp2 = new bigInt();
			addSmall(temp2, 1);
			var temp3 = new bigInt();
			var i = 0;
			while (i < 10) {
				pullBig(temp, 36500 + (100 * i));
				addBig(temp3, temp);
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp3.data.fill(0);
			while (i < 10) {
				pullBig(temp, 37500 + (100 * i));
				if (compareBig(temp, temp3)) {
					copyBig(temp3, temp);
				}
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			var j = 0;
			var k = 0;
			while (i < 6) {
				pullBig(temp, 35000 + (100 * i));
				j = getpowerBig(temp);
				if (i == 0) {
					k = 7;
				} else if (i == 1) {
					k = 7;
				} else if (i == 2) {
					k = 7;
				} else if (i == 3) {
					k = 4;
				} else if (i == 4) {
					k = 6;
				} else if (i == 5) {
					k = 5;
				}
				if (j > k) {
					addSmall(temp2, j - k);
				}
				i++;
			}
			pullBig(temp, 31800);
			subBig(temp2, temp);
			i = 0;
			while (i < 50) {
				subSmall(temp2, gameState[31900 + i]);
				i++;
			}
			context0.fillStyle = "gold";
			context0.fillText("Unspent Achievement", 520, 520);
			context0.fillText("Points: " + displayBig(temp2), 520, 550);
		}
	} else if (currentview == 204) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Achievements", 95, 530);
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 3) {
			context0.fillText("Humans", 372, 530);
		} else {
			context0.fillText("Southerners", 355, 530);
		}
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Undead: ", 10, 50);
		var temp = new bigInt();
		pullBig(temp, 41800);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp) + "%", 60, 90);
		temp.data.fill(0);
		addSmall(temp, 60);
		subSmall(temp, gameState[41900]);
		context0.fillText("Fight Timer: " + displayBig(temp), 60, 130);
		context0.fillStyle = "gold";
		context0.fillText("Dead Wagons:", 60, 170);
		context0.fillStyle = "#00FF00";
		if (gameState[41901] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 230, 170);
		if (gameState[41901] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 250, 170);
		if (gameState[41901] < 3) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("3", 270, 170);
		if (gameState[41901] < 4) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("4", 290, 170);
		if (gameState[41901] < 5) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("5", 310, 170);
		if (gameState[41901] < 6) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("6", 330, 170);
		if (gameState[41901] < 7) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("7", 350, 170);
		if (gameState[41901] < 8) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("8", 370, 170);
		if (gameState[41902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Recycling", 60, 210);
		if (gameState[41903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Acid Rain", 60, 250);
		if (gameState[41904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Shared Blood", 60, 290);
		if (gameState[41905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Armageddon", 60, 330);
		context0.fillStyle = "gold";
		context0.fillText("Grave Robbing:", 60, 370);
		context0.fillStyle = "#00FF00";
		if (gameState[41906] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 245, 370);
		if (gameState[41906] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 265, 370);
		pullBig(temp, 46500);
		if (getpowerBig(temp)) {
			var temp2 = new bigInt();
			addSmall(temp2, 1);
			var temp3 = new bigInt();
			var i = 0;
			while (i < 10) {
				pullBig(temp, 46500 + (100 * i));
				addBig(temp3, temp);
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp3.data.fill(0);
			while (i < 10) {
				pullBig(temp, 47500 + (100 * i));
				if (compareBig(temp, temp3)) {
					copyBig(temp3, temp);
				}
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			var j = 0;
			var k = 0;
			while (i < 6) {
				pullBig(temp, 45000 + (100 * i));
				j = getpowerBig(temp);
				if (i == 0) {
					k = 7;
				} else if (i == 1) {
					k = 5;
				} else if (i == 2) {
					k = 4;
				} else if (i == 3) {
					k = 7;
				} else if (i == 4) {
					k = 4;
				} else if (i == 5) {
					k = 4;
				}
				if (j > k) {
					addSmall(temp2, j - k);
				}
				i++;
			}
			pullBig(temp, 41800);
			subBig(temp2, temp);
			i = 0;
			while (i < 50) {
				subSmall(temp2, gameState[41900 + i]);
				i++;
			}
			context0.fillStyle = "gold";
			context0.fillText("Unspent Achievement", 520, 520);
			context0.fillText("Points: " + displayBig(temp2), 520, 550);
		}
	} else if (currentview == 205) {
		context0.fillStyle = "black";
		context0.fillRect(0, 0, 800, 600);
		context0.drawImage(button00, 50, 500, 200, 50);
		context0.font="20px Times New Roman";
		context0.fillText("Achievements", 95, 530);
		context0.drawImage(button00, 300, 500, 200, 50);
		if (gameState[1000] == 4) {
			context0.fillText("Humans", 372, 530);
		} else {

		}
		context0.font="28px Times New Roman";
		context0.fillStyle = "gold";
		context0.fillText("Southerners: ", 10, 50);
		var temp = new bigInt();
		pullBig(temp, 51800);
		context0.fillText("Battle Reward Bonus: +" + displayBig(temp) + "%", 60, 90);
		temp.data.fill(0);
		addSmall(temp, 60);
		subSmall(temp, gameState[51900]);
		context0.fillText("Fight Timer: " + displayBig(temp), 60, 130);
		context0.fillStyle = "gold";
		context0.fillText("Buried Treasure:", 60, 170);
		context0.fillStyle = "#00FF00";
		if (gameState[51901] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 255, 170);
		if (gameState[51901] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 275, 170);
		if (gameState[51902]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Life Insurance", 60, 210);
		if (gameState[51903]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Memorial", 60, 250);
		if (gameState[51904]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Inspiration", 60, 290);
		if (gameState[51905]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Hannibalism", 60, 330);
		if (gameState[51906]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Great Wall", 60, 370);
		context0.fillStyle = "gold";
		context0.fillText("International Banking:", 60, 410);
		context0.fillStyle = "#00FF00";
		if (gameState[51907] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 315, 410);
		if (gameState[51907] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 335, 410);
		context0.fillStyle = "gold";
		context0.fillText("Trade Winds:", 60, 450);
		context0.fillStyle = "#00FF00";
		if (gameState[51908] < 1) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("1", 215, 450);
		if (gameState[51908] < 2) {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("2", 235, 450);
		if (gameState[51909]) {
			context0.fillStyle = "#00FF00";
		} else {
			context0.fillStyle = "#FF0000";
		}
		context0.fillText("Howdahs", 60, 490);
		pullBig(temp, 56500);
		if (getpowerBig(temp)) {
			var temp2 = new bigInt();
			addSmall(temp2, 1);
			var temp3 = new bigInt();
			var i = 0;
			while (i < 10) {
				pullBig(temp, 56500 + (100 * i));
				addBig(temp3, temp);
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp3.data.fill(0);
			while (i < 10) {
				pullBig(temp, 57500 + (100 * i));
				if (compareBig(temp, temp3)) {
					copyBig(temp3, temp);
				}
				i++;
			}
			i = getpowerBig(temp3);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			var j = 0;
			var k = 0;
			while (i < 6) {
				pullBig(temp, 55000 + (100 * i));
				j = getpowerBig(temp);
				if (i == 0) {
					k = 8;
				} else if (i == 1) {
					k = 7;
				} else if (i == 2) {
					k = 6;
				} else if (i == 3) {
					k = 6;
				} else if (i == 4) {
					k = 5;
				} else if (i == 5) {
					k = 6;
				}
				if (j > k) {
					addSmall(temp2, j - k);
				}
				i++;
			}
			pullBig(temp, 51800);
			subBig(temp2, temp);
			i = 0;
			while (i < 50) {
				subSmall(temp2, gameState[51900 + i]);
				i++;
			}
			context0.fillStyle = "gold";
			context0.fillText("Unspent Achievement", 520, 520);
			context0.fillText("Points: " + displayBig(temp2), 520, 550);
		}
	}
	context0.fillStyle = "black";
	context0.fillRect(0, 0, 800, 25);
	if (ihighlight != -1) {
		if (ihighlightt == 0) {
			context0.drawImage(iconhighlight, 25 * (31 - ihighlight), 0, 25, 25);
		} else {
			context0.drawImage(iconhighlight0, 25 * (31 - ihighlight), 0, 25, 25);
			ihighlightt--;
		}
	}
	context0.font="20px Times New Roman";
	context0.fillStyle = "gold";
	if ((currentview > 99) || (currentview < 50)) {
		context0.fillText("X", 780, 19);
		if (gameState[1000]) {
			context0.drawImage(hResource08p, 753, 2, 20, 20);
			context0.drawImage(henemy04.image, 728, 2, 20, 20);
			if (gameState[1000] > 1) {
				context0.drawImage(oenemy05.image, 703, 2, 20, 20);
				if (gameState[1000] > 2) {
					context0.drawImage(henemy05.image, 678, 2, 20, 20);
					if (gameState[1000] > 3) {
						context0.drawImage(sresource07.image, 653, 2, 20, 20);
					}
				}
			}
		}
	}
	if ((currentview > 100) && (currentview < 150)) {
		context0.font="32px Times New Roman";
		context0.fillText("Reset the game to use", 250, 400);
		context0.fillText("achievement points", 267, 440);
		context0.font="20px Times New Roman";
	}
	var i = 0;
	var n = Math.floor(cmessage.length / 70);
	var d = cmessage;
	var e = "";
	while (n) {
		context0.fillStyle = "black";
		context0.fillRect(0, (25 * n), 800, 25);
		i = (70 * n);
		while (cmessage.charAt(i) != " ") {
			i--;
		}
		e = d.substring(i, d.length);
		d = d.substring(0, i);
		context0.fillStyle = "gold";
		context0.fillText(e.substring(1, e.length), 3, 18 + (25 * n));
		n--;
	}
	context0.fillText(d, 3, 18);
	if (cmessage2 != "") {
		n = Math.floor(cmessage.length / 70);
		var m = Math.floor(cmessage2.length / 70);
		d = cmessage2;
		e = "";
		while (m) {
			context0.fillStyle = "black";
			context0.fillRect(0, 25 + (25 * m) + (25 * n), 800, 25);
			i = (70 * m);
			while (cmessage2.charAt(i) != " ") {
				i--;
			}
			e = d.substring(i, d.length);
			d = d.substring(0, i);
			context0.fillStyle = "gold";
			context0.fillText(e.substring(1, e.length), 3, 43 + (25 * m) + (25 * n));
			m--;
		}
		context0.fillStyle = "black";
		context0.fillRect(0, 25 + (25 * n), 800, 25);
		context0.fillStyle = "gold";
		context0.fillText(d, 3, 43 + (25 * n));
	}
	if (cmessage3 != "") {
		n = Math.floor(cmessage.length / 70);
		var m = Math.floor(cmessage2.length / 70);
		var o = Math.floor(cmessage3.length / 70);
		d = cmessage3;
		e = "";
		while (o) {
			context0.fillStyle = "black";
			context0.fillRect(0, 50 + (25 * m) + (25 * n) + (25 * o), 800, 25);
			i = (70 * m);
			while (cmessage3.charAt(i) != " ") {
				i--;
			}
			e = d.substring(i, d.length);
			d = d.substring(0, i);
			context0.fillStyle = "gold";
			context0.fillText(e.substring(1, e.length), 3, 68 + (25 * m) + (25 * n) + (25 * o));
			o--;
		}
		context0.fillStyle = "black";
		context0.fillRect(0, 50 + (25 * n) + (25 * m), 800, 25);
		context0.fillStyle = "gold";
		context0.fillText(d, 3, 68 + (25 * n) + (25 * m));
	}
}

function userMove(event) {
	cmessage3 = "";
	cmessage2 = "";
	cmessage = "";
	if (currentview != 0) {
		confirmtimer = 0;
		confirmtimer2 = 0;
	}
	cmouseposition = event;
	var x = (event != null ? event.pageX : 0);
	var y = (event != null ? event.pageY : 0);
	ehighlight = -1;
	if ((y < 25) && ((currentview > 99) || (currentview < 50))) {
		chighlight = -1;
		if (650 < x) {
			ihighlight = Math.floor((800 - x) / 25);
			if (775 < x) {
				cmessage = "Menu";
			} else if ((750 < x) && gameState[1000]) {
				cmessage = "Humans";
			} else if ((725 < x) && gameState[1000]) {
				cmessage = "Orcs";
			} else if ((700 < x) && (gameState[1000] > 1)) {
				cmessage = "Elves";
			} else if ((675 < x) && (gameState[1000] > 2)) {
				cmessage = "Undead";
			} else if ((650 < x) && (gameState[1000] > 3)) {
				cmessage = "Southerners";
			} else {
				ihighlight = -1;
				cmessage = "";
			}
		} else {
			ihighlight = -1;
			cmessage = "";
		}
	} else {
		ihighlight = -1;
		if (currentview == 0) {
			if ((300 < x) && (x < 500) && (340 < y) && (y < 390)) {
				cmessage = "Continue Game";
			} else if ((300 < x) && (x < 500) && (260 < y) && (y < 310) && (confirmtimer == 0)) {
				var temp = new bigInt();
				pullBig(temp, 14500);
				if (compareSmall(temp, 21)) {
					cmessage = "New Game: Start over again with achievement rewards";
				} else {
					cmessage = "New Game";
				}
			} else if ((300 < x) && (x < 500) && (260 < y) && (y < 310) && (confirmtimer != 0)) {
				cmessage = "Are you sure? This will reset all your buildings and resources.";
			} else if ((300 < x) && (x < 500) && (420 < y) && (y < 470)) {
				cmessage = "View Achievements";
			} else if ((300 < x) && (x < 500) && (180 < y) && (y < 230)) {
				cmessage = "Tutorial";
			} else if ((550 < x) && (x < 750) && (500 < y) && (y < 550) && (confirmtimer2 == 0)) {
				cmessage = "HARD RESET: RESETS EVERYTHING, INCLUDING ACHIEVEMENTS";
			} else if ((550 < x) && (x < 750) && (500 < y) && (y < 550) && (confirmtimer2 != 0)) {
				cmessage = "ARE YOU SURE? THIS WILL DELETE ALL YOUR ACHIEVEMENTS";
			} else {
				cmessage = "";
			}
		} else if (currentview == 1) {
			if ((25 < y) && (y < 525)) {
				var a = Math.floor(x / 80);
				var b = Math.floor((y - 25) / 100);
				var c = b + (5 * a);
				a = Math.floor(x / 160);
				var d = b + (5 * a);
				chighlight = c;
				if (c == 0) {
					cmessage = "Build Farm";
				} else if (c == 5) {
					cmessage = "Farm: Produces food";
				} else if ((c == 1) && gameState[11950]) {
					cmessage = "Build Forest";
				} else if ((c == 6) && gameState[11950]) {
					if (gameState[11976] == 0) {
						cmessage = "Chop: Uses food and produces wood";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 2) && gameState[11951]) {
					cmessage = "Build Homestead";
				} else if ((c == 7) && gameState[11951]) {
					if (gameState[11977] == 0) {
						cmessage = "Marry: Uses food and produces peasants";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 3) && gameState[11952]) {
					cmessage = "Build Quarry";
				} else if ((c == 8) && gameState[11952]) {
					if (gameState[11978] == 0) {
						if (gameState[11901]) {
							cmessage = "Quarry: Uses food and produces stone";
						} else {
							cmessage = "Quarry: Uses peasants and produces stone";
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 4) && gameState[11953]) {
					cmessage = "Build Stables";
				} else if ((c == 9) && gameState[11953]) {
					if (gameState[11979] == 0) {
						cmessage = "Breed: Uses food and produces horses";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 10) && gameState[11953]) {
					if (gameState[11910]) {
						cmessage = "Build Windmill";
					} else {
						cmessage = "Build Horse Mill";
					}
				} else if ((c == 15) && gameState[11953]) {
					if (gameState[11980] == 0) {
						if (gameState[11910]) {
							cmessage = "Mill: Increases farm production";
						} else {
							cmessage = "Mill: Uses horses and increases farm production";
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 11) && gameState[11957]) {
					cmessage = "Build Lumber Mill";
				} else if ((c == 16) && gameState[11957]) {
					if (gameState[11981] == 0) {
						if (gameState[11901]) {
							cmessage = "Saw: Uses food and increases forest production";
						} else {
							cmessage = "Saw: Uses peasants and increases forest production";
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 12) && gameState[11954] && gameState[11955]) {
					cmessage = "Build Iron Mine";
				} else if ((c == 17) && gameState[11954] && gameState[11955]) {
					if (gameState[11982] == 0) {
						if (gameState[11901]) {
							cmessage = "Mine Iron: Uses food and produces iron";
						} else {
							cmessage = "Mine Iron: Uses peasants and produces iron";
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 13) && gameState[11957]) {
					cmessage = "Build Blacksmith";
				} else if ((c == 18) && gameState[11957]) {
					if (gameState[11983] == 0) {
						cmessage = "Smith: Uses wood and iron and produces weapons";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 14) && gameState[11954]) {
					cmessage = "Build Trade Post";
				} else if ((c == 19) && gameState[11954]) {
					if (gameState[11984] == 0) {
						cmessage = "Idle";
					} else if (gameState[11984] == 1) {
						cmessage = "Sell Food: Uses food and produces gold";
					} else if (gameState[11984] == 2) {
						cmessage = "Buy Food: Uses gold and produces food";
					} else if (gameState[11984] == 3) {
						cmessage = "Sell Wood: Uses wood and produces gold";
					} else if (gameState[11984] == 4) {
						cmessage = "Buy Wood: Uses gold and produces wood";
					} else if (gameState[11984] == 5) {
						cmessage = "Sell Stone: Uses stone and produces gold";
					} else if (gameState[11984] == 6) {
						cmessage = "Buy Stone: Uses gold and produces stone";
					} else if (gameState[11984] == 7) {
						cmessage = "Sell Horses: Uses horses and produces gold";
					} else if (gameState[11984] == 8) {
						cmessage = "Buy Horses: Uses gold and produces horses";
					} else if (gameState[11984] == 9) {
						cmessage = "Sell Iron: Uses iron and produces gold";
					} else if (gameState[11984] == 10) {
						cmessage = "Buy Iron: Uses gold and produces iron";
					} else if (gameState[11984] == 11) {
						cmessage = "Sell Weapons: Uses weapons and produces gold";
					} else if (gameState[11984] == 12) {
						cmessage = "Buy Weapons: Uses gold and produces weapons";
					} else {
						cmessage = "";
					}
				} else if ((c == 20) && gameState[11958]) {
					cmessage = "Build Barracks";
				} else if ((c == 25) && gameState[11958]) {
					if (gameState[11985] == 0) {
						cmessage = "Train: Uses peasants and weapons and produces soldiers";
					} else {
						if (gameState[11968]) {
							cmessage = "Garrison: Increases effectiveness of walls and keeps";
						} else {
							cmessage = "Idle";
						}
					}
				} else if ((c == 21) && gameState[11703]) {
					cmessage = "Build Castle";
				} else if ((c == 26) && gameState[11703]) {
					if (gameState[11986] == 0) {
						cmessage = "Train: Uses horses and soldiers and produces knights";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 22) && (gameState[11703] > 2) && (gameState[11961])) {
					cmessage = "Build Armory";
				} else if ((c == 27) && (gameState[11703] > 2) && (gameState[11961])) {
						if (!gameState[11966]) {
							cmessage = "Equip: Increases might granted by knights by 1";
						} else {
							cmessage = "Equip: Increases might granted by knights and paladins by 1";
						}
				} else if ((c == 23) && ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]))) {
					cmessage = "Build Monastery";
				} else if ((c == 28) && ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]))) {
					if (gameState[11988] == 0) {
						cmessage = "Idle";
					} else if (gameState[11988] == 1) {
						cmessage = "Pray for Rain: Uses books and increases farm production";
					} else if (gameState[11988] == 2) {
						cmessage = "Preach: Uses books and increases homestead production";
					} else if (gameState[11988] == 3) {
						cmessage = "Inspire: Uses books and increases barracks production";
					} else if (gameState[11988] == 4) {
						cmessage = "Train: Uses peasants and books and produces monks";
					}
				} else if ((c == 24) && (gameState[11703] > 1)) {
					cmessage = "Build Gold Mine";
				} else if ((c == 29) && (gameState[11703] > 1)) {
					if (gameState[11989] == 0) {
						if (gameState[11901]) {
							cmessage = "Mine Gold: Uses food and produces gold";
						} else {
							cmessage = "Mine Gold: Uses peasants and produces gold";
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 30) && (gameState[11703] > 4)) {
					cmessage = "Build Trebuchet";
				} else if ((c == 35) && (gameState[11703] > 4)) {
					if (gameState[11990] == 0) {
						cmessage = "Fire Stone: Uses stone and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
					} else if (gameState[11990] == 1) {
						var temp = new bigInt();
						pullBig(temp, 13300);
						cmessage = "Fire Leaflets: Uses books and converts (monasteries) [" + displayBig(temp) + "] enemies into soldiers";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 31) && (gameState[11703] > 5)) {
					cmessage = "Build Cathedral";
				} else if ((c == 36) && (gameState[11703] > 5)) {
					if (gameState[11991] == 1) {
						cmessage = "Train: Uses books and knights and produces paladins";
					} else if (gameState[11991] == 2) {
						cmessage = "Smite: Uses books and kills 3 enemies per paladin in battle";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 32) && gameState[11959] && gameState[11903]) {
					cmessage = "Build Caravan";
				} else if ((c == 37) && gameState[11959] && gameState[11903]) {
					if (gameState[11992] == 1) {
						cmessage = "Transport Meat: Sends food to orcs as meat";
					} else if (gameState[11992] == 2) {
						cmessage = "Transport Stone: Sends stone to orcs";
					} else if (gameState[11992] == 3) {
						cmessage = "Transport Stone: Sends stone to undead";
					} else if (gameState[11992] == 4) {
						cmessage = "Transport Wood: Sends wood to orcs";
					} else if (gameState[11992] == 5) {
						cmessage = "Transport Wood: Sends wood to elves";
					} else if (gameState[11992] == 6) {
						cmessage = "Transport Wood: Sends wood to undead";
					} else if (gameState[11992] == 7) {
						cmessage = "Transport Wood: Sends wood to southerners";
					} else if (gameState[11992] == 8) {
						cmessage = "Transport Bows: Sends weapons to elves as bows";
					} else if (gameState[11992] == 9) {
						cmessage = "Transport Books: Sends books to elves";
					} else if (gameState[11992] == 10) {
						cmessage = "Transport Books: Sends books to undead";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 33) && gameState[11965]) {
					cmessage = "Build Wall";
				} else if ((c == 38) && gameState[11965]) {
					cmessage = "Defend: Saves (Might ^ (1/2)) [" + displayBig(rootBig(gethMight(), 2)) + "] soldiers from death in battle";
				} else if ((c == 34) && gameState[11968]) {
					cmessage = "Build Keep";
				} else if ((c == 39) && gameState[11968]) {
					cmessage = "Guard: Kills (Might ^ (1/2)) [" + displayBig(rootBig(gethMight(), 2)) + "] enemies in battle";
				} else if ((c == 40) && (gameState[11703] > 2) && gameState[11904]) {
					cmessage = "Build Thieves Guild";
				} else if ((c == 45) && (gameState[11703] > 2) && gameState[11904]) {
					var temp = hReward();
					var temp1 = new bigInt();
					temp1.data[0] = 1;
					shiftlBig(temp);
					shiftlBig(temp);
					shiftlBig(temp);
					temp = maxBig(temp, temp1);
					cmessage = "Steal: Produces (reward/1000) [" + displayBig(temp) + "] " + gethResource(gethEnemy(gameState[11701]).resource).name;
				} else {
					chighlight = -1;
					cmessage = "";
				}
			} else if (x < 600) {
				chighlight = -1;
				var a = Math.floor(x / 121);
				var b = Math.floor((y - 525) / 25);
				var c = b + (3 * a);
				if (c == 0) {
					cmessage = "Food";
				} else if ((c == 1) && gameState[11951]) {
					cmessage = "Wood";
				} else if ((c == 2) && gameState[11952]) {
					cmessage = "Peasants";
				} else if ((c == 3) && gameState[11953]) {
					cmessage = "Stone";
				} else if ((c == 4) && gameState[11954]) {
					cmessage = "Horses";
				} else if ((c == 5) && (gameState[11959] || (gameState[11703] > 2))) {
					cmessage = "Gold";
				} else if ((c == 6) && gameState[11957]) {
					cmessage = "Iron";
				} else if ((c == 7) && gameState[11958]) {
					cmessage = "Weapons";
				} else if ((c == 8) && gameState[11960]) {
					cmessage = "Soldiers: Each soldier increases your might by 1";
				} else if ((c == 9) && ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]))) {
					cmessage = "Books";
				} else if ((c == 10) && gameState[11963]) {
					cmessage = "Monks: Each monk saves one soldier from death in battle";
				} else if ((c == 11) && gameState[11961]) {
					var temp = new bigInt();
					pullBig(temp, 13200);
					addSmall(temp, 2);
					if (gameState[11911] > 2) {
						var temp1 = new bigInt();
						var temp2 = new bigInt();
						pullBig(temp1, 13100);
						divSmall(temp1, 3, temp2);
						addBig(temp, temp2);
					}
					cmessage = "Knights: Each knight increases your might by " + displayBig(temp);
				} else if ((c == 12) && gameState[11960]) {
					cmessage = "Might: You lose (Enemies^2 / Might) soldiers in battle";
				} else if ((c == 14) && gameState[11966]) {
					var temp = new bigInt();
					pullBig(temp, 13200);
					addSmall(temp, 3);
					if (gameState[11909]) {
						var tempmon = new bigInt();
						pullBig(tempmon, 13300);
						addBig(temp, tempmon);
					}
					if (gameState[11911] > 2) {
						var temp1 = new bigInt();
						var temp2 = new bigInt();
						pullBig(temp1, 13100);
						divSmall(temp1, 3, temp2);
						addBig(temp, temp2);
					}
					cmessage = "Paladins: Each paladin increases your might by " + displayBig(temp);
					if (gameState[11908]) {
						cmessage += " and saves 1 soldier from death in battle";
					}
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y < 551) && gameState[11960]) {
				var temp = new bigInt();
				var temp1 = new bigInt();
				pullBig(temp, 11600);
				pullBig(temp1, 11500);
				temp1 = getPower(10, toSmall(temp1));
				cmessage = displayBig(temp) + " / " + displayBig(temp1) + " Enemies, Expected Losses: " + displayBig(hLosses());
			} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[11960]) {
				if (gameState[11700]) {
					cmessage = "Fight: On";
				} else {
					cmessage = "Fight: Off";
				}
			} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[11960]) {
				var temp = new bigInt();
				pullBig(temp, 14500);
				if (compareSmall(temp, 23)) {
					if (!gameState[11704]) {
						cmessage = "Safe Off: Ignore losses";
					} else if (gameState[11704] == 1) {
						cmessage = "Safe On: Only fight when expected losses = 0";
					} else if (gameState[11704] == 2) {
						cmessage = "Cannon Fodder: Fight if only militia will be lost";
					}
				} else {
					cmessage = "";
				}
			} else if ((x > 689) && (x < 711) && (y > 575) && gameState[11960]) {
				var temp = new bigInt();
				pullBig(temp, 14500);
				if (compareSmall(temp, 22)) {
					cmessage = "Always fight the largest enemy";
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y > 550) && (y < 576) && gameState[11960]) {
				cmessage = "Reward for defeating the enemy";
			} else if ((x > 731) && (y > 575) && gameState[11960]) {
				cmessage = "You can fight when the timer is 0";
			} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[11960]) {
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 11500);
				pullBig(temp2, 14500);
				if (compareBig(temp, temp2)) {
					cmessage = "";
				} else {
					cmessage = "Increase enemy's level";
				}
			} else if ((x > 710) && (x < 732) && (y > 562) && gameState[11960]) {
				var temp = new bigInt();
				pullBig(temp, 11500);
				subSmall(temp, 5 * gameState[11701]);
				if (compareSmall(temp, 21)) {
					cmessage = "Decrease enemy's level";
				} else {
					cmessage = "";
				}
			} else if ((x > 609) && (x < 685) && (y > 525) && gameState[11703]) {
				var a = Math.floor((x - 610) / 25);
				var b = Math.floor((y - 526) / 25);
				var c = a + (3 * b);
				var tempenemies = new bigInt();
				pullBig(tempenemies, 14500);
				if ((gameState[11703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 7)) {
					ehighlight = c;
					cmessage = "Switch enemy to " + gethEnemy(c).name + " (Reward: " + gethResource(gethEnemy(c).resource).name + ")";
				} else {
					cmessage = "";
				}
			} else {
				cmessage = "";
			}
		} else if (currentview == 2) {
			if ((25 < y) && (y < 525)) {
				var a = Math.floor(x / 80);
				var b = Math.floor((y - 25) / 100);
				var c = b + (5 * a);
				a = Math.floor(x / 160);
				var d = b + (5 * a);
				chighlight = c;
				if (c == 0) {
					cmessage = "Build Mud Pit";
				} else if (c == 5) {
					cmessage = "Mud Pit: Produces mud";
				} else if ((c == 1) && gameState[21950]) {
					cmessage = "Build Pen";
				} else if ((c == 6) && gameState[21950]) {
					if (gameState[21976] == 0) {
						cmessage = "Breed: Uses mud and produces pigs";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 2) && gameState[21951]) {
					cmessage = "Build Slaughterhouse";
				} else if ((c == 7) && gameState[21951]) {
					if (gameState[21977] == 0) {
						cmessage = "Slaughter: Uses pigs and produces meat";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 3) && gameState[21952]) {
					cmessage = "Build Adobe";
				} else if ((c == 8) && gameState[21952]) {
					if (gameState[21978] == 0) {
						cmessage = "Multiply: Uses meat and produces orcs";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 4) && (gameState[21703] > 1)) {
					cmessage = "Build Shrine";
				} else if ((c == 9) && (gameState[21703] > 1)) {
					if (gameState[21979] == 0) {
						cmessage = "Idle";
					} else if (gameState[21979] == 1) {
						cmessage = "Pray for Rain: Uses blood and increases mud pit production";
					} else if (gameState[21979] == 2) {
						if (gameState[21960]) {
							cmessage = "Bloodlust: Uses blood, orcs and ogres kill more enemies in battle";
						} else {
							cmessage = "Bloodlust: Uses blood, orcs kill 1 more enemy in battle";
						}
					}
				} else if ((c == 10) && (gameState[21703] > 2)) {
					cmessage = "Build Altar";
				} else if ((c == 15) && (gameState[21703] > 2)) {
					if (gameState[21980] == 0) {
						cmessage = "Idle";
					} else if (gameState[21980] == 1) {
						if (gameState[21901] > 1) {
							cmessage = "Sacrifice: Uses orcs and produces meat and blood";
						} else {
							cmessage = "Sacrifice: Uses orcs and produces blood";
						}
						if (gameState[21907]) {
							cmessage += " and ghosts";
						}
					}
				} else if ((c == 11) && gameState[21955]) {
					cmessage = "Build Arena";
				} else if ((c == 16) && gameState[21955]) {
					if (gameState[21981] == 0) {
						cmessage = "Idle";
					} else if (gameState[21981] == 1) {
						if (gameState[21901] > 1) {
							cmessage = "Duel: Uses orcs and produces meat and champions";
						} else {
							cmessage = "Duel: Uses orcs and produces champions";
						}
					}
				} else if ((c == 12) && gameState[21956]) {
					cmessage = "Build Dungeon";
				} else if ((c == 17) && gameState[21956]) {
					if (gameState[21982] == 0) {
						cmessage = "Hoard: Increases the battle reward by 1%";
					} else if (gameState[21982] == 1) {
						if (gameState[21901] > 1) {
							cmessage = "Execute: Uses orcs and produces meat and renown"; 
						} else {
							cmessage = "Execute: Uses orcs and produces renown";
						}
					}
				} else if ((c == 13) && (gameState[21703] > 3)) {
					cmessage = "Build Stronghold";
				} else if ((c == 18) && (gameState[21703] > 3)) {
					if (gameState[21983] == 0) {
						if (gameState[21963]) {
							cmessage = "Defend: Increases the effectiveness of towers";
						} else {
							cmessage = "Idle";
						}
					} else if (gameState[21983] == 1) {
						cmessage = "Muster: Uses renown and increases adobe production";
						if (gameState[21908]) {
							cmessage2 = "Defend: Increases the effectiveness of towers";
						}
					}
				} else if ((c == 14) && (gameState[21703] > 4)) {
					cmessage = "Build Swamp";
				} else if ((c == 19) && (gameState[21703] > 4)) {
					if (gameState[21984] == 0) {
						cmessage = "Dredge: Increases mud pit production";
					} else if (gameState[21984] == 1) {
						cmessage = "Breed: Increases pen production";
					} else if (gameState[21984] == 2) {
						cmessage = "Lurk: Hydra heads kill 1 more enemy in battle";
					}
				} else if ((c == 20) && gameState[21958]) {
					cmessage = "Build Cave";
				} else if ((c == 25) && gameState[21958]) {
					if (gameState[21985] == 0) {
						cmessage = "Breed: Uses meat and blood and produces ogres";
					} else if (gameState[21985] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 21) && gameState[21963] && gameState[21960]) {
					cmessage = "Build Fort";
				} else if ((c == 26) && gameState[21963] && gameState[21960]) {
					cmessage = "Train: Each ogre kills 1 more enemy in battle";
				} else if ((c == 22) && gameState[21961]) {
					cmessage = "Build Workshop";
				} else if ((c == 27) && gameState[21961]) {
					if (gameState[21987] == 0) {
						cmessage = "Idle";
					} else if (gameState[21987] == 1) {
						cmessage = "Construct: Uses stone and wood and produces catapults";
					} else if (gameState[21987] == 2) {
						if (gameState[21904]) {
							cmessage = "Grapeshot: Uses mud and kills 3 enemies per catapult in battle";
						} else {
							cmessage = "Grapeshot: Uses stone and kills 3 enemies per catapult in battle";
						}
					}
				} else if ((c == 23) && ((gameState[21703] > 5) || (gameState[21963]))) {
					cmessage = "Build Tower";
				} else if ((c == 28) && ((gameState[21703] > 5) || (gameState[21963]))) {
					cmessage = "Guard: Kills (enemies ^ (1/2)) " + rootEnemies() + " enemies in battle";
					if (gameState[21902] > 1) {
						cmessage2 = "Human Alliance: Each tower acts as 1 keep for the Humans";
					}
				} else if ((c == 24) && gameState[21959]) {
					cmessage = "Build Hydra";
				} else if ((c == 29) && gameState[21959]) {
					cmessage = "Regrow: Produces hydra heads after battle";
				} else if ((c == 30) && (gameState[21703] > 6) && gameState[21961]) {
					cmessage = "Build Banner";
				} else if ((c == 35) && (gameState[21703] > 6) && gameState[21961]) {
					if (gameState[21990] == 0) {
						cmessage = "Awe: Produces log(orcs) renown";
					} else if (gameState[21990] == 1) {
						cmessage = "Rally: Uses renown and increases adobe production";
					} else if (gameState[21990] == 2) {
						cmessage = "Charge: Uses ogres and each ogre kills 1 enemy per fort in battle";
					}
				} else if ((c == 31) && (gameState[21703] > 6) && gameState[21964]) {
					cmessage = "Build Troll";
				} else if ((c == 36) && (gameState[21703] > 6) && gameState[21964]) {
					if (gameState[21991] == 0) {
						if (gameState[21904]) {
							cmessage = "Throw: Uses mud and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						} else {
							cmessage = "Throw: Uses stone and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						}
					} else if (gameState[21991] == 1) {
						cmessage = "Brawl: Troll health is used to kill (enemies^(1/2)) enemies in battle";
					} else if (gameState[21991] == 2) {
						cmessage = "Regenerate: Produces troll health, up to 100";
					}
				} else if ((c == 32) && gameState[21966] && gameState[21957]) {
					cmessage = "Build Dragon";
				} else if ((c == 37) && gameState[21966] && gameState[21957]) {
					if (gameState[21992] == 0) {
						cmessage = "Breathe Fire: Kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						if (gameState[21906]) {
							cmessage += " and increases nest production";
						}
					} else if (gameState[21992] == 1) {
						cmessage = "Guard: Increases dungeon production";
					}
					if (gameState[21905]) {
						cmessage2 = "Guard: Increases dungeon production";
					}
				} else {
					chighlight = -1;
					cmessage = "";
				}
			} else if (x < 600) {
				chighlight = -1;
				var a = Math.floor(x / 121);
				var b = Math.floor((y - 525) / 25);
				var c = b + (3 * a);
				if (c == 0) {
					cmessage = "Mud";
				} else if ((c == 1) && gameState[21951]) {
					cmessage = "Pigs";
				} else if ((c == 2) && gameState[21952]) {
					cmessage = "Meat";
				} else if ((c == 3) && gameState[21953]) {
					var temp = new bigInt();
					addSmall(temp, 1);
					if (gameState[21979] == 2) {
						var temp1 = new bigInt();
						pullBig(temp1, 22400);
						addSmall(temp1, 1);
						mulBig(temp, temp1);
					}
					cmessage = "Orcs: You lose one orc per " + displayBig(temp) + " enemies in battle";
				} else if ((c == 4) && (gameState[21703] > 1)) {
					cmessage = "Blood";
				} else if ((c == 5) && (gameState[21703] > 2)) {
					cmessage = "Stone";
				} else if ((c == 6) && gameState[21956]) {
					cmessage = "Champions: Each champion kills 1 enemy before every fight";
					if (gameState[21902]) {
						cmessage2 = "Human Alliance: Each champion grants 1 might to the Humans";
					}
				} else if ((c == 7) && gameState[21958]) {
					var temp = new bigInt();
					pullBig(temp, 23100);
					addSmall(temp, 2);
					if (gameState[21979] == 2) {
						var temp1 = new bigInt();
						pullBig(temp1, 22400);
						addSmall(temp1, 1);
						mulBig(temp, temp1);
					}
					cmessage = "Ogres: Each ogre kills 1 orc and " + displayBig(temp) + " enemies in battle";
					if (gameState[21902] > 2) {
						pullBig(temp, 23100);
						addSmall(temp, 1);
						cmessage2 = "Human Alliance: Each ogre grants " + displayBig(temp) + " might to the Humans";
					}
				} else if ((c == 8) && (gameState[21703] > 3)) {
					cmessage = "Renown";
				} else if ((c == 9) && ((gameState[21703] > 5) || (gameState[21963]))) {
					cmessage = "Wood";
				} else if ((c == 10) && gameState[21962]) {
					cmessage = "Catapults: Each catapult kills 1 enemy every second";
					if (gameState[21902] > 3) {
						cmessage2 = "Human Alliance: Each catapult kills 1 Human enemy before battle";
					}
				} else if ((c == 11) && gameState[21964]) {
					var headcount = 3;
					if (gameState[21984] == 2) {
						var temp = new bigInt();
						pullBig(temp, 22900);
						headcount += toSmall(temp);
					}
					cmessage = "Hydra Heads: Each head kills " + headcount + " enemies in battle";
					if (gameState[21903]) {
						cmessage += " and 1 enemy every second";
					}
				} else if ((c == 12) && gameState[21966]) {
					cmessage = "Troll Health";
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y < 551) && gameState[21953]) {
				var temp = new bigInt();
				var temp1 = new bigInt();
				pullBig(temp, 21600);
				pullBig(temp1, 21500);
				temp1 = getPower(10, toSmall(temp1));
				cmessage = displayBig(temp) + " / " + displayBig(temp1) + " Enemies, Expected Losses: " + displayBig(oLosses());
			} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[21953]) {
				if (gameState[21700]) {
					cmessage = "Fight: On";
				} else {
					cmessage = "Fight: Off";
				}
			} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[21953]) {
				if (!gameState[21704]) {
					cmessage = "Safe Off: Ignore losses";
				} else if (gameState[21704] == 1) {
					cmessage = "Safe On: Only fight when expected losses = 0";
				} else if (gameState[21704] == 2) {
					cmessage = "Ogre Food: Fight if orcs will only be killed by ogres";
				}
			} else if ((x > 689) && (x < 711) && (y > 575) && gameState[21953]) {
				cmessage = "Always fight the largest enemy";
			} else if ((x > 731) && (y > 550) && (y < 576) && gameState[21953]) {
				cmessage = "Reward for defeating the enemy";
			} else if ((x > 731) && (y > 575) && gameState[21953]) {
				cmessage = "You can fight when the timer is 0";
			} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[21953]) {
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 21500);
				pullBig(temp2, 24500);
				if (compareBig(temp, temp2)) {
					cmessage = "";
				} else {
					cmessage = "Increase enemy's level";
				}
			} else if ((x > 710) && (x < 732) && (y > 562) && gameState[21953]) {
				var temp = new bigInt();
				pullBig(temp, 21500);
				subSmall(temp, 5 * gameState[21701]);
				if (compareSmall(temp, 21)) {
					cmessage = "Decrease enemy's level";
				} else {
					cmessage = "";
				}
			} else if ((x > 609) && (x < 685) && (y > 525) && gameState[21703]) {
				var a = Math.floor((x - 610) / 25);
				var b = Math.floor((y - 526) / 25);
				var c = a + (3 * b);
				var tempenemies = new bigInt();
				pullBig(tempenemies, 24500);
				if ((gameState[21703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 7)) {
					ehighlight = c;
					cmessage = "Switch enemy to " + getoEnemy(c).name + " (Reward: " + getoResource(getoEnemy(c).resource).name + ")";
				} else {
					cmessage = "";
				}
			} else {
				cmessage = "";
			}
		} else if (currentview == 3) {
			if ((25 < y) && (y < 525)) {
				var a = Math.floor(x / 80);
				var b = Math.floor((y - 25) / 100);
				var c = b + (5 * a);
				a = Math.floor(x / 160);
				var d = b + (5 * a);
				chighlight = c;
				if (c == 0) {
					cmessage = "Build Grove";
				} else if (c == 5) {
					cmessage = "Bloom: Produces seeds";
				} else if ((c == 1) && gameState[31950]) {
					cmessage = "Build Orchard";
				} else if ((c == 6) && gameState[31950]) {
					cmessage = "Produce: Produces fruit";
				} else if ((c == 2) && gameState[31951]) {
					cmessage = "Build Glade";
				} else if ((c == 7) && gameState[31951]) {
					if (gameState[31977] == 0) {
						if (gameState[31901]) {
							cmessage = "Grow: Produces saplings";
						} else {
							cmessage = "Grow: Uses seeds and produces saplings";
						}
					} else if (gameState[31977] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 3) && gameState[31952]) {
					cmessage = "Build Hive";
				} else if ((c == 8) && gameState[31952]) {
					if (gameState[31978] == 1) {
						cmessage = "Swarm: Kills 1 enemy";
					} else if (gameState[31978] == 0) {
						cmessage = "Pollinate: Increases grove and orchard production";
					}
				} else if ((c == 4) && (gameState[31703] > 1)) {
					cmessage = "Build Treehouse";
				} else if ((c == 9) && (gameState[31703] > 1)) {
					if (gameState[31979] == 0) {
						cmessage = "Be fruitful: Uses fruit and produces elves";
					} else if (gameState[31979] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 10) && gameState[31954]) {
					cmessage = "Build Gathering";
				} else if ((c == 15) && gameState[31954]) {
					if (gameState[31980] == 0) {
						cmessage = "Cultivate: Uses fruit and increases orchard and glade production";
					} else if (gameState[31980] == 1) {
						cmessage = "Frolic: Uses fruit and increases treehouse production";
						if (gameState[31902]) {
							cmessage = "Frolic: Uses fruit and increases treehouse and homestead production";
							if (gameState[31908]) {
								cmessage = "Frolic: Uses fruit and elves, increases treehouse and homestead production and produces corpses and ghosts";
							}
						} else if (gameState[31908]) {
							cmessage = "Frolic: Uses fruit and elves, increases treehouse production and produces corpses and ghosts";
						}
					} else if (gameState[31980] == 2) {
						cmessage = "Practice: Increases archery range production";
					}
				} else if ((c == 11) && (gameState[31703] > 2) && gameState[31954]) {
					cmessage = "Build Archery Range";
				} else if ((c == 16) && (gameState[31703] > 2) && gameState[31954]) {
					if (gameState[31981] == 0) {
						cmessage = "Train: Uses elves and bows and produces archers";
					} else if (gameState[31981] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 12) && (gameState[31703] > 3)) {
					cmessage = "Build Chapel";
				} else if ((c == 17) && (gameState[31703] > 3)) {
					if (gameState[31982] == 0) {
						cmessage = "Pray for Rain: Increases grove and glade production";
					} else if (gameState[31982] == 1) {
						cmessage = "Nature's Wrath: Increases effectiveness of hives' swarm";
						if (gameState[31905]) {
							cmessage += " and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						}
					} else if (gameState[31982] == 2) {
						cmessage = "Force of Nature: Increases effectiveness of ents";
					}
					if (gameState[31909]) {
						cmessage2 = "Force of Nature: Increases effectiveness of ents";
					}
				} else if ((c == 13) && (gameState[31703] > 4)) {
					cmessage = "Build Meadow";
				} else if ((c == 18) && (gameState[31703] > 4)) {
					if (gameState[31983] == 0) {
						cmessage = "Breed: Uses fruit and produces unicorns";
					} else if (gameState[31983] == 1) {
						cmessage = "Charge: Uses unicorns and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						if (gameState[31906]) {
							currentview = 1;
							cmessage += " and (human enemies)^(1/2) " + rootEnemies() + " human enemies";
							currentview = 3;
						}
					} else if (gameState[31983] == 2) {
						cmessage = "Idle";
					}
				} else if ((c == 14) && gameState[31960]) {
					cmessage = "Build Atelier";
				} else if ((c == 19) && gameState[31960]) {
					if (gameState[31984] == 0) {
						cmessage = "Craft: Uses saplings and produces bows";
					} else if (gameState[31984] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 20) && (gameState[31703] > 5)) {
					cmessage = "Build Ent";
				} else if ((c == 25) && (gameState[31703] > 5)) {
					if (gameState[31985] == 0) {
						cmessage = "Guard: Kills (enemies^(1/2)) " + rootEnemies() + " enemies in battle";
					} else if (gameState[31985] == 1) {
						cmessage = "Move Mountains: Produces stone";
					}
				} else if ((c == 21) && (gameState[31703] > 6) && gameState[31959]) {
					cmessage = "Build Stonehenge";
				} else if ((c == 26) && (gameState[31703] > 6) && gameState[31959]) {
					if (gameState[31986] == 0) {
						cmessage = "Shape-Shift: Each druid kills 2 enemies in battle";
					} else if (gameState[31986] == 1) {
						cmessage = "Study: Uses elves and books and produces druids";
					}
				} else if ((c == 22) && ((gameState[31703] > 7) || gameState[31962])) {
					cmessage = "Build Nest";
				} else if ((c == 27) && ((gameState[31703] > 7) || gameState[31962])) {
					if (gameState[31987] == 0) {
						cmessage = "Rebirth: Uses eggs and produces phoenixes";
					} else if (gameState[31987] == 1) {
						cmessage = "Idle";
					}
				} else {
					chighlight = -1;
					cmessage = "";
				}
			} else if (x < 600) {
				chighlight = -1;
				var a = Math.floor(x / 121);
				var b = Math.floor((y - 525) / 25);
				var c = b + (3 * a);
				if (c == 0) {
					cmessage = geteResource(c).name;
				} else if ((c == 1) && gameState[31950]) {
					cmessage = geteResource(c).name;
				} else if ((c == 2) && gameState[31951]) {
					cmessage = geteResource(c).name;
				} else if ((c == 3) && (gameState[31703] > 1)) {
					cmessage = geteResource(c).name;
				} else if ((c == 4) && gameState[31954]) {
					cmessage = geteResource(c).name;
				} else if ((c == 5) && (gameState[31703] > 2)) {
					cmessage = geteResource(c).name;
				} else if ((c == 6) && gameState[31956]) {
					cmessage = "Archers: Each archer kills 1 enemy in battle";
				} else if ((c == 7) && (gameState[31703] > 3)) {
					cmessage = geteResource(c).name;
				} else if ((c == 8) && gameState[31960]) {
					cmessage = geteResource(c).name;
				} else if ((c == 9) && gameState[31958]) {
					cmessage = geteResource(c).name;
				} else if ((c == 10) && gameState[31961]) {
					cmessage = "Druids: Each druid kills 1 enemy every second";
					if (gameState[31903]) {
						cmessgae += " and saves 1 human soldier from death in battle";
					}
				} else if ((c == 11) && ((gameState[31703] > 7) || gameState[31962])) {
					cmessage = geteResource(c).name;
				} else if ((c == 12) && gameState[31962]) {
					cmessage = "Phoenixes: Each phoenix kills (enemies ^ (1/2)) " + rootEnemies() + " enemies in battle and becomes an egg";
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y < 551) && gameState[31953]) {
				var temp = new bigInt();
				var temp1 = new bigInt();
				pullBig(temp, 31600);
				pullBig(temp1, 31500);
				temp1 = getPower(10, toSmall(temp1));
				cmessage = displayBig(temp) + " / " + displayBig(temp1) + " Enemies" + eLosses();
			} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[31953]) {
				if (gameState[31700]) {
					cmessage = "Fight: On";
				} else {
					cmessage = "Fight: Off";
				}
			} else if ((x > 689) && (x < 711) && (y > 575) && gameState[31953]) {
				cmessage = "Always fight the largest enemy";
			} else if ((x > 731) && (y > 550) && (y < 576) && gameState[31953]) {
				cmessage = "Reward for defeating the enemy";
			} else if ((x > 731) && (y > 575) && gameState[31953]) {
				cmessage = "You can fight when the timer is 0";
			} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[31953]) {
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 31500);
				pullBig(temp2, 34500);
				if (compareBig(temp, temp2)) {
					cmessage = "";
				} else {
					cmessage = "Increase enemy's level";
				}
			} else if ((x > 710) && (x < 732) && (y > 562) && gameState[31953]) {
				var temp = new bigInt();
				pullBig(temp, 31500);
				subSmall(temp, 5 * gameState[31701]);
				if (compareSmall(temp, 21)) {
					cmessage = "Decrease enemy's level";
				} else {
					cmessage = "";
				}
			} else if ((x > 609) && (x < 685) && (y > 525) && gameState[31703]) {
				var a = Math.floor((x - 610) / 25);
				var b = Math.floor((y - 526) / 25);
				var c = a + (3 * b);
				var tempenemies = new bigInt();
				pullBig(tempenemies, 34500);
				if ((gameState[31703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8)) {
					ehighlight = c;
					cmessage = "Switch enemy to " + geteEnemy(c).name + " (Reward: " + geteResource(geteEnemy(c).resource).name + ")";
				} else {
					cmessage = "";
				}
			} else {
				cmessage = "";
			}
		} else if (currentview == 4) {
			if ((25 < y) && (y < 525)) {
				var a = Math.floor(x / 80);
				var b = Math.floor((y - 25) / 100);
				var c = b + (5 * a);
				a = Math.floor(x / 160);
				var d = b + (5 * a);
				chighlight = c;
				if (c == 0) {
					cmessage = "Build Graveyard";
				} else if (c == 5) {
					cmessage = "Dig: Produces corpses";
				} else if ((c == 1) && gameState[41950]) {
					cmessage = "Build Necropolis";
				} else if ((c == 6) && gameState[41950]) {
					if (!gameState[41976]) {
						cmessage = "Reanimate: Uses corpses and produces skeletons";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 2) && gameState[41703]) {
					cmessage = "Build Barrows";
				} else if ((c == 7) && gameState[41703]) {
					var temp = new bigInt();
					pullBig(temp, 41500);
					temp = getPower(10, toSmall(temp));
					temp = rootBig(temp, 2);
					cmessage = "Unearth: Produces (total enemies)^(1/2) [" + displayBig(temp) + "] corpses after battle";
				} else if ((c == 3) && (gameState[41703] > 1)) {
					cmessage = "Build Tomb";
				} else if ((c == 8) && (gameState[41703] > 1)) {
					cmessage = "Raise Dead: Produces skeletons after battle";
				} else if ((c == 4) && (gameState[41703] > 2) && gameState[41953]) {
					cmessage = "Build Crypt";
				} else if ((c == 9) && (gameState[41703] > 2) && gameState[41953]) {
					cmessage = "Reincarnate: Increases tomb production";
				} else if ((c == 10) && (gameState[41703] > 3)) {
					cmessage = "Build Mire";
				} else if ((c == 15) && (gameState[41703] > 3)) {
					if (!gameState[41980]) {
						cmessage = "Preserve: Increases graveyard production";
					} else {
						cmessage = "Boo!: Increases mansion production";
					}
				} else if ((c == 11) && gameState[41955]) {
					cmessage = "Build Mansion";
				} else if ((c == 16) && gameState[41955]) {
					cmessage = "Haunt: Produces ghosts after battle";
				} else if ((c == 12) && gameState[41956]) {
					cmessage = "Build Shed";
				} else if ((c == 17) && gameState[41956]) {
					if (!gameState[41982]) {
						cmessage = "Construct: Uses wood and produces coffins";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 13) && gameState[41954]) {
					cmessage = "Build Catacombs";
				} else if ((c == 18) && gameState[41954]) {
					cmessage = "Bury: Increases the battle reward by 1%";
					if (gameState[41906]) {
						cmessage += " for the undead and for any race fighting the undead";
					}
				} else if ((c == 14) && (gameState[41703] > 4)) {
					cmessage = "Build Conclave";
				} else if ((c == 19) && (gameState[41703] > 4)) {
					if (gameState[41984] == 0) {
						cmessage = "Pray for Rain: Increases graveyard production";
						if (gameState[41903]) {
							cmessage += " and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						}
					} else if (gameState[41984] == 1) {
						cmessage = "Sacrifice: Uses acolytes and produces corpses and ghosts";
						if (gameState[31904]) {
							cmessage = "Sacrifice: Uses acolytes and produces corpses, ghosts and blood";
						}
					} else if (gameState[41984] == 2) {
						cmessage = "Apocalypse: Uses books and kills (enemies^(1/2)) " + rootEnemies() + " enemies";
						if (gameState[41905]) {
							cmessage = "Apocalypse: Uses acolytes and books and kills (enemies^(1/2)) enemies for each race, based on the current enemies of that race. Undead enemies killed: " + rootEnemies();
						}
					}
				} else if ((c == 20) && (gameState[41703] > 6)) {
					cmessage = "Build Mass Grave";
				} else if ((c == 25) && (gameState[41703] > 6)) {
					var temp = new bigInt();
					pullBig(temp, 41500);
					temp = getPower(10, toSmall(temp));
					temp = rootBig(temp, 2);
					cmessage = "Necromancy: Produces (total enemies)^(1/2) [" + displayBig(temp) + "] skeletons after battle";
				} else if ((c == 21) && (gameState[41703] > 5)) {
					cmessage = "Build Mausoleum";
				} else if ((c == 26) && (gameState[41703] > 5)) {
					if (gameState[41986] == 0) {
						cmessage = "Return: Uses books and produces liches after battle";
					} else if (gameState[41986] == 1) {
						cmessage = "Idle";
					}
				} else if ((c == 22) && gameState[41959]) {
					cmessage = "Build Charnel";
				} else if ((c == 27) && gameState[41959]) {
					cmessage = "Awaken: Increases necropolis production";
				} else if ((c == 23) && gameState[41961] && gameState[41953]) {
					cmessage = "Build Sepulchre";
				} else if ((c == 28) && gameState[41961] && gameState[41953]) {
					cmessage = "Disinter: Increases tomb production";
				} else if ((c == 24) && gameState[41965]) {
					cmessage = "Build Abomination";
				} else if ((c == 29) && gameState[41965]) {
					if (gameState[41989] == 0) {
						cmessage = "Attach: Uses corpses and produces limbs";
					} else if (gameState[41989] == 1) {
						cmessage = "Consume: In battle, produces limbs and each limb kills 1 enemy";
					}
				} else if ((c == 30) && gameState[41960]) {
					cmessage = "Build Obelisk";
				} else if ((c == 35) && gameState[41960]) {
					if (gameState[41990] == 0) {
						cmessage = "Black Magic: Each skeleton kills 1 more enemy in battle";
					} else if (gameState[41990] == 1) {
						cmessage = "Study: Uses acolytes and books and produces necromancers";
					}
				} else if ((c == 31) && (gameState[41703] > 7)) {
					cmessage = "Build Pyramid";
				} else if ((c == 36) && (gameState[41703] > 7)) {
					if (gameState[41991] == 0) {
						cmessage = "Mummify: Uses books and gold and produces mummies after battle";
					} else if (gameState[41991] == 1) {
						cmessage = "Curse: Uses books and kills 1 enemy per mummy";
					} else if (gameState[41991] == 2) {
						cmessage = "Grave Goods: Increases effectiveness of catacombs";
					}
				} else {
					chighlight = -1;
					cmessage = "";
				}
			} else if (x < 600) {
				chighlight = -1;
				var a = Math.floor(x / 121);
				var b = Math.floor((y - 525) / 25);
				var c = b + (3 * a);
				if (c == 0) {
					cmessage = getuResource(c).name;
				} else if ((c == 1) && (gameState[41703] > 1)) {
					cmessage = getuResource(c).name;
				} else if ((c == 2) && (gameState[41703] > 3)) {
					cmessage = getuResource(c).name;
				} else if ((c == 3) && gameState[41951]) {
					var temp = new bigInt();
					addSmall(temp, 1);
					if (!gameState[41990]) {
						var temp1 = new bigInt();
						pullBig(temp1, 43500);
						addSmall(temp1, 1);
						mulBig(temp, temp1);
					}
					cmessage = "Skeletons: You lose one skeleton per " + displayBig(temp) + " enemies in battle";
				} else if ((c == 4) && gameState[41956]) {
					cmessage = "Ghosts: Each ghost kills 1 enemy in battle";
				} else if ((c == 5) && (gameState[41957] || (gameState[41703] > 6))) {
					cmessage = "Coffins: Each coffin produces 1 corpse after battle";
				} else if ((c == 6) && (gameState[41703] > 4)) {
					cmessage = getuResource(c).name;
				} else if ((c == 7) && ((gameState[41703] > 5) || (gameState[31907] && (gameState[31703] > 3)))) {
					cmessage = getuResource(c).name;
				} else if ((c == 8) && gameState[41961]) {
					cmessage = "Liches: Each lich kills 1 enemy every second";
				} else if ((c == 9) && (gameState[41703] > 7)) {
					cmessage = getuResource(c).name;
				} else if ((c == 10) && gameState[41964]) {
					cmessage = getuResource(c).name;
				} else if ((c == 11) && gameState[41965]) {
					cmessage = "Necromancers: Each necromancer produces 1 skeleton after battle";
				} else if ((c == 12) && gameState[41966]) {
					cmessage = getuResource(c).name + ": Each mummy increases the battle reward by 1 millionth";
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y < 551) && gameState[41951]) {
				var temp = new bigInt();
				var temp1 = new bigInt();
				pullBig(temp, 41600);
				pullBig(temp1, 41500);
				temp1 = getPower(10, toSmall(temp1));
				cmessage = displayBig(temp) + " / " + displayBig(temp1) + " Enemies, Expected Losses: " + displayBig(uLosses());
			} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[41951]) {
				if (gameState[41700]) {
					cmessage = "Fight: On";
				} else {
					cmessage = "Fight: Off";
				}
			} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[41951]) {
				if (!gameState[41704]) {
					cmessage = "Safe Off: Ignore losses";
				} else if (gameState[41704] == 1) {
					cmessage = "Safe On: Only fight when expected losses = 0";
				}
			} else if ((x > 689) && (x < 711) && (y > 575) && gameState[41951]) {
				cmessage = "Always fight the largest enemy";
			} else if ((x > 731) && (y > 550) && (y < 576) && gameState[41951]) {
				cmessage = "Reward for defeating the enemy";
			} else if ((x > 731) && (y > 575) && gameState[41951]) {
				cmessage = "You can fight when the timer is 0";
			} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[41951]) {
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 41500);
				pullBig(temp2, 44500);
				if (compareBig(temp, temp2)) {
					cmessage = "";
				} else {
					cmessage = "Increase enemy's level";
				}
			} else if ((x > 710) && (x < 732) && (y > 562) && gameState[41951]) {
				var temp = new bigInt();
				pullBig(temp, 41500);
				subSmall(temp, 5 * gameState[41701]);
				if (compareSmall(temp, 21)) {
					cmessage = "Decrease enemy's level";
				} else {
					cmessage = "";
				}
			} else if ((x > 609) && (x < 685) && (y > 525) && gameState[41703]) {
				var a = Math.floor((x - 610) / 25);
				var b = Math.floor((y - 526) / 25);
				var c = a + (3 * b);
				var tempenemies = new bigInt();
				pullBig(tempenemies, 44500);
				if ((gameState[41703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8)) {
					ehighlight = c;
					cmessage = "Switch enemy to " + getuEnemy(c).name + " (Reward: " + getuResource(getuEnemy(c).resource).name + ")";
				} else {
					cmessage = "";
				}
			} else {
				cmessage = "";
			}
		} else if (currentview == 5) {
			if ((25 < y) && (y < 525)) {
				var a = Math.floor(x / 80);
				var b = Math.floor((y - 25) / 100);
				var c = b + (5 * a);
				a = Math.floor(x / 160);
				var d = b + (5 * a);
				chighlight = c;
				if (c == 0) {
					cmessage = "Build Well";
				} else if (c == 5) {
					cmessage = "Draw: Produces water";
				} else if ((c == 1) && gameState[51950]) {
					cmessage = "Build Field";
				} else if ((c == 6) && gameState[51950]) {
					if (!gameState[51976]) {
						cmessage = "Produce: Uses water and produces feed";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 2) && gameState[51951]) {
					cmessage = "Build Garden";
				} else if ((c == 7) && gameState[51951]) {
					cmessage = "Shade: Increases morale";
				} else if ((c == 3) && gameState[51952]) {
					cmessage = "Build Hut";
				} else if ((c == 8) && gameState[51952]) {
					if (!gameState[51978]) {
						cmessage = "Breed: Uses feed and produces (morale) [" + displayBig(getsMorale()) + "] slaves";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 4) && gameState[51953]) {
					cmessage = "Build Plantation";
				} else if ((c == 9) && gameState[51953]) {
					if (!gameState[51979]) {
						cmessage = "Work: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] water and produces (morale) [" + displayBig(getsMorale()) + "] feed";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 10) && gameState[51954]) {
					cmessage = "Build Canal";
				} else if ((c == 15) && gameState[51954]) {
					if (!gameState[51980]) {
						cmessage = "Replenish: Increases well production";
					} else {
						cmessage = "Irrigate: Uses water and increases field and plantation production";
					}
				} else if ((c == 11) && gameState[51955]) {
					cmessage = "Build Excavation";
				} else if ((c == 16) && gameState[51955]) {
					if (!gameState[51981]) {
						cmessage = "Quarry: Uses slaves and produces (morale) [" + displayBig(getsMorale()) + "] stone";
						if (gameState[51901]) {
							cmessage += " and (morale) [" + displayBig(getsMorale()) +"] coins";
							if (gameState[51901] > 1) {
								cmessage += " and has a (morale) [" + displayBig(getsMorale()) + "] % chance to produce 3 gems";
							}
						}
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 12) && (gameState[51703] > 1)) {
					cmessage = "Build Coliseum";
				} else if ((c == 17) && (gameState[51703] > 1)) {
					if (!gameState[51982]) {
						cmessage = "Spectate: Uses slaves, produces coins and increases morale";
					} else if (gameState[51982] == 1) {
						cmessage = "Train: Uses (morale) [" + displayBig(getsMorale()) + "] camels and (morale) [" + displayBig(getsMorale()) + "] mercenaries and produces (morale) [" + displayBig(getsMorale()) + "] cavalry";
					}
				} else if ((c == 13) && (gameState[51703] > 0)) {
					cmessage = "Build Prison";
				} else if ((c == 18) && (gameState[51703] > 0)) {
					if (!gameState[51983]) {
						var temp = new bigInt();
						pullBig(temp, 51500);
						temp = getPower(10, toSmall(temp));
						temp = rootBig(temp, 2);
						cmessage = "Enslave: Produces (enemies^(1/2)) [" + displayBig(temp) + "] slaves after battle";
					} else if (gameState[51983] == 1) {
						cmessage = "Free: Uses slaves and increases morale";
					}
				} else if ((c == 14) && gameState[51956]) {
					cmessage = "Build Market";
				} else if ((c == 19) && gameState[51956]) {
					if (!gameState[51984]) {
						cmessage = "Idle";
					} else if (gameState[51984] == 1) {
						cmessage = "Sell Feed: Uses feed and produces coins";
					} else if (gameState[51984] == 2) {
						cmessage = "Buy Feed: Uses coins and produces feed";
					} else if (gameState[51984] == 3) {
						cmessage = "Sell Slaves: Uses slaves and produces coins";
					} else if (gameState[51984] == 4) {
						cmessage = "Buy Slaves: Uses coins and produces slaves";
					} else if (gameState[51984] == 5) {
						cmessage = "Sell Camels: Uses camels and produces coins";
					} else if (gameState[51984] == 6) {
						cmessage = "Buy Camels: Uses coins and produces camels";
					} else if (gameState[51984] == 7) {
						cmessage = "Hire Mercenaries: Uses coins and produces mercenaries";
					} else if (gameState[51984] == 8) {
						cmessage = "Sell Gems: Uses gems and produces coins";
					} else if (gameState[51984] == 9) {
						cmessage = "Buy Gems: Uses coins and produces gems";
					}
				} else if ((c == 20) && (gameState[51703] > 2)) {
					cmessage = "Build Water Wheel";
				} else if ((c == 25) && (gameState[51703] > 2)) {
					if (!gameState[51985]) {
						cmessage = "Mill: Uses water and increases field production";
					} else {
						cmessage = "Idle";
					}
				} else if ((c == 21) && gameState[51960]) {
					cmessage = "Build Ship";
				} else if ((c == 26) && gameState[51960]) {
					if (!gameState[51986]) {
						cmessage = "Idle";
					} else if (gameState[51986] == 1) {
						cmessage = "Export Feed: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] feed and produces (morale) [" + displayBig(getsMorale()) + "] coins";
					} else if (gameState[51986] == 2) {
						cmessage = "Import Feed: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] coins and produces (morale) [" + displayBig(getsMorale()) + "] feed";
					} else if (gameState[51986] == 3) {
						var temp = new bigInt();
						temp = getsMorale();
						mulSmall(temp, 2);
						cmessage = "Export Stone: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] stone and produces (2*morale) [" + displayBig(temp) + "] coins";
					} else if (gameState[51986] == 4) {
						var temp = new bigInt();
						temp = getsMorale();
						mulSmall(temp, 2);
						cmessage = "Import Stone: Uses slaves and (2*morale) [" + displayBig(temp) + "] coins and produces (morale) [" + displayBig(getsMorale()) + "] stone";
					} else if (gameState[51986] == 5) {
						var temp = new bigInt();
						temp = getsMorale();
						mulSmall(temp, 3);
						cmessage = "Export Camels: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] camels and produces (3*morale) [" + displayBig(temp) + "] coins";
					} else if (gameState[51986] == 6) {
						var temp = new bigInt();
						temp = getsMorale();
						mulSmall(temp, 5);
						cmessage = "Import Mercenaries: Uses slaves and (5*morale) [" + displayBig(temp) + "] coins and produces (morale) [" + displayBig(getsMorale()) + "] mercenaries";
					} else if (gameState[51986] == 7) {
						var temp = new bigInt();
						temp = getsMorale();
						mulBig(temp, getsMorale());
						mulBig(temp, getsMorale());
						cmessage = "Attack: Uses slaves and (morale) [" + displayBig(getsMorale()) + "] mercenaries and kills (morale^3) [" + displayBig(temp) + "] enemies";
					} else if (gameState[51986] == 8) {
						cmessage = "Transport Stone: Uses slaves and sends (morale) [" + displayBig(getsMorale()) + "] stone to the humans";
					} else if (gameState[51986] == 9) {
						cmessage = "Transport Stone: Uses slaves and sends stone to the orcs";
					} else if (gameState[51986] == 10) {
						cmessage = "Transport Stone: Uses slaves and sends stone to the undead";
					} else if (gameState[51986] == 11) {
						cmessage = "Reinforce: Uses slaves and sends (morale) [" + displayBig(getsMorale()) + "] mercenaries to the humans as soldiers";
					}
				} else if ((c == 22) && gameState[51964]) {
					cmessage = "Build fountain";
				} else if ((c == 27) && gameState[51964]) {
					if (!gameState[51987]) {
						cmessage = "Wish: Uses coins and increases morale";
					} else if (gameState[51987] == 1) {
						cmessage = "Collect: Produces (morale) [" + displayBig(getsMorale()) + "] coins";
					}
				} else if ((c == 23) && gameState[51965]) {
					cmessage = "Build Factory";
				} else if ((c == 28) && gameState[51965]) {
					if (!gameState[51988]) {
						cmessage = "Construct: Uses slaves and wood and produces ballistas";
					} else if (gameState[51988] == 1) {
						cmessage = "Holiday: Increases morale";
					}
				} else if ((c == 24) && (gameState[51703] > 3)) {
					cmessage = "Build Bank";
				} else if ((c == 29) && (gameState[51703] > 3)) {
					if (!gameState[51989]) {
						cmessage = "Lend: Produces coins";
					} else if (gameState[51989] == 1) {
						cmessage = "Manipulate: Markets produce 1 more coin when selling";
					}
				} else if ((c == 30) && (gameState[51703] > 4)) {
					cmessage = "Build Aquaduct";
				} else if ((c == 35) && (gameState[51703] > 4)) {
					if (!gameState[51990]) {
						cmessage = "Refill: Increases well production";
					} else if (gameState[51990] == 1) {
						cmessage = "Drink: Uses water and increases hut production";
					}
				} else if ((c == 31) && gameState[51961] && gameState[51967]) {
					cmessage = "Build Port";
				} else if ((c == 36) && gameState[51961] && gameState[51967]) {
					if (gameState[51991] == 0) {
						cmessage = "Harbor: Increases ship production";
					} else if (gameState[51991] == 1) {
						cmessage = "Tariff: Produces 1 coin per ship";
					}
				} else if ((c == 32) && (gameState[51703] > 5)) {
					cmessage = "Build Palisade";
				} else if ((c == 37) && (gameState[51703] > 5)) {
					var temp = new bigInt();
					temp = getsMorale();
					mulBig(temp, getsMorale());
					mulBig(temp, getsMorale());
					cmessage = "Defend: Saves (morale^3) [" + displayBig(temp) + "] mercenaries in battle";
				} else if ((c == 33) && (gameState[51703] > 6)) {
					cmessage = "Build Barn";
				} else if ((c == 38) && (gameState[51703] > 6)) {
					cmessage = "Domesticate: Uses feed and produces elephants after fighting elephants";
				} else if ((c == 34) && gameState[51968]) {
					cmessage = "Build Treasury";
				} else if ((c == 39) && gameState[51968]) {
					if (!gameState[51994]) {
						var bigmess = new bigInt();
						bigmess = getsMorale();
						mulBig(bigmess, bigmess);
						cmessage = "Pillage: Produces (morale^2) [" + displayBig(bigmess) + "] coins after battle";
					} else if (gameState[51994] == 1) {
						cmessage = "Welfare: Uses coins and increases morale";
					} else if (gameState[51994] == 2) {
						cmessage = "Bribe: Uses coins and converts (morale) [" + displayBig(getsMorale()) + "] enemies";
					}
				} else if ((c == 40) && (gameState[51703] > 7)) {
					cmessage = "Build Palace";
				} else if ((c == 45) && (gameState[51703] > 7)) {
					if (!gameState[51995]) {
						cmessage = "Pray for Rain: Increases well production";
					} else if (gameState[51995] == 1) {
						cmessage = "Eat Cake: Uses feed and increases morale";
					}
				} else if ((c == 41) && gameState[51970]) {
					cmessage = "Build Mirror";
				} else if ((c == 46) && gameState[51970]) {
					cmessage = "Focus: Kills (enemies^(1/2)) " + rootEnemies() + " enemies";
				} else {
					chighlight = -1;
					cmessage = "";
				}
			} else if (x < 600) {
				chighlight = -1;
				var a = Math.floor(x / 121);
				var b = Math.floor((y - 525) / 25);
				var c = b + (3 * a);
				if (c == 0) {
					cmessage = getsResource(c).name;
				} else if ((c == 1) && gameState[51951]) {
					cmessage = getsResource(c).name;
				} else if ((c == 2) && gameState[51953]) {
					cmessage = getsResource(c).name;
				} else if ((c == 3) && gameState[51956]) {
					cmessage = getsResource(c).name;
				} else if ((c == 4) && (gameState[51703] > 1)) {
					cmessage = getsResource(c).name;
				} else if ((c == 5) && ((gameState[51959]) || (gameState[51956] && gameState[51901]))) {
					cmessage = getsResource(c).name;
				} else if ((c == 6) && gameState[51959]) {
					cmessage = getsResource(c).name + ": You lose (enemies/morale) mercenaries in battle";
				} else if ((c == 7) && gameState[51957]) {
					cmessage = getsResource(c).name + ": Each cavalry kills 1 enemy in battle";
				} else if ((c == 8) && (gameState[51703] > 2)) {
					cmessage = getsResource(c).name;
				} else if ((c == 9) && gameState[51963]) {
					cmessage = getsResource(c).name + ": Each ballista kills 1 enemy every second";
				} else if ((c == 10) && gameState[51968]) {
					cmessage = getsResource(c).name + ": Each elephant kills (morale) [" + displayBig(getsMorale()) + "] enemies in battle";
					if (gameState[51904]) {
						var temp = new bigInt();
						pullBig(temp, 51000);
						temp = rootBig(temp, 7);
						cmessage2 = "Inspiration: +" + displayBig(temp) + " morale ";
						if (gameState[51909]) {
							var temp = new bigInt();
							var temp1 = new bigInt();
							pullBig(temp, 51000);
							pullBig(temp1, 30600);
							mulBig(temp, temp1);
							cmessage3 = "Howdahs: Kills " + displayBig(rootBig(temp, 2)) + " enemies per second";
						}
					} else if (gameState[51909]) {
						var temp = new bigInt();
						var temp1 = new bigInt();
						pullBig(temp, 51000);
						pullBig(temp1, 30600);
						mulBig(temp, temp1);
						cmessage2 = "Howdahs: Kills " + displayBig(rootBig(temp, 2)) + " enemies per second";
					}
				} else if ((c == 11) && ((gameState[51703] > 7) || (gameState[51956] && gameState[51901]))) {
					cmessage = getsResource(c).name;
				} else if ((c == 12) && gameState[51952]) {
					cmessage = getsResource(c).name;
					if (gameState[51903]) {
						var losses = new bigInt();
						pullBig(losses, 54800);
						cmessage2 = "Memorial: +" + getpowerBig(losses).toString() + " (Total losses: " + displayBig(losses) + ")";
					}
				} else {
					cmessage = "";
				}
			} else if ((x > 731) && (y < 551) && gameState[51959]) {
				var temp = new bigInt();
				var temp1 = new bigInt();
				pullBig(temp, 51600);
				pullBig(temp1, 51500);
				temp1 = getPower(10, toSmall(temp1));
				cmessage = displayBig(temp) + " / " + displayBig(temp1) + " Enemies, Expected Losses: " + displayBig(sLosses());
			} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[51959]) {
				if (gameState[51700]) {
					cmessage = "Fight: On";
				} else {
					cmessage = "Fight: Off";
				}
			} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[51959]) {
				if (!gameState[51704]) {
					cmessage = "Safe Off: Ignore losses";
				} else if (gameState[51704] == 1) {
					cmessage = "Safe On: Only fight when expected losses = 0";
				}
			} else if ((x > 689) && (x < 711) && (y > 575) && gameState[51959]) {
				cmessage = "Always fight the largest enemy";
			} else if ((x > 731) && (y > 550) && (y < 576) && gameState[51959]) {
				cmessage = "Reward for defeating the enemy";
			} else if ((x > 731) && (y > 575) && gameState[51959]) {
				cmessage = "You can fight when the timer is 0";
			} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[51959]) {
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 51500);
				pullBig(temp2, 54500);
				if (compareBig(temp, temp2)) {
					cmessage = "";
				} else {
					cmessage = "Increase enemy's level";
				}
			} else if ((x > 710) && (x < 732) && (y > 562) && gameState[51959]) {
				var temp = new bigInt();
				pullBig(temp, 51500);
				subSmall(temp, 5 * gameState[51701]);
				if (compareSmall(temp, 21)) {
					cmessage = "Decrease enemy's level";
				} else {
					cmessage = "";
				}
			} else if ((x > 609) && (x < 685) && (y > 525) && gameState[51703]) {
				var a = Math.floor((x - 610) / 25);
				var b = Math.floor((y - 526) / 25);
				var c = a + (3 * b);
				var tempenemies = new bigInt();
				pullBig(tempenemies, 54500);
				if ((gameState[51703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8)) {
					ehighlight = c;
					cmessage = "Switch enemy to " + getsEnemy(c).name + " (Reward: " + getsResource(getsEnemy(c).resource).name + ")";
				} else {
					cmessage = "";
				}
			} else {
				cmessage = "";
			}
		} else if (currentview == 99) {
			var temp = new bigInt();
			pullBig(temp, 11800);
			if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (compareSmall(temp, 1)) && (gameState[11900] < 59)) {
				cmessage = "Reduce fight timer";
			} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[11900] > 0)) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 140) && (140 < y) && (y < 173)) {
				if (gameState[11901] == 0) {
					cmessage = "Quarries, lumber mills, iron mines and gold mines are cheaper, require food instead of peasants, and consume food instead of peasants";
				} else {
					cmessage = "Return achievement point";
				}
			} else if ((57 < x) && (x < 260) && (180 < y) && (y < 213)) {
				if (gameState[11902]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Reduces the cost and consumption of stables";
				}
			} else if ((32 < x) && (x < 53) && (225 < y) && (y < 243) && (compareSmall(temp, 1)) && gameState[1000]) {
				if (gameState[11903] == 0) {
					cmessage = "Allows the construction of caravans";
				} else if (gameState[11903] == 1) {
					cmessage = "Allows transportation of stone";
				} else if ((gameState[11903] == 2) && (gameState[1000] > 1)) {
					cmessage = "Allows transportation of wood";
				} else if ((gameState[11903] == 3) && (gameState[1000] > 1)) {
					cmessage = "Allows transportation of weapons";
				} else if ((gameState[11903] == 4) && (gameState[1000] > 1)) {
					cmessage = "Allows transportation of books";
				} else {
					cmessage = "";
				}
			} else if ((32 < x) && (x < 53) && (242 < y) && (y < 260) && (gameState[11903] > 0) && gameState[1000]) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 225) && (260 < y) && (y < 293)) {
				if (gameState[11904]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Allows the construction of thieves guilds";
				}
			} else if ((57 < x) && (x < 140) && (300 < y) && (y < 333)) {
				if (gameState[11905]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Lose peasants and weapons in battle before soldiers";
				}
			} else if ((57 < x) && (x < 155) && (340 < y) && (y < 373)) {
				if (gameState[11906]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each loss in battle grants 1 weapon";
				}
			} else if ((57 < x) && (x < 250) && (380 < y) && (y < 413) && (gameState[1000] > 2)) {
				if (gameState[11907]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each loss in battle grants 1 skeleton to the undead";
				}
			} else if ((57 < x) && (x < 199) && (420 < y) && (y < 453)) {
				if (gameState[11908]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each paladin saves 1 soldier from death in battle";
				}
			} else if ((57 < x) && (x < 245) && (460 < y) && (y < 493)) {
				if (gameState[11909]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each paladin grants 1 might per monastery";
				}
			} else if ((457 < x) && (x < 585) && (100 < y) && (y < 133)) {
				if (gameState[11910]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Horse mills are cheaper and don't consume horses";
				}
			} else if ((432 < x) && (x < 453) && (145 < y) && (y < 163) && compareSmall(temp, 1) && (gameState[11911] < 3)) {
				if (gameState[11911] == 0) {
					cmessage = "Castles count as keeps";
				} else if (gameState[11911] == 1) {
					cmessage = "Castles count as walls";
				} else if ((gameState[11911] == 2) && (gameState[1000] > 1)) {
					cmessage = "Every 3 castles count as 1 armory";
				} else {
					cmessage = "";
				}
			} else if ((432 < x) && (x < 453) && (162 < y) && (y < 180) && (gameState[11911] > 0)) {
				cmessage = "Return achievement point";
			} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570) && gameState[1000]) {
				cmessage = "View Orc Achievement Bonuses";
			} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
				cmessage = "Continue";
			} else {
				cmessage = "";
			}
		} else if (currentview == 98) {
			var temp = new bigInt();
			pullBig(temp, 21800);
			if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[21900] < 59)) {
				if (compareSmall(temp, 1)) {
					cmessage = "Reduce fight timer";
				}
			} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[21900] > 0)) {
				cmessage = "Increase fight timer";
			} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[21901] < 2)) {
				if (compareSmall(temp, 1)) {
					if (gameState[21901] == 0) {
						cmessage = "Each orc lost in battle grants 1 meat";
					} else if (gameState[21901] == 1) {
						cmessage = "Building that use orcs also produce meat";
					}
				}
			} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[21901] > 0)) {
				cmessage = "Return achievement point";
			} else if ((32 < x) && (x < 53) && (185 < y) && (y < 203) && (gameState[21902] < 5)) {
				if (compareSmall(temp, 1)) {
					if (gameState[21902] == 0) {
						cmessage = "Each champion grants 1 might";
					} else if (gameState[21902] == 1) {
						cmessage = "Towers count as Human Keeps";
					} else if (gameState[21902] == 2) {
						cmessage = "Each ogre grants 1 might + 1 per fort";
					} else if (gameState[21902] == 3) {
						cmessage = "Each catapult kills 1 Human enemy before battle";
					} else if (gameState[21902] == 4) {
						cmessage = "Each banner increases Southerner morale by 1";
					}
				}
			} else if ((32 < x) && (x < 53) && (202 < y) && (y < 220) && (gameState[21902] > 0)) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 145) && (220 < y) && (y < 253)) {
				if (gameState[21903]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each hydra head kills 1 enemy every second";
				}
			} else if ((57 < x) && (x < 207) && (260 < y) && (y < 293)) {
				if (gameState[21904]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Grapeshot and Throw use mud instead of stone";
				}
			} else if ((57 < x) && (x < 265) && (300 < y) && (y < 333)) {
				if (gameState[21905]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Dragons' Guard is always active";
				}
			} else if ((57 < x) && (x < 215) && (340 < y) && (y < 373) && (gameState[1000] > 1)) {
				if (gameState[21906]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Breathe Fire increases nest production";
				}
			} else if ((57 < x) && (x < 200) && (380 < y) && (y < 413) && (gameState[1000] > 2)) {
				if (gameState[21907]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Sacrifice produces ghosts for the undead";
				}
			} else if ((57 < x) && (x < 240) && (420 < y) && (y < 453)) {
				if (gameState[21908]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Strongholds' Defend is always active";
				}
			} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
				if (gameState[1000] == 1) {
					cmessage = "View Human Achievement Bonuses";
				} else {
					cmessage = "View Elf Achievement Bonuses";
				}
			} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
				cmessage = "Continue";
			} else {
				cmessage = "";
			}
		} else if (currentview == 97) {
			var temp = new bigInt();
			pullBig(temp, 31800);
			if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[31900] < 59)) {
				if (compareSmall(temp, 1)) {
					cmessage = "Reduce fight timer";
				}
			} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[31900] > 0)) {
				cmessage = "Increase fight timer";
			} else if ((57 < x) && (x < 340) && (140 < y) && (y < 173)) {
				if (gameState[31901]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Glades don't consume seeds";
				}
			} else if ((57 < x) && (x < 290) && (180 < y) && (y < 213)) {
				if (gameState[31902]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "'Frolic' increases homestead production";
				}
			} else if ((57 < x) && (x < 303) && (220 < y) && (y < 253)) {
				if (gameState[31903]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each druid saves one human soldier from death in battle";
				}
			} else if ((57 < x) && (x < 185) && (260 < y) && (y < 293)) {
				if (gameState[31904]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Defeating boars grants 5% of the reward to orcs as pigs";
				}
			} else if ((57 < x) && (x < 260) && (300 < y) && (y < 333)) {
				if (gameState[31905]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Nature's Wrath also kills (enemies^(1/2)) enemies";
				}
			} else if ((57 < x) && (x < 275) && (340 < y) && (y < 373)) {
				if (gameState[31906]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Charge also kill (human enemies)^(1/2) human enemies";
				}
			} else if ((57 < x) && (x < 280) && (380 < y) && (y < 413)) {
				if (gameState[31907]) {
					cmessage = "Return achievement point";
				} else {
					if (gameState[1000] > 2) {
						cmessage = "Defeating missionaries also grants the reward to humans and undead";
					} else {
						cmessage = "Defeating missionaries also grants the reward to the humans";
					}
				}
			} else if ((57 < x) && (x < 295) && (420 < y) && (y < 453) && (gameState[1000] > 2)) {
				if (gameState[31908]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Frolic uses elves and produces corpses and ghosts";
				}
			} else if ((57 < x) && (x < 270) && (460 < y) && (y < 493)) {
				if (gameState[31909]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Force of Nature is always active";
				}
			} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
				if (gameState[1000] == 2) {
					cmessage = "View Human Achievement Bonuses";
				} else {
					cmessage = "View Undead Achievement Bonuses";
				}
			} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
				cmessage = "Continue";
			} else {
				cmessage = "";
			}
		} else if (currentview == 96) {
			var temp = new bigInt();
			pullBig(temp, 41800);
			if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[41900] < 59)) {
				if (compareSmall(temp, 1)) {
					cmessage = "Reduce fight timer";
				}
			} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[41900] > 0)) {
				cmessage = "Increase fight timer";
			} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[41901] < 8)) {
				if (compareSmall(temp, 1)) {
					if (gameState[41901] == 0) {
						cmessage = "Barrows produce when other races fight";
					} else if (gameState[41901] == 1) {
						cmessage = "Tombs produce when other races fight";
					} else if (gameState[41901] == 2) {
						cmessage = "Mansions produce when other races fight";
					} else if (gameState[41901] == 3) {
						cmessage = "Coffins produce when other races fight";
					} else if (gameState[41901] == 4) {
						cmessage = "Mass Graves produce when other races fight";
					} else if (gameState[41901] == 5) {
						cmessage = "Mausoleums produce when other races fight";
					} else if (gameState[41901] == 6) {
						cmessage = "Necromancers produce when other races fight";
					} else if (gameState[41901] == 7) {
						cmessage = "Mummify produces when other races fight";
					}
				}
			} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[41901] > 0)) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 180) && (180 < y) && (y < 213)) {
				if (gameState[41902]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each skeleton lost in battle grants 1 corpse";
				}
			} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
				if (gameState[41903]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Pray for Rain kills (enemies^(1/2)) enemies";
				}
			} else if ((57 < x) && (x < 220) && (260 < y) && (y < 293)) {
				if (gameState[41904]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Sacrifice produces blood for the Orcs";
				}
			} else if ((57 < x) && (x < 215) && (300 < y) && (y < 333)) {
				if (gameState[41905]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Apocalypse uses acolytes and affects all races";
				}
			} else if ((32 < x) && (x < 53) && (345 < y) && (y < 363) && (gameState[41906] < 2)) {
				if (compareSmall(temp, 1)) {
					if (gameState[41906] == 0) {
						cmessage = "Catacombs affect other races when fighting undead";
					} else if (gameState[41906] == 1) {
						cmessage = "Mummies affect other races when fighting undead";
					}
				}
			} else if ((32 < x) && (x < 53) && (362 < y) && (y < 380) && (gameState[41906] > 0)) {
				cmessage = "Return achievement point";
			} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
				if (gameState[1000] == 3) {
					cmessage = "View Human Achievement Bonuses";
				} else {
					cmessage = "View Southerner Achievement Bonuses";
				}
			} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
				cmessage = "Continue";
			} else {
				cmessage = "";
			}
		} else if (currentview == 95) {
			var temp = new bigInt();
			pullBig(temp, 51800);
			if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[51900] < 59)) {
				if (compareSmall(temp, 1)) {
					cmessage = "Reduce fight timer";
				}
			} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[51900] > 0)) {
				cmessage = "Increase fight timer";
			} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[51901] < 2)) {
				if (compareSmall(temp, 1)) {
					if (gameState[51901] == 0) {
						cmessage = "Excavations produce (morale) coins";
					} else if (gameState[51901] == 1) {
						cmessage = "Excavations have a (morale) % chance to produce 3 gems";
					}
				}
			} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[51901] > 0)) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 230) && (180 < y) && (y < 213)) {
				if (gameState[51902]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Each mercenary lost in battle or used by ships' Attack ability grants 4 coins";
				}
			} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
				if (gameState[51903]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Increases morale by log(total losses)";
					cmessage2 = "Note: Total losses are the number of mercenaries lost in battle or used by ships' Attack ability in one playthrough, they are reset when you reset the game";
				}
			} else if ((57 < x) && (x < 190) && (260 < y) && (y < 293)) {
				if (gameState[51904]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Increases morale by (elephants)^(1/7)";
				}
			} else if ((57 < x) && (x < 210) && (300 < y) && (y < 333)) {
				if (gameState[51905]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Ships' Attack ability also kills (morale)*(elephants^(1/2)) enemies";
				}
			} else if ((57 < x) && (x < 190) && (340 < y) && (y < 373)) {
				if (gameState[51906]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Palisades count as walls for the Humans";
				}
			} else if ((32 < x) && (x < 53) && (385 < y) && (y < 403) && (gameState[51907] < 2)) {
				if (compareSmall(temp, 1)) {
					if (gameState[51907] == 0) {
						cmessage = "Banks' Manipulate ability produces 1 coin for each trade post and caravan";
					} else if (gameState[51907] == 1) {
						cmessage = "Banks' Manipulate ability produces 1 gold per ship for the Humans";
					}
				}
			} else if ((32 < x) && (x < 53) && (402 < y) && (y < 420) && (gameState[51907] > 0)) {
				cmessage = "Return achievement point";
			} else if ((32 < x) && (x < 53) && (425 < y) && (y < 443) && (gameState[51908] < 2)) {
				if (compareSmall(temp, 1)) {
					if (gameState[51908] == 0) {
						cmessage = "Ships can transport stone";
					} else if (gameState[51908] == 1) {
						cmessage = "Ships can transport mercenaries";
					}
				}
			} else if ((32 < x) && (x < 53) && (442 < y) && (y < 460) && (gameState[51908] > 0)) {
				cmessage = "Return achievement point";
			} else if ((57 < x) && (x < 170) && (460 < y) && (y < 493)) {
				if (gameState[51909]) {
					cmessage = "Return achievement point";
				} else {
					cmessage = "Kills (elephants*archers)^(1/2) enemies every second";
				}
			} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
				if (gameState[1000] == 4) {
					cmessage = "View Human Achievement Bonuses";
				} else {

				}
			} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
				cmessage = "Continue";
			} else {
				cmessage = "";
			}
		} else if (currentview == 101) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550) && gameState[1000]) {
				cmessage = "View Orc Achievements";
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievement Rewards";
			} else {
				cmessage = "";
			}
		} else if (currentview == 102) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 1) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Elf Achievments";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievement Rewards";
			} else {
				cmessage = "";
			}
		} else if (currentview == 103) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 2) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Undead Achievements";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievement Rewards";
			} else {
				cmessage = "";
			}
		} else if (currentview == 104) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 3) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Southerner Achievements";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievement Rewards";
			} else {
				cmessage = "";
			}
		} else if (currentview == 105) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 4) {
					cmessage = "View Human Achievements";
				} else {

				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievement Rewards";
			} else {
				cmessage = "";
			}
		} else if (currentview == 201) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550) && gameState[1000]) {
				cmessage = "View Orc Rewards";
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievements";
			} else if ((57 < x) && (x < 140) && (140 < y) && (y < 173)) {
				cmessage = "Quarries, lumber mills, iron mines and gold mines are cheaper, require food instead of peasants, and consume food instead of peasants";
			} else if ((57 < x) && (x < 260) && (180 < y) && (y < 213)) {
				cmessage = "Reduces the cost and consumption of stables";
			} else if ((220 < x) && (x < 241) && (220 < y) && (y < 253) && gameState[1000]) {
				cmessage = "Allows the construction of caravans";
			} else if ((240 < x) && (x < 261) && (220 < y) && (y < 253) && gameState[1000]) {
				cmessage = "Allows transportation of stone";
			} else if ((260 < x) && (x < 281) && (220 < y) && (y < 253) && gameState[1000]) {
				cmessage = "Allows transportation of wood";
			} else if ((280 < x) && (x < 301) && (220 < y) && (y < 253) && (gameState[1000] > 1)) {
				cmessage = "Allows transportation of weapons";
			} else if ((300 < x) && (x < 321) && (220 < y) && (y < 253) && (gameState[1000] > 1)) {
				cmessage = "Allows transportation of books";
			} else if ((57 < x) && (x < 225) && (260 < y) && (y < 293)) {
				cmessage = "Allows the construction of thieves guilds";
			} else if ((57 < x) && (x < 140) && (300 < y) && (y < 333)) {
				cmessage = "Lose peasants and weapons in battle before soldiers";
			} else if ((57 < x) && (x < 155) && (340 < y) && (y < 373)) {
				cmessage = "Each loss in battle grants 1 weapon";
			} else if ((57 < x) && (x < 250) && (380 < y) && (y < 413) && (gameState[1000] > 2)) {
				cmessage = "Each loss in battle grants 1 skeleton to the undead";
			} else if ((57 < x) && (x < 199) && (420 < y) && (y < 453)) {
				cmessage = "Each paladin saves 1 soldier from death in battle";
			} else if ((57 < x) && (x < 245) && (460 < y) && (y < 493)) {
				cmessage = "Each paladin grants 1 might per monastery";
			} else if ((457 < x) && (x < 585) && (100 < y) && (y < 133)) {
				cmessage = "Horse mills are cheaper and don't consume horses";
			} else if ((635 < x) && (x < 656) && (140 < y) && (y < 173) && gameState[1000]) {
				cmessage = "Castles count as keeps";
			} else if ((655 < x) && (x < 676) && (140 < y) && (y < 173) && gameState[1000]) {
				cmessage = "Castles count as walls";
			} else if ((675 < x) && (x < 696) && (140 < y) && (y < 173) && gameState[1000]) {
				cmessage = "Every 3 castles count as 1 armory";
			} else {
				cmessage = "";
			}
		} else if (currentview == 202) {
			if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 1) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Elf Achievments";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievements";
			} else if ((210 < x) && (x < 231) && (140 < y) && (y < 173)) {
				cmessage = "Each orc lost in battle grants 1 meat";
			} else if ((230 < x) && (x < 251) && (140 < y) && (y < 173)) {
				cmessage = "Buildings that use orcs also produce meat";
			} else if ((253 < x) && (x < 274) && (180 < y) && (y < 213)) {
				cmessage = "Each champion grants 1 might";
			} else if ((273 < x) && (x < 294) && (180 < y) && (y < 213)) {
				cmessage = "Towers count as Human Keeps";
			} else if ((293 < x) && (x < 314) && (180 < y) && (y < 213)) {
				cmessage = "Each ogre grants 1 might + 1 per fort";
			} else if ((313 < x) && (x < 334) && (180 < y) && (y < 213)) {
				cmessage = "Each catapult kills 1 Human enemy before battle";
			} else if ((333 < x) && (x < 354) && (180 < y) && (y < 213)) {
				cmessage = "Each banner increases Southerner morale by 1";
			} else if ((57 < x) && (x < 145) && (220 < y) && (y < 253)) {
				cmessage = "Each hydra head kills 1 enemy every second";
			} else if ((57 < x) && (x < 207) && (260 < y) && (y < 293)) {
				cmessage = "Grapeshot and Throw use mud instead of stone";
			} else if ((57 < x) && (x < 265) && (300 < y) && (y < 333)) {
				cmessage = "Dragons' Guard is always active";
			} else if ((57 < x) && (x < 215) && (340 < y) && (y < 373) && (gameState[1000] > 1)) {
				cmessage = "Breathe Fire increases nest production";
			} else if ((57 < x) && (x < 200) && (380 < y) && (y < 413) && (gameState[1000] > 2)) {
				cmessage = "Sacrifice produces ghosts for the undead";
			} else if ((57 < x) && (x < 240) && (420 < y) && (y < 453)) {
				cmessage = "Strongholds' Defend is always active";
			} else {
				cmessage = "";
			}
		} else if (currentview == 203) {
			if ((57 < x) && (x < 340) && (140 < y) && (y < 173)) {
				cmessage = "Glades don't consume seeds";
			} else if ((57 < x) && (x < 290) && (180 < y) && (y < 213)) {
				cmessage = "'Frolic' increases homestead production";
			} else if ((57 < x) && (x < 303) && (220 < y) && (y < 253)) {
				cmessage = "Each druid saves one human soldier from death in battle";
			} else if ((57 < x) && (x < 185) && (260 < y) && (y < 293)) {
				cmessage = "Defeating boars grants 5% of the reward to orcs as pigs";
			} else if ((57 < x) && (x < 260) && (300 < y) && (y < 333)) {
				cmessage = "Nature's Wrath also kills (enemies^(1/2)) enemies";
			} else if ((57 < x) && (x < 275) && (340 < y) && (y < 373)) {
				cmessage = "Charge also kill (human enemies)^(1/2) human enemies";
			} else if ((57 < x) && (x < 280) && (380 < y) && (y < 413)) {
				if (gameState[1000] > 2) {
					cmessage = "Defeating missionaries also grants the reward to humans and undead";
				} else {
					cmessage = "Defeating missionaries also grants the reward to the humans";
				}
			} else if ((57 < x) && (x < 295) && (420 < y) && (y < 453) && (gameState[1000] > 2)) {
				cmessage = "Frolic uses elves and produces corpses and ghosts";
			} else if ((57 < x) && (x < 270) && (460 < y) && (y < 493)) {
				cmessage = "Force of Nature is always active";
			} else if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 2) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Undead Achievements";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievements";
			} else {
				cmessage = "";
			}
		} else if (currentview == 204) {
			if ((225 < x) && (x < 246) && (140 < y) && (y < 173)) {
				cmessage = "Barrows produce when other races fight";
			} else if ((245 < x) && (x < 266) && (140 < y) && (y < 173)) {
				cmessage = "Tombs produce when other races fight";
			} else if ((265 < x) && (x < 286) && (140 < y) && (y < 173)) {
				cmessage = "Mansions produce when other races fight";
			} else if ((285 < x) && (x < 306) && (140 < y) && (y < 173)) {
				cmessage = "Coffins produce when other races fight";
			} else if ((305 < x) && (x < 326) && (140 < y) && (y < 173)) {
				cmessage = "Mass Graves produce when other races fight";
			} else if ((325 < x) && (x < 346) && (140 < y) && (y < 173)) {
				cmessage = "Mausoleums produce when other races fight";
			} else if ((345 < x) && (x < 366) && (140 < y) && (y < 173)) {
				cmessage = "Necromancers produce when other races fight";
			} else if ((365 < x) && (x < 386) && (140 < y) && (y < 173)) {
				cmessage = "Mummify produces when other races fight";
			} else if ((57 < x) && (x < 180) && (180 < y) && (y < 213)) {
				cmessage = "Each skeleton lost in battle grants 1 corpse";
			} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
				cmessage = "Pray for Rain kills (enemies^(1/2)) enemies";
			} else if ((57 < x) && (x < 220) && (260 < y) && (y < 293)) {
				cmessage = "Sacrifice produces blood for the Orcs";
			} else if ((57 < x) && (x < 215) && (300 < y) && (y < 333)) {
				cmessage = "Apocalypse uses acolytes and affects all races";
			} else if ((240 < x) && (x < 261) && (340 < y) && (y < 373)) {
				cmessage = "Catacombs affect other races when fighting undead";
			} else if ((260 < x) && (x < 281) && (340 < y) && (y < 373)) {
				cmessage = "Mummies affect other races when fighting undead";
			} else if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 3) {
					cmessage = "View Human Achievements";
				} else {
					cmessage = "View Southerner Achievements";
				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievements";
			} else {
				cmessage = "";
			}
		} else if (currentview == 205) {
			if ((250 < x) && (x < 271) && (140 < y) && (y < 173)) {
				cmessage = "Excavations produce (morale) coins";
			} else if ((270 < x) && (x < 291) && (140 < y) && (y < 173)) {
				cmessage = "Excavations have a (morale) % chance to produce 3 gems";
			} else if ((57 < x) && (x < 230) && (180 < y) && (y < 213)) {
				cmessage = "Each mercenary lost in battle or used by ships' Attack ability grants 4 coins";
			} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
				cmessage = "Increases morale by log(total losses)";
				cmessage2 = "Note: Total losses are the number of mercenaries lost in battle or used by ships' Attack ability in one playthrough, they are reset when you reset the game";
			} else if ((57 < x) && (x < 190) && (260 < y) && (y < 293)) {
				cmessage = "Increases morale by (elephants)^(1/7)";
			} else if ((57 < x) && (x < 210) && (300 < y) && (y < 333)) {
				cmessage = "Ships' Attack ability also kills (morale)*(elephants^(1/2)) enemies";
			} else if ((57 < x) && (x < 190) && (340 < y) && (y < 373)) {
				cmessage = "Palisades count as walls for the Humans";
			} else if ((310 < x) && (x < 331) && (380 < y) && (y < 413)) {
				cmessage = "Banks' Manipulate ability produces 1 coin for each trade post and caravan";
			} else if ((330 < x) && (x < 351) && (380 < y) && (y < 413)) {
				cmessage = "Banks' Manipulate ability produces 1 gold per ship for the Humans";
			} else if ((210 < x) && (x < 231) && (420 < y) && (y < 453)) {
				cmessage = "Ships can transport stone";
			} else if ((230 < x) && (x < 251) && (420 < y) && (y < 453)) {
				cmessage = "Ships can transport mercenaries";
			} else if ((57 < x) && (x < 170) && (460 < y) && (y < 493)) {
				cmessage = "Kills (elephants*archers)^(1/2) enemies every second";
			} else if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
				if (gameState[1000] == 4) {
					cmessage = "View Human Achievements";
				} else {

				}
			} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
				cmessage = "View Achievements";
			} else {
				cmessage = "";
			}
		}
	}
}

function userClick(event) {
	var x = event.pageX;
	var y = event.pageY;
	if (currentview == 0) {
		if ((300 < x) && (x < 500) && (340 < y) && (y < 390)) {
			currentview = 1;
		} else if ((300 < x) && (x < 500) && (260 < y) && (y < 310)) {
			if ((confirmtimer == 0) && (gameState[11950] || gameState[1000])) {
				confirmtimer = 200;
			} else if (!gameState[11950] && !gameState[1000]) {
				currentview = 1;
			} else if (confirmtimer < 190) {
				confirmtimer = 0;
				newGame();
			}
		} else if ((300 < x) && (x < 500) && (420 < y) && (y < 470)) {
			currentview = 101;
			submitscore();
		} else if ((300 < x) && (x < 500) && (180 < y) && (y < 230)) {
			currentview = 1;
			tutorialtimer = 5;
		} else if ((550 < x) && (x < 750) && (500 < y) && (y < 550)) {
			if (confirmtimer2 == 0) {
				confirmtimer2 = 200;
			} else if (confirmtimer2 < 190) {
				hardReset();
				confirmtimer2 = 0;
			}
		}
	} else if (currentview == 1) {
		if (tutorialtimer == 5 || tutorialtimer <= 2 || (tutorialtimer == 4 && gameState[11950])) {
			tutorialtimer--;
		}
		if ((25 < y) && (y < 525)) {
			var a = Math.floor(x / 80);
			var b = Math.floor((y - 25) / 100);
			var c = b + (5 * a);
			if (c == 0) {
				if (tutorialtimer == 4) {
					tutorialtimer--;
				}
				clickhBuilding(hBuilding00);
			} else if (c == 5) {
				chighlightt = -4;
			} else if ((c == 1) && gameState[11950]) {
				clickhBuilding(hBuilding01);
			} else if ((c == 6) && gameState[11950]) {
				if (tutorialtimer == 3) {
					tutorialtimer--;
				}
				gameState[11976]++;
				chighlightt = 4;
				if (gameState[11976] > 1) {
					gameState[11976] = 0;
				}
			} else if ((c == 2) && gameState[11951]) {
				clickhBuilding(hBuilding02);
			}  else if ((c == 7) && gameState[11951]) {
				gameState[11977]++;
				chighlightt = 4;
				if (gameState[11977] > 1) {
					gameState[11977] = 0;
				}
			} else if ((c == 3) && gameState[11952]) {
				clickhBuilding(hBuilding03);
			}  else if ((c == 8) && gameState[11952]) {
				gameState[11978]++;
				chighlightt = 4;
				if (gameState[11978] > 1) {
					gameState[11978] = 0;
				}
			} else if ((c == 4) && gameState[11953]) {
				clickhBuilding(hBuilding04);
			}  else if ((c == 9) && gameState[11953]) {
				gameState[11979]++;
				chighlightt = 4;
				if (gameState[11979] > 1) {
					gameState[11979] = 0;
				}
			} else if ((c == 10) && gameState[11953]) {
				clickhBuilding(hBuilding05);
			}  else if ((c == 15) && gameState[11953]) {
				gameState[11980]++;
				chighlightt = 4;
				if (gameState[11980] > 1) {
					gameState[11980] = 0;
				}
			} else if ((c == 11) && gameState[11957]) {
				clickhBuilding(hBuilding06);
			}  else if ((c == 16) && gameState[11957]) {
				gameState[11981]++;
				chighlightt = 4;
				if (gameState[11981] > 1) {
					gameState[11981] = 0;
				}
			} else if ((c == 12) && gameState[11954] && gameState[11955]) {
				clickhBuilding(hBuilding07);
			} else if ((c == 17) && gameState[11954] && gameState[11955]) {
				gameState[11982]++;
				chighlightt = 4;
				if (gameState[11982] > 1) {
					gameState[11982] = 0;
				}
			} else if ((c == 13) && gameState[11957]) {
				clickhBuilding(hBuilding08);
			} else if ((c == 18) && gameState[11957]) {
				gameState[11983]++;
				chighlightt = 4;
				if (gameState[11983] > 1) {
					gameState[11983] = 0;
				}
			} else if ((c == 14) && gameState[11954]) {
				clickhBuilding(hBuilding09);
			} else if ((c == 19) && gameState[11954]) {
				gameState[11720] = 3;
				gameState[11984]++;
				chighlightt = 4;
				var tpmax = 8;
				if (gameState[11957]) {
					tpmax = 10;
				}
				if (gameState[11958]) {
					tpmax = 12;
				}
				if ((gameState[11703] > 3)) {
					tpmax = 14;
				}
				if (gameState[11984] > tpmax) {
					gameState[11984] = 0;
				}
			} else if ((c == 20) && gameState[11958]) {
				clickhBuilding(hBuilding10);
			} else if ((c == 25) && gameState[11958]) {
				gameState[11985]++;
				chighlightt = 4;
				if (gameState[11985] > 1) {
					gameState[11985] = 0;
				}
			} else if ((c == 21) && gameState[11703]) {
				clickhBuilding(hBuilding11);
			} else if ((c == 26) && gameState[11703]) {
				gameState[11986]++;
				chighlightt = 4;
				if (gameState[11986] > 1) {
					gameState[11986] = 0;
				}
			} else if ((c == 22) && (gameState[11703] > 2) && (gameState[11961])) {
				clickhBuilding(hBuilding12);
			} else if ((c == 27) && (gameState[11703] > 2) && (gameState[11961])) {
				chighlightt = -4;
			} else if ((c == 23) && ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]))) {
				clickhBuilding(hBuilding13);
			} else if ((c == 28) && ((gameState[11703] > 3) || ((gameState[11703] > 2) && gameState[11970]))) {
				gameState[11988]++;
				chighlightt = 4;
				if (gameState[11988] > 4) {
					gameState[11988] = 0;
				}
			} else if ((c == 24) && (gameState[11703] > 1)) {
				clickhBuilding(hBuilding14);
			} else if ((c == 29) && (gameState[11703] > 1)) {
				gameState[11989]++;
				chighlightt = 4;
				if (gameState[11989] > 1) {
					gameState[11989] = 0;
				}
			} else if ((c == 30) && (gameState[11703] > 4)) {
				clickhBuilding(hBuilding15);
			} else if ((c == 35) && (gameState[11703] > 4)) {
				gameState[11990]++;
				chighlightt = 4;
				if (gameState[11990] > 2) {
					gameState[11990] = 0;
				}
				if ((gameState[11990] == 1) && !gameState[11963]) {
					gameState[11990] = 2;
				}
			} else if ((c == 31) && (gameState[11703] > 5)) {
				clickhBuilding(hBuilding16);
			} else if ((c == 36) && (gameState[11703] > 5)) {
				gameState[11991]++;
				chighlightt = 4;
				if (gameState[11991] > 2) {
					gameState[11991] = 0;
				}
			} else if ((c == 32) && gameState[11959] && gameState[11903]) {
				clickhBuilding(hBuilding17);
			} else if ((c == 37) && gameState[11959] && gameState[11903]) {
				gameState[11992]++;
				chighlightt = 4;
				if ((gameState[11992] == 1) && !gameState[21952]) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 2) && !(gameState[21703] > 2)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 3) && !(gameState[41703] > 1)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 4) && !(gameState[21703] > 5)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 5) && !(gameState[31703] > 1)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 6) && !(gameState[41703] > 3)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 7) && !(gameState[51703] > 2)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 8) && !(gameState[31703] > 2)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 9) && !(gameState[31703] > 3)) {
					gameState[11992]++;
				}
				if ((gameState[11992] == 10) && !(gameState[41703] > 5)) {
					gameState[11992]++;
				}
				if ((gameState[11992] > 1) && (gameState[11903] < 2)) {
					gameState[11992] = 0;
				} else if ((gameState[11992] > 3) && (gameState[11903] < 3)) {
					gameState[11992] = 0;
				} else if ((gameState[11992] > 7) && (gameState[11903] < 4)) {
					gameState[11992] = 0;
				} else if ((gameState[11992] > 8) && (gameState[11903] < 5)) {
					gameState[11992] = 0;
				} else if ((gameState[11992] > 10) && (gameState[11903] < 6)) {
					gameState[11992] = 0;
				}
			} else if ((c == 33) && gameState[11965]) {
				clickhBuilding(hBuilding18);
			} else if ((c == 38) && gameState[11965]) {
				chighlightt = -4;
			} else if ((c == 34) && gameState[11968]) {
				clickhBuilding(hBuilding19);
			} else if ((c == 39) && gameState[11968]) {
				chighlightt = -4;
			} else if ((c == 40) && (gameState[11703] > 2) && gameState[11904]) {
				clickhBuilding(hBuilding20);
			} else if ((c == 45) && (gameState[11703] > 2) && gameState[11904]) {
				chighlightt = -4;
			}
		} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[11960]) {
			if (!gameState[11700]) {
				gameState[11700] = 1;
			} else {
				gameState[11700] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[11960]) {
			var temp = new bigInt();
			pullBig(temp, 14500);
			if (compareSmall(temp, 23)) {
				gameState[11704]++;
				if ((gameState[11704] > 2) || ((gameState[11704] == 2) && !gameState[11905])) {
					gameState[11704] = 0;
				}
			}
		} else if ((x > 689) && (x < 711) && (y > 575) && gameState[11960]) {
			var temp = new bigInt();
			pullBig(temp, 14500);
			if (!gameState[11705] && compareSmall(temp, 22)) {
				gameState[11705] = 1;
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 11500);
				pullBig(temp2, 14500);
				if (compareBig(temp, temp2)) {
				} else {
					pushBig(temp2, 11500);
					temp = getPower(10, toSmall(temp2));
					pushBig(temp, 11600);
					if (!gameState[11704]) {
						gameState[11700] = 0;
					}
				}
			} else {
				gameState[11705] = 0;
			}
		} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[11960]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp, 11500);
			pullBig(temp2, 14500);
			if (compareBig(temp, temp2)) {
			} else {
				gameState[11700] = 0;
				var temp3 = new bigInt();
				temp3 = getPower(10, toSmall(temp));
				pullBig(temp2, 11600);
				subBig(temp3, temp2);
				addSmall(temp, 1);
				pushBig(temp, 11500);
				temp2 = getPower(10, toSmall(temp));
				subBig(temp2, temp3);
				pushBig(temp2, 11600);
			}
		} else if ((x > 710) && (x < 732) && (y > 562) && gameState[11960]) {
			var temp = new bigInt();
			pullBig(temp, 11500);
			if (toSmall(temp) > (20 + (5 * gameState[11701]))) {
				subSmall(temp, 1);
				pushBig(temp, 11500);
				temp = getPower(10, toSmall(temp));
				var temp1 = new bigInt();
				pullBig(temp1, 11600);
				temp = minBig(temp, temp1);
				pushBig(temp, 11600);
			}
		} else if ((x > 609) && (x < 685) && (y > 525) && gameState[11703]) {
			var a = Math.floor((x - 610) / 25);
			var b = Math.floor((y - 526) / 25);
			var c = a + (3 * b);
			var tempenemies = new bigInt();
			pullBig(tempenemies, 14500);
			if ((gameState[11703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 7) && (gameState[11701] != c)) {
				gameState[11701] = c;
				var temp = new bigInt();
				pullBig(temp, 11500);
				if (!compareSmall(temp, 20 + (5 * c))) {
					temp.data.fill(0);
					addSmall(temp, 20 + (5 * c));
					pushBig(temp, 11500);
					temp = getPower(10, toSmall(temp));
					pushBig(temp, 11600);
					gameState[11700] = 0;
				}
			}
		}
	} else if (currentview == 2) {
		if ((25 < y) && (y < 525)) {
			var a = Math.floor(x / 80);
			var b = Math.floor((y - 25) / 100);
			var c = b + (5 * a);
			if (c == 0) {
				clickoBuilding(0);
			} else if (c == 5) {
				chighlightt = -4;
			} else if ((c == 1) && gameState[21950]) {
				clickoBuilding(1);
			} else if ((c == 6) && gameState[21950]) {
				gameState[21976]++;
				chighlightt = 4;
				if (gameState[21976] > 1) {
					gameState[21976] = 0;
				}
			} else if ((c == 2) && gameState[21951]) {
				clickoBuilding(2);
			} else if ((c == 7) && gameState[21951]) {
				gameState[21977]++;
				chighlightt = 4;
				if (gameState[21977] > 1) {
					gameState[21977] = 0;
				}
			} else if ((c == 3) && gameState[21952]) {
				clickoBuilding(3);
			} else if ((c == 8) && gameState[21952]) {
				gameState[21978]++;
				chighlightt = 4;
				if (gameState[21978] > 1) {
					gameState[21978] = 0;
				}
			} else if ((c == 4) && (gameState[21703] > 1)) {
				clickoBuilding(4);
			} else if ((c == 9) && (gameState[21703] > 1)) {
				gameState[21979]++;
				chighlightt = 4;
				if (gameState[21979] > 2) {
					gameState[21979] = 0;
				}
			} else if ((c == 10) && (gameState[21703] > 2)) {
				clickoBuilding(5);
			} else if ((c == 15) && (gameState[21703] > 2)) {
				gameState[21980]++;
				chighlightt = 4;
				if (gameState[21980] > 1) {
					gameState[21980] = 0;
				}
			} else if ((c == 11) && gameState[21955]) {
				clickoBuilding(6);
			} else if ((c == 16) && gameState[21955]) {
				gameState[21981]++;
				chighlightt = 4;
				if (gameState[21981] > 1) {
					gameState[21981] = 0;
				}
			} else if ((c == 12) && gameState[21956]) {
				clickoBuilding(7);
			} else if ((c == 17) && gameState[21956]) {
				if (gameState[21958]) {
					gameState[21982]++;
					chighlightt = 4;
					if (gameState[21982] > 1) {
						gameState[21982] = 0;
					}
				} else {
					chighlightt = -4;
				}
			} else if ((c == 13) && (gameState[21703] > 3)) {
				clickoBuilding(8);
			} else if ((c == 18) && (gameState[21703] > 3)) {
				gameState[21983]++;
				chighlightt = 4;
				if (gameState[21983] > 1) {
					gameState[21983] = 0;
				}
			} else if ((c == 14) && (gameState[21703] > 4)) {
				clickoBuilding(9);
			} else if ((c == 19) && (gameState[21703] > 4)) {
				gameState[21984]++;
				chighlightt = 4;
				if ((gameState[21984] > 2) || ((gameState[21984] == 2) && (!gameState[21964]))) {
					gameState[21984] = 0;
				}
			} else if ((c == 20) && gameState[21958]) {
				clickoBuilding(10);
			} else if ((c == 25) && gameState[21958]) {
				gameState[21985]++;
				chighlightt = 4;
				if (gameState[21985] > 1) {
					gameState[21985] = 0;
				}
			} else if ((c == 21) && gameState[21963] && gameState[21960]) {
				clickoBuilding(11);
			} else if ((c == 26) && gameState[21963] && gameState[21960]) {
				chighlightt = -4;
			} else if ((c == 22) && gameState[21961]) {
				clickoBuilding(12);
			} else if ((c == 27) && gameState[21961]) {
				gameState[21987]++;
				chighlightt = 4;
				if (gameState[21987] > 2) {
					gameState[21987] = 0;
				}
			} else if ((c == 23) && ((gameState[21703] > 5) || (gameState[21963]))) {
				clickoBuilding(13);
			} else if ((c == 28) && ((gameState[21703] > 5) || (gameState[21963]))) {
				chighlightt = -4;
			} else if ((c == 24) && gameState[21959]) {
				clickoBuilding(14);
			} else if ((c == 29) && gameState[21959]) {
				chighlightt = -4;
			} else if ((c == 30) && gameState[21961] && (gameState[21703] > 6)) {
				clickoBuilding(15);
			} else if ((c == 35) && gameState[21961] && (gameState[21703] > 6)) {
				gameState[21990]++;
				chighlightt = 4;
				if (gameState[21990] > 2) {
					gameState[21990] = 0;
				}
			} else if ((c == 31) && gameState[21964] && (gameState[21703] > 6)) {
				clickoBuilding(16);
			} else if ((c == 36) && gameState[21964] && (gameState[21703] > 6)) {
				gameState[21991]++;
				chighlightt = 4;
				if (gameState[21991] > 2) {
					gameState[21991] = 0;
				}
			} else if ((c == 32) && gameState[21966] && gameState[21957]) {
				clickoBuilding(17);
			} else if ((c == 37) && gameState[21966] && gameState[21957]) {
				if (gameState[21905]) {
					chighlightt = -4;
				} else {
					gameState[21992]++;
					chighlightt = 4;
					if (gameState[21992] > 1) {
						gameState[21992] = 0;
					}
				}
			}
		} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[21953]) {
			if (!gameState[21700]) {
				gameState[21700] = 1;
			} else {
				gameState[21700] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[21953]) {
				gameState[21704]++;
				if ((gameState[21704] > 2) || ((gameState[21704] == 2) && !gameState[21960])) {
					gameState[21704] = 0;
				}
		} else if ((x > 689) && (x < 711) && (y > 575) && gameState[21953]) {
			if (!gameState[21705]) {
				gameState[21705] = 1;
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 21500);
				pullBig(temp2, 24500);
				if (compareBig(temp, temp2)) {
				} else {
					pushBig(temp2, 21500);
					temp = getPower(10, toSmall(temp2));
					pushBig(temp, 21600);
					if (!gameState[21704]) {
						gameState[21700] = 0;
					}
				}
			} else {
				gameState[21705] = 0;
			}
		} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[21953]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp, 21500);
			pullBig(temp2, 24500);
			if (compareBig(temp, temp2)) {
			} else {
				gameState[21700] = 0;
				var temp3 = new bigInt();
				temp3 = getPower(10, toSmall(temp));
				pullBig(temp2, 21600);
				subBig(temp3, temp2);
				addSmall(temp, 1);
				pushBig(temp, 21500);
				temp2 = getPower(10, toSmall(temp));
				subBig(temp2, temp3);
				pushBig(temp2, 21600);
			}
		} else if ((x > 710) && (x < 732) && (y > 562) && gameState[21953]) {
			var temp = new bigInt();
			pullBig(temp, 21500);
			if (toSmall(temp) > (20 + (5 * gameState[21701]))) {
				subSmall(temp, 1);
				pushBig(temp, 21500);
				temp = getPower(10, toSmall(temp));
				var temp1 = new bigInt();
				pullBig(temp1, 21600);
				temp = minBig(temp, temp1);
				pushBig(temp, 21600);
			}
		} else if ((x > 609) && (x < 685) && (y > 525) && gameState[21703]) {
			var a = Math.floor((x - 610) / 25);
			var b = Math.floor((y - 526) / 25);
			var c = a + (3 * b);
			var tempenemies = new bigInt();
			pullBig(tempenemies, 24500);
			if ((gameState[21703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 7) && (gameState[21701] != c)) {
				gameState[21701] = c;
				var temp = new bigInt();
				pullBig(temp, 21500);
				if (!compareSmall(temp, 20 + (5 * c))) {
					temp.data.fill(0);
					addSmall(temp, 20 + (5 * c));
					pushBig(temp, 21500);
					temp = getPower(10, toSmall(temp));
					pushBig(temp, 21600);
					gameState[21700] = 0;
				}
			}
		}
	} else if (currentview == 3) {
		if ((25 < y) && (y < 525)) {
			var a = Math.floor(x / 80);
			var b = Math.floor((y - 25) / 100);
			var c = b + (5 * a);
			if (c == 0) {
				clickeBuilding(0);
			} else if (c == 5) {
				chighlightt = -4;
			} else if ((c == 1) && gameState[31950]) {
				clickeBuilding(1);
			} else if ((c == 6) && gameState[31950]) {
				chighlightt = -4;
			} else if ((c == 2) && gameState[31951]) {
				clickeBuilding(2);
			} else if ((c == 7) && gameState[31951]) {
				if (gameState[31901]) {
					chighlightt = -4;
				} else {
					gameState[31977]++;
					chighlightt = 4;
					if (gameState[31977] > 1) {
						gameState[31977] = 0;
					}
				}
			} else if ((c == 3) && gameState[31952]) {
				clickeBuilding(3);
			} else if ((c == 8) && gameState[31952]) {
				gameState[31978]++;
				chighlightt = 4;
				if ((gameState[31978] > 1)) {
					gameState[31978] = 0;
				}
				if ((gameState[31978] != 1) && (gameState[31982] == 1)) {
					gameState[31982] = 0;
				}
			} else if ((c == 4) && (gameState[31703] > 1)) {
				clickeBuilding(4);
			} else if ((c == 9) && (gameState[31703] > 1)) {
				gameState[31979]++;
				chighlightt = 4;
				if ((gameState[31979] > 1)) {
					gameState[31979] = 0;
				}
			} else if ((c == 10) && gameState[31954]) {
				clickeBuilding(5);
			} else if ((c == 15) && gameState[31954]) {
				gameState[31980]++;
				chighlightt = 4;
				if ((gameState[31980] > 2) || ((gameState[31980] == 2) && (!gameState[31956]))) {
					gameState[31980] = 0;
				}
			} else if ((c == 11) && (gameState[31703] > 2) && gameState[31954]) {
				clickeBuilding(6);
			} else if ((c == 16) && (gameState[31703] > 2) && gameState[31954]) {
				gameState[31981]++;
				chighlightt = 4;
				if ((gameState[31981] > 1)) {
					gameState[31981] = 0;
				}
			} else if ((c == 12) && (gameState[31703] > 3)) {
				clickeBuilding(7);
			} else if ((c == 17) && (gameState[31703] > 3)) {
				gameState[31982]++;
				chighlightt = 4;
				if ((gameState[31982] == 1) && (gameState[31978] != 1)) {
					gameState[31982]++;
				}
				if ((gameState[31982] > 2) || ((gameState[31982] == 2) && (!gameState[31960] || gameState[31909]))) {
					gameState[31982] = 0;
				}
			} else if ((c == 13) && (gameState[31703] > 4)) {
				clickeBuilding(8);
			} else if ((c == 18) && (gameState[31703] > 4)) {
				gameState[31983]++;
				chighlightt = 4;
				if ((gameState[31983] > 2)) {
					gameState[31983] = 0;
				}
			} else if ((c == 14) && gameState[31960]) {
				clickeBuilding(9);
			} else if ((c == 19) && gameState[31960]) {
				gameState[31984]++;
				chighlightt = 4;
				if ((gameState[31984] > 1)) {
					gameState[31984] = 0;
				}
			} else if ((c == 20) && (gameState[31703] > 5)) {
				clickeBuilding(10);
			} else if ((c == 25) && (gameState[31703] > 5)) {
				gameState[31985]++;
				chighlightt = 4;
				if ((gameState[31985] > 1)) {
					gameState[31985] = 0;
				}
			} else if ((c == 21) && (gameState[31703] > 6) && gameState[31959]) {
				clickeBuilding(11);
			} else if ((c == 26) && (gameState[31703] > 6) && gameState[31959]) {
				gameState[31986]++;
				chighlightt = 4;
				if ((gameState[31986] > 1)) {
					gameState[31986] = 0;
				}
			} else if ((c == 22) && ((gameState[31703] > 7) || gameState[31962])) {
				clickeBuilding(12);
			} else if ((c == 27) && ((gameState[31703] > 7) || gameState[31962])) {
				gameState[31987]++;
				chighlightt = 4;
				if ((gameState[31987] > 1)) {
					gameState[31987] = 0;
				}
			}
		} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[31953]) {
			if (!gameState[31700]) {
				gameState[31700] = 1;
			} else {
				gameState[31700] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 575) && gameState[31953]) {
			if (!gameState[31705]) {
				gameState[31705] = 1;
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 31500);
				pullBig(temp2, 34500);
				if (compareBig(temp, temp2)) {
				} else {
					pushBig(temp2, 31500);
					temp = getPower(10, toSmall(temp2));
					pushBig(temp, 31600);
				}
			} else {
				gameState[31705] = 0;
			}
		} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[31953]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp, 31500);
			pullBig(temp2, 34500);
			if (compareBig(temp, temp2)) {
			} else {
				gameState[31700] = 0;
				var temp3 = new bigInt();
				temp3 = getPower(10, toSmall(temp));
				pullBig(temp2, 31600);
				subBig(temp3, temp2);
				addSmall(temp, 1);
				pushBig(temp, 31500);
				temp2 = getPower(10, toSmall(temp));
				subBig(temp2, temp3);
				pushBig(temp2, 31600);
			}
		} else if ((x > 710) && (x < 732) && (y > 562) && gameState[31953]) {
			var temp = new bigInt();
			pullBig(temp, 31500);
			if (toSmall(temp) > (20 + (5 * gameState[31701]))) {
				subSmall(temp, 1);
				pushBig(temp, 31500);
				temp = getPower(10, toSmall(temp));
				var temp1 = new bigInt();
				pullBig(temp1, 31600);
				temp = minBig(temp, temp1);
				pushBig(temp, 31600);
			}
		} else if ((x > 609) && (x < 685) && (y > 525) && gameState[31703]) {
			var a = Math.floor((x - 610) / 25);
			var b = Math.floor((y - 526) / 25);
			var c = a + (3 * b);
			var tempenemies = new bigInt();
			pullBig(tempenemies, 34500);
			if ((gameState[31703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8) && (gameState[31701] != c)) {
				gameState[31701] = c;
				var temp = new bigInt();
				pullBig(temp, 31500);
				if (!compareSmall(temp, 20 + (5 * c))) {
					temp.data.fill(0);
					addSmall(temp, 20 + (5 * c));
					pushBig(temp, 31500);
					temp = getPower(10, toSmall(temp));
					pushBig(temp, 31600);
					gameState[31700] = 0;
				}
			}
		}
	} else if (currentview == 4) {
		if ((25 < y) && (y < 525)) {
			var a = Math.floor(x / 80);
			var b = Math.floor((y - 25) / 100);
			var c = b + (5 * a);
			if (c == 0) {
				clickuBuilding(0);
			} else if (c == 5) {
				chighlightt = -4;
			} else if ((c == 1) && gameState[41950]) {
				clickuBuilding(1);
			} else if ((c == 6) && gameState[41950]) {
				gameState[41976]++;
				chighlightt = 4;
				if (gameState[41976] > 1) {
					gameState[41976] = 0;
				}
			} else if ((c == 2) && gameState[41703]) {
				clickuBuilding(2);
			} else if ((c == 7) && gameState[41703]) {
				chighlightt = -4;
			} else if ((c == 3) && (gameState[41703] > 1)) {
				clickuBuilding(3);
			} else if ((c == 8) && (gameState[41703] > 1)) {
				chighlightt = -4;
			} else if ((c == 4) && (gameState[41703] > 2) && gameState[41953]) {
				clickuBuilding(4);
			} else if ((c == 9) && (gameState[41703] > 2) && gameState[41953]) {
				chighlightt = -4;
			} else if ((c == 10) && (gameState[41703] > 3)) {
				clickuBuilding(5);
			} else if ((c == 15) && (gameState[41703] > 3)) {
				if (!gameState[41956]) {
					chighlightt = -4;
				} else {
					gameState[41980]++;
					chighlightt = 4;
				}
				if (gameState[41980] > 1) {
					gameState[41980] = 0;
				}
			} else if ((c == 11) && gameState[41955]) {
				clickuBuilding(6);
			} else if ((c == 16) && gameState[41955]) {
				chighlightt = -4;
			} else if ((c == 12) && gameState[41956]) {
				clickuBuilding(7);
			} else if ((c == 17) && gameState[41956]) {
				gameState[41982]++;
				chighlightt = 4;
				if (gameState[41982] > 1) {
					gameState[41982] = 0;
				}
			} else if ((c == 13) && gameState[41954]) {
				clickuBuilding(8);
			} else if ((c == 18) && gameState[41954]) {
				chighlightt = -4;
			} else if ((c == 14) && (gameState[41703] > 4)) {
				clickuBuilding(9);
			} else if ((c == 19) && (gameState[41703] > 4)) {
				gameState[41984]++;
				chighlightt = 4;
				if ((gameState[41984] > 2) || ((gameState[41984] == 2) && ((gameState[41703] < 6) || (gameState[41903] && !gameState[41905])))) {
					gameState[41984] = 0;
				}
			} else if ((c == 20) && (gameState[41703] > 6)) {
				clickuBuilding(10);
			} else if ((c == 25) && (gameState[41703] > 6)) {
				chighlightt = -4;
			} else if ((c == 21) && (gameState[41703] > 5)) {
				clickuBuilding(11);
			} else if ((c == 26) && (gameState[41703] > 5)) {
				gameState[41986]++;
				chighlightt = 4;
				if (gameState[41986] > 1) {
					gameState[41986] = 0;
				}
			} else if ((c == 22) && gameState[41959]) {
				clickuBuilding(12);
			} else if ((c == 27) && gameState[41959]) {
				chighlightt = -4;
			} else if ((c == 23) && gameState[41961] && gameState[41953]) {
				clickuBuilding(13);
			} else if ((c == 28) && gameState[41961] && gameState[41953]) {
				chighlightt = -4;
			} else if ((c == 24) && gameState[41965]) {
				clickuBuilding(14);
			} else if ((c == 29) && gameState[41965]) {
				gameState[41989]++;
				chighlightt = 4;
				if (gameState[41989] > 1) {
					gameState[41989] = 0;
				}
			} else if ((c == 30) && gameState[41960]) {
				clickuBuilding(15);
			} else if ((c == 35) && gameState[41960]) {
				gameState[41990]++;
				chighlightt = 4;
				if (gameState[41990] > 1) {
					gameState[41990] = 0;
				}
			} else if ((c == 31) && (gameState[41703] > 7)) {
				clickuBuilding(16);
			} else if ((c == 36) && (gameState[41703] > 7)) {
				gameState[41991]++;
				chighlightt = 4;
				if (gameState[41991] > 2) {
					gameState[41991] = 0;
				}
			}
		} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[41951]) {
			if (!gameState[41700]) {
				gameState[41700] = 1;
			} else {
				gameState[41700] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[41951]) {
			if (!gameState[41704]) {
				gameState[41704] = 1;
			} else {
				gameState[41704] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 575) && gameState[41951]) {
			if (!gameState[41705]) {
				gameState[41705] = 1;
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 41500);
				pullBig(temp2, 44500);
				if (compareBig(temp, temp2)) {
				} else {
					pushBig(temp2, 41500);
					temp = getPower(10, toSmall(temp2));
					pushBig(temp, 41600);
					if (!gameState[41704]) {
						gameState[41700] = 0;
					}
				}
			} else {
				gameState[41705] = 0;
			}
		} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[41951]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp, 41500);
			pullBig(temp2, 44500);
			if (compareBig(temp, temp2)) {
			} else {
				gameState[41700] = 0;
				var temp3 = new bigInt();
				temp3 = getPower(10, toSmall(temp));
				pullBig(temp2, 41600);
				subBig(temp3, temp2);
				addSmall(temp, 1);
				pushBig(temp, 41500);
				temp2 = getPower(10, toSmall(temp));
				subBig(temp2, temp3);
				pushBig(temp2, 41600);
			}
		} else if ((x > 710) && (x < 732) && (y > 562) && gameState[41951]) {
			var temp = new bigInt();
			pullBig(temp, 41500);
			if (toSmall(temp) > (20 + (5 * gameState[41701]))) {
				subSmall(temp, 1);
				pushBig(temp, 41500);
				temp = getPower(10, toSmall(temp));
				var temp1 = new bigInt();
				pullBig(temp1, 41600);
				temp = minBig(temp, temp1);
				pushBig(temp, 41600);
			}
		} else if ((x > 609) && (x < 685) && (y > 525) && gameState[41703]) {
			var a = Math.floor((x - 610) / 25);
			var b = Math.floor((y - 526) / 25);
			var c = a + (3 * b);
			var tempenemies = new bigInt();
			pullBig(tempenemies, 44500);
			if ((gameState[41703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8) && (gameState[41701] != c)) {
				gameState[41701] = c;
				var temp = new bigInt();
				pullBig(temp, 41500);
				if (!compareSmall(temp, 20 + (5 * c))) {
					temp.data.fill(0);
					addSmall(temp, 20 + (5 * c));
					pushBig(temp, 41500);
					temp = getPower(10, toSmall(temp));
					pushBig(temp, 41600);
					gameState[41700] = 0;
				}
			}
		}
	} else if (currentview == 5) {
		if ((25 < y) && (y < 525)) {
			var a = Math.floor(x / 80);
			var b = Math.floor((y - 25) / 100);
			var c = b + (5 * a);
			if (c == 0) {
				clicksBuilding(0);
			} else if (c == 5) {
				chighlightt = -4;
			} else if ((c == 1) && gameState[51950]) {
				clicksBuilding(1);
			} else if ((c == 6) && gameState[51950]) {
				gameState[51976]++;
				chighlightt = 4;
				if (gameState[51976] > 1) {
					gameState[51976] = 0;
				}
			} else if ((c == 2) && gameState[51951]) {
				clicksBuilding(2);
			} else if ((c == 7) && gameState[51951]) {
				chighlightt = -4;
			} else if ((c == 3) && gameState[51952]) {
				clicksBuilding(3);
			} else if ((c == 8) && gameState[51952]) {
				gameState[51978]++;
				chighlightt = 4;
				if (gameState[51978] > 1) {
					gameState[51978] = 0;
				}
			} else if ((c == 4) && gameState[51953]) {
				clicksBuilding(4);
			} else if ((c == 9) && gameState[51953]) {
				gameState[51979]++;
				chighlightt = 4;
				if (gameState[51979] > 1) {
					gameState[51979] = 0;
				}
			} else if ((c == 10) && gameState[51954]) {
				clicksBuilding(5);
			} else if ((c == 15) && gameState[51954]) {
				gameState[51980]++;
				chighlightt = 4;
				if (gameState[51980] > 1) {
					gameState[51980] = 0;
				}
			} else if ((c == 11) && gameState[51955]) {
				clicksBuilding(6);
			} else if ((c == 16) && gameState[51955]) {
				gameState[51981]++;
				chighlightt = 4;
				if (gameState[51981] > 1) {
					gameState[51981] = 0;
				}
			} else if ((c == 12) && (gameState[51703] > 1)) {
				clicksBuilding(7);
			} else if ((c == 17) && (gameState[51703] > 1)) {
				gameState[51982]++;
				chighlightt = 4;
				if (gameState[51982] > 1) {
					gameState[51982] = 0;
				}
			} else if ((c == 13) && (gameState[51703] > 0)) {
				clicksBuilding(8);
			} else if ((c == 18) && (gameState[51703] > 0)) {
				gameState[51983]++;
				chighlightt = 4;
				if (gameState[51983] > 1) {
					gameState[51983] = 0;
				}
			} else if ((c == 14) && gameState[51956]) {
				clicksBuilding(9);
			} else if ((c == 19) && gameState[51956]) {
				gameState[51720] = 3;
				gameState[51984]++;
				chighlightt = 4;
				if ((gameState[51984] == 5) && (gameState[51703] < 2)) {
					gameState[51984] = 7;
				}
				if (((gameState[51984] > 7) && ((gameState[51703] < 8) && (gameState[51901] < 2))) || (gameState[51984] > 9)) {
					gameState[51984] = 0;
				}
			} else if ((c == 20) && (gameState[51703] > 2)) {
				clicksBuilding(10);
			} else if ((c == 25) && (gameState[51703] > 2)) {
				gameState[51985]++;
				chighlightt = 4;
				if (gameState[51985] > 1) {
					gameState[51985] = 0;
				}
			} else if ((c == 21) && gameState[51960]) {
				clicksBuilding(11);
			} else if ((c == 26) && gameState[51960]) {
				gameState[51721] = 3;
				gameState[51986]++;
				chighlightt = 4;
				if ((gameState[51986] == 8) && (!gameState[51908] || !gameState[11953])) {
					gameState[51986]++;
				}
				if ((gameState[51986] == 9) && (!gameState[51908] || (gameState[21703] < 3))) {
					gameState[51986]++;
				}
				if ((gameState[51986] == 10) && (!gameState[51908] || (gameState[41703] < 2))) {
					gameState[51986]++;
				}
				if ((gameState[51986] == 11) && ((gameState[51908] < 2) || !gameState[11960])) {
					gameState[51986]++;
				}
				if (gameState[51986] > 11) {
					gameState[51986] = 0;
				}
			} else if ((c == 22) && gameState[51964]) {
				clicksBuilding(12);
			} else if ((c == 27) && gameState[51964]) {
				gameState[51987]++;
				chighlightt = 4;
				if (gameState[51987] > 1) {
					gameState[51987] = 0;
				}
			} else if ((c == 23) && gameState[51965]) {
				clicksBuilding(13);
			} else if ((c == 28) && gameState[51965]) {
				gameState[51988]++;
				chighlightt = 4;
				if (gameState[51988] > 1) {
					gameState[51988] = 0;
				}
			} else if ((c == 24) && (gameState[51703] > 3)) {
				clicksBuilding(14);
			} else if ((c == 29) && (gameState[51703] > 3)) {
				gameState[51989]++;
				chighlightt = 4;
				if (gameState[51989] > 1) {
					gameState[51989] = 0;
				}
			} else if ((c == 30) && (gameState[51703] > 4)) {
				clicksBuilding(15);
			} else if ((c == 35) && (gameState[51703] > 4)) {
				gameState[51990]++;
				chighlightt = 4;
				if (gameState[51990] > 1) {
					gameState[51990] = 0;
				}
			} else if ((c == 31) && gameState[51961] && gameState[51967]) {
				clicksBuilding(16);
			} else if ((c == 36) && gameState[51961] && gameState[51967]) {
				gameState[51991]++;
				chighlightt = 4;
				if (gameState[51991] > 1) {
					gameState[51991] = 0;
				}
			} else if ((c == 32) && (gameState[51703] > 5)) {
				clicksBuilding(17);
			} else if ((c == 37) && (gameState[51703] > 5)) {
				chighlightt = -4;
			} else if ((c == 33) && (gameState[51703] > 6)) {
				clicksBuilding(18);
			} else if ((c == 38) && (gameState[51703] > 6)) {
				chighlightt = -4;
			} else if ((c == 34) && gameState[51968]) {
				clicksBuilding(19);
			} else if ((c == 39) && gameState[51968]) {
				gameState[51994]++;
				chighlightt = 4;
				if (gameState[51994] > 2) {
					gameState[51994] = 0;
				}
			} else if ((c == 40) && (gameState[51703] > 7)) {
				clicksBuilding(20);
			} else if ((c == 45) && (gameState[51703] > 7)) {
				gameState[51995]++;
				chighlightt = 4;
				if (gameState[51995] > 1) {
					gameState[51995] = 0;
				}
			} else if ((c == 41) && gameState[51970]) {
				clicksBuilding(21);
			} else if ((c == 46) && gameState[51970]) {
				chighlightt = -4;
			}
		} else if ((x > 689) && (x < 711) && (y > 525) && (y < 551) && gameState[51959]) {
			if (!gameState[51700]) {
				gameState[51700] = 1;
			} else {
				gameState[51700] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 550) && (y < 576) && gameState[51959]) {
			if (!gameState[51704]) {
				gameState[51704] = 1;
			} else {
				gameState[51704] = 0;
			}
		} else if ((x > 689) && (x < 711) && (y > 575) && gameState[51959]) {
			if (!gameState[51705]) {
				gameState[51705] = 1;
				var temp = new bigInt();
				var temp2 = new bigInt();
				pullBig(temp, 51500);
				pullBig(temp2, 54500);
				if (compareBig(temp, temp2)) {
				} else {
					pushBig(temp2, 51500);
					temp = getPower(10, toSmall(temp2));
					pushBig(temp, 51600);
					if (!gameState[51704]) {
						gameState[51700] = 0;
					}
				}
			} else {
				gameState[51705] = 0;
			}
		} else if ((x > 710) && (x < 732) && (y > 525) && (y < 563) && gameState[51959]) {
			var temp = new bigInt();
			var temp2 = new bigInt();
			pullBig(temp, 51500);
			pullBig(temp2, 54500);
			if (compareBig(temp, temp2)) {
			} else {
				gameState[51700] = 0;
				var temp3 = new bigInt();
				temp3 = getPower(10, toSmall(temp));
				pullBig(temp2, 51600);
				subBig(temp3, temp2);
				addSmall(temp, 1);
				pushBig(temp, 51500);
				temp2 = getPower(10, toSmall(temp));
				subBig(temp2, temp3);
				pushBig(temp2, 51600);
			}
		} else if ((x > 710) && (x < 732) && (y > 562) && gameState[51959]) {
			var temp = new bigInt();
			pullBig(temp, 51500);
			if (toSmall(temp) > (20 + (5 * gameState[51701]))) {
				subSmall(temp, 1);
				pushBig(temp, 51500);
				temp = getPower(10, toSmall(temp));
				var temp1 = new bigInt();
				pullBig(temp1, 51600);
				temp = minBig(temp, temp1);
				pushBig(temp, 51600);
			}
		} else if ((x > 609) && (x < 685) && (y > 525) && gameState[51703]) {
			var a = Math.floor((x - 610) / 25);
			var b = Math.floor((y - 526) / 25);
			var c = a + (3 * b);
			var tempenemies = new bigInt();
			pullBig(tempenemies, 54500);
			if ((gameState[51703] >= c) && compareSmall(tempenemies, Math.max(25, (20 + (5 *c)))) && (c < 8) && (gameState[51701] != c)) {
				gameState[51701] = c;
				var temp = new bigInt();
				pullBig(temp, 51500);
				if (!compareSmall(temp, 20 + (5 * c))) {
					temp.data.fill(0);
					addSmall(temp, 20 + (5 * c));
					pushBig(temp, 51500);
					temp = getPower(10, toSmall(temp));
					pushBig(temp, 51600);
					gameState[51700] = 0;
				}
			}
		}
	} else if (currentview == 99) {
		var temp = new bigInt();
		pullBig(temp, 11800);
		if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (compareSmall(temp, 1)) && (gameState[11900] < 59)) {
			subSmall(temp, 1);
			gameState[11900]++;
			pushBig(temp, 11800);
		} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[11900] > 0)) {
			gameState[11900]--;
			addSmall(temp, 1);
			pushBig(temp, 11800);
		} else if ((57 < x) && (x < 140) && (140 < y) && (y < 173)) {
			if (gameState[11901]) {
				gameState[11901] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11901]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 260) && (180 < y) && (y < 213)) {
			if (gameState[11902]) {
				gameState[11902] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11902]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((32 < x) && (x < 53) && (225 < y) && (y < 243) && (compareSmall(temp, 1)) && gameState[1000] && ((gameState[11903] < 3) || ((gameState[11903] < 5) && (gameState[1000] > 1)))) {
			subSmall(temp, 1);
			gameState[11903]++;
			pushBig(temp, 11800);
		} else if ((32 < x) && (x < 53) && (242 < y) && (y < 260) && (gameState[11903] > 0) && gameState[1000]) {
			gameState[11903]--;
			addSmall(temp, 1);
			pushBig(temp, 11800);
		} else if ((57 < x) && (x < 225) && (260 < y) && (y < 293)) {
			if (gameState[11904]) {
				gameState[11904] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11904]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 140) && (300 < y) && (y < 333)) {
			if (gameState[11905]) {
				gameState[11905] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11905]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 155) && (340 < y) && (y < 373)) {
			if (gameState[11906]) {
				gameState[11906] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11906]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 250) && (380 < y) && (y < 413)) {
			if (gameState[11907]) {
				gameState[11907] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11907]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 199) && (420 < y) && (y < 453)) {
			if (gameState[11908]) {
				gameState[11908] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11908]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((57 < x) && (x < 245) && (460 < y) && (y < 493)) {
			if (gameState[11909]) {
				gameState[11909] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11909]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((457 < x) && (x < 585) && (100 < y) && (y < 133)) {
			if (gameState[11910]) {
				gameState[11910] = 0;
				addSmall(temp, 1);
				pushBig(temp, 11800);
			} else if (compareSmall(temp, 1)) {
				gameState[11910]++;
				subSmall(temp, 1);
				pushBig(temp, 11800);
			}
		} else if ((432 < x) && (x < 453) && (145 < y) && (y < 163) && compareSmall(temp, 1) && (gameState[11911] < 3)) {
			subSmall(temp, 1);
			gameState[11911]++;
			pushBig(temp, 11800);
		} else if ((432 < x) && (x < 453) && (162 < y) && (y < 180) && (gameState[11911] > 0)) {
			gameState[11911]--;
			addSmall(temp, 1);
			pushBig(temp, 11800);
		} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570) && gameState[1000]) {
			currentview = 98;
		} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
			currentview = 1;
			postNew();
		}
	} else if (currentview == 98) {
		var temp = new bigInt();
		pullBig(temp, 21800);
		if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[21900] < 59)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[21900]++;
				pushBig(temp, 21800);
			}
		} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[21900] > 0)) {
			gameState[21900]--;
			addSmall(temp, 1);
			pushBig(temp, 21800);
		} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[21901] < 2)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[21901]++;
				pushBig(temp, 21800);
			}
		} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[21901] > 0)) {
			gameState[21901]--;
			addSmall(temp, 1);
			pushBig(temp, 21800);
		} else if ((32 < x) && (x < 53) && (185 < y) && (y < 203) && (gameState[21902] < 5)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[21902]++;
				pushBig(temp, 21800);
			}
		} else if ((32 < x) && (x < 53) && (202 < y) && (y < 220) && (gameState[21902] > 0)) {
			gameState[21902]--;
			addSmall(temp, 1);
			pushBig(temp, 21800);
		} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
			if (gameState[21903]) {
				gameState[21903] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21903]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((57 < x) && (x < 207) && (260 < y) && (y < 293)) {
			if (gameState[21904]) {
				gameState[21904] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21904]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((57 < x) && (x < 265) && (300 < y) && (y < 333)) {
			if (gameState[21905]) {
				gameState[21905] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21905]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((57 < x) && (x < 215) && (340 < y) && (y < 373) && (gameState[1000] > 1)) {
			if (gameState[21906]) {
				gameState[21906] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21906]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((57 < x) && (x < 200) && (380 < y) && (y < 413) && (gameState[1000] > 2)) {
			if (gameState[21907]) {
				gameState[21907] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21907]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((57 < x) && (x < 240) && (420 < y) && (y < 453)) {
			if (gameState[21908]) {
				gameState[21908] = 0;
				addSmall(temp, 1);
				pushBig(temp, 21800);
			} else if (compareSmall(temp, 1)) {
				gameState[21908]++;
				subSmall(temp, 1);
				pushBig(temp, 21800);
			}
		} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
			if (gameState[1000] == 1) {
				currentview = 99;
			} else {
				currentview = 97;
			}
		} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
			currentview = 1;
			postNew();
		}
	} else if (currentview == 97) {
		var temp = new bigInt();
		pullBig(temp, 31800);
		if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[31900] < 59)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[31900]++;
				pushBig(temp, 31800);
			}
		} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[31900] > 0)) {
			gameState[31900]--;
			addSmall(temp, 1);
			pushBig(temp, 31800);
		} else if ((57 < x) && (x < 340) && (140 < y) && (y < 173)) {
			if (gameState[31901]) {
				gameState[31901] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31901]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 290) && (180 < y) && (y < 213)) {
			if (gameState[31902]) {
				gameState[31902] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31902]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 303) && (220 < y) && (y < 253)) {
			if (gameState[31903]) {
				gameState[31903] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31903]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 185) && (260 < y) && (y < 293)) {
			if (gameState[31904]) {
				gameState[31904] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31904]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 260) && (300 < y) && (y < 333)) {
			if (gameState[31905]) {
				gameState[31905] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31905]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 275) && (340 < y) && (y < 373)) {
			if (gameState[31906]) {
				gameState[31906] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31906]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 280) && (380 < y) && (y < 413)) {
			if (gameState[31907]) {
				gameState[31907] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31907]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 295) && (420 < y) && (y < 453) && (gameState[1000] > 2)) {
			if (gameState[31908]) {
				gameState[31908] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31908]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((57 < x) && (x < 270) && (460 < y) && (y < 493)) {
			if (gameState[31909]) {
				gameState[31909] = 0;
				addSmall(temp, 1);
				pushBig(temp, 31800);
			} else if (compareSmall(temp, 1)) {
				gameState[31909]++;
				subSmall(temp, 1);
				pushBig(temp, 31800);
			}
		} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
			if (gameState[1000] == 2) {
				currentview = 99;
			} else {
				currentview = 96;
			}
		} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
			currentview = 1;
			postNew();
		}
	} else if (currentview == 96) {
		var temp = new bigInt();
		pullBig(temp, 41800);
		if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[41900] < 59)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[41900]++;
				pushBig(temp, 41800);
			}
		} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[41900] > 0)) {
			gameState[41900]--;
			addSmall(temp, 1);
			pushBig(temp, 41800);
		} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[41901] < 8)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[41901]++;
				pushBig(temp, 41800);
			}
		} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[41901] > 0)) {
			gameState[41901]--;
			addSmall(temp, 1);
			pushBig(temp, 41800);
		} else if ((57 < x) && (x < 180) && (180 < y) && (y < 213)) {
			if (gameState[41902]) {
				gameState[41902] = 0;
				addSmall(temp, 1);
				pushBig(temp, 41800);
			} else if (compareSmall(temp, 1)) {
				gameState[41902]++;
				subSmall(temp, 1);
				pushBig(temp, 41800);
			}
		} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
			if (gameState[41903]) {
				gameState[41903] = 0;
				addSmall(temp, 1);
				pushBig(temp, 41800);
			} else if (compareSmall(temp, 1)) {
				gameState[41903]++;
				subSmall(temp, 1);
				pushBig(temp, 41800);
			}
		} else if ((57 < x) && (x < 220) && (260 < y) && (y < 293)) {
			if (gameState[41904]) {
				gameState[41904] = 0;
				addSmall(temp, 1);
				pushBig(temp, 41800);
			} else if (compareSmall(temp, 1)) {
				gameState[41904]++;
				subSmall(temp, 1);
				pushBig(temp, 41800);
			}
		} else if ((57 < x) && (x < 215) && (300 < y) && (y < 333)) {
			if (gameState[41905]) {
				gameState[41905] = 0;
				addSmall(temp, 1);
				pushBig(temp, 41800);
			} else if (compareSmall(temp, 1)) {
				gameState[41905]++;
				subSmall(temp, 1);
				pushBig(temp, 41800);
			}
		} else if ((32 < x) && (x < 53) && (345 < y) && (y < 363) && (gameState[41906] < 2)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[41906]++;
				pushBig(temp, 41800);
			}
		} else if ((32 < x) && (x < 53) && (362 < y) && (y < 380) && (gameState[41906] > 0)) {
			gameState[41906]--;
			addSmall(temp, 1);
			pushBig(temp, 41800);
		} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
			if (gameState[1000] == 3) {
				currentview = 99;
			} else {
				currentview = 95;
			}
		} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
			currentview = 1;
			postNew();
		}
	} else if (currentview == 95) {
		var temp = new bigInt();
		pullBig(temp, 51800);
		if ((32 < x) && (x < 53) && (105 < y) && (y < 123) && (gameState[51900] < 59)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[51900]++;
				pushBig(temp, 51800);
			}
		} else if ((32 < x) && (x < 53) && (122 < y) && (y < 140) && (gameState[51900] > 0)) {
			gameState[51900]--;
			addSmall(temp, 1);
			pushBig(temp, 51800);
		} else if ((32 < x) && (x < 53) && (145 < y) && (y < 163) && (gameState[51901] < 2)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[51901]++;
				pushBig(temp, 51800);
			}
		} else if ((32 < x) && (x < 53) && (162 < y) && (y < 180) && (gameState[51901] > 0)) {
			gameState[51901]--;
			addSmall(temp, 1);
			pushBig(temp, 51800);
		} else if ((57 < x) && (x < 230) && (180 < y) && (y < 213)) {
			if (gameState[51902]) {
				gameState[51902] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51902]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((57 < x) && (x < 180) && (220 < y) && (y < 253)) {
			if (gameState[51903]) {
				gameState[51903] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51903]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((57 < x) && (x < 190) && (260 < y) && (y < 293)) {
			if (gameState[51904]) {
				gameState[51904] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51904]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((57 < x) && (x < 210) && (300 < y) && (y < 333)) {
			if (gameState[51905]) {
				gameState[51905] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51905]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((57 < x) && (x < 190) && (340 < y) && (y < 373)) {
			if (gameState[51906]) {
				gameState[51906] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51906]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((32 < x) && (x < 53) && (385 < y) && (y < 403) && (gameState[51907] < 2)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[51907]++;
				pushBig(temp, 51800);
			}
		} else if ((32 < x) && (x < 53) && (402 < y) && (y < 420) && (gameState[51907] > 0)) {
			gameState[51907]--;
			addSmall(temp, 1);
			pushBig(temp, 51800);
		} else if ((32 < x) && (x < 53) && (425 < y) && (y < 443) && (gameState[51908] < 2)) {
			if (compareSmall(temp, 1)) {
				subSmall(temp, 1);
				gameState[51908]++;
				pushBig(temp, 51800);
			}
		} else if ((32 < x) && (x < 53) && (442 < y) && (y < 460) && (gameState[51908] > 0)) {
			gameState[51908]--;
			addSmall(temp, 1);
			pushBig(temp, 51800);
		} else if ((57 < x) && (x < 170) && (460 < y) && (y < 493)) {
			if (gameState[51909]) {
				gameState[51909] = 0;
				addSmall(temp, 1);
				pushBig(temp, 51800);
			} else if (compareSmall(temp, 1)) {
				gameState[51909]++;
				subSmall(temp, 1);
				pushBig(temp, 51800);
			}
		} else if ((300 < x) && (x < 500) && (520 < y) && (y < 570)) {
			if (gameState[1000] == 4) {
				currentview = 99;
			} else {

			}
		} else if ((550 < x) && (x < 750) && (520 < y) && (y < 570)) {
			currentview = 1;
			postNew();
		}
	} else if (currentview == 101) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550) && gameState[1000]) {
			currentview = 102;
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 201;
		}
	} else if (currentview == 102) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 1) {
				currentview = 101;
			} else {
				currentview = 103;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 202;
		}
	} else if (currentview == 103) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 2) {
				currentview = 101;
			} else {
				currentview = 104;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 203;
		}
	} else if (currentview == 104) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 3) {
				currentview = 101;
			} else {
				currentview = 105;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 204;
		}
	} else if (currentview == 105) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 4) {
				currentview = 101;
			} else {

			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 205;
		}
	} else if (currentview == 201) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550) && gameState[1000]) {
			currentview = 202;
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 101;
		}
	} else if (currentview == 202) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 1) {
				currentview = 201;
			} else {
				currentview = 203;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 102;
		}
	} else if (currentview == 203) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 2) {
				currentview = 201;
			} else {
				currentview = 204;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 103;
		}
	} else if (currentview == 204) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 3) {
				currentview = 201;
			} else {
				currentview = 205;
			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 104;
		}
	} else if (currentview == 205) {
		if ((300 < x) && (x < 500) && (500 < y) && (y < 550)) {
			if (gameState[1000] == 4) {
				currentview = 201;
			} else {

			}
		} else if ((50 < x) && (x < 250) && (500 < y) && (y < 550)) {
			currentview = 105;
		}
	}
	if ((y < 25) && ((currentview > 99) || (currentview < 50))) {
		if (775 < x) {
			currentview = 0;
/* 			saveGame(); */
			saveLocal();
			savetimer = 60;
			ihighlightt = 4;
		} else if ((750 < x) && gameState[1000]) {
			currentview = 1;
			ihighlightt = 4;
		} else if ((725 < x) && gameState[1000]) {
			currentview = 2;
			ihighlightt = 4;
		} else if ((700 < x) && (gameState[1000] > 1)) {
			currentview = 3;
			ihighlightt = 4;
		} else if ((675 < x) && (gameState[1000] > 2)) {
			currentview = 4;
			ihighlightt = 4;
		} else if ((650 < x) && (gameState[1000] > 3)) {
			currentview = 5;
			ihighlightt = 4;
		}
	}
	userMove(event);
}

start0();