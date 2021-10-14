const femalechar = [
    `https://cdn.discordapp.com/attachments/896994893778542602/896995402526654474/PicsArt_10-11-12.39.21.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/896995886759039016/PicsArt_10-11-12.41.16.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/896996657386893372/PicsArt_10-11-12.44.21.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/896997788037025812/PicsArt_10-11-12.48.49.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/896999982123610152/PicsArt_10-11-12.57.27.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897000528372965426/PicsArt_10-11-12.59.32.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897001349584134154/PicsArt_10-11-01.02.52.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897001868134338600/PicsArt_10-11-01.05.02.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897003145316687922/PicsArt_10-11-01.09.54.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897003916141666334/PicsArt_10-11-01.13.07.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897004321038811166/PicsArt_10-11-01.14.39.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897004875039260682/PicsArt_10-11-01.16.56.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897005641783181322/PicsArt_10-11-01.19.59.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897011525875798036/PicsArt_10-11-01.43.23.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897012066068594698/PicsArt_10-11-01.45.30.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897012850600575016/PicsArt_10-11-01.48.39.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897013381742092348/PicsArt_10-11-01.50.48.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897013986300661802/PicsArt_10-11-01.53.11.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897014501235388416/PicsArt_10-11-01.55.12.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897015693537587240/PicsArt_10-11-02.00.00.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897016278714314802/PicsArt_10-11-02.02.18.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897016752452562944/PicsArt_10-11-02.04.14.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897017304292937778/PicsArt_10-11-02.06.22.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897018097381285968/PicsArt_10-11-02.09.35.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897018460104720404/PicsArt_10-11-02.11.01.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897018794042609694/PicsArt_10-11-02.12.21.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897019374228111390/PicsArt_10-11-02.14.36.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897019808980279296/PicsArt_10-11-02.16.23.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897020209053982760/PicsArt_10-11-02.17.58.png`,
    `https://cdn.discordapp.com/attachments/896994893778542602/897020523190558740/PicsArt_10-11-02.19.12.png`
]

const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () =>
generaterandompic(femalechar));

function generaterandompic(array){
    let hasilrandom = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[hasilrandom]);
    image.setAttribute("width", "30%");
    image.setAttribute("height", "30%");
}
