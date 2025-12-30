// --- DATA CONFIGURATION ---
// Now limited to exactly 3 games
const games = [
    {
        id: 1, 
        title: "Slime TD", 
        category: "Strategy",
        description: "A tower Defense game.",
        image: "game-poster.png",
        // ADD THIS LINE BELOW:
        link: "https://tamsssss.itch.io/slime-td" 
    },
    {
        id: 2, 
        title: "bugbug Bilao", 
        category: "PvP",
        description: "A two player game, Fight till the time runs out.",
        image: "developer-the-goat.png",
        // ADD THIS LINE BELOW:
        link: "https://cap-cio.itch.io/bugbug-bilao"
    },
    {
        id: 3, 
        title: "Hati ng Gabi", 
        category: "Horror",
        description: "3D horror game.",
        image: "hati-poster.png",
        // ADD THIS LINE BELOW:
        link: "https://sunshine-studio5.itch.io/hati-ng-gabi?fbclid=IwY2xjawPAjONleHRuA2FlbQIxMABicmlkETFHeThGQlF5RzZYNlo4Qlc2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvAOR9fb-GshAb6QvbVF8r54xkZ4eea88cvDEdNKz8zC_EpTNrHibUQVouOF_aem_VG_8Gzo94R05nCnaqDA4JQ"
    }
];

// --- DOM ELEMENTS ---
const grid = document.getElementById('gameGrid');
const buttons = document.querySelectorAll('.filter-btn');

// --- FUNCTIONS ---

function createCard(game) {
    return `
        <div class="game-card fade-in">
            <div class="card-image">
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="card-content">
                <span class="card-badge">${game.category}</span>
                <h3 class="game-title">${game.title}</h3>
                <p class="game-desc">${game.description}</p>
                <a href="${game.link}" target="_blank" class="play-btn">Play Now</a>
            </div>
        </div>
    `;
}
function renderGames(filter = 'all') {
    grid.innerHTML = ''; 
    const filteredGames = filter === 'all' ? games : games.filter(game => game.category === filter);
    
    // If we filter and find no games, show a message (Optional improvement)
    if (filteredGames.length === 0) {
        grid.innerHTML = '<p style="color: #666; grid-column: 1/-1; text-align: center;">No games found in this category.</p>';
        return;
    }

    filteredGames.forEach(game => {
        grid.innerHTML += createCard(game);
    });
}

// --- EVENT LISTENERS ---

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Render with new filter
        const filterValue = btn.getAttribute('data-filter');
        renderGames(filterValue);
    });
});

// --- INITIALIZATION ---
renderGames();