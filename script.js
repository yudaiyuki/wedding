// ID入力システムのJavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('システムが読み込まれました');
    
    // 入力フィールドにフォーカスを設定
    document.getElementById('userId').focus();
});

// ゲストデータ
const GUESTS = [
        {
                "id": "yudaiyudaiyudai",
                "name": "ゆき",
                "relationship": "ゆき",
                "message": "ふひ",
                "specialEffect": "bubbles"
        },
        {
                "id": "momomomondon",
                "name": "どん",
                "relationship": "妹",
                "message": "勉強頑張れー",
                "specialEffect": "bubbles"
        },
        {
                "id": "tachijiro",
                "name": "たち",
                "relationship": "同期",
                "message": "たち！これあげるわ！",
                "specialEffect": "ramen"
        },
        {
                "id": "isechangod",
                "name": "伊勢さん",
                "relationship": "同期",
                "message": "万能なとこすげえよなー彼女おらんとこだけやん！",
                "specialEffect": "golf"
        },
        {
                "id": "mineminestraight",
                "name": "たかみね",
                "relationship": "同期",
                "message": "たかみね、自分に真っ直ぐなとこ👍👍👍👍👍これからもよろしく！",
                "specialEffect": "beer"
        },
        {
                "id": "kijicommunity",
                "name": "きじま",
                "relationship": "同期",
                "message": "コミュ力うらやましいわあー",
                "specialEffect": "butterflies"
        },
        {
                "id": "ifican",
                "name": "にしえ",
                "relationship": "同期",
                "message": "また飲みに行けたら行こ！(笑)",
                "specialEffect": "confetti"
        },
        {
                "id": "supermario64",
                "name": "Mario",
                "relationship": "同期",
                "message": "Thank you for being here today! I can't speak English yet...",
                "specialEffect": "stars"
        },
        {
                "id": "Gwonmocasino",
                "name": "구さん",
                "relationship": "同期",
                "message": "육아 최선을 다하십시오!",
                "specialEffect": "bubbles"
        },
        {
                "id": "whenmarry",
                "name": "きのした",
                "relationship": "同期",
                "message": "はよ結婚せー",
                "specialEffect": "sparkle"
        },
        {
                "id": "coolmoe",
                "name": "はすいけ",
                "relationship": "同期",
                "message": "準備は真面目にしたほうがいいで！（新郎目線）",
                "specialEffect": "snowflakes"
        },
        {
                "id": "sawachan",
                "name": "かわずみ",
                "relationship": "同期",
                "message": "ずみ、そろそろ億れるんちゃうん？",
                "specialEffect": "money"
        },
        {
                "id": "okawarikun",
                "name": "たにだ",
                "relationship": "同期",
                "message": "藤浪観にいこ！",
                "specialEffect": "baseballCrazyBounce"
        },
        {
                "id": "onopsycho",
                "name": "おの",
                "relationship": "同期",
                "message": "カジノしようぜ！",
                "specialEffect": "trump"
        },
        {
                "id": "bigvoice",
                "name": "ナガオ",
                "relationship": "大学野球部",
                "message": "またゴルフ誘ってくださいー",
                "specialEffect": "golf"
        },
        {
                "id": "ojisan",
                "name": "酒井",
                "relationship": "大学野球部",
                "message": "いいパパになりそうやな",
                "specialEffect": "baseballScatter"
        },
        {
                "id": "JRso-ta",
                "name": "井上",
                "relationship": "大学野球部後輩",
                "message": "後輩誘わなしんどいなー",
                "specialEffect": "baseballSlide"
        },
        {
                "id": "batty-speed",
                "name": "かわばた",
                "relationship": "大学野球部",
                "message": "子育て頑張って",
                "specialEffect": "roses"
        },
        {
                "id": "nagayamaonthethree",
                "name": "ながやま",
                "relationship": "大学野球部",
                "message": "大阪までありがとう～次は2ヶ月後やな！",
                "specialEffect": "butterflies"
        },
        {
                "id": "sistercallyoumiyabe",
                "name": "みやべ",
                "relationship": "大学野球部",
                "message": "金ほしいなー",
                "specialEffect": "money"
        },
        {
                "id": "danyunakazawa",
                "name": "なかざわ",
                "relationship": "大学野球部",
                "message": "今日はありがとう～のんびり暮らしていくわ～くらいしかいうことないな～",
                "specialEffect": "sakura"
        },
        {
                "id": "simikenhossi",
                "name": "ホッシ",
                "relationship": "大学野球部",
                "message": "金貸してや",
                "specialEffect": "money"
        },
        {
                "id": "tomochin",
                "name": "いたの",
                "relationship": "高校野球部",
                "message": "またいつか対戦できたらええな！",
                "specialEffect": "baseballSlide"
        },
        {
                "id": "ematsuema",
                "name": "えまつ",
                "relationship": "高校野球部",
                "message": "3塁ランナーのえまつにVOY!!言い返せなかったのがいまでも後悔してる",
                "specialEffect": "sparkle"
        },
        {
                "id": "taisei_H",
                "name": "はっしー",
                "relationship": "高校野球部",
                "message": "もう引退？子育て頑張れ👨‍👩‍👦",
                "specialEffect": "sakura"
        },
        {
                "id": "deliciousriceball",
                "name": "なっちゃん",
                "relationship": "高校野球部",
                "message": "わざわざありがとう～子育て頑張れ！",
                "specialEffect": "bubbles"
        },
        {
                "id": "abechanyips",
                "name": "あべちゃん",
                "relationship": "高校野球部",
                "message": "またキャッチボールしよー⚾",
                "specialEffect": "baseballCrazyBounce"
        },
        {
                "id": "hidabank",
                "name": "ひだ",
                "relationship": "高校野球部",
                "message": "なんやかんや一番長く野球やったなーまた草野球しよー",
                "specialEffect": "money"
        },
        {
                "id": "koyamakekkonsenno",
                "name": "こやま",
                "relationship": "幼馴染",
                "message": "受付スピーチ準備いろいろありがとう！今日だけじゃなく野球とかいつもありがとう！これからもよろしく！",
                "specialEffect": "baseballSlide"
        },
        {
                "id": "ueuepandabaseball",
                "name": "なかうえ",
                "relationship": "幼馴染",
                "message": "遅ればせながら式をあげました！23歳？でこの準備をやってたん？だいぶきつかったわー笑",
                "specialEffect": "sakura"
        },
        {
                "id": "looklikewada",
                "name": "かっちゃん",
                "relationship": "幼馴染",
                "message": "またお子を見させてー！また草野球とか一緒にできたらええなー⚾",
                "specialEffect": "baseball"
        },
        {
                "id": "funenouenoyokoyama",
                "name": "よこやま",
                "relationship": "幼馴染",
                "message": "自分の夢にむかってすすむのええなあーいつか運転する船に乗せてくれー！",
                "specialEffect": "bubbles"
        }
];

// 入力内容をチェック
function checkGuest() {
    const userId = document.getElementById('userId').value.toLowerCase().trim();
    const guest = GUESTS.find(g => g.id.toLowerCase() === userId);
    
    if (guest) {
        displayGuestMessage(guest);
    } else {
        alert('IDが見つかりません。\n正確なIDを入力してください。');
    }
}

// ゲストメッセージを表示
function displayGuestMessage(guest) {
    const container = document.getElementById('container');
    const guestNameDisplay = document.getElementById('guestName');
    
    // 現在の画面を隠す
    container.style.display = 'none';
    
    // ゲスト名を表示
    guestNameDisplay.textContent = guest.name;
    guestNameDisplay.style.display = 'block';
    
    // 封筒のアニメーションコンテナを表示
    document.getElementById('messageContainer').innerHTML = `
        <div class="envelope-container">
            <div class="envelope" id="envelope" onclick="openEnvelope()">
                <div class="envelope-flap">
                    <div class="envelope-icon">📮</div>
                </div>
                <div class="letter"></div>
            </div>
            <div class="tap-instruction" id="tapInstruction">👆Please check👆</div>
        </div>
        <div id="messageDisplay" style="display: none; transform: translateY(-120px);">
            <div class="message-card">
                <p>${guest.message}</p>
            </div>
        </div>
    `;
    
    document.getElementById('messageContainer').style.display = 'block';
}

// 封筒を開くアニメーション
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const tapInstruction = document.getElementById('tapInstruction');
    const messageDisplay = document.getElementById('messageDisplay');
    const guestNameDisplay = document.getElementById('guestName');
    
    // 現在のゲスト情報を取得
    const userId = document.getElementById('userId').value.toLowerCase().trim();
    const guest = GUESTS.find(g => g.id.toLowerCase() === userId);
    
    // 封筒にオープンクラスを追加
    envelope.classList.add('open');
    
    // タップ指示を隠す
    tapInstruction.style.display = 'none';
    
    // ゲスト名を隠す（フェードアウト）
    guestNameDisplay.style.opacity = '0';
    guestNameDisplay.style.transition = 'opacity 0.5s ease-out';
    
    // 少し遅れてゲスト名を完全に隠す
    setTimeout(() => {
        guestNameDisplay.style.display = 'none';
    }, 500);
    
    // 封筒のアニメーションが終わったらメッセージを表示
    setTimeout(() => {
        envelope.style.display = 'none';
        messageDisplay.style.display = 'block';
        messageDisplay.style.opacity = '0';
        messageDisplay.style.transition = 'opacity 0.8s ease-in';
        
        // 特殊エフェクトを適用
        if (guest && guest.specialEffect) {
            applySpecialEffect(guest.specialEffect);
        }
        
        setTimeout(() => {
            messageDisplay.style.opacity = '1';
        }, 100);
    }, 1000);
}

// 特殊エフェクトを適用する関数
function applySpecialEffect(effectType) {
    // エフェクトコンテナを作成
    const effectContainer = document.createElement('div');
    effectContainer.className = 'effect-container';
    effectContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 1000;
        overflow: hidden;
    `;
    
    document.body.appendChild(effectContainer);
    
    // エフェクトタイプに応じて処理
    switch(effectType) {
        case 'sakura':
            createSakuraEffect(effectContainer);
            break;
        case 'fireworks':
            createFireworksEffect(effectContainer);
            break;
        case 'confetti':
            createConfettiEffect(effectContainer);
            break;
        case 'stars':
            createStarsEffect(effectContainer);
            break;
        case 'butterflies':
            createButterfliesEffect(effectContainer);
            break;
        case 'snowflakes':
            createSnowflakesEffect(effectContainer);
            break;
        case 'bubbles':
            createBubblesEffect(effectContainer);
            break;
        case 'roses':
            createRosesEffect(effectContainer);
            break;
        case 'sparkle':
            createSparkleEffect(effectContainer);
            break;
        case 'hearts':
            createHeartsEffect(effectContainer);
            break;
        case 'beer':
            createBeerEffect(effectContainer);
            break;
        case 'rainbow':
            createRainbowEffect(effectContainer);
            break;
        case 'golf':
            createGolfEffect(effectContainer);
            break;
        case 'baseball':
            createBaseballEffect(effectContainer);
            break;
        case 'baseballSlide':
            createBaseballSlideEffect(effectContainer);
            break;
        case 'trump':
            createTrumpEffect(effectContainer);
            break;
        case 'baseballScatterFast':
            createBaseballScatterFastEffect(effectContainer);
            break;
        case 'baseballCrazyBounce':
            createBaseballCrazyBounceEffect(effectContainer);
            break;
        case 'baseballScatter':
            createBaseballScatterEffect(effectContainer);
            break;
        case 'money':
            createMoneyEffect(effectContainer);
            break;
        case 'ramen':
            createRamenEffect(effectContainer);
            break;
        case 'joker':
            createJokerEffect(effectContainer);
            break;
    }
    
    // 10秒後にエフェクトを削除
    setTimeout(() => {
        if (effectContainer.parentNode) {
            effectContainer.parentNode.removeChild(effectContainer);
        }
    }, 10000);
}

// 桜エフェクト
function createSakuraEffect(container) {
    for (let i = 0; i < 50; i++) {
        const sakura = document.createElement('div');
        sakura.innerHTML = '🌸';
        sakura.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: fall ${Math.random() * 3 + 4}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(sakura);
    }
}

// 花火エフェクト
function createFireworksEffect(container) {
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.innerHTML = '🎆';
        firework.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 30 + 20}px;
            left: ${Math.random() * 80 + 10}vw;
            top: ${Math.random() * 60 + 10}vh;
            animation: explode ${Math.random() * 2 + 1}s ease-out;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(firework);
    }
}

// その他のエフェクト関数を追加
function createConfettiEffect(container) {
    const colors = ['🎊', '🎉', '✨'];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 15 + 10}px;
            left: ${Math.random() * 100}vw;
            top: -30px;
            animation: fall ${Math.random() * 2 + 3}s linear infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        container.appendChild(confetti);
    }
}

function createStarsEffect(container) {
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 18 + 12}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: twinkle ${Math.random() * 2 + 1}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(star);
    }
}

// 簡単なエフェクト関数（他のエフェクトも同様に実装）
function createButterfliesEffect(container) { createGenericEffect(container, '🦋', 30); }
function createSnowflakesEffect(container) { createGenericEffect(container, '❄️', 45); }
function createBubblesEffect(container) { createGenericEffect(container, '🫧', 35); }
function createRosesEffect(container) { createGenericEffect(container, '🌹', 25); }
function createSparkleEffect(container) { createGenericEffect(container, '✨', 50); }
function createHeartsEffect(container) { createGenericEffect(container, '💖', 30); }

function createGenericEffect(container, emoji, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.innerHTML = emoji;
        element.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: fall ${Math.random() * 3 + 4}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(element);
    }
}

function createLightningEffect(container) {
    container.style.background = 'radial-gradient(circle, rgba(255,255,0,0.1) 0%, transparent 70%)';
    container.style.animation = 'flash 0.1s ease-in-out infinite';
}

function createAuroraEffect(container) {
    container.style.background = 'linear-gradient(45deg, rgba(0,255,150,0.1), rgba(150,0,255,0.1), rgba(255,150,0,0.1))';
    container.style.animation = 'aurora 8s ease-in-out infinite';
}

function createRainbowEffect(container) {
    container.style.background = 'linear-gradient(90deg, red 0%, orange 14%, yellow 28%, green 42%, blue 57%, indigo 71%, violet 85%, red 100%)';
    container.style.opacity = '0.1';
    container.style.animation = 'rainbow-move 5s linear infinite';
}

// CSS アニメーションを動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(100vh) rotate(360deg); }
    }
    @keyframes explode {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes flash {
        0%, 50% { opacity: 0; }
        25% { opacity: 1; }
    }
    @keyframes aurora {
        0%, 100% { opacity: 0.1; transform: translateX(-50px); }
        50% { opacity: 0.3; transform: translateX(50px); }
    }
    @keyframes rainbow-move {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
    @keyframes golfSwing {
        0% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(20vh) rotate(90deg); }
        50% { transform: translateY(40vh) rotate(180deg); }
        75% { transform: translateY(60vh) rotate(270deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
    @keyframes baseballFly {
        0% { transform: translateY(0) translateX(0) rotate(0deg); }
        25% { transform: translateY(25vh) translateX(10vw) rotate(45deg); }
        50% { transform: translateY(30vh) translateX(20vw) rotate(90deg); }
        75% { transform: translateY(50vh) translateX(15vw) rotate(180deg); }
        100% { transform: translateY(100vh) translateX(0) rotate(360deg); }
    }
    @keyframes baseballScatterFast {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        100% {
            transform: translate(var(--x-move), var(--y-move)) rotate(720deg);
        }
    }
    @keyframes cardFlip {
        0% { transform: translateY(0) rotateY(0deg); opacity: 1; }
        25% { transform: translateY(25vh) rotateY(90deg); }
        50% { transform: translateY(50vh) rotateY(180deg); }
        75% { transform: translateY(75vh) rotateY(270deg); }
        100% { transform: translateY(100vh) rotateY(360deg); opacity: 0.5; }
    }
    @keyframes baseballScatter {
        0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(720deg);
            opacity: 0.8;
        }
    }
    @keyframes baseballSlide {
        0% { transform: translateX(0) rotate(0deg); opacity: 1; }
        100% { transform: translateX(120vw) rotate(720deg); opacity: 0; }
    }
    @keyframes beerDrop {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes ramenDrop {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes jokerSpin {
        0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
        25% { transform: translateY(25vh) rotate(180deg) scale(1.2); }
        50% { transform: translateY(50vh) rotate(360deg) scale(0.8); }
        75% { transform: translateY(75vh) rotate(540deg) scale(1.1); }
        100% { transform: translateY(100vh) rotate(720deg) scale(0.5); opacity: 0; }
    }
    @keyframes moneyRain {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.8;
        }
    }

`;
document.head.appendChild(style);

// Enterキーでの送信をサポート
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuest();
    }
});

// 入力フィールドをクリア
function clearInputs() {
    document.getElementById('userId').value = '';
    document.getElementById('userId').focus();
}

// メッセージ表示用の関数（オプション：将来の拡張用）
function showMessage(title, content) {
    alert(title + '\n\n' + content);
}

// ゴルフエフェクト
function createGolfEffect(container) {
    const golfElements = ['⛳', '🏌️', '⛳', '🌿', '🏌️‍♂️'];
    for (let i = 0; i < 30; i++) {
        const golf = document.createElement('div');
        golf.innerHTML = golfElements[Math.floor(Math.random() * golfElements.length)];
        golf.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: golfSwing ${Math.random() * 4 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            transform-origin: center;
        `;
        container.appendChild(golf);
    }
}

// 野球エフェクト
function createBaseballSlideEffect(container) {
    for (let i = 0; i < 30; i++) {
        const ball = document.createElement('div');
        ball.innerHTML = '⚾️';
        ball.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            top: ${Math.random() * 80}vh;
            left: -50px;
            animation: baseballSlide ${Math.random() * 3 + 3}s linear infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(ball);
    }
}

function createBaseballScatterFastEffect(container) {
    for (let i = 0; i < 50; i++) {
        const ball = document.createElement('div');
        ball.innerHTML = '⚾️';
        const size = Math.random() * 20 + 15;
        const xMove = Math.random() * 400 - 200;  // -200px〜+200px
        const yMove = Math.random() * 400 - 200;
        ball.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: baseballScatterFast ${Math.random() * 1.5 + 0.5}s linear infinite alternate;
            animation-delay: ${Math.random() * 1}s;
            --x-move: ${xMove}px;
            --y-move: ${yMove}px;
        `;
        container.appendChild(ball);
    }
}

function createBaseballCrazyBounceEffect(container) {
    for (let i = 0; i < 40; i++) {
        const ball = document.createElement('div');
        ball.innerHTML = '⚾️';
        const size = Math.random() * 20 + 15;
        ball.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
        `;
        container.appendChild(ball);

        animateCrazyBounce(ball);
    }
}

function animateCrazyBounce(element) {
    let posX = parseFloat(element.style.left);
    let posY = parseFloat(element.style.top);
    let dirX = Math.random() * 2 - 1;  // -1〜1
    let dirY = Math.random() * 2 - 1;
    const speed = Math.random() * 1.5 + 1;  // 1〜2.5

    function move() {
        posX += dirX * speed;
        posY += dirY * speed;

        // 画面端で反転
        if (posX < 0 || posX > 100) dirX = -dirX;
        if (posY < 0 || posY > 100) dirY = -dirY;

        element.style.left = `${posX}vw`;
        element.style.top = `${posY}vh`;
        element.style.transform = `rotate(${Date.now() % 360}deg)`;

        // 時々方向を変える
        if (Math.random() < 0.05) {
            dirX = Math.random() * 2 - 1;
            dirY = Math.random() * 2 - 1;
        }

        requestAnimationFrame(move);
    }

    move();
}


function createBaseballScatterEffect(container) {
    for (let i = 0; i < 40; i++) {
        const ball = document.createElement('div');
        ball.innerHTML = '⚾️';
        const size = Math.random() * 20 + 20;
        ball.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: baseballScatter ${Math.random() * 5 + 5}s ease-in-out infinite alternate;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(ball);
    }
}



function createBaseballEffect(container) {
    const baseballElements = ['⚾', '🥎', '⚾️', '🏆'];
    for (let i = 0; i < 35; i++) {
        const baseball = document.createElement('div');
        baseball.innerHTML = baseballElements[Math.floor(Math.random() * baseballElements.length)];
        baseball.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 30 + 15}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: baseballFly ${Math.random() * 3 + 2}s ease-out infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        container.appendChild(baseball);
    }
}

// トランプエフェクト
function createTrumpEffect(container) {
    const trumpElements = ['🂡', '🂱', '🃁', '🃑', '♠️', '♥️', '♦️', '♣️', '🎰', '🃏','🎲'];
    for (let i = 0; i < 40; i++) {
        const trump = document.createElement('div');
        trump.innerHTML = trumpElements[Math.floor(Math.random() * trumpElements.length)];
        trump.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 18}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: cardFlip ${Math.random() * 4 + 3}s linear infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(trump);
    }
}

// ジョーカーエフェクト
function createJokerEffect(container) {
    const jokerElements = ['🃏', '🤡', '🎭', '🎪', '🎠', '🎡'];
    for (let i = 0; i < 35; i++) {
        const joker = document.createElement('div');
        joker.innerHTML = jokerElements[Math.floor(Math.random() * jokerElements.length)];
        joker.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 18}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: jokerSpin ${Math.random() * 4 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(joker);
    }
}

function createBeerEffect(container) {
    const beerElements = ['🍺', '🥂', '🍻', '🍶', '🍷'];
    for (let i = 0; i < 40; i++) {
        const beer = document.createElement('div');
        beer.innerHTML = beerElements[Math.floor(Math.random() * beerElements.length)];
        beer.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -60px;
            animation: beerDrop ${Math.random() * 5 + 2.5}s ease-in infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(beer);
    }
}

function createMoneyEffect(container) {
    const moneyElements = ['💰', '💵', '💴', '💶', '💷', '🪙', '🤑'];
    for (let i = 0; i < 50; i++) {
        const money = document.createElement('div');
        money.innerHTML = moneyElements[Math.floor(Math.random() * moneyElements.length)];
        money.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: moneyRain ${Math.random() * 3 + 4}s linear infinite;
            animation-delay: ${Math.random() * 3}s;
            transform-origin: center;
        `;
        container.appendChild(money);
    }
}

function createRamenEffect(container) {
    const ramenElements = ['🍖', '🍜', '🧄' ];
    for (let i = 0; i < 40; i++) {
        const ramen = document.createElement('div');
        ramen.innerHTML = ramenElements[Math.floor(Math.random() * ramenElements.length)];
        ramen.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -60px;
            animation: ramenDrop ${Math.random() * 5 + 3}s ease-in infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(ramen);
    }
}
