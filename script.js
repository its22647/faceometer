// --- 0. CLOUDINARY & AI CONFIG ---
const cloudName = "dy4kgfvpw";
const uploadPreset = "faceometer_preset"; 

// --- 1. MODES DATA ---
const modes = [
    {
        id: 'roasting-king', icon: '😈', name: 'The Roasting King',
        comments: [
            "SCAN FAILURE: Arey oye ghoorna band kar, sirf dekhna hai camera me 🤣!", 
            "ERROR 404: Teri battery low hai, charge ho kar aa 😂",
            "Chal nikal, tu hai he fazool insan 🤣",
            "Tu is waqt duniya ka 8th ajooba hai 😉",
            "Apny kaam se kaam rakh, chal nikal yahan se 😂",
            "System Error: Aap scan nahi ho paye shakal ki wajah se! 😩",
            "Scan Error: Mun dho kar aao, phir try again karo 🚫",
            "Sonay k baad jaldi utha kar, tere laitnay se bed bhi tang ho jata hai ⏰",
            "Mehnat karta reh tu, aik din khud haar maan jaye ga 😂",
            "Teri soch ghatiya soch hai, bilkul teri tarah 😂",
            "Chal hat oye nikammy insan 😅",
            "Tera internet bhi tery dimagh se ziada tez hai, kisi bandar k mun waly insan💡",
            "Bhai tu next time apni shakal samny karna, abhi system crash ho gaya hai tujhy dekh kar 💀",
            "Teri shakal dekh kar kal raat darawna khwab aaya tha. Shakal chupa le apni 👻",
            "Bhaag ja yahan se bandar k mun waly. 😂",
            "System Crash: Mun dho kar aa, phir scan kar ☣️",
            "Same like gadha! 😁",
            "Koi bhi tujh jesy insan ko dekh kar dar jaye ga! 🤔",
            "Tu har waqt bakwaas he karta hai, koi or kaam bhi hai tera? 👻",
            "Tujhy nayi shakal ki zarurat hai 😭",
            "Tera dimagh ghutnon me hai? 🥶",
            "Tumhary mun pe har waqt 12 q bajy rehty hain? 😂",
            "Tu asliyat mein gadhy jesa hai 😂",
            "Fazool baaten karta hai tu. Tu bola na kar, chup raha kar 🤫",
            "Jab tu bolta hai us waqt samny wala bhi tauba karta hai, chup raha kar! 😵",
            "Aik number ka ghatiya insan hai tu ⏳",
            "Tu or bandar twins ho kiya? Shakal milti hai tum dono ki 🧐",
            "Chal hat, shaitan k chahchu! 😈",
            "Bhai tera style puana ho chuka hai, update karo apny aap ko! 💇",
            "Next time filter lagana, baghair filter wali shakal dekh kar dar lagta hai🤦",
            "Tumhary ilawa ghar me or kia cheez faltu hai? 🤣",
            "Tumhara bank balance aur tumhari akal dono he gir gaye hain, stupid insan. 📉",
            "Tumhara dimagh itna slow chalta hai ki 2G internet bhi tumse tez hai. 🐌",
            "Tery mun ko dekh kar me dar gaya hun yar, sorry bolo mujhy ab 😉",
            "Ye kon hai jis ko dekh kar computer bhi dar gaya 🤣",
            "Tu online na aaya kar, internet band ho jata hai sab ka 😊",
            "SHAME SHAME: Fazool Insan, tu rozana nahata nahi hai, naha liya kar mery bhai! 🚿",
            "BATH ALERT: Kabhi naha liya kar yar, roz aesy he mun utha kar aa jata hai tu 🤣",
            "CRINGE: Teri harkaten or baaten bilkul fazool hain teri tarah 💾",
            "Chal bhaag yahan se, pehly he fazool admi hai tu or ab roast karwany aa gaya 👽",
            "Tumhe khud nahi pata tum kya ho aur kya karna hai. Pagal kahin k! 🤔",
            "Tumhari jitni tareef ki jaye utni kam hai 🤣",
            "Tu khamosh raha kar, bola na kar 😂"
        ]
    },
    {
        id: 'hyper-burner', icon: '🔥', name: 'Hyper Burner',
        comments: [
            "Aap achy lag rahy ho, (me ne jhoot bola hai asal me gadhy jesa dikhta hai tu) 🤣",
            "Waqt barbaad mat karo. Kuch kaam karo.",
            "Subah ho gayi, uth jao! Sote rehte ho, ya shakal he aesi hai.",
            "Jhoot bolna band karo. Jhoot bol bol kar thakty nahi ho?",
            "Kam khaya karo 😋.",
            "Shakal se toh nahi lagta... tum insaan ho?",
            "Single he rahoge. Kyun? Khud socho.",
            "Kitni der lagayi taiyar hone mein? Phir bhi cheela hua kareela lag rahy ho...",
            "Aaina dekha hai? Nahi dekhna, warna wo bhi dar jayega.",
            "Abey tu insan hai, lagta to nahi 😂",
            "ERROR 99: Dost kam hain? Reason tum khud ho 🤣",
            "Tum jab gussa hoty ho, samny waly ko hansi aa jati hai 😂",
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
        id: 'ultimate-destroyer', icon: '💣', name: 'Ultimate Destroyer',
        comments: [
            "Ullu kahin ka", "Nikamma", "Donkey", "Gadhe kahin k", "Bandar", 
            "Bekar Admi", "Fazool Insan", "PAGAL", "Khusra 😂",
            "LAZY", "Joker", "Aalsi Insan", "Aagy se hat ja 😂", "Bakwaas Admi", 
            "Chal bhaag oye", "Bht slow hai tu", "CRAZY", "Faltu Banda", "Chal hat",
            "Shaitan", "Gadhi kahin ki", "BEWAQOOF", "Sust Insan", "LAZY"
        ]
    }
];

// --- 2. STATE ---
let currentMode = null; 
let videoStream = null;
let faceDetector = null;
let isAIReady = false; 
let lastRoastMessage = ""; 
// 🛡️ Anti-repeat state
let lastUsedIndex = -1;

const modesScreen = document.getElementById('modes-screen');
const scanScreen = document.getElementById('scan-screen');
const resultScreen = document.getElementById('result-screen');
const modeSelect = document.getElementById('mode-select');
const startScanBtn = document.getElementById('start-scan-btn');
const videoElement = document.getElementById('videoElement');
const capturedCanvas = document.getElementById('capturedCanvas');
const timerDisplay = document.getElementById('timer-display');
const resultDisplayFrame = document.querySelector('.result-display-frame'); 

// --- 3. AI SETUP ---
async function setupFaceAI() {
    let dots = "";
    const loadingInterval = setInterval(() => {
        dots = dots.length >= 3 ? "" : dots + ".";
        startScanBtn.textContent = `INITIALIZING AI${dots}`;
    }, 400);

    startScanBtn.disabled = true;
    try {
        const scripts = ["https://cdn.jsdelivr.net/npm/@tensorflow/tfjs", "https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"];
        for (let src of scripts) {
            const s = document.createElement('script'); s.src = src;
            document.head.appendChild(s);
            await new Promise(r => s.onload = r);
        }
        faceDetector = await blazeface.load();
        const dummyCanvas = document.createElement('canvas');
        dummyCanvas.width = 100; dummyCanvas.height = 100;
        await faceDetector.estimateFaces(dummyCanvas, false);
        isAIReady = true; 
        clearInterval(loadingInterval);
        startScanBtn.textContent = ">>> BEGIN ANALYSIS <<<";
        startScanBtn.disabled = false;
        startScanBtn.style.boxShadow = "0 0 20px #00f2ff";
    } catch (e) {
        clearInterval(loadingInterval);
        startScanBtn.textContent = "BEGIN ANALYSIS";
        startScanBtn.disabled = false;
    }
}

async function checkFaceVisibility() {
    if (!faceDetector) return true;
    const predictions = await faceDetector.estimateFaces(videoElement, false);
    return predictions.length > 0 && predictions[0].probability[0] > 0.92;
}

// --- 4. MODERN ALERT ---
function showProAlert(message, type = "error") {
    const color = type === "warning" ? "#ffcc00" : "#ff3b3b";
    const overlay = document.createElement('div');
    overlay.style = `position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(5px); z-index: 20000; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: sans-serif;`;
    const box = document.createElement('div');
    box.style = `background: #000; border: 2px solid ${color}; width: 100%; max-width: 400px; padding: 30px; border-radius: 4px; box-shadow: 0 0 30px ${color}44; transform: scale(0.9); opacity: 0; transition: 0.3s;`;
    const content = document.createElement('div');
    content.style = `color: #fff; font-size: 14px; line-height: 1.6; min-height: 50px; font-weight: 700;`;
    const btn = document.createElement('button');
    btn.style = `margin-top: 25px; width: 100%; background: ${color}; border: none; color: #000; padding: 12px; font-weight: 900; cursor: pointer;`;
    btn.textContent = "UNDERSTOOD";
    box.appendChild(content); box.appendChild(btn); overlay.appendChild(box); document.body.appendChild(overlay);
    setTimeout(() => { box.style.opacity = "1"; box.style.transform = "scale(1)"; }, 10);
    let i = 0; function type() { if (i < message.length) { content.textContent += message.charAt(i++); setTimeout(type, 35); } }
    type();
    btn.onclick = () => { overlay.remove(); };
}

function initProtocolDrawer() {
    modeSelect.style.display = 'none';
    const parent = modeSelect.parentElement;
    const btnContainer = document.createElement('div');
    btnContainer.style = "display: flex; align-items: center; justify-content: center; gap: 10px; margin: 20px auto; max-width: 320px; position: relative;";
    const mainTrigger = document.createElement('div');
    mainTrigger.id = "protocol-trigger";
    mainTrigger.style = "flex: 1; background: #000; border: 2px solid #00f2ff; color: #00f2ff; padding: 15px; border-radius: 50px; cursor: pointer; text-align: center; font-weight: 900; letter-spacing: 2px; transition: 0.3s;";
    mainTrigger.textContent = "SELECT PROTOCOL";
    const cancelBtn = document.createElement('div');
    cancelBtn.id = "cancel-mode";
    cancelBtn.style = "display: none; width: 40px; height: 40px; background: #ff3b3b; color: #fff; border-radius: 50%; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; font-weight: bold; flex-shrink: 0; transition: 0.2s;";
    cancelBtn.innerHTML = "✖";
    btnContainer.appendChild(mainTrigger);
    btnContainer.appendChild(cancelBtn);
    parent.appendChild(btnContainer);
    const grid = document.createElement('div');
    grid.id = "mode-drawer";
    grid.style = "display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; width: 100%; max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s ease-in-out; scrollbar-width: none;";
    modes.forEach((mode, index) => {
        const tile = document.createElement('div');
        tile.className = "mode-tile";
        tile.style = `background: #111; border: 1px solid #333; padding: 15px 5px; border-radius: 12px; cursor: pointer; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; transform: translateY(10px); transition: 0.3s; transition-delay: ${index * 0.05}s;`;
        tile.innerHTML = `<span style="font-size: 28px;">${mode.icon}</span><span style="font-size: 10px; color: #fff; font-weight: bold;">${mode.name.toUpperCase()}</span>`;
        tile.onclick = () => {
            document.querySelectorAll('.mode-tile').forEach(t => { t.style.borderColor = "#333"; t.style.background = "#111"; });
            tile.style.borderColor = "#00f2ff"; tile.style.background = "#002b30";
            currentMode = mode;
            mainTrigger.textContent = mode.name.toUpperCase();
            cancelBtn.style.display = "flex";
            toggleDrawer();
        };
        grid.appendChild(tile);
    });
    parent.appendChild(grid);
    cancelBtn.onclick = (e) => {
        e.stopPropagation();
        currentMode = null;
        mainTrigger.textContent = "SELECT PROTOCOL";
        cancelBtn.style.display = "none";
        document.querySelectorAll('.mode-tile').forEach(t => { t.style.borderColor = "#333"; t.style.background = "#111"; });
    };
    function toggleDrawer() {
        const isOpen = grid.style.maxHeight !== "0px" && grid.style.maxHeight !== "";
        grid.style.maxHeight = isOpen ? "0" : "1000px"; grid.style.opacity = isOpen ? "0" : "1";
        document.querySelectorAll('.mode-tile').forEach(t => t.style.transform = isOpen ? "translateY(10px)" : "translateY(0)");
    }
    mainTrigger.onclick = toggleDrawer;
}

// --- 5. SHARE FUNCTIONS ---
function downloadRoast() {
    const context = capturedCanvas.getContext('2d');
    const canvasHeight = capturedCanvas.height;
    context.save();
    const logoX = 20; const logoY = canvasHeight - 20;
    context.textAlign = "left"; context.fillStyle = "rgba(0, 242, 255, 0.6)"; context.fillRect(logoX, logoY - 38, 160, 1.5);
    context.fillStyle = "#39ff14"; context.font = "bold 14px sans-serif"; context.fillText("--- FACE-O-METER ---", logoX, logoY - 22);
    context.fillStyle = "#ffffff"; context.font = "bold 11px sans-serif"; context.fillText("Developed by Aamir", logoX + 12, logoY - 6);
    context.fillStyle = "rgba(0, 242, 255, 0.6)"; context.fillRect(logoX, logoY, 160, 1.5);
    context.restore();
    const link = document.createElement('a');
    link.download = `Face-o-Meter-Roast-${Date.now()}.png`;
    link.href = capturedCanvas.toDataURL("image/png");
    link.click();
}

function shareOnWhatsApp() {
    const text = encodeURIComponent(`Oye! Is AI ne mera chehra dekh kar ye kaha: "${lastRoastMessage}" 💀\n\nTum bhi apna reality check karwao: https://faceometer.pages.dev`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// --- 6. CORE LOGIC ---
function switchScreen(targetId) {
    if (resultDisplayFrame) resultDisplayFrame.classList.remove('active');
    [modesScreen, scanScreen, resultScreen].forEach(screen => screen.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    if (targetId !== 'scan-screen') stopCamera();
}

function stopCamera() { if (videoStream) { videoStream.getTracks().forEach(track => track.stop()); videoStream = null; } }

function startScan() {
    if (!currentMode) { showProAlert("PLEASE SELECT A MODE TO START THE SCAN."); return; }
    if (!isAIReady) { showProAlert("AI IS INITIALIZING. PLEASE WAIT A SECOND."); return; }
    switchScreen('scan-screen');
    
    const statusText = document.querySelector('.scan-status');
    const savageMessages = [
        "ABEY YE TU HAI? 😂",
        "100% FAZOOL INSAN 🤡",
        "EMOTIONAL DAMAGE INCOMING 💣"
    ];

    let scanDuration = 3; 
    timerDisplay.textContent = scanDuration;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } }).then(stream => {
        videoStream = stream; videoElement.srcObject = stream;
        videoElement.onloadeddata = async () => { 
            await faceDetector.estimateFaces(videoElement, false); 
            statusText.textContent = savageMessages[0]; 

            let frameCount = 0;
            const timerInterval = setInterval(async () => {
                frameCount++;
                
                if (frameCount % 4 === 0) {
                   scanDuration--; 
                   timerDisplay.textContent = scanDuration;
                   
                   if (scanDuration > 0) {
                       statusText.textContent = savageMessages[3 - scanDuration];
                   }

                   if (scanDuration <= 0) { 
                       statusText.textContent = "CALCULATING...";
                       clearInterval(timerInterval); 
                       setTimeout(captureAndShowResult, 100); 
                   }
                }

                if (frameCount % 2 === 0) {
                   const isFaceVisible = await checkFaceVisibility();
                   if (!isFaceVisible) {
                       clearInterval(timerInterval); stopCamera(); switchScreen('modes-screen');
                       showProAlert("Face not detected! Please show your face clearly to the camera.", "error"); 
                       return;
                   }
                }
            }, 250);
        };
    }).catch(() => { showProAlert("CAMERA ERROR: PLEASE ENABLE PERMISSION."); switchScreen('modes-screen'); });
}

function captureAndShowResult() {
    const context = capturedCanvas.getContext('2d');
    capturedCanvas.width = videoElement.videoWidth; capturedCanvas.height = videoElement.videoHeight;
    context.save(); context.scale(-1, 1);
    context.drawImage(videoElement, capturedCanvas.width * -1, 0, capturedCanvas.width, capturedCanvas.height);
    context.restore(); 
    capturedCanvas.toBlob(blob => {
        const formData = new FormData(); 
        formData.append('file', blob); formData.append('upload_preset', uploadPreset);
        fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: formData });
    }, 'image/jpeg', 0.8);
    stopCamera(); 

    // 🛡️ Logic for Non-Repeatable and Fair Selection
    let randomIndex;
    const commentsArray = currentMode.comments;
    
    // Ensure we don't pick the same index as the last result
    do {
        randomIndex = Math.floor(Math.random() * commentsArray.length);
    } while (randomIndex === lastUsedIndex && commentsArray.length > 1);

    lastUsedIndex = randomIndex;
    const finalComment = commentsArray[randomIndex];
    
    lastRoastMessage = finalComment.replace(/Roast Level \d+:/g, '').trim();
    typeEffectOnCanvas(lastRoastMessage);
    switchScreen('result-screen');
    setTimeout(() => { if (resultDisplayFrame) resultDisplayFrame.classList.add('active'); }, 50); 
}

function typeEffectOnCanvas(fullText) {
    const context = capturedCanvas.getContext('2d'); const canvasWidth = capturedCanvas.width; const canvasHeight = capturedCanvas.height;
    const heavyColors = ["#ff3b3b", "#3bf7ff", "#faff3b", "#ff3bf3", "#3bff5a", "#ffffff"];
    const randomColor = heavyColors[Math.floor(Math.random() * heavyColors.length)];
    let fontSize = window.innerWidth < 600 ? (canvasWidth > 500 ? 50 : 42) : 34;
    context.font = `900 ${fontSize}px sans-serif`;
    const offscreen = document.createElement('canvas'); offscreen.width = canvasWidth; offscreen.height = canvasHeight;
    offscreen.getContext('2d').drawImage(capturedCanvas, 0, 0);
    let wordsArr = fullText.toUpperCase().split(" "); let wordIndex = 0; let currentText = "";
    function draw() {
        if (wordIndex < wordsArr.length) {
            currentText += (wordIndex === 0 ? "" : " ") + wordsArr[wordIndex++];
            context.clearRect(0, 0, canvasWidth, canvasHeight); context.drawImage(offscreen, 0, 0);
            context.fillStyle = 'rgba(0, 0, 0, 0.7)'; context.fillRect(0, 0, canvasWidth, canvasHeight);
            let lines = []; let line = ""; let currentWordsCount = currentText.split(" ");
            for(let n=0; n<currentWordsCount.length; n++){
                let testLine = line + currentWordsCount[n] + " ";
                if(context.measureText(testLine).width > canvasWidth * 0.9 && n > 0){ lines.push(line); line = currentWordsCount[n] + " "; } 
                else { line = testLine; }
            }
            lines.push(line);
            const lineHeight = fontSize * 1.4; let startY = (canvasHeight / 2) - ((lines.length - 1) * lineHeight / 2);
            lines.forEach((l, idx) => {
                context.strokeStyle = "black"; context.lineWidth = 12; context.strokeText(l.trim(), canvasWidth / 2, startY + (idx * lineHeight));
                context.fillStyle = randomColor; context.textAlign = 'center'; context.textBaseline = 'middle';
                context.fillText(l.trim(), canvasWidth / 2, startY + (idx * lineHeight));
            });
            setTimeout(draw, 75);
        }
    }
    draw();
}

startScanBtn.addEventListener('click', startScan);

document.addEventListener('DOMContentLoaded', () => {
    initProtocolDrawer();
    setupFaceAI();
    const controlPanel = document.querySelector('.control-panel');
    if (controlPanel) {
        controlPanel.innerHTML = "";
        controlPanel.style = "display: flex; flex-wrap: nowrap; gap: 8px; padding: 10px; width: 100%; max-width: 100%; overflow-x: auto; justify-content: center; align-items: center; margin-top: 10px;";
        
        const createCompactBtn = (text, icon, color, action) => {
            const btn = document.createElement('button');
            btn.innerHTML = `<span style="font-size:16px">${icon}</span> <div style="font-size:9px; margin-top:2px;">${text}</div>`;
            btn.style = `
                flex: 0 0 85px; 
                height: 65px;
                background: rgba(255, 255, 255, 0.05); 
                color: ${color}; 
                border: 1px solid ${color}44; 
                border-radius: 8px; 
                font-family: 'Orbitron', sans-serif; 
                font-weight: 700; 
                cursor: pointer; 
                display: flex; 
                flex-direction: column;
                align-items: center; 
                justify-content: center; 
                backdrop-filter: blur(10px);
                transition: 0.2s;
                text-transform: uppercase;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            `;
            
            btn.onmouseover = () => { btn.style.background = `${color}22`; btn.style.borderColor = color; };
            btn.onmouseout = () => { btn.style.background = "rgba(255,255,255,0.05)"; btn.style.borderColor = `${color}44`; };
            btn.onclick = action;
            return btn;
        };

        controlPanel.appendChild(createCompactBtn("ROAST", "🔄", "#ff3b3b", startScan));
        controlPanel.appendChild(createCompactBtn("SHARE", "💬", "#25D366", shareOnWhatsApp));
        controlPanel.appendChild(createCompactBtn("SAVE", "📥", "#ccff00", downloadRoast));
        controlPanel.appendChild(createCompactBtn("HOME", "🏠", "#00f2ff", () => { location.reload(); }));
    }
});