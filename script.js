// --- 1. MODES DATA (UNCHANGED) ---
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
            "Mausam ki tarah badalna toh sunna tha, lekin expression? 🤷‍♂️ Har 2 sec mein mood off.",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai. Kyun? Raaz hai! 😉 Khud hi socho.",
            
            // 30 New Roman Urdu Roasts (PUNCHIER)
            "WARNING: Tumhara mood 50% battery par hai. Foran charge karein ya coffee peelo! ☕",
            "System Error: Aapka breakfast abhi tak hawa mein latka hua hai. Kal ka bhookh! 😩",
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
            "Decoding Fail: Tumhari is smile ke peeche koi gehra raaz chupa hai: Daant saaf nahi kiye! 😁",
            "Firewall Breached: Tumhara bachpan ka Crush abhi bhi single hai... aur tum abhi bhi yahi ho? 🤔",
            "Security Alert: Zyada smart banne ki koshish mat karo, system janta hai tum copy karte ho. 📝",
            "Upgrade Zaroori: Aapko naye emotions ki zaroorat hai. Purane bore hain aur dukhi hain. 😭",
            "CPU Overheat: Itni zyada sochna sehat ke liye accha nahi hai. Brain freeze hogaya! 🥶",
            "Access Denied: Is chehre ko dekhne ke liye High Security Clearance chahiye. Passport lao. 🛂",
            "Fake ID: Tum asliyat mein 10 saal chote lagte ho (ya bade, pata nahi). Confusing! 😵‍💫",
            "Mute Zaroori: Tumhari khamoshi bhi bahut zyada shor machati hai. Chup raho! 🤫",
            "Server Busy: Jab tum bolte ho, mera system hang ho jata hai. Bura na maana. 😵",
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
            "REJECTED: Next time, filter lagana mat bhoolna, please. Yeh 'no filter' theek nahi hai. 🤦" 
        ]
    },
    {
        id: 'gossip-guru',
        name: '🤫 Gossip Guru (Secrets & Rumours)',
        styleClass: 'gossip-style',
        comments: [
            "ALERT: Pata chala hai... tumhara charger 99% tak hi support karta hai! 🔌 Tension mat lo.",
            "LOGS: Tumhare Google search history mein 90% sirf 'how to get rich' hai. 🤫 Aur 10% 'biryani recipe'.",
            "Subah ki pehli selfie toh tumhari asliyat chupa leti hai! 👀 Filter ke peeche kaun hai?",
            "Aapka sabse bada raaz: Aap chupke se dance videos dekhte hain! 🕺 Aur mirror mein practice bhi.",
            
            // 30 New Roman Urdu Roasts (SCANDALOUS)
            "HOT GOSSIP: Tumhari secret ice-cream stash pakdi gayi hai. Freezer mein chupi hui! 🍦",
            "EXCLUSIVE: Pata hai, tum raat 2 baje bhi phone check karte ho, kisi khaas ke message ka intezaar! 🌙",
            "LEAKED: Tumhe abhi tak woh old song pasand hai, jo koi nahi sunta. '90s kid vibes! 🎶",
            "RUMOUR: Tumhare padosi ne kaha, tum bohat der tak sote ho. Alarm ki bhi izzat nahi karte. 😴",
            "SECRET: Tum apne purane ex ki stories chupke se dekhte ho. Hum sab jante hain! 😏",
            "BREAKING: Tumhara favorite TV show bachpan wala cartoon hai. Still watching 'Tom and Jerry'. 📺",
            "CONFESSION: Tumne aaj breakfast mein double roti chura kar khayi thi. Chori pakdi gayi! 🍞",
            "DECODED: Tumhari agli chutti ka plan already cancel ho chuka hai. Kismat hi kharab hai. 😭",
            "SPILL THE TEA: Tumhara alarm 5 baar snooze hota hai. Uth jao ab! 🛌",
            "INSIDER INFO: Tumhe 'Maggi' banana bhi nahi aata, search karte ho. Do minute mein bhi nahi banti. 🍜",
            "EXPOSED: Tum dhoop se bachne ke liye chata le kar jaate ho. 'Gora rang' ka khayal! ⛱️",
            "HINT: Tumhara sabse embarrassing moment video mein record ho gaya hai. Woh 'girne wala'! 🤣",
            "WAKE UP: Tumhe lagta hai, tumhari awaz bohat achi hai, but... Gaana mat gaana. 🎤",
            "REVEALED: Tumhara phone wallpaper tumhari crush ki pic hai. Humne zoom kiya tha! ❤️",
            "TRUTH: Tumne apni age jhoot batayi thi, mujhe pata hai. System never lies! 🎂",
            "GUP SHUP: Tumhari profile picture aur asli shakal mein farq hai. Filter ki shakti. ✨",
            "CHUPKE SE: Tum bina nahaye bahar chale jate ho (kabhi kabhi). Aaj ki baat hai? 🚿",
            "GUILTY: Tumne kal raat sabse chupa kar chips khaye the. Share kyun nahi kiye? 🍟",
            "BAAT HAI: Tumhe koi kaam karne se pehle 'Netflix' yaad aata hai. Priorities! 🎬",
            "SHOCKER: Tumhara favorite superhero woh hai jo sabse zyada fail hota hai. Haha! 🦸",
            "BEWARE: Tumhari wallet mein sirf 200 rupay hain, par dikhate ho 2000. Gareebi! 💸",
            "CONFIDENTIAL: Tumhare bagair koi bhi party boring nahi hoti. Sirf tumhare saath hoti hai! 🎉",
            "MASLA: Tumhara sabse zyada time sochne mein guzar jata hai. Overthinker! 🤔",
            "PARDA FAASH: Tumhari hasi fake hai, tum udas ho. Ander ki baat. 😢",
            "FAILS: Tumne pichle saal 3 diet plans try kiye, aur sab fail. Khao piyo! 🍔",
            "LOGIC: Tumhari coffee ki cup mein chai hoti hai, hum jante hain. Double game! 🍵",
            "DANGER: Tumhari T-shirt ulte pehni hui hai, check karo! Fashion disaster. 👚",
            "REAL TALK: Tumhe abhi bhi apni mummy ki zaroorat padti hai. Mama's boy/girl! 🤗",
            "DOUBLE CHECK: Tumhara naam kuch aur hai, lekin tumse koi aur kehta hai. Kya naam hai? 📛",
            "STATUS: Tumhara rishta sirf 'Doston' tak limited hai. 'Bhai' ya 'Behan'! 🤝",
            "CLOSING REMARK: Humne tumhari file delete kar di hai... for now. Lekin sab yaad hai! 🧠" 
        ]
    },
    {
        id: 'philosopher-panda',
        name: '🐼 Philosopher Panda (Fake Wisdom)',
        styleClass: 'philosopher-style',
        comments: [
            "Gahrai se dekho... kya tumne woh pizza order kiya tha? Vahi sach hai. 🍕 Bhook lagi hai.",
            "Zindagi ek safar hai, aur tumhara data plan khatam ho chuka hai. 💡 Data is life.",
            "Har chehre ke peeche ek adhoora khwab hota hai: Sahi time pe milne wali chai. ☕ Chai peelo.",
            "Sochta hu, kya sochta hu? Bass, yahi sachai hai. (Panda ka niyam) 🧘‍♂️ Chup raho, soch mat.",
            
            // 30 New Roman Urdu Roasts (FAKE WISDOM)
            "PANDA WISDOM: Agar tum sote nahi, toh kya tum sach mein zinda ho? Answer the question! ❓",
            "DEEP THOUGHT: Woh 'delete' button kis kaam ka, jab screen shot hai? Technology ka dhoka. 📸",
            "LIFE LESSON: Raat ko neend na aaye toh samajh lo, tum ameer nahi ho. Ameer toh so jate hain. 💰",
            "PHILOSOPHY: Tumhari zindagi ka maqsad sirf remote dhundna hai. Aur koi kaam nahi? 📺",
            "REALITY CHECK: Kya tum woh ho, jo tum 'Status' mein batate ho? Ya sirf acting hai? 🎭",
            "EXISTENCE: Agar tumhari shakal filter ke bina dekhi jaye toh kya hoga? Kaisa lagega? 👽",
            "KAUN HO TUM?: Agar tum online nahi ho, toh kya tum 'exist' karte ho? Badi baat hai! 🌐",
            "GUMNAAM: Tumhara sabse bada dar: Logon ko tumhari 'Playlist' mil jaye. Purane gaane! 🎵",
            "FUTURE: Tumhara future tumhari pichli raat ki neend par depend karta hai. Sote raho. 🛌",
            "TRAGEDY: Zindagi uss chai ki tarah hai, jo thandi ho chuki hai. Garam chai zaroori! 🔥",
            "ILLUSION: Jo tumhari aankhon mein hai, woh sirf screen ki roshni hai. Parda hatado. ✨",
            "KNOWLEDGE: Agar 'free ka WiFi' na ho toh kya tum ghoomne jaoge? WiFi is necessity. 📶",
            "MISTAKE: Tumhari sabse badi galti: Kal se diet shuru karna. Aaj se khao. 🍩",
            "THEORY: Tumhe lagta hai, tum sabse different ho, lekin tum bhi wahi ho. Sab ek jaisa! 👥",
            "FATE: Tumhari kismat mein likha hai: 'Try Again Later'. Har baar yahi hota hai. 🔁",
            "SEARCH: Zindagi mein wohi cheez khojati hai, jo tumhare saamne padi ho. Andha hai kya? 👀",
            "TIME: Jo waqt tumne 'scroll' karne mein diya, woh wapas nahi aayega. Qadar karo. ⏳",
            "DESTINY: Tumhara sabse gehra raaz: Tum akele mein baat karte ho. Pagalpan! 🤫",
            "QUESTION: Agar tum hamesha late ho, toh kya tum waqt ko control karte ho? Master of Time? ⏱️",
            "PANDA'S TRUTH: Har insaan ko 'weekend' ka intezaar kyun rehta hai? Kaam chor log. 😒",
            "MIRROR: Tumhari asliyat wahan hai, jahan tumhara phone na ho. Dekho toh sahi. 🤳",
            "GOAL: Tumhara asli goal: AC chala kar blanket lena. Garmi bahut hai. ❄️",
            "INNER VOICE: Tumhe pata hai tumhara favorite khana junk food hai. Order karlo! 🍔",
            "DHARMA: Koi kaam na karne ka bhi ek 'sukoon' hota hai. Aalsi insan. 🛋️",
            "BALANCE: Tumhari zindagi mein tension aur internet barabar hai. Dono high hain. 📈",
            "WISDOM: Jab log 'kamaal' kehte hain, toh woh jhoot bol rahe hote hain. Sachai mano. 🤥",
            "PARADOX: Tumhari profile pic itni serious kyun hai, jab tum funny ho? Logic! 🤯",
            "IDENTITY: Kya tum phone ke bina, khud ko pehchan paoge? No chance. 📵",
            "SACRIFICE: Tumhari sabse badi qurbani: Raat ko der tak jaagna. Subah utho! ☀️",
            "LAST THOUGHT: Shayad tum yeh sab padh kar bhi kuch nahi samjhe. Bheja kharab. 🧠",
            "FINAL JUDGMENT: Zindagi ek joke hai, aur tum iska punchline ho. Haha! 😂",
            "MOKSHA: Ab jaakar thoda pani pee lo, bahut soch liya. Hydrate yourself. 💧" 
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

// --- 3. CORE FUNCTIONS (CAMERA PERMISSION REQUEST IS HERE) ---

function switchScreen(targetId) {
    if (resultDisplayFrame) {
        resultDisplayFrame.classList.remove('active');
    }
    
    [modesScreen, scanScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
    
    // Stop camera only when switching AWAY from the scan screen
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
    // Force restart animation
    scannerLine.style.animation = 'none';
    void scannerLine.offsetWidth; 
    scannerLine.style.animation = 'realScan 1.5s linear infinite alternate'; 

    switchScreen('scan-screen');
    let scanDuration = 3; 
    timerDisplay.textContent = scanDuration;
    
    // **CAMERA PERMISSION REQUEST**
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
                        
                        // Use a small delay to ensure frame rendering is complete
                        setTimeout(captureAndShowResult, 100); 
                    }
                }, 1000);
            };

        })
        .catch(err => {
            // **Error handling for permission denied**
            console.error("Camera access error: ", err);
            alert("SYSTEM ERROR: Camera access denied! 😥 Please allow camera permission to proceed.");
            stopCamera();
            switchScreen('modes-screen');
        });
}

function captureAndShowResult() {
    const context = capturedCanvas.getContext('2d');
    
    // Set canvas dimensions
    capturedCanvas.width = videoElement.videoWidth;
    capturedCanvas.height = videoElement.videoHeight;
    
    // Check if valid dimensions exist
    if (capturedCanvas.width > 10 && capturedCanvas.height > 10) {
        
        // DRAW THE IMAGE FIRST
        context.save();
        context.scale(-1, 1);
        context.drawImage(videoElement, capturedCanvas.width * -1, 0, capturedCanvas.width, capturedCanvas.height);
        context.restore(); 
        
        // STOP CAMERA AFTER DRAWING IS COMPLETE
        stopCamera(); 
        
        // Get Random Comment
        const selectedMode = currentMode;
        const randomIndex = Math.floor(Math.random() * selectedMode.comments.length);
        const finalComment = selectedMode.comments[randomIndex];

        // Draw Horizontal Funny Text on Canvas
        drawHorizontalFunnyText(finalComment, selectedMode.styleClass);

    } else {
        // FALLBACK: Draw black screen with error message if frame is still not ready
        capturedCanvas.width = 640;
        capturedCanvas.height = 480;
        context.fillStyle = 'black';
        context.fillRect(0, 0, capturedCanvas.width, capturedCanvas.height);
        context.fillStyle = 'white';
        context.font = '20px Orbitron';
        context.textAlign = 'center';
        context.fillText('FATAL ERROR: FRAME UNAVAILABLE. RE-SCAN.', capturedCanvas.width / 2, capturedCanvas.height / 2);
        
        // Still stop the camera stream
        stopCamera();
    }
    
    // Switch to Result Screen
    switchScreen('result-screen');
    
    // Trigger the Pop-out Effect
    setTimeout(() => {
        if (resultDisplayFrame) {
             resultDisplayFrame.classList.add('active');
        }
    }, 50); 
}

// --- 4. FUNNY HORIZONTAL TEXT DRAWING LOGIC (TEXT WRAPPING AND STYLE FIX) ---
function drawHorizontalFunnyText(text, styleClass) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    
    // Solid background for text box for better contrast
    context.globalAlpha = 0.95; 
    context.fillStyle = 'rgba(0, 0, 0, 0.9)'; 
    context.fillRect(0, canvasHeight - 150, canvasWidth, 150);
    context.globalAlpha = 1.0; 

    // Font selection (Orbitron for PROFESSIONAL/FUTURISTIC look)
    let fontFamily = 'Orbitron, sans-serif'; 
    let fontColor = '#ffffff'; // Clean White (More professional)

    // Adjust font size based on canvas width 
    let fontSize = 40; 
    if (canvasWidth > 700) { fontSize = 55; } 
    else if (canvasWidth > 500) { fontSize = 45; }

    
    context.fillStyle = fontColor;
    context.textAlign = 'center';
    
    // Adding Neon Shadow/Glow
    context.shadowColor = '#00ffff'; // Neon Cyan Glow
    context.shadowBlur = 10; 
    context.font = `bold ${fontSize}px ${fontFamily}`;
    
    const lineHeight = fontSize * 1.2; 

    // TEXT WRAPPING LOGIC (IMPROVED)
    function getLines(ctx, text, maxWidth) {
        const words = text.split(" ");
        let lines = [];
        let currentLine = words[0] || '';

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            // Check if adding the next word exceeds the maxWidth (90% of canvas)
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines.filter(line => line.trim() !== '');
    }

    // Set maximum width to be slightly less than canvas width (90% of canvas)
    const maxTextWidth = canvasWidth * 0.9;
    const lines = getLines(context, text, maxTextWidth); 
    
    // POSITIONING FIX FOR MULTIPLE LINES
    
    // Calculate total height occupied by text
    const totalTextHeight = lines.length * lineHeight;
    
    // Starting Y position for the first line: Center the text block vertically within the 150px black strip.
    let currentY = canvasHeight - 150 + (150 / 2) - (totalTextHeight / 2) + (fontSize * 0.3); 

    lines.forEach((lineText, index) => {
        // Draw each line centered horizontally
        context.fillText(lineText, canvasWidth / 2, currentY + (index * lineHeight));
    });

    context.shadowBlur = 0; // Reset shadow
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