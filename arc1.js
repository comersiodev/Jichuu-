const bgm =
document.getElementById("bgm");

const notif =
document.getElementById("notif");

document.addEventListener("click",()=>{

bgm.volume = 0.35;

bgm.play().catch(()=>{});

},{once:true});

function playNotif(){

notif.currentTime = 0;

notif.volume = 0.6;

notif.play().catch(()=>{});

}

const CALL_NEUTRAL    =[0,0];
const CALL_SMILE      =[1,0];
const CALL_LAUGH      =[2,0];

const CALL_BLUSH      =[0,1];
const CALL_AWKWARD    =[1,1];
const CALL_SIDE_SMIRK =[2,1];

const CALL_SOFT_SMILE =[0,2];
const CALL_LOOK_UP    =[1,2];
const CALL_THINKING   =[2,2];

const CALL_SAD        =[0,3];
const CALL_SHOCKED    =[1,3];
const CALL_ANNOYED    =[2,3];

const CALL_ANGRY      =[0,4];
const CALL_TIRED      =[1,4];
const CALL_YAWN       =[2,4];

const CALL_POUT       =[0,5];
const CALL_WAVE       =[1,5];
const CALL_HAPPY_END  =[2,5];

// =======================
// STORY ARC 1 (FIX POINT)
// =======================

const story = [
    {sprite:CALL_NEUTRAL, name:"SoYaa", text:"Halooo... akhirnya diangkat juga."}, // 0
    {sprite:CALL_SMILE, name:"SoYaa", text:"Aku kira kamu lagi sibuk."}, // 1
    { // 2
        sprite:CALL_NEUTRAL,
        name:"SoYaa",
        text:"Hari ini gimana?",
        choices:[
            {text:"Lumayan baik.", next:3, point:2},
            {text:"Capek banget.", next:4, point:1}
        ]
    },
    {sprite:CALL_SMILE, name:"SoYaa", text:"Syukurlah kalau gitu.", next:5}, // 3 - Langsung lompat ke 5
    {sprite:CALL_SAD, name:"SoYaa", text:"Hmm... berat ya hari ini.", next:5}, // 4 - Langsung lompat ke 5

    {sprite:CALL_SOFT_SMILE, name:"SoYaa", text:"Tapi sekarang udah malam. Bisa santai dulu."}, // 5
    {sprite:CALL_LOOK_UP, name:"SoYaa", text:"Aku juga baru selesai semua urusan."}, // 6
    {sprite:CALL_THINKING, name:"SoYaa", text:"Makanya langsung kepikiran buat nelpon."}, // 7

    { // 8
        sprite:CALL_AWKWARD,
        name:"SoYaa",
        text:"Eh... ganggu nggak sih?",
        choices:[
            {text:"Nggak kok.", next:9, point:3},
            {text:"Sedikit.", next:10, point:-3}
        ]
    },
    {sprite:CALL_BLUSH, name:"SoYaa", text:"Untunglah.", next:11}, // 9 - Lompat ke 11
    {sprite:CALL_POUT, name:"SoYaa", text:"Ih jahat banget jawabnya.", next:11}, // 10 - Lompat ke 11

    {sprite:CALL_LAUGH, name:"SoYaa", text:"Tapi gapapa, aku maafin."}, // 11
    {sprite:CALL_SOFT_SMILE, name:"SoYaa", text:"Ngomong-ngomong..."}, // 12

    { // 13
        sprite:CALL_THINKING,
        name:"SoYaa",
        text:"Kalau sekarang bisa pergi ke mana aja, mau ke mana?",
        choices:[
            {text:"Pantai.", next:14, point:2},
            {text:"Gunung.", next:15, point:2},
            {text:"Rumah aja.", next:16, point:0}
        ]
    },
    {sprite:CALL_SMILE, name:"SoYaa", text:"Pantai malam emang enak sih.", next:17}, // 14
    {sprite:CALL_LOOK_UP, name:"SoYaa", text:"Gunung juga seru buat kabur dari rame.", next:17}, // 15
    {sprite:CALL_LAUGH, name:"SoYaa", text:"Jawaban paling realistis sejagat raya.", next:17}, // 16

    {sprite:CALL_SOFT_SMILE, name:"SoYaa", text:"Aku mungkin pilih tempat yang tenang."}, // 17
    {sprite:CALL_NEUTRAL, name:"SoYaa", text:"Kadang dunia terlalu berisik."}, // 18
    {sprite:CALL_THINKING, name:"SoYaa", text:"Makanya sesekali pengen istirahat dari semuanya."}, // 19

    { // 20
        sprite:CALL_LOOK_UP,
        name:"SoYaa",
        text:"Kai, menurut kamu hal kecil yang bikin bahagia itu apa?",
        choices:[
            {text:"Makanan.", next:21, point:1},
            {text:"Tidur.", next:22, point:1},
            {text:"Orang tertentu.", next:23, point:5}
        ]
    },
    {sprite:CALL_LAUGH, name:"SoYaa", text:"Jawaban rakyat jelata yang jujur.", next:25}, // 21
    {sprite:CALL_YAWN, name:"SoYaa", text:"Aku juga suka tidur sih...", next:25}, // 22
    {sprite:CALL_BLUSH, name:"SoYaa", text:"Orang tertentu ya...?"}, // 23 - Biarkan lanjut ke 24
    {sprite:CALL_AWKWARD, name:"SoYaa", text:"Aku pura-pura nggak ngerti aja deh.", next:25}, // 24

    {sprite:CALL_SOFT_SMILE, name:"SoYaa", text:"Tapi makasih."}, // 25
    {sprite:CALL_WAVE, name:"SoYaa", text:"Ngobrol gini ternyata lumayan menyenangkan."}, // 26
    {sprite:CALL_NEUTRAL, name:"SoYaa", text:"Padahal awalnya cuma mau nelpon bentar."}, // 27
    {sprite:CALL_SMILE, name:"SoYaa", text:"Eh tau-tau udah selama ini aja."}, // 28

    { // 29
        sprite:CALL_SIDE_SMIRK,
        name:"SoYaa",
        text:"Jujur ya.",
        choices:[
            {text:"Apa?", next:30, point:2},
            {text:"Ngeri kalau jujur.", next:31, point:-1}
        ]
    },
    {sprite:CALL_BLUSH, name:"SoYaa", text:"Aku seneng kamu ngangkat telepon tadi.", next:32}, // 30
    {sprite:CALL_LAUGH, name:"SoYaa", text:"HAHAHA bukan pengakuan dosa kok.", next:32}, // 31

    {sprite:CALL_SOFT_SMILE, name:"SoYaa", text:"Kadang hal sederhana aja cukup bikin hari jadi lebih baik."}, // 32
    {sprite:CALL_TIRED, name:"SoYaa", text:"Tapi sekarang aku mulai ngantuk."}, // 33
    {sprite:CALL_YAWN, name:"SoYaa", text:"Haaah..."}, // 34

    {sprite:CALL_HAPPY_END, name:"SoYaa", text:"Good night, Kai. Jangan tidur terlalu malam ya. 👋"} // 35
];

// =======================
// ENGINE + AFFECTION
// =======================

let current = 0;
let affection = 0;

const spriteEl = document.getElementById("sprite");
const nameEl = document.getElementById("name");
const textEl = document.getElementById("dialogue");
const choiceBox = document.getElementById("choices");
const pointBubble = document.getElementById("pointBubble");

function updatePoint(){
    if(pointBubble){
        // MENGGUNAKAN BACKTICK (`) BUKAN KUTIP GANDA (")
        pointBubble.innerHTML = `💖 ${affection}`; 
    }
}

const COLS = 3;
const ROWS = 6;

function setExpression(frame){

spriteEl.style.backgroundPosition =
`${(frame[0]/(COLS-1))*100}% ${(frame[1]/(ROWS-1))*100}%`;

}

function showEnding(){
    choiceBox.innerHTML = "";
    nameEl.textContent = "ENDING";

    if(affection >= 10){
        textEl.innerHTML = "💖 SWEET DREAMS<br><br>Kai tertidur sambil memikirkan SoYaa.";
    } else if(affection >= 5){
        textEl.innerHTML = "😴 SLEEP PEACEFULLY<br><br>Kai tidur dengan tenang malam itu.";
    } else {
        textEl.innerHTML = "🌙 THINKING ABOUT HER<br><br>SoYaa terus teringat di kepalanya.";
    }
}

function showScene(){

playNotif();

const scene = story[current];

setExpression(scene.sprite);

nameEl.textContent = scene.name;
textEl.textContent = scene.text;

    choiceBox.innerHTML = "";

    if(scene.choices){
        scene.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.textContent = choice.text;
            
            btn.onclick = () => {
                affection += (choice.point || 0);
                updatePoint();
                current = choice.next;
                showScene();
            };
            choiceBox.appendChild(btn);
        });
    } else {
        const btn = document.createElement("button");
        btn.textContent = "Next";
        
        btn.onclick = () => {
            // PERBAIKAN: Cek apakah ada tujuan 'next' spesifik (berguna saat menutup cabang dialog)
            if (scene.next !== undefined) {
                current = scene.next;
                showScene();
            } else if (current < story.length - 1) {
                current++;
                showScene();
            } else {
                showEnding();
            }
        };
        choiceBox.appendChild(btn);
    }
}

window.onload = () => {
    updatePoint();
    showScene();
};
