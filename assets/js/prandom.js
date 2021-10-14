const malechar = [
    `https://cdn.discordapp.com/attachments/892617228653068291/896949306613973062/PicsArt_10-11-09.36.09.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896968777315536896/PicsArt_10-11-10.53.31.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896969808048947211/PicsArt_10-11-10.57.31.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896970512725606440/PicsArt_10-11-11.00.29.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896973520838475806/PicsArt_10-11-11.12.25.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896977053721718794/PicsArt_10-11-11.26.24.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896977708414816256/PicsArt_10-11-11.28.46.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896983260792516638/PicsArt_10-11-11.51.08.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896987587619717131/PicsArt_10-11-12.08.20.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896988278971043850/PicsArt_10-11-12.11.05.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896988776713293854/PicsArt_10-11-12.13.03.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896989297226436648/PicsArt_10-11-12.15.07.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896989724244320347/PicsArt_10-11-12.16.50.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896990455185678366/PicsArt_10-11-12.19.37.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896990935748055060/PicsArt_10-11-12.21.36.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896991373801164800/PicsArt_10-11-12.23.22.png`,
    `https://cdn.discordapp.com/attachments/892617228653068291/896991853801521223/PicsArt_10-11-12.25.14.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897020843769602080/PicsArt_10-11-02.20.29.png`
]

const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () =>
generaterandompic(malechar));

function generaterandompic(array){
    let hasilrandom = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[hasilrandom]);
    image.setAttribute("width", "30%");
    image.setAttribute("height", "30%");
}
