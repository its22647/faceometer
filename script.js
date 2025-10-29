// --- 1. MODES DATA (No Change) ---
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
            "SCAN FAILURE: Screen toot jayegi, itna ghoor ke mat dekho! 💔", 
            "ERROR 404: Face battery low. Initiate urgent sleep protocol! 😴",
            "Mausam ki tarah badalna toh sunna tha, lekin expression? 🤷‍♂️",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai. Kyun? Raaz hai! 😉"
        ]
    },
    {
        id: 'gossip-guru',
        name: '🤫 Gossip Guru (Secrets & Rumours)',
        styleClass: 'gossip-style',
        comments: [
            "ALERT: Pata chala hai... tumhara charger 99% tak hi support karta hai! 🔌",
            "LOGS: Tumhare Google search history mein 90% sirf 'how to get rich' hai. 🤫",
            "Subah ki pehli selfie toh tumhari asliyat chupa leti hai! 👀",
            "Aapka sabse bada raaz: Aap chupke se dance videos dekhte hain! 🕺"
        ]
    },
    {
        id: 'philosopher-panda',
        name: '🐼 Philosopher Panda (Fake Wisdom)',
        styleClass: 'philosopher-style',
        comments: [
            "Gahrai se dekho... kya tumne woh pizza order kiya tha? Vahi sach hai. 🍕",
            "Zindagi ek safar hai, aur tumhara data plan khatam ho chuka hai.💡",
            "Har chehre ke peeche ek adhoora khwab hota hai: Sahi time pe milne wali chai. ☕",
            "Sochta hu, kya sochta hu? Bass, yahi sachai hai. (Panda ka niyam) 🧘‍♂️"
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

// --- 3. CORE FUNCTIONS ---

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
                        
                        // **Use a small delay to ensure frame rendering is complete**
                        setTimeout(captureAndShowResult, 100); 
                    }
                }, 1000);
            };

        })
        .catch(err => {
            alert("SYSTEM ERROR: Camera access denied! 😥");
            stopCamera();
            switchScreen('modes-screen');
        });
}

// ** PIC CAPTURE FINAL LOGIC (stopCamera moved AFTER drawing) **
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

// --- 4. FUNNY HORIZONTAL TEXT DRAWING LOGIC (Using Bangers on Dark BG) ---
function drawHorizontalFunnyText(text, styleClass) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    
    // Solid background for text box for better contrast
    context.globalAlpha = 0.9;
    context.fillStyle = 'rgba(0, 0, 0, 0.9)'; 
    context.fillRect(0, canvasHeight - 150, canvasWidth, 150);
    context.globalAlpha = 1.0; 

    // Font selection (Bangers for FUNKY look, on dark theme)
    let fontFamily = 'Bangers, cursive'; 
    let fontColor = '#00ff00'; // Default Neon Green

    // Adjust font size based on canvas width
    let fontSize = 35; 
    if (canvasWidth > 700) { fontSize = 50; } 
    else if (canvasWidth > 500) { fontSize = 40; }

    if (styleClass === 'roast-style') {
        fontColor = '#ff3333'; // Vibrant Red
    } else if (styleClass === 'gossip-style') {
        fontColor = '#00ff00'; // Neon Green
    } else if (styleClass === 'philosopher-style') {
        fontColor = '#00ffff'; // Neon Cyan
    }
    
    context.fillStyle = fontColor;
    context.textAlign = 'center';
    context.shadowColor = 'rgba(0,0,0,0.8)'; 
    context.shadowBlur = 10; 
    context.font = `bold ${fontSize}px ${fontFamily}`;
    
    const lineHeight = fontSize * 1.1;

    // Logic to wrap text horizontally
    function getLines(ctx, text, maxWidth) {
        const words = text.split(" ");
        let lines = [];
        let currentLine = words[0] || '';

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
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

    const lines = getLines(context, text, canvasWidth * 0.9); 

    // Adjust Y start position to center text vertically in the black strip
    let currentY = canvasHeight - 150 + (150 / 2) - ((lines.length * lineHeight) / 2) + (fontSize * 0.3); 

    lines.forEach((lineText, index) => {
        context.fillText(lineText, canvasWidth / 2, currentY + (index * lineHeight));
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