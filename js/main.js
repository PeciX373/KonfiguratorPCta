const summaryCompHandler = document.getElementById("summaryComp")

let psu = [
    {
        id: 0,
        name: "SilentiumPC Vero L3 500W",
        price: 219,
        img: "zasilacz1.jpg",
    },
    {
        id: 1,
        name: "be quiet! Straight Power 11 1000W",
        price: 850,
        img: "zasilacz2.jpg"
    },
    {
        id: 2,
        name: "Thermaltake Smart BM1 600W",
        price: 299,
        img: "zasilacz3.jpg"
    },
    {
        id: 3,
        name: "Corsair SF450 450W",
        price: 419,
        img: "zasilacz4.jpg"
    },
]
let ram = [
    {
        id: 0,
        name: "G.Skill Aegis, DDR4, 16 GB, 3000MHz, CL16",
        price: 279,
        img: "ram1.jpg"
    },
    {
        id: 1,
        name: "G.Skill Ripjaws V, DDR4, 16 GB, 3200MHz, CL16",
        price: 305,
        img: "Ram2.jpg"
    },
    {
        id: 2,
        name: "GoodRam IRDM X, DDR4, 16 GB, 3000MHz, CL16",
        price: 299,
        img: "ram3.jpg"
    },
    {
        id: 3,
        name: "Patriot Viper 4, DDR4, 16 GB, 3200MHz, CL16",
        price: 299,
        img: "ram4.jpg"
    },
]
let casef = [
    {
        id: 0,
        name: "SilentiumPC Signum SG7V TG",
        price: 329,
        img: "obudowa1.jpg"
    },
    {
        id: 1,
        name: "Genesis Irid 400 ARGB",
        price: 309,
        img: "obudowa2.jpg"
    },
    {
        id: 2,
        name: "be quiet! Silent Base 601",
        price: 536,
        img: "obudowa3.jpg"
    },
    {
        id: 3,
        name: "Fractal Design Define R5",
        price: 519,
        img: "obudowa4.jpg"
    },
]
let gpu = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1050Ti Windforce OC 4GB GDDR5",
        price: 739,
        img: "gpu1.jpg"
    },
    {
        id: 2,
        name: "MSI GeForce GTX 1650 GAMING X 4GB GDDR5",
        price: 1100,
        img: "gpu2.jpg"
    },
    {
        id: 3,
        name: "XFX Radeon RX 580 GTS XXX OC+ 8GB GDDR56",
        price: 1039,
        img: "gpu3.jpg"
    },
    {
        id: 4,
        name: "Palit GeForce RTX 3090 GameRock OC 24GB GDDR6X",
        price: 10590,
        img: "gpu4.jpg"
    },
    {
        id: 5,
        name: "Asus ROG Strix GeForce RTX 3070 Gaming OC 8GB GDDR6X",
        price: 3339,
        img: "gpu5.jpg"
    },
    {
        id: 6,
        name: "Gigabyte Radeon RX 6800 16GB GDDR6",
        price: 3939,
        img: "gpu6.jpg"
    },
]
let cpu = [
    {
        id: 1,
        name: "Intel Core i5-10400F, 2.9GHz, 12 MB, BOX",
        price: 699,
        socket: "1200",
        img: "cpu1.jpg"
    },
    {
        id: 2,
        name: "Intel Core i7-10700K, 3.8GHz, 16 MB, BOX",
        price: 1689,
        socket: "1200",
        img: "cpu2.jpg"
    },
    {
        id: 3,
        name: "AMD Ryzen 5 3600, 3.6GHz, 32 MB, BOX",
        price: 1099,
        socket: "AM4",
        img: "cpu3.jpg"
    },
    {
        id: 4,
        name: "AMD Ryzen 3 3100, 3.6GHz, 16 MB, BOX",
        price: 549,
        socket: "AM4",
        img: "cpu4.jpg"
    },
    {
        id: 5,
        name: "Intel Core i3-10100F, 3.6GHz, 6 MB, BOX",
        price: 409,
        socket: "1200",
        img: "cpu5.jpg"
    },
    {
        id: 6,
        name: "Intel Core i5-9600KF, 3.7GHz, 9MB, BOX",
        price: 869,
        socket: "1151",
        img: "cpu6.jpg"
    },
]
let mb = [
    {
        id: 1,
        name: "Gigabyte B450 AORUS ELITE",
        price: 409,
        socket: "AM4",
        img: "b450ae.jpg"
    },
    {
        id: 2,
        name: "Gigabyte X570 GAMING X",
        price: 770,
        socket: "AM4",
        img: "gx57gx.jpg"
    },
    {
        id: 3,
        name: "Gigabyte GA-A320M-S2H",
        price: 240,
        socket: "AM4",
        img: "ga32ms2.jpg"
    },
    {
        id: 4,
        name: "MSI MPG X570 GAMING PLUS",
        price: 780,
        socket: "AM4",
        img: "mmx570gp.jpg"
    },
    {
        id: 5,
        name: "Gigabyte Z390 AORUS PRO",
        price: 830,
        socket: "1151",
        img: "gz39ap.jpg"
    },
    {
        id: 6,
        name: "MSI MPG X570 GAMING EDGE WIFI",
        price: 1000,
        socket: "AM4",
        img: "mmx57gew.jpg"
    },
    {
        id: 7,
        name: "Gigabyte B550 AORUS ELITE",
        price: 660,
        socket: "AM4",
        img: "gb55ae.jpg"
    },
    {
        id: 8,
        name: "MSI B460 TOMAHAWK",
        price: 600,
        socket: "1200",
        img: "mb46t.jpg"
    },
]
let ssd = [
    {
        id: 0,
        name: "Lexar NM610 500 GB M.2 2280 PCI-E x4 Gen3 NVMe",
        price: 249,
        img: "ssd1.jpg"
    },
    {
        id: 1,
        name: "Western Digital Blue 500 GB 2.5\" SATA III",
        price: 279,
        img: "ssd2.jpg"
    },
    {
        id: 2,
        name: "Samsung 860 EVO 1 TB 2.5\" SATA III",
        price: 549,
        img: "ssd3.jpg"
    },
    {
        id: 3,
        name: "ADATA XPG SX8200 PRO 1 TB M.2 2280 PCI-E x4 Gen3 NVMe",
        price: 579,
        img: "ssd4.jpg"
    },
]
let biurkof = [
    {
        id: 0,
        name: "Ultradesk Level niebieskie",
        price: 1199,
        img: "biurko1.jpg"
    },
    {
        id: 1,
        name: "PRO-GAMER gamingowe D-2000",
        price: 599,
        img: "biurko2.jpg"
    },
    {
        id: 2,
        name: "HUZARO Hero 2.0",
        price: 279,
        img: "biurko3.jpg"
    },
    {
        id: 3,
        name: "Daming Biurko gamingowe narożne - 202x136x2,8cm model 3",
        price: 1199,
        img: "biurko4.jpg"
    },
]
let podkladka = [
    {
        id: 0,
        name: "Genesis Carbon 500 Maxi Flash",
        price: 65,
        img: "podkladka1.jpg"
    },
    {
        id: 1,
        name: "Logitech G640",
        price: 158,
        img: "podkladka2.jpg"
    },
    {
        id: 2,
        name: "A4Tech XGame X7-500MP",
        price: 25,
        img: "podkladka3.jpg"
    },
    {
        id: 3,
        name: "Corsair MM300 Extended",
        price: 124,
        img: "podkladka4.jpg"
    },
]
let keyboard = [
    {
        id: 0,
        name: "Genesis Thor 300 RGB",
        price: 229,
        img: "klawa1.jpg"
    },
    {
        id: 1,
        name: "Corsair K55 RGB",
        price: 245,
        img: "klawa2.jpg"
    },
    {
        id: 2,
        name: "SPC Gear GK540 Magna",
        price: 244,
        img: "klawa3.jpg"
    },
    {
        id: 3,
        name: "Logitech G213 Prodigy",
        price: 224,
        img: "klawa4.jpg"
    },
]
let fotel = [
    {
        id: 0,
        name: "SENSE7 Spellcaster czarno-czerwony",
        price: 529,
        img: "fotel1.jpg"
    },
    {
        id: 1,
        name: "PRO-GAMER Aguri+ Czarno-szary",
        price: 638,
        img: "fotel2.jpg"
    },
    {
        id: 2,
        name: "SPC Gear SR300 V2 Czarny",
        price: 699,
        img: "fotel3.jpg"
    },
    {
        id: 3,
        name: "MSI CH120",
        price: 979,
        img: "fotel4.jpg"
    },
]
let myszka = [
    {
        id: 0,
        name: "Genesis Xenon 800",
        price: 219,
        img: "myszka1.jpg"
    },
    {
        id: 1,
        name: "Logitech G102 Lightsync czarna",
        price: 109,
        img: "myszka2.jpg"
    },
    {
        id: 2,
        name: "SPC Gear LIX Plus",
        price: 168,
        img: "myszka3.jpg"
    },
    {
        id: 3,
        name: "Logitech G502 Hero",
        price: 229,
        img: "myszka4.jpg"
    },
]
var cart = [
    {
        name: 'mainboard',
        price: 0
    },
    {
        name: 'cpu',
        price: 0
    },
    {
        name: 'gpu',
        price: 0
    },
    {
        name: 'ram',
        price: 0
    },
    {
        name: 'psu',
        price: 0
    },
    {
        name: 'casef',
        price: 0
    },
    {
        name: 'ssd',
        price: 0
    },
    {
        name: 'biurkof',
        price: 0
    },
    {
        name: 'podkladka',
        price: 0
    },
    {
        name: 'keyboard',
        price: 0
    },
    {
        name: 'fotel',
        price: 0
    },
    {
        name: 'myszka',
        price: 0
    },
]
function addOpt(elem, optValue, textOpt){
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("name", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}
function sumAll(cart){
    console.log("Ilość elementów w koszyku: "+cart.length)

    let cena = 0;

    for(let i=0; i<cart.length; i++)
        cena = cena + cart[i].price

    return cena;
}


function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('name');
    console.log("Wybrane element ma ID: "+strAtt);

    const summaryMB = document.getElementById("summaryMB");
    const summaryCPU = document.getElementById("summaryCPU");
    const summaryGPU = document.getElementById("summaryGPU");
    const summaryPSU = document.getElementById("summaryPSU");
    const summaryRAM = document.getElementById("summaryRAM");
    const summaryCASEF = document.getElementById("summaryCASEF");
    const summarySSD = document.getElementById("summarySSD");
    const summaryBIURKOF = document.getElementById("summaryBIURKOF");
    const summaryPODKLADKA = document.getElementById("summaryPODKLADKA");
    const summaryKEYBOARD = document.getElementById("summaryKEYBOARD");
    const summaryMYSZKA = document.getElementById("summaryMYSZKA");
    const summaryFOTEL = document.getElementById("summaryFOTEL");

    if (SelectId == "mb") {
        summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt - 1].img+"'></td><td>"+mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price + "zł</td>" + "<td>" + "Socket" + "</td><td>" + mb[strAtt - 1].socket + "</td>"
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        cart[0].name = mb[strAtt - 1].socket
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt - 1].img+"'></td><td>"+cpu[strAtt - 1].name + "</td><td>" + cpu[strAtt - 1].price + "zł</td>" + "<td>" + "Socket" + "</td><td>" + mb[strAtt - 1].socket + "</td>"
        cart[1].price = cpu[strAtt - 1].price
        cart[1].name = cpu[strAtt - 1].name
        cart[1].name = cpu[strAtt - 1].socket
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerHTML = "<td><img src='img/"+gpu[strAtt - 1].img+"'></td><td>"+gpu[strAtt - 1].name + "</td><td>" + gpu[strAtt - 1].price + "zł</td>"
        cart[2].price = gpu[strAtt - 1].price
        cart[2].name = gpu[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt].img+"'></td><td>"+ram[strAtt].name + "</td><td>" + ram[strAtt].price + "zł</td>"
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    }
    else if (SelectId == "psu") {
        summaryPSU.innerHTML = "<td><img src='img/"+psu[strAtt].img+"'></td><td>"+psu[strAtt].name + "</td><td>" + psu[strAtt].price + "zł </td>"
        cart[4].price = psu[strAtt].price
        cart[4].name = psu[strAtt].name
    }
    else if (SelectId == "casef") {
        summaryCASEF.innerHTML = "<td><img src='img/"+casef[strAtt].img+"'></td><td>"+casef[strAtt].name + "</td><td>" + casef[strAtt].price + "zł</td>"
        cart[5].price = casef[strAtt].price
        cart[5].name = casef[strAtt].name
    }
    else if (SelectId == "ssd") {
        summarySSD.innerHTML = "<td><img src='img/"+ssd[strAtt].img+"'></td><td>"+ ssd[strAtt].name + "</td><td>" + ssd[strAtt].price + "zł</td>"
        cart[6].price = ssd[strAtt].price
        cart[6].name = ssd[strAtt].name
    }
    else if (SelectId == "biurkof") {
        summaryBIURKOF.innerHTML = "<td><img src='img/"+biurkof[strAtt].img+"'></td><td>"+ biurkof[strAtt].name + "</td><td>" + biurkof[strAtt].price + "zł</td>"
        cart[7].price = biurkof[strAtt].price
        cart[7].name = biurkof[strAtt].name
    }
    else if (SelectId == "podkladka") {
        summaryPODKLADKA.innerHTML = "<td><img src='img/"+podkladka[strAtt].img+"'></td><td>"+ podkladka[strAtt].name + "</td><td>" + podkladka[strAtt].price + "zł</td>"
        cart[8].price = podkladka[strAtt].price
        cart[8].name = podkladka[strAtt].name
    }
    else if (SelectId == "myszka") {
        summaryMYSZKA.innerHTML = "<td><img src='img/"+myszka[strAtt].img+"'></td><td>"+ myszka[strAtt].name + "</td><td>" + myszka[strAtt].price + "zł</td>"
        cart[9].price = myszka[strAtt].price
        cart[9].name = myszka[strAtt].name
    }
    else if (SelectId == "fotel") {
        summaryFOTEL.innerHTML = "<td><img src='img/"+fotel[strAtt].img+"'></td><td>"+ fotel[strAtt].name + "</td><td>" + fotel[strAtt].price + "zł</td>"
        cart[10].price = fotel[strAtt].price
        cart[10].name = fotel[strAtt].name
    }
    else if (SelectId == "keyboard") {
        summaryKEYBOARD.innerHTML = "<td><img src='img/"+keyboard[strAtt].img+"'></td><td>"+ keyboard[strAtt].name + "</td><td>" + keyboard[strAtt].price + "zł</td>"
        cart[11].price = keyboard[strAtt].price
        cart[11].name = keyboard[strAtt].name
    }
    else
    {}
    document.getElementById("sumALL").innerHTML="<b>Suma koszyka: "+ sumAll(cart) + "</b>zł"
}



for(let i=0; i<mb.length; i++){
    addOpt("mb", mb[i].id, mb[i].name, mb[i].price)
}
for(let i=0; i<gpu.length; i++){
    addOpt("gpu", gpu[i].id, gpu[i].name, gpu[i].price)
}
for(let i=0; i<cpu.length; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name, cpu[i].price)
}
for(let i=0; i<ram.length; i++){
    addOpt("ram", ram[i].id, ram[i].name, ram[i].price)
}
for(let i=0; i<psu.length; i++){
    addOpt("psu", psu[i].id, psu[i].name, psu[i].price)
}
for(let i=0; i<casef.length; i++){
    addOpt("casef", casef[i].id, casef[i].name, casef[i].price)
}
for(let i=0; i<ssd.length; i++){
    addOpt("ssd", ssd[i].id, ssd[i].name, ssd[i].price)
}
for(let i=0; i<biurkof.length; i++){
    addOpt("biurkof", biurkof[i].id, biurkof[i].name, biurkof[i].price)
}
for(let i=0; i<podkladka.length; i++){
    addOpt("podkladka", podkladka[i].id, podkladka[i].name, podkladka[i].price)
}
for(let i=0; i<myszka.length; i++){
    addOpt("myszka", myszka[i].id, myszka[i].name, myszka[i].price)
}
for(let i=0; i<keyboard.length; i++){
    addOpt("keyboard", keyboard[i].id, keyboard[i].name, keyboard[i].price)
}
for(let i=0; i<fotel.length; i++){
    addOpt("fotel", fotel[i].id, fotel[i].name, fotel[i].price)
}