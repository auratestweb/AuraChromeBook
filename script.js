// ===== XBOX SERIES X CONSOLE SYSTEM =====

// Game Database
const XBOX_GAMES = {
    'doodlejump-window': { id: 'doodlejump-window', name: 'Doodle Jump', icon: '🐰', category: 'arcade', rating: 4.6, banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800', desc: 'Jump endlessly upward in this classic arcade game.', controls: 'Arrow keys to move left/right' },
    'drivingsimulator-window': { id: 'drivingsimulator-window', name: 'Driving Simulator', icon: '🚗', category: 'racing', rating: 4.5, banner: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800', desc: 'Realistic driving simulation experience.', controls: 'WASD to drive, Space to brake' },
    'effingzombies-window': { id: 'effingzombies-window', name: 'Effing Zombies', icon: '🧟', category: 'action', rating: 4.4, banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', desc: 'Survive waves of zombie attacks.', controls: 'Mouse to aim, Click to shoot' },
    'infinitecraft-window': { id: 'infinitecraft-window', name: 'Infinite Craft', icon: '⚗️', category: 'simulation', rating: 4.6, banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', desc: 'Combine elements to create new items.', controls: 'Drag and drop to combine' },
    'paperio-window': { id: 'paperio-window', name: 'Paper.io', icon: '📄', category: 'arcade', rating: 4.5, banner: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800', desc: 'Capture territory in this addictive strategy game.', controls: 'Arrow keys to move' },
    'parkingfury-window': { id: 'parkingfury-window', name: 'Parking Fury', icon: '🅿️', category: 'racing', rating: 4.4, banner: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800', desc: 'Master the art of parking under pressure.', controls: 'Arrow keys to drive' },
    'granny3-window': { id: 'granny3-window', name: 'Granny 3', icon: '👵', category: 'horror', rating: 4.5, banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', desc: 'Escape from Granny's haunted house.', controls: 'WASD to move, E to interact' },
    'granny2-window': { id: 'granny2-window', name: 'Granny 2', icon: '👵', category: 'horror', rating: 4.6, banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', desc: 'The sequel horror escape game.', controls: 'WASD to move, E to interact' },
    'fridaynightfunk-window': { id: 'fridaynightfunk-window', name: 'Friday Night Funkin', icon: '🎤', category: 'arcade', rating: 4.8, banner: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800', desc: 'Rhythm battle game with catchy beats.', controls: 'Arrow keys to match beats' },
    'geometrydash-window': { id: 'geometrydash-window', name: 'Geometry Dash', icon: '📐', category: 'arcade', rating: 4.9, banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', desc: 'Jump and fly through dangerous passages.', controls: 'Space/Click to jump' },
    'smashcarts-window': { id: 'smashcarts-window', name: 'Smash Karts', icon: '🏎️', category: 'racing', rating: 4.8, banner: 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?q=80&w=800', desc: 'Kart racing battle royale with weapons.', controls: 'WASD to drive, Space to shoot' },
    'fnae-window': { id: 'fnae-window', name: 'Five Nights', icon: '🐻', category: 'horror', rating: 4.5, banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', desc: 'Survive the night shift at the pizzeria.', controls: 'Mouse to interact' },
    'eaglercraft-window': { id: 'eaglercraft-window', name: 'Eaglercraft', icon: '⛏️', category: 'simulation', rating: 4.8, banner: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=800', desc: 'Minecraft-style sandbox building game.', controls: 'WASD to move, Mouse to look' },
    'granny-window': { id: 'granny-window', name: 'Granny', icon: '👵', category: 'horror', rating: 4.3, banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800', desc: 'Escape from Granny's house in 5 days.', controls: 'WASD to move, E to interact' },
    'escaperoad-window': { id: 'escaperoad-window', name: 'Escape Road', icon: '🚗', category: 'racing', rating: 4.6, banner: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800', desc: 'High-speed escape driving game.', controls: 'Arrow keys to drive' },
    'escaperoad2-window': { id: 'escaperoad2-window', name: 'Escape Road 2', icon: '🏎️', category: 'racing', rating: 4.7, banner: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800', desc: 'Sequel with more vehicles and maps.', controls: 'Arrow keys to drive' },
    'solarsmash-window': { id: 'solarsmash-window', name: 'Solar Smash', icon: '🪐', category: 'simulation', rating: 4.4, banner: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800', desc: 'Destroy planets with various weapons.', controls: 'Click to select weapons' },
    'brainrot-window': { id: 'brainrot-window', name: 'Brainrot', icon: '🧠', category: 'puzzle', rating: 4.1, banner: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800', desc: 'Steal the brainrot in this puzzle game.', controls: 'Mouse to interact' },
    'ragdollhit-window': { id: 'ragdollhit-window', name: 'Ragdoll Hit', icon: '🥊', category: 'action', rating: 4.2, banner: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=800', desc: 'Physics-based ragdoll fighting game.', controls: 'Mouse to aim and swing' },
    'ragdollarchers-window': { id: 'ragdollarchers-window', name: 'Ragdoll Archers', icon: '🏹', category: 'action', rating: 4.5, banner: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800', desc: 'Archery with realistic ragdoll physics.', controls: 'Mouse to aim and shoot' },
    '99nights-window': { id: '99nights-window', name: '99 Nights', icon: '🌲', category: 'survival', rating: 4.6, banner: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800', desc: 'Survive 99 nights in the forest.', controls: 'WASD to move, Click to attack' },
    'rocketleague-window': { id: 'rocketleague-window', name: 'Rocket League', icon: '⚽', category: 'sports', rating: 4.9, banner: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800', desc: 'Soccer with rocket-powered cars.', controls: 'WASD to drive, Space to jump' },
    'bballrandom-window': { id: 'bballrandom-window', name: 'Basketball Random', icon: '🏀', category: 'sports', rating: 4.4, banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800', desc: 'Randomized basketball physics game.', controls: 'Arrow keys to move' },
    'bballbros-window': { id: 'bballbros-window', name: 'Basketball Bros', icon: '🏀', category: 'sports', rating: 4.5, banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800', desc: '2-player basketball showdown.', controls: 'WASD and Arrow keys' },
    'bballlegend-window': { id: 'bballlegend-window', name: 'Basketball Legend', icon: '🏀', category: 'sports', rating: 4.6, banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800', desc: 'Become a basketball legend.', controls: 'Arrow keys to move, Space to shoot' },
    'roblox-window': { id: 'roblox-window', name: 'Roblox', icon: '🟥', category: 'adventure', rating: 4.8, banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800', desc: 'Play millions of user-created games.', controls: 'WASD to move, Mouse to look' },
    'gtavice-window': { id: 'gtavice-window', name: 'GTA Vice City', icon: '🚔', category: 'action', rating: 4.9, banner: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800', desc: 'Classic open-world crime adventure.', controls: 'WASD to move, Mouse to aim' },
    'pixelfruits-window': { id: 'pixelfruits-window', name: 'Pixel Fruits', icon: '🍎', category: 'arcade', rating: 4.7, banner: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800', desc: 'Slice fruits in this pixel art game.', controls: 'Mouse to slice' },
    'aceattorney-window': { id: 'aceattorney-window', name: 'Ace Attorney', icon: '⚖️', category: 'rpg', rating: 4.8, banner: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800', desc: 'Courtroom drama visual novel.', controls: 'Click to advance dialogue' },
    'callofduty-window': { id: 'callofduty-window', name: 'Call of Duty', icon: '🔫', category: 'action', rating: 4.7, banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800', desc: 'First-person shooter action.', controls: 'WASD to move, Mouse to aim' },
    'stateio-window': { id: 'stateio-window', name: 'State.io', icon: '🗺️', category: 'strategy', rating: 4.5, banner: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800', desc: 'Conquer territories in this strategy game.', controls: 'Click to send troops' },
    'undertaleyellow-window': { id: 'undertaleyellow-window', name: 'Undertale Yellow', icon: '💛', category: 'rpg', rating: 4.9, banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', desc: 'Fan-made Undertale prequel.', controls: 'Arrow keys to move, Z to interact' },
    'yanderesim-window': { id: 'yanderesim-window', name: 'Yandere Simulator', icon: '🔪', category: 'simulation', rating: 4.6, banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', desc: 'Stealth simulation game.', controls: 'WASD to move, E to interact' },
    'pokemon-window': { id: 'pokemon-window', name: 'Pokemon', icon: '⚡', category: 'rpg', rating: 4.9, banner: 'https://images.unsplash.com/photo-1542779283-429eb70b4d98?q=80&w=800', desc: 'Catch and train Pokemon in this RPG adventure.', controls: 'Arrow keys to move, Z to interact' },
    '1v1lol-window': { id: '1v1lol-window', name: '1v1.LOL', icon: '🔫', category: 'action', rating: 4.7, banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800', desc: 'Build and battle in this competitive shooter.', controls: 'WASD to move, Mouse to aim/build' },
    'bitlife-window': { id: 'bitlife-window', name: 'Bitlife', icon: '📱', category: 'simulation', rating: 4.7, banner: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800', desc: 'Live your entire life from birth to death.', controls: 'Click to make choices' },
    'footballbros-window': { id: 'footballbros-window', name: 'Football Bros', icon: '🏈', category: 'sports', rating: 4.6, banner: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800', desc: 'Play football with your bros.', controls: 'Arrow keys to move, Space to action' }
};

const XBOX_APPS = {
    'chrome-window': { id: 'chrome-window', name: 'Edge Browser', icon: '🌐', category: 'browser', desc: 'Browse the web with built-in proxy support.' },
    'discord-window': { id: 'discord-window', name: 'Discord', icon: '💬', category: 'social', desc: 'Chat and connect with friends.' },
    'echochat-window': { id: 'echochat-window', name: 'Party Chat', icon: '💬', category: 'social', desc: 'Chat with friends in real-time.' },
    'echoflix-window': { id: 'echoflix-window', name: 'Video', icon: '🎬', category: 'entertainment', desc: 'Stream movies and shows.' },
    'echomusic-window': { id: 'echomusic-window', name: 'Music', icon: '🎵', category: 'entertainment', desc: 'Stream music from Spotify and SoundCloud.' },
    'files-window': { id: 'files-window', name: 'My Files', icon: '📁', category: 'productivity', desc: 'Manage your local files.' },
    'wordpad-window': { id: 'wordpad-window', name: 'Notepad', icon: '📝', category: 'productivity', desc: 'Create and edit text documents.' },
    'calc-window': { id: 'calc-window', name: 'Calculator', icon: '🧮', category: 'productivity', desc: 'Standard calculator.' },
    'settings-window': { id: 'settings-window', name: 'Settings', icon: '⚙️', category: 'system', desc: 'Configure your console.' },
    'robloxanimator-window': { id: 'robloxanimator-window', name: 'Roblox Animator', icon: '🎬', category: 'creative', desc: 'Create Roblox animations.' },
    'linkcreator-window': { id: 'linkcreator-window', name: 'Link Creator', icon: '🔗', category: 'productivity', desc: 'Create and share custom links.' }
};

// Pre-installed items
const PRE_INSTALLED = ['chrome-window', 'store-window', 'settings-window', 'wordpad-window', 'calc-window', 'files-window', 'echochat-window', 'linkcreator-window', 'echomusic-window', 'echoflix-window'];

// Profile System
let currentProfile = null;
let profiles = [];
let oobeStep = 1;
let tempGamerpic = '🎮';
let tempGamertag = '';
let tempPasskey = '';

// ===== BOOT SEQUENCE =====
window.addEventListener('DOMContentLoaded', () => {
    loadProfiles();

    setTimeout(() => {
        const boot = document.getElementById('xbox-boot-screen');
        if (boot) {
            boot.style.opacity = '0';
            setTimeout(() => {
                boot.style.display = 'none';
                initConsole();
            }, 500);
        }
    }, 3500);
});

function initConsole() {
    const setupComplete = localStorage.getItem('xbox_setup_complete');
    const hasProfiles = profiles.length > 0;

    if (!setupComplete && !hasProfiles) {
        // First boot - show OOBE
        showOobe();
    } else if (hasProfiles) {
        // Show sign-in
        showSignIn();
    } else {
        // Setup done but no profiles (shouldn't happen)
        showOobe();
    }
}

// ===== OOBE =====
function showOobe() {
    document.getElementById('xbox-oobe').style.display = 'flex';
    document.getElementById('xbox-signin').style.display = 'none';
    document.getElementById('xbox-home').style.display = 'none';
    oobeStep = 1;
    updateOobeStep();
}

function updateOobeStep() {
    document.querySelectorAll('.xbox-oobe-step').forEach(s => s.classList.remove('active'));
    const step = document.getElementById('oobe-step-' + oobeStep);
    if (step) step.classList.add('active');
}

function nextOobeStep() {
    if (oobeStep === 3) {
        const gt = document.getElementById('xbox-gamertag-input').value.trim();
        if (!gt) { showToast('Please enter a Gamertag', 'error'); return; }
        tempGamertag = gt;
    }
    if (oobeStep === 4) {
        const pk = document.getElementById('xbox-passkey').value;
        tempPasskey = pk;
    }
    if (oobeStep < 5) {
        oobeStep++;
        updateOobeStep();
        if (oobeStep === 5) {
            document.getElementById('oobe-final-gamerpic').innerText = tempGamerpic;
            document.getElementById('oobe-final-gamertag').innerText = tempGamertag;
        }
    }
}

function prevOobeStep() {
    if (oobeStep > 1) {
        oobeStep--;
        updateOobeStep();
    }
}

function selectGamerpic(el) {
    document.querySelectorAll('#oobe-step-2 .xbox-gamerpic-option').forEach(o => o.classList.remove('active'));
    el.classList.add('active');
    tempGamerpic = el.dataset.pic;
}

function updateGamertagPreview() {
    const val = document.getElementById('xbox-gamertag-input').value;
    document.getElementById('gamertag-preview').innerText = val ? 'Your Gamertag: ' + val : '';
}

function finishOobe() {
    const profile = {
        id: 'profile_' + Date.now(),
        gamertag: tempGamertag,
        gamerpic: tempGamerpic,
        passkey: tempPasskey,
        gamerscore: 0,
        created: Date.now()
    };
    profiles.push(profile);
    saveProfiles();
    localStorage.setItem('xbox_setup_complete', 'true');
    currentProfile = profile;
    showHome();
    showAchievement('Welcome to Xbox', 'First Steps', 10);
}

// ===== PROFILES =====
function loadProfiles() {
    const saved = localStorage.getItem('xbox_profiles');
    profiles = saved ? JSON.parse(saved) : [];
}

function saveProfiles() {
    localStorage.setItem('xbox_profiles', JSON.stringify(profiles));
}

function showSignIn() {
    document.getElementById('xbox-oobe').style.display = 'none';
    document.getElementById('xbox-signin').style.display = 'flex';
    document.getElementById('xbox-home').style.display = 'none';
    renderProfiles();
}

function renderProfiles() {
    const grid = document.getElementById('xbox-profiles-grid');
    grid.innerHTML = profiles.map(p => `
        <div class="xbox-profile-card" onclick="selectProfile('${p.id}')">
            <div class="xbox-profile-gamerpic">${p.gamerpic}</div>
            <div class="xbox-profile-gamertag">${p.gamertag}</div>
            <div class="xbox-profile-g">${p.gamerscore} G</div>
        </div>
    `).join('');
}

function selectProfile(id) {
    const profile = profiles.find(p => p.id === id);
    if (!profile) return;

    if (profile.passkey) {
        // Show passkey modal
        document.getElementById('passkey-gamerpic').innerText = profile.gamerpic;
        document.getElementById('passkey-gamertag').innerText = profile.gamertag;
        document.getElementById('xbox-passkey-modal').style.display = 'block';
        document.getElementById('xbox-passkey-entry').value = '';
        document.getElementById('passkey-error').style.display = 'none';
        document.getElementById('xbox-passkey-dots').querySelectorAll('span').forEach(s => s.classList.remove('filled'));
        setTimeout(() => document.getElementById('xbox-passkey-entry').focus(), 100);
        window._pendingProfile = profile;
    } else {
        currentProfile = profile;
        showHome();
    }
}

function checkPasskey() {
    const input = document.getElementById('xbox-passkey-entry');
    const val = input.value;
    const dots = document.getElementById('xbox-passkey-dots').querySelectorAll('span');

    dots.forEach((d, i) => {
        d.classList.toggle('filled', i < val.length);
    });

    if (val.length === 6) {
        if (val === window._pendingProfile.passkey) {
            currentProfile = window._pendingProfile;
            closePasskeyModal();
            showHome();
        } else {
            document.getElementById('passkey-error').style.display = 'block';
            input.value = '';
            dots.forEach(d => d.classList.remove('filled'));
        }
    }
}

function closePasskeyModal() {
    document.getElementById('xbox-passkey-modal').style.display = 'none';
    window._pendingProfile = null;
}

function showAddProfile() {
    document.getElementById('xbox-add-profile-modal').style.display = 'block';
    document.getElementById('new-gamertag').value = '';
    document.getElementById('new-passkey').value = '';
    document.querySelectorAll('#xbox-add-profile-modal .xbox-gamerpic-option').forEach((o, i) => {
        o.classList.toggle('active', i === 0);
    });
    tempGamerpic = '🎮';
}

function closeAddProfile() {
    document.getElementById('xbox-add-profile-modal').style.display = 'none';
}

function selectNewGamerpic(el) {
    document.querySelectorAll('#xbox-add-profile-modal .xbox-gamerpic-option').forEach(o => o.classList.remove('active'));
    el.classList.add('active');
    tempGamerpic = el.dataset.pic;
}

function createProfile() {
    const gt = document.getElementById('new-gamertag').value.trim();
    const pk = document.getElementById('new-passkey').value;
    if (!gt) { showToast('Enter a Gamertag', 'error'); return; }

    const profile = {
        id: 'profile_' + Date.now(),
        gamertag: gt,
        gamerpic: tempGamerpic,
        passkey: pk,
        gamerscore: 0,
        created: Date.now()
    };
    profiles.push(profile);
    saveProfiles();
    closeAddProfile();
    renderProfiles();
    showToast('Profile created!', 'success');
}

function showGuestProfile() {
    currentProfile = {
        id: 'guest',
        gamertag: 'Guest',
        gamerpic: '👤',
        passkey: '',
        gamerscore: 0
    };
    showHome();
}

function switchProfile() {
    toggleGuide();
    showSignIn();
}

// ===== HOME DASHBOARD =====
function showHome() {
    document.getElementById('xbox-oobe').style.display = 'none';
    document.getElementById('xbox-signin').style.display = 'none';
    document.getElementById('xbox-home').style.display = 'block';
    document.getElementById('xbox-store').style.display = 'none';
    document.getElementById('xbox-library').style.display = 'none';
    document.getElementById('xbox-game-detail').style.display = 'none';

    updateProfileUI();
    renderHome();
    updateClock();
    setInterval(updateClock, 60000);
}

function updateProfileUI() {
    if (!currentProfile) return;
    document.getElementById('mini-gamerpic').innerText = currentProfile.gamerpic;
    document.getElementById('mini-gamertag').innerText = currentProfile.gamertag;
    document.getElementById('mini-g').innerText = currentProfile.gamerscore + ' G';
    document.getElementById('guide-gamerpic').innerText = currentProfile.gamerpic;
    document.getElementById('guide-gamertag').innerText = currentProfile.gamertag;
    document.getElementById('guide-g').innerText = currentProfile.gamerscore + ' G';
}

function renderHome() {
    // Featured games (first 6)
    const featured = Object.values(XBOX_GAMES).slice(0, 6);
    document.getElementById('xbox-featured-grid').innerHTML = featured.map(g => `
        <div class="xbox-featured-tile" onclick="showGameDetail('${g.id}')">
            <div class="feat-bg">${g.icon}</div>
            <div class="feat-title">${g.name}</div>
        </div>
    `).join('');

    // All games grid
    const installed = getInstalledGames();
    document.getElementById('xbox-all-games-grid').innerHTML = Object.values(XBOX_GAMES).map(g => {
        const isInstalled = installed.includes(g.id);
        return `
            <div class="xbox-game-card" onclick="showGameDetail('${g.id}')">
                <div class="card-art">${g.icon}</div>
                <div class="card-info">
                    <div class="card-title">${g.name}</div>
                    <div class="card-meta">${g.category} • ⭐ ${g.rating}</div>
                    ${isInstalled ? '<span class="card-installed">INSTALLED</span>' : ''}
                </div>
            </div>
        `;
    }).join('');

    // Recent plays
    const recent = getRecentPlays();
    if (recent.length > 0) {
        document.getElementById('xbox-jump-back-in').style.display = 'block';
        document.getElementById('xbox-recent-row').innerHTML = recent.slice(0, 6).map(id => {
            const g = XBOX_GAMES[id];
            if (!g) return '';
            return `
                <div class="xbox-game-tile" onclick="launchGame('${g.id}')">
                    <div class="tile-bg">${g.icon}</div>
                    <div class="tile-info">
                        <div class="tile-title">${g.name}</div>
                        <div class="tile-meta">Jump back in</div>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        document.getElementById('xbox-jump-back-in').style.display = 'none';
    }
}

// ===== GUIDE =====
function toggleGuide() {
    const guide = document.getElementById('xbox-guide');
    guide.style.display = guide.style.display === 'none' ? 'block' : 'none';
}

function goHome() {
    document.getElementById('xbox-store').style.display = 'none';
    document.getElementById('xbox-library').style.display = 'none';
    document.getElementById('xbox-game-detail').style.display = 'none';
    document.getElementById('xbox-home').style.display = 'block';
    toggleGuide();
}

function showGameLibrary() {
    toggleGuide();
    document.getElementById('xbox-home').style.display = 'none';
    document.getElementById('xbox-library').style.display = 'block';
    renderLibrary('all');
}

// ===== NOTIFICATIONS =====
function toggleNotifications() {
    const panel = document.getElementById('xbox-notifications');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function addNotification(title, message, icon = '🔔') {
    const list = document.getElementById('xbox-notif-list');
    const empty = list.querySelector('.xbox-notif-empty');
    if (empty) empty.remove();

    const item = document.createElement('div');
    item.className = 'xbox-notif-item';
    item.innerHTML = `
        <div class="notif-icon">${icon}</div>
        <div class="notif-content">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
    `;
    list.prepend(item);
}

// ===== ACHIEVEMENTS =====
function showAchievement(title, name, points) {
    const popup = document.getElementById('xbox-achievement-popup');
    document.getElementById('achievement-name').innerText = name;
    document.getElementById('achievement-points').innerText = points + 'G';
    popup.style.display = 'block';

    if (currentProfile) {
        currentProfile.gamerscore += points;
        saveProfiles();
        updateProfileUI();
    }

    setTimeout(() => {
        popup.style.display = 'none';
    }, 4000);
}

// ===== SEARCH =====
function openSearch() {
    document.getElementById('xbox-search').style.display = 'block';
    document.getElementById('xbox-search-input').value = '';
    document.getElementById('xbox-search-input').focus();
    document.getElementById('xbox-search-results').innerHTML = '';
}

function closeSearch() {
    document.getElementById('xbox-search').style.display = 'none';
}

function searchXbox() {
    const query = document.getElementById('xbox-search-input').value.toLowerCase();
    const results = document.getElementById('xbox-search-results');

    if (!query) {
        results.innerHTML = '';
        return;
    }

    const allItems = [...Object.values(XBOX_GAMES), ...Object.values(XBOX_APPS)];
    const matches = allItems.filter(item => item.name.toLowerCase().includes(query));

    results.innerHTML = matches.map(item => `
        <div class="xbox-store-card" onclick="${XBOX_GAMES[item.id] ? 'showGameDetail' : 'openApp'}('${item.id}'); closeSearch();">
            <div class="store-art">${item.icon}</div>
            <div class="store-info">
                <div class="store-title">${item.name}</div>
                <div class="store-meta">${item.category || 'App'}</div>
            </div>
        </div>
    `).join('');
}

// ===== GAME DETAIL =====
let currentDetailGame = null;

function showGameDetail(gameId) {
    const game = XBOX_GAMES[gameId] || XBOX_APPS[gameId];
    if (!game) return;

    currentDetailGame = gameId;
    const installed = getInstalledGames();
    const isInstalled = installed.includes(gameId) || PRE_INSTALLED.includes(gameId);

    document.getElementById('xbox-home').style.display = 'none';
    document.getElementById('xbox-store').style.display = 'none';
    document.getElementById('xbox-library').style.display = 'none';
    document.getElementById('xbox-game-detail').style.display = 'block';

    document.getElementById('detail-icon').innerText = game.icon;
    document.getElementById('detail-title').innerText = game.name;
    document.getElementById('detail-meta').innerText = (game.category || 'App') + (game.rating ? ' • ⭐ ' + game.rating : '');
    document.getElementById('detail-desc').innerText = game.desc || '';

    document.getElementById('detail-play-btn').style.display = isInstalled ? 'inline-block' : 'none';
    document.getElementById('detail-install-btn').style.display = isInstalled ? 'none' : 'inline-block';
}

function closeGameDetail() {
    document.getElementById('xbox-game-detail').style.display = 'none';
    document.getElementById('xbox-home').style.display = 'block';
}

function playGame() {
    if (currentDetailGame) {
        launchGame(currentDetailGame);
    }
}

function installGame() {
    if (!currentDetailGame) return;
    let installed = getInstalledGames();
    if (!installed.includes(currentDetailGame)) {
        installed.push(currentDetailGame);
        saveInstalledGames(installed);
        showToast('Game installed', 'success');
        showAchievement('Collector', 'First Install', 5);
        showGameDetail(currentDetailGame); // refresh
    }
}

function toggleGameFavorite() {
    // Placeholder for favorite functionality
    showToast('Added to favorites', 'success');
}

// ===== MICROSOFT STORE =====
function openApp(appId) {
    // If it's the store, show the Xbox store UI
    if (appId === 'store-window') {
        document.getElementById('xbox-home').style.display = 'none';
        document.getElementById('xbox-store').style.display = 'block';
        renderStore();
        return;
    }

    // Otherwise launch the actual app window
    launchGame(appId);
}

function renderStore() {
    // Featured games
    const featured = Object.values(XBOX_GAMES).slice(0, 6);
    document.getElementById('store-featured-grid').innerHTML = featured.map(g => `
        <div class="xbox-store-card" onclick="showGameDetail('${g.id}')">
            <div class="store-art">${g.icon}</div>
            <div class="store-info">
                <div class="store-title">${g.name}</div>
                <div class="store-meta">${g.category} • ⭐ ${g.rating}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');

    // Free games
    const free = Object.values(XBOX_GAMES).slice(6, 12);
    document.getElementById('store-free-grid').innerHTML = free.map(g => `
        <div class="xbox-store-card" onclick="showGameDetail('${g.id}')">
            <div class="store-art">${g.icon}</div>
            <div class="store-info">
                <div class="store-title">${g.name}</div>
                <div class="store-meta">${g.category}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');

    // All games
    document.getElementById('store-games-grid').innerHTML = Object.values(XBOX_GAMES).map(g => `
        <div class="xbox-store-card" onclick="showGameDetail('${g.id}')">
            <div class="store-art">${g.icon}</div>
            <div class="store-info">
                <div class="store-title">${g.name}</div>
                <div class="store-meta">${g.category} • ⭐ ${g.rating}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');

    // Apps
    document.getElementById('store-apps-grid').innerHTML = Object.values(XBOX_APPS).map(a => `
        <div class="xbox-store-card" onclick="openApp('${a.id}')">
            <div class="store-art">${a.icon}</div>
            <div class="store-info">
                <div class="store-title">${a.name}</div>
                <div class="store-meta">${a.category}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');

    // Library
    const installed = getInstalledGames();
    const libItems = [...installed.map(id => XBOX_GAMES[id]).filter(Boolean), ...PRE_INSTALLED.map(id => XBOX_APPS[id]).filter(Boolean)];
    document.getElementById('store-library-grid').innerHTML = libItems.map(item => `
        <div class="xbox-store-card" onclick="${XBOX_GAMES[item.id] ? 'showGameDetail' : 'openApp'}('${item.id}')">
            <div class="store-art">${item.icon}</div>
            <div class="store-info">
                <div class="store-title">${item.name}</div>
                <div class="store-meta">${item.category || 'App'}</div>
                <div class="store-price" style="color: var(--xbox-green);">Installed</div>
            </div>
        </div>
    `).join('');
}

function showStoreTab(tab) {
    document.querySelectorAll('.xbox-store-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.xbox-store-tab-content').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('store-tab-' + tab).classList.add('active');
}

function filterStoreGames(cat) {
    document.querySelectorAll('.xbox-store-cat').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');

    const games = cat === 'all' ? Object.values(XBOX_GAMES) : Object.values(XBOX_GAMES).filter(g => g.category === cat);
    document.getElementById('store-games-grid').innerHTML = games.map(g => `
        <div class="xbox-store-card" onclick="showGameDetail('${g.id}')">
            <div class="store-art">${g.icon}</div>
            <div class="store-info">
                <div class="store-title">${g.name}</div>
                <div class="store-meta">${g.category} • ⭐ ${g.rating}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');
}

function searchStore() {
    const query = document.getElementById('store-search-input').value.toLowerCase();
    const allItems = [...Object.values(XBOX_GAMES), ...Object.values(XBOX_APPS)];
    const matches = query ? allItems.filter(item => item.name.toLowerCase().includes(query)) : [];

    document.getElementById('store-search-results').innerHTML = matches.map(item => `
        <div class="xbox-store-card" onclick="${XBOX_GAMES[item.id] ? 'showGameDetail' : 'openApp'}('${item.id}')">
            <div class="store-art">${item.icon}</div>
            <div class="store-info">
                <div class="store-title">${item.name}</div>
                <div class="store-meta">${item.category || 'App'}</div>
                <div class="store-price">Free</div>
            </div>
        </div>
    `).join('');
}

// ===== LIBRARY =====
function renderLibrary(filter) {
    document.querySelectorAll('.xbox-lib-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    const installed = getInstalledGames();
    let items = [];

    if (filter === 'all') {
        items = [...Object.values(XBOX_GAMES), ...Object.values(XBOX_APPS)];
    } else if (filter === 'games') {
        items = Object.values(XBOX_GAMES);
    } else if (filter === 'apps') {
        items = Object.values(XBOX_APPS);
    } else if (filter === 'installed') {
        items = installed.map(id => XBOX_GAMES[id] || XBOX_APPS[id]).filter(Boolean);
    }

    document.getElementById('xbox-library-grid').innerHTML = items.map(item => `
        <div class="xbox-game-card" onclick="${XBOX_GAMES[item.id] ? 'showGameDetail' : 'openApp'}('${item.id}')">
            <div class="card-art">${item.icon}</div>
            <div class="card-info">
                <div class="card-title">${item.name}</div>
                <div class="card-meta">${item.category || 'App'}</div>
            </div>
        </div>
    `).join('');
}

// ===== GAME LAUNCHING =====
function launchGame(gameId) {
    const game = XBOX_GAMES[gameId] || XBOX_APPS[gameId];
    if (!game) return;

    // Track recent play
    let recent = getRecentPlays();
    recent = recent.filter(id => id !== gameId);
    recent.unshift(gameId);
    recent = recent.slice(0, 10);
    saveRecentPlays(recent);

    // Show loading
    document.getElementById('xbox-loading').style.display = 'flex';
    document.querySelector('.xbox-loading-text').innerText = 'Launching ' + game.name + '...';

    setTimeout(() => {
        document.getElementById('xbox-loading').style.display = 'none';

        // Open the actual window
        const win = document.getElementById(gameId);
        if (win) {
            win.style.display = 'flex';
            win.classList.add('active');
            const iframe = win.querySelector('iframe');
            if (iframe && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
        }

        showToast(game.name + ' launched', 'success');
    }, 1500);
}

function closeApp(appId) {
    const win = document.getElementById(appId);
    if (win) {
        win.style.display = 'none';
        win.classList.remove('active');
        const iframe = win.querySelector('iframe');
        if (iframe) iframe.src = 'about:blank';
    }
}

function minimizeApp(appId) {
    const win = document.getElementById(appId);
    if (win) {
        win.style.display = 'none';
    }
}

// ===== DATA MANAGEMENT =====
function getInstalledGames() {
    return JSON.parse(localStorage.getItem('xbox_installed') || '[]');
}

function saveInstalledGames(games) {
    localStorage.setItem('xbox_installed', JSON.stringify(games));
}

function getRecentPlays() {
    return JSON.parse(localStorage.getItem('xbox_recent') || '[]');
}

function saveRecentPlays(recent) {
    localStorage.setItem('xbox_recent', JSON.stringify(recent));
}

// ===== TOAST =====
function showToast(message, type = 'info') {
    const container = document.getElementById('xbox-toast-container');
    const toast = document.createElement('div');
    toast.className = 'xbox-toast';
    const icon = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    toast.innerHTML = `
        <div class="xbox-toast-icon">${icon}</div>
        <div class="xbox-toast-content">
            <p>${message}</p>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('xbox-clock').innerText = hours + ':' + minutes + ' ' + ampm;
}

// ===== POWER =====
function lockConsole() {
    toggleGuide();
    showSignIn();
}

function powerOff() {
    if (confirm('Turn off console?')) {
        document.body.innerHTML = '<div style="position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;color:#333;font-size:14px;letter-spacing:4px;">XBOX</div>';
        setTimeout(() => location.reload(), 2000);
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Xbox button / Guide
    if (e.key === 'x' && e.ctrlKey) {
        e.preventDefault();
        toggleGuide();
    }
    // Escape to close modals
    if (e.key === 'Escape') {
        document.getElementById('xbox-guide').style.display = 'none';
        document.getElementById('xbox-search').style.display = 'none';
        document.getElementById('xbox-notifications').style.display = 'none';
        closePasskeyModal();
        closeAddProfile();
    }
});

// Close modals on outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('xbox-guide-overlay')) toggleGuide();
    if (e.target.classList.contains('xbox-notif-overlay')) toggleNotifications();
    if (e.target.classList.contains('xbox-search-overlay')) closeSearch();
});

console.log('🎮 XBOX Series X Console loaded');
