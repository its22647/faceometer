// --- 1. MODES DATA (Heavy-but-Safe Comments) ---
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
            "Screen toot jayegi, itna ghoor ke mat dekho! 💔", // Requested heavy line
            "Aaj kal face ki battery low lag rahi hai. Time pe so jao! 😴",
            "Mausam ki tarah badalna toh sunna tha, lekin expression? 🤷‍♂️",
            "Tumhari selfie is waqt duniya ka 8th ajooba hai. Kyun? Raaz hai! 😉"
        ]
    },
    {
        id: 'gossip-guru',
        name: '🤫 Gossip Guru (Secrets & Rumours)',
        styleClass: 'gossip-style',
        comments: [
            "Pata chala hai... tumhara charger 99% tak hi support karta hai! 🔌",
            "Tumhare Google search history mein 90% sirf 'how to get rich' hai. 🤫",
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
            "Zindagi ek safar hai, aur tumhara data plan khatam ho chuka hai. 💡",
            "Har chehre ke peeche ek adhoora khwab hota hai: Sahi time pe milne wali chai. ☕",
            "Sochta hu, kya sochta hu? Bass, yahi sachai hai. (Panda ka niyam) 🧘‍♂️"
        ]
    }
];

// --- 2. ELEMENT REFERENCES & STATE ---
let currentMode = modes[0]; // Start with placeholder
let videoStream = null;

const modesScreen = document.getElementById('modes-screen');
const scanScreen = document.getElementById('scan-screen');
const resultScreen = document.getElementById('result-screen');
const modeSelect = document.getElementById('mode-select');
const startScanBtn = document.getElementById('start-scan-btn');

const videoElement = document.getElementById('videoElement');
const capturedCanvas = document.getElementById('capturedCanvas');
const commentArea = document.getElementById('comment-area');
const timerDisplay = document.getElementById('timer-display');
const newScanBtn = document.getElementById('new-scan-btn');
const backToModesBtn = document.getElementById('back-to-modes-btn');

// --- 3. CORE FUNCTIONS ---

function switchScreen(targetId) {
    stopCamera();
    [modesScreen, scanScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
}

function stopCamera() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
}

// Function to start the camera and timer
function startScan() {
    if (currentMode.id === 'placeholder') {
        alert("Pehle 'Vibe' toh select kar lo, Aamir! 😉");
        return;
    }
    
    switchScreen('scan-screen');
    let scanDuration = 3; 
    timerDisplay.textContent = scanDuration;
    
    // Request camera access
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then(stream => {
            videoStream = stream;
            videoElement.srcObject = stream;
            
            // Start Timer
            const timerInterval = setInterval(() => {
                scanDuration--;
                timerDisplay.textContent = scanDuration;

                if (scanDuration <= 0) {
                    clearInterval(timerInterval);
                    captureAndShowResult();
                }
            }, 1000);

        })
        .catch(err => {
            alert("Camera access denied! Face-o-Meter chala nahi sakta. 😥");
            stopCamera();
            switchScreen('modes-screen');
        });
}

function captureAndShowResult() {
    stopCamera();

    // 1. Capture Image to Canvas
    const context = capturedCanvas.getContext('2d');
    capturedCanvas.width = videoElement.videoWidth;
    capturedCanvas.height = videoElement.videoHeight;
    
    context.save();
    context.scale(-1, 1);
    context.drawImage(videoElement, capturedCanvas.width * -1, 0, capturedCanvas.width, capturedCanvas.height);
    context.restore();
    
    // 2. Get Random Comment
    const selectedMode = currentMode;
    const randomIndex = Math.floor(Math.random() * selectedMode.comments.length);
    const finalComment = selectedMode.comments[randomIndex];

    // 3. Display Comment on HTML
    commentArea.innerHTML = `<span class="${selectedMode.styleClass}">${finalComment}</span>`;
    
    // 4. Draw Teerha Merha Text on Canvas
    drawTeerhaMerhaText(finalComment, selectedMode.styleClass);

    // 5. Switch to Result Screen
    switchScreen('result-screen');
}

// --- 4. TEERHA MERHA TEXT DRAWING LOGIC (New Heavy Feature) ---
function drawTeerhaMerhaText(text, styleClass) {
    const context = capturedCanvas.getContext('2d');
    const canvasWidth = capturedCanvas.width;
    const canvasHeight = capturedCanvas.height;
    
    // Background rectangle for text
    context.globalAlpha = 0.7;
    context.fillStyle = 'black';
    context.fillRect(0, canvasHeight - 170, canvasWidth, 170);
    context.globalAlpha = 1.0;

    // Font selection
    let fontFamily = 'Impact, fantasy'; 
    let fontColor = '#ffdd00';
    let fontSize = canvasWidth > 500 ? 45 : 30;

    if (styleClass === 'roast-style') {
        fontFamily = 'Bangers, cursive'; 
        fontColor = '#ff3333'; 
    } else if (styleClass === 'gossip-style') {
        fontFamily = 'Permanent Marker, cursive'; 
        fontColor = '#00ffff'; 
        fontSize = canvasWidth > 500 ? 35 : 25;
    } else if (styleClass === 'philosopher-style') {
        fontFamily = 'Georgia, serif'; 
        fontColor = '#ccff00';
        fontSize = canvasWidth > 500 ? 35 : 25;
    }
    
    context.fillStyle = fontColor;
    context.textAlign = 'center';
    
    const words = text.split(' ');
    let currentY = canvasHeight - 130;
    const lineHeight = fontSize * 1.3;
    let currentX = canvasWidth / 2;

    context.shadowColor = 'black';
    context.shadowBlur = 5;

    // Drawing each word teerha-merha
    words.forEach((word, index) => {
        context.save();
        
        // Random rotation (Teerha) and shift (Merha)
        const rotation = (Math.random() * 0.2 - 0.1); // -0.1 to 0.1 radians
        const shiftX = (Math.random() * 30 - 15);
        
        context.translate(currentX + shiftX, currentY);
        context.rotate(rotation);
        
        context.font = `bold ${fontSize}px ${fontFamily}`;
        context.fillText(word, 0, 0);
        
        context.restore();

        currentY += lineHeight;
        if (currentY > canvasHeight - 30) {
            // New line ke liye reset
            currentY = canvasHeight - 130; 
            currentX = Math.random() < 0.5 ? canvasWidth / 4 : canvasWidth * 0.75; // Left ya Right shift
        }
    });

    context.shadowBlur = 0;
}


// --- 5. EVENT LISTENERS & INIT ---

// Dropdown change par currentMode update karna
modeSelect.addEventListener('change', (e) => {
    const selectedModeId = e.target.value;
    currentMode = modes.find(m => m.id === selectedModeId);
});

// Start Scan button
startScanBtn.addEventListener('click', startScan);

// New Scan button
newScanBtn.addEventListener('click', startScan);

// Back to Modes button
backToModesBtn.addEventListener('click', () => {
    currentMode = modes[0]; // Reset mode
    modeSelect.value = 'placeholder';
    switchScreen('modes-screen');
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown options dynamically add karna
    modes.forEach(mode => {
        const option = document.createElement('option');
        option.value = mode.id;
        option.textContent = mode.name;
        modeSelect.appendChild(option);
    });
    // Set placeholder as initial value
    modeSelect.value = 'placeholder';
});