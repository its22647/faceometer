// --- 0. CLOUDINARY INTEGRATION (Aamir's Free Storage) ---
const cloudName = "dy4kgfvpw";
const uploadPreset = "faceometer_preset"; 

// --- 1. MODES DATA (COMPLETE LIST - NO CUTS) ---
const modes = [
    {
        id: 'roasting-king',
        icon: '😈',
        name: 'The Roasting King',
        comments: [
            "SCAN FAILURE: Screen toot jayegi, itna ghoor ke mat dekho! 💔 Ghoorna band karo!", 
            "ERROR 404: Teri battery low hai, charge ho kar aa 😂",
            "Tum to fazool insan ho mery dost.",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai.",
            "Apny kaam se kaam rakh, chal nikal yahan se 😂",
            "System Error: Aap scan nahi ho paye shakal ki wajah se! 😩",
            "Alert: Shakal pe 'Out of Stock' ka board laga hua hai. Refresh karna bhi bekaar hai! 🚫",
            "Sonay k baad jaldi utha kar, tere laitnay se bed bhi tang ho jata hai ⏰",
            "Mehnat karta reh, aik din khud haar maan jao ge 😂",
            "Tumhari soch ghatiya soch hai",
            "Chal hat oye pagal insan!",
            "Tumhara internet connection tumhare dimagh se zyada tez hai. Sad but true. 💡",
            "Next time try karna. Abhi toh 'Error 404 Not Found' hai! 💀",
            "Tumhari shakal dekh kar kal raat darawna khwab aaya tha. Shakal chupa lo. 👻",
            "Bhaag ja yahan se bandar k mun waly. 😂",
            "System Crash: Mun dho kar aa, phir scan kar ☣️",
            "Same like gadha! 😁",
            "Koi bhi tumhen dekh kar dar jaye ga! 🤔",
            "Zyada smart banne ki koshish mat karo, system janta hai tum copy karte ho. 📝",
            "Aap ko nayi shakal ki zarurat hai 😭",
            "Kam soya kar. Ab tera Brain freeze hogaya! 🥶",
            "Subah ho gayi, uth jao! Tumhary mun pe har waqt 12 q bajy rehty hain?",
            "Hahaha: Tum asliyat mein gadhy jesy ho 😵‍💫",
            "Tumhari khamoshi bhi bahut zyada shor machati hai. Chup raho! 🤫",
            "Jab tum bolty ho, samny wala tauba karta hai, chup raha kar! 😵",
            "Aik number ka ghatiya insan hai tu ⏳",
            "Tu or bandar twins ho kiya? Shakal milti hai tum dono ki 🧐",
            "Chal hat, shaitan k chahchu! 😈",
            "Aapka style purana ho chuka hai, update karo apny aap ko! 💇",
            "Next time filter lagana, baghair filter wali shakal dekh kar dar lagta hai🤦",
            "Tumhary ilawa ghar me or kia cheez faltu hai?",
            "Tumhara bank balance aur tumhari akal dono he gir gaye hain stupid insan. 📉",
            "Tumhara dimagh itna slow chalta hai ki 2G internet bhi tumse tez hai. 🐌",
            "Tery mun ko dekh kar me dar gaya hun yar, sorry bolo mujhy ab 😉",
            "Ye kon hai jis ko dekh kar computer bhi dar gaya 🤣",
            "Tu online na aaya kar, internet band ho jata hai sab ka 😊",
            "SHAME SHAME: Roz subah nahaate nahi ho, ye system janta hai. Chupao mat! 🚿",
            "BATH ALERT: Kabhi to naha liya kar yar!",
            "CRINGE: Tumhari baatein aur tumhari harkatein, dono hi out of date hain. Update karo! 💾",
            "Chal bhaag yahan se, pehly he fazool admi hai tu or ab roast karwany aa gaya 👽",
            "Tumhe khud nahi pata tum kya ho aur kya karna hai. Confused! 🤔",
            "Tumhari jitni tareef ki jaye utni kam hai 🤣",
            "Tu khamosh raha kar, bola na kar",
        ]
    },
    {
        id: 'hyper-burner',
        icon: '🔥',
        name: 'Hyper Burner',
        comments: [
            "Shakal achhi lag rahi hai, (me ne jhoot bola hai)!",
            "Mood off hai? Naha ke aao.",
            "Waqt barbaad mat karo. Kuch kaam karo.",
            "Subah ho gayi, uth jao! Sote rehte ho.",
            "Jhoot bolna band karo. Jhoot bol bol kar thakty nahi ho?",
            "Kam khaya karo 😋.",
            "Shakal se toh nahi lagta... tum insaan ho?",
            "Single he rahoge. Kyun? Khud socho.",
            "Kitni der lagayi taiyar hone mein? Phir bhi cheela hua kareela lag rahy ho...",
            "Aaina dekha hai? Nahi dekhna, warna wo bhi dar jayega.",
            "Abey tu insan hai, lagta to nahi 😂",
            "ERROR 99: Dost kam hain? Reason tum khud ho 🤣",
            "Tum jab gussa hoty ho, samny waly ko hansi aa jati hai.",
            "Tumhara dimagh slow chalta hai. Restart karo.",
            "Fazool insan 😂",
            "Tujhy to koi party me bhi invite nahi karta 😉",
            "Apny kapry pehna karo, aaj bhi kisi se maang kar pehny hain 😁",
            "Tumhari jitni tareef ki jaye utni kam hai 🤣",
            "Koi teri izat q kary ga?",
            "Bhoot lag rahe ho. Bhaag jao yahan se 😘",
            "Rating 0/10. Next time aana."
        ]
    },
    {
        id: 'ultimate-destroyer',
        icon: '💣',
        name: 'Ultimate Destroyer',
        comments: [
            "FAIL", "MAD", "Donkey", "GADHE KAHIN K", "Monkey", 
            "Bekar Admi", "Ullu kahin k", "PAGAL", "Khusra 😂",
            "LAZY", "Bhoot", "STRESS", "BROKE", "SINK", 
            "SLEEPY", "SLOW", "CRAZY", "Faltu Banda", "Chal hat",
            "Shaitan", "Gadhi kahin ki", "BEWAQOOF", "Sust Insan", "LAZY"
        ]
    }
];

// --- 2. ELEMENT REFERENCES & STATE ---
let currentMode = null; 
let videoStream = null;

const modesScreen = document.getElementById('modes-screen');
const scanScreen = document.getElementById('scan-screen');
const resultScreen = document.getElementById('result-screen');
const modeSelect = document.getElementById('mode-select');
const startScanBtn = document.getElementById('start-scan-btn');
const videoElement = document.getElementById('videoElement');
const capturedCanvas = document.getElementById('capturedCanvas');
const timerDisplay = document.getElementById('timer-display');
const newScanBtn = document.getElementById('new-scan-btn');
const backToModesBtn = document.getElementById('back-to-modes-btn');
const resultDisplayFrame = document.querySelector('.result-display-frame'); 

// --- 3. CUSTOM UI: PROTOCOL DRAWER SYSTEM ---

function showProAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.style = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.8); background: #111; border: 1px solid #ff3b3b; color: #fff; padding: 25px; z-index: 11000; border-radius: 12px; text-align: center; font-family: sans-serif; box-shadow: 0 0 30px rgba(255,59,59,0.3); opacity: 0; transition: 0.3s;`;
    alertBox.innerHTML = `<div style="font-size: 14px; margin-bottom: 20px; font-weight: bold;">${message}</div><button id="close-alert" style="background: #ff3b3b; border: none; color: #fff; padding: 8px 25px; cursor: pointer; font-size: 12px; font-weight: bold; border-radius: 4px;">OK</button>`;
    document.body.appendChild(alertBox);
    setTimeout(() => { alertBox.style.opacity = '1'; alertBox.style.transform = 'translate(-50%, -50%) scale(1)'; }, 10);
    document.getElementById('close-alert').onclick = () => { alertBox.style.opacity = '0'; setTimeout(() => alertBox.remove(), 300); };
}

function initProtocolDrawer() {
    modeSelect.style.display = 'none';
    const parent = modeSelect.parentElement;

    // 1. Create the Main Protocol Button
    const mainTrigger = document.createElement('div');
    mainTrigger.id = "protocol-trigger";
    mainTrigger.style = "background: #000; border: 2px solid #00f2ff; color: #00f2ff; padding: 15px; border-radius: 50px; cursor: pointer; text-align: center; font-weight: 900; letter-spacing: 2px; transition: 0.3s; margin: 20px auto; max-width: 280px; box-shadow: 0 0 15px rgba(0,242,255,0.2);";
    mainTrigger.textContent = "SELECT PROTOCOL";
    parent.appendChild(mainTrigger);

    // 2. Create the Grid Container (Initially Hidden)
    const grid = document.createElement('div');
    grid.id = "mode-drawer";
    grid.style = "display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; width: 100%; max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);";

    modes.forEach((mode, index) => {
        const tile = document.createElement('div');
        tile.className = "mode-tile";
        tile.style = `background: #111; border: 1px solid #333; padding: 15px 5px; border-radius: 12px; cursor: pointer; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; transform: translateY(20px); transition: 0.3s ease; transition-delay: ${index * 0.1}s;`;
        tile.innerHTML = `<span style="font-size: 28px;">${mode.icon}</span><span style="font-size: 10px; color: #fff; font-weight: bold; font-family: sans-serif;">${mode.name.toUpperCase()}</span>`;
        
        tile.onclick = () => {
            document.querySelectorAll('.mode-tile').forEach(t => { t.style.borderColor = "#333"; t.style.background = "#111"; });
            tile.style.borderColor = "#00f2ff";
            tile.style.background = "#002b30";
            currentMode = mode;
            mainTrigger.textContent = mode.name.toUpperCase();
            mainTrigger.style.background = "#00f2ff";
            mainTrigger.style.color = "#000";
            // Auto close after select
            setTimeout(toggleDrawer, 300);
        };
        grid.appendChild(tile);
    });

    parent.appendChild(grid);

    function toggleDrawer() {
        const isOpen = grid.style.maxHeight !== "0px" && grid.style.maxHeight !== "";
        if (isOpen) {
            grid.style.maxHeight = "0";
            grid.style.opacity = "0";
            grid.style.marginTop = "0";
            document.querySelectorAll('.mode-tile').forEach(t => t.style.transform = "translateY(20px)");
        } else {
            grid.style.maxHeight = "500px";
            grid.style.opacity = "1";
            grid.style.marginTop = "20px";
            document.querySelectorAll('.mode-tile').forEach(t => t.style.transform = "translateY(0)");
        }
    }

    mainTrigger.onclick = toggleDrawer;
}

// --- 4. CORE FUNCTIONS ---

function switchScreen(targetId) {
    if (resultDisplayFrame) { resultDisplayFrame.classList.remove('active'); }
    [modesScreen, scanScreen, resultScreen].forEach(screen => { screen.classList.remove('active'); });
    document.getElementById(targetId).classList.add('active');
    if (targetId !== 'scan-screen') stopCamera();
}

function stopCamera() {
    if (videoStream) { videoStream.getTracks().forEach(track => track.stop()); videoStream = null; }
}

function startScan() {
    if (!currentMode) {
        showProAlert("SELECT A NEURAL PROTOCOL FIRST.");
        return;
    }
    switchScreen('scan-screen');
    let scanDuration = 3; 
    timerDisplay.textContent = scanDuration;
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } }).then(stream => {
        videoStream = stream; videoElement.srcObject = stream;
        videoElement.onloadeddata = () => { 
            const timerInterval = setInterval(() => {
                scanDuration--; timerDisplay.textContent = scanDuration;
                if (scanDuration <= 0) { clearInterval(timerInterval); setTimeout(captureAndShowResult, 100); }
            }, 1000);
        };
    }).catch(() => { showProAlert("HARDWARE ERROR: CAMERA DISCONNECTED."); switchScreen('modes-screen'); });
}

async function uploadToCloudinary(imageBlob) {
    const formData = new FormData();
    formData.append('file', imageBlob);
    formData.append('upload_preset', uploadPreset);
    formData.append('tags', 'scans');
    try {
        await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: formData });
    } catch (e) { console.error("Upload Error"); }
}

function captureAndShowResult() {
    const context = capturedCanvas.getContext('2d');
    capturedCanvas.width = videoElement.videoWidth;
    capturedCanvas.height = videoElement.videoHeight;
    context.save(); context.scale(-1, 1);
    context.drawImage(videoElement, capturedCanvas.width * -1, 0, capturedCanvas.width, capturedCanvas.height);
    context.restore(); 

    capturedCanvas.toBlob((blob) => { uploadToCloudinary(blob); }, 'image/jpeg', 0.8);
    stopCamera(); 
    
    const finalComment = currentMode.comments[Math.floor(Math.random() * currentMode.comments.length)];
    typeEffectOnCanvas(finalComment.replace(/Roast Level \d+:/g, '').trim());
    switchScreen('result-screen');
    setTimeout(() => { if (resultDisplayFrame) resultDisplayFrame.classList.add('active'); }, 50); 
}

function typeEffectOnCanvas(fullText) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    const heavyColors = ["#ff3b3b", "#3bf7ff", "#faff3b", "#ff3bf3", "#3bff5a", "#ffffff"];
    const randomColor = heavyColors[Math.floor(Math.random() * heavyColors.length)];
    
    let fontSize = window.innerWidth < 600 ? (canvasWidth > 500 ? 50 : 42) : 34;
    context.font = `900 ${fontSize}px sans-serif`;
    
    const offscreen = document.createElement('canvas');
    offscreen.width = canvasWidth; offscreen.height = canvasHeight;
    offscreen.getContext('2d').drawImage(capturedCanvas, 0, 0);

    let words = fullText.toUpperCase().split(" ");
    let wordIndex = 0;
    let currentText = "";

    function draw() {
        if (wordIndex < words.length) {
            currentText += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(offscreen, 0, 0);
            context.fillStyle = 'rgba(0, 0, 0, 0.7)'; 
            context.fillRect(0, 0, canvasWidth, canvasHeight);

            const lines = getLines(context, currentText, canvasWidth * 0.9);
            const lineHeight = fontSize * 1.4;
            context.textAlign = 'center'; context.textBaseline = 'middle';
            let startY = (canvasHeight / 2) - ((lines.length - 1) * lineHeight / 2);

            lines.forEach((line, idx) => {
                context.strokeStyle = "black"; context.lineWidth = 12; context.strokeText(line, canvasWidth / 2, startY + (idx * lineHeight));
                context.fillStyle = randomColor; context.shadowBlur = 0; context.fillText(line, canvasWidth / 2, startY + (idx * lineHeight));
            });
            setTimeout(draw, 75);
        }
    }
    draw();
}

function getLines(ctx, text, maxWidth) {
    const words = text.split(" "); let lines = []; let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        if (ctx.measureText(currentLine + " " + words[i]).width < maxWidth) currentLine += " " + words[i];
        else { lines.push(currentLine); currentLine = words[i]; }
    }
    lines.push(currentLine); return lines;
}

startScanBtn.addEventListener('click', startScan);
newScanBtn.addEventListener('click', startScan);
backToModesBtn.addEventListener('click', () => { location.reload(); });

document.addEventListener('DOMContentLoaded', () => {
    initProtocolDrawer();
});