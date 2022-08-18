const player = {
    name: "Darwin" + " Nunes",
    pt: 1,
    height: 185,
    nat: "Uruguay"
}

console.log(player); // Access a object
console.log(player.name); // 1 Access a property of objective
console.log(player["pt"]); // 2 Access a property of objective

player.position = "FW";
player.pt = player.pt + 10;
console.log(player);





