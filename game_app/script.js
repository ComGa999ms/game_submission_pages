const newsData = [
    // Real News (Vietnam, October 2025)
    { headline: "Vietnam arrests 12 activists for criticizing land grabs in Mekong Delta", isReal: true, explanation: "Human Rights Watch report; documents convictions under Article 331 for social media posts." },
    { headline: "Hanoi Pride parade canceled amid government crackdown on LGBTQ+ gatherings", isReal: true, explanation: "DW News coverage; event halted due to permits denied, raising rollback fears." },
    { headline: "Juvenile Justice Law 2024 takes effect, reducing sentences for minors in drug cases", isReal: true, explanation: "OHCHR summary; aligns with international standards but implementation gaps persist." },
    { headline: "124 dissidents imprisoned since 2018 under vague national security laws", isReal: true, explanation: "UK Home Office policy note; highlights ongoing suppression of freedom of expression." },
    { headline: "Vietnamese youth protests link Agent Orange legacy to Gaza solidarity marches", isReal: true, explanation: "The Telegraph report; students draw parallels in anti-war activism." },
    { headline: "Rising divorce rates prompt Women's Union to launch family counseling programs", isReal: true, explanation: "Vietnam.vn on 95th anniversary initiatives addressing urban marital breakdowns." },
    { headline: "Cybercrime syndicates traffic 500 Vietnamese women to scam centers in Cambodia", isReal: true, explanation: "AGBrief on Bangkok-Hanoi-Seoul pact rescuing victims from forced labor." },
    { headline: "Mekong Delta villages relocate 10,000 residents due to saltwater intrusion", isReal: true, explanation: "UNDP 2025 assessment; climate change exacerbates displacement in agriculture." },
    { headline: "Hanoi schools pilot mental health hotlines amid 30% teen suicide attempt rise", isReal: true, explanation: "VnExpress on urban youth stress from exam pressure and social media." },
    { headline: "Vietnam's left-wing Gen Z challenges US-China rivalry via TikTok campaigns", isReal: true, explanation: "Positions Politics journal; emerging discourse on foreign policy neutrality." },
    { headline: "Vocational training revamp adds AI ethics modules for 1 million students", isReal: true, explanation: "OpenGov Asia; Ministry targets digital literacy to combat job displacement." },
    { headline: "Government drops charges against blogger Trinh Ba Phuong after 2-year detention", isReal: true, explanation: "Human Rights Watch; release follows UN pressure on arbitrary arrests." },
    { headline: "Haiphong factory fires displace 5,000 migrant workers amid labor rights protests", isReal: true, explanation: "Reuters; highlights unsafe conditions in export zones." },
    { headline: "Vietnam's religious minorities face temple demolitions in ethnic highland areas", isReal: true, explanation: "Freedom House 2025 report; restrictions on Buddhism and Protestant groups." },
    { headline: "Urban poverty in Ho Chi Minh City affects 15% of households despite GDP growth", isReal: true, explanation: "OECD Economic Survey; calls for inclusive social protection expansion." },

    // Real News (Australia, October 2025)
    { headline: "700 Indigenous children incarcerated, 60% of youth detention population", isReal: true, explanation: "Human Rights Watch World Report; systemic overrepresentation in justice system." },
    { headline: "Social media ban for under-16s sparks regional teen isolation fears", isReal: true, explanation: "ABC News; West Australia advocates warn of compounded mental health risks." },
    { headline: "March for Australia rallies draw neo-Nazi links via Telegram coordination", isReal: true, explanation: "ABC Verify investigation; exposes extremism in anti-immigration events." },
    { headline: "Sydney woman sentenced to 5 years for online violent extremism promotion", isReal: true, explanation: "AFP release; 43 encrypted files seized in counter-terror operation." },
    { headline: "Israel-Hamas war fuels 200% rise in antisemitic incidents across states", isReal: true, explanation: "Australian Human Rights Commission; societal divides deepen community tensions." },
    { headline: "Nationwide counter-protests erupt against March for Australia extremism", isReal: true, explanation: "SBS News; equity rallies in Sydney, Melbourne highlight inclusion demands." },
    { headline: "RBA hints at rate cut as unemployment hits 5.5% in regional areas", isReal: true, explanation: "AFR live updates; economic pressures exacerbate housing affordability crisis." },
    { headline: "October relief package provides $500 energy rebates to 2 million low-income families", isReal: true, explanation: "UNSW analysis; targets cost-of-living amid inflation spike." },
    { headline: "Children's online privacy bill passes, banning data sales under 13", isReal: true, explanation: "HRW 2025; protects minors from tech exploitation in social media." },
    { headline: "Aged care reforms address 40% staffing shortages in rural facilities", isReal: true, explanation: "Guardian Australia; royal commission follow-up on elder abuse prevention." },
    { headline: "Indigenous Voice referendum support climbs to 55% in latest polls", isReal: true, explanation: "SMH; renewed push for constitutional recognition amid reconciliation efforts." },
    { headline: "Mental health funding doubles for remote Indigenous communities", isReal: true, explanation: "Salvation Army Stocktake; targets suicide rates 3x national average." },
    { headline: "Housing affordability crisis displaces 100,000 renters in capital cities", isReal: true, explanation: "Grattan Institute Orange Book; calls for 500,000 new affordable units by 2030." },
    { headline: "Migration system overhaul caps student visas to ease urban overcrowding", isReal: true, explanation: "Sydney Uni experts; addresses cost-of-living pressures from international influx." },
    { headline: "Gender pay gap persists at 22% despite new transparency laws", isReal: true, explanation: "HRW; women's rights advocates demand stronger enforcement in corporate reporting." },

    // Fake News (Plausible fabrications)
    { headline: "Vietnam to merge 36 provinces into 6 super-regions for efficiency", isReal: false, explanation: "Fabricated administrative reform; no such merger proposed by National Assembly." },
    { headline: "Hanoi mandates robot caregivers for all households over 60", isReal: false, explanation: "Satirical tech policy; elderly support relies on community programs, not AI." },
    { headline: "Mekong Delta imposes 'flood tax' on farmers for climate adaptation", isReal: false, explanation: "Exaggerated fiscal hoax; disaster relief is government-funded, no new taxes." },
    { headline: "Vietnam bans all social media for minors under 16 to combat cyberbullying", isReal: false, explanation: "Unfounded restriction; digital literacy education is promoted instead." },
    { headline: "Saigon declares 'no-car days' with flying taxis for commuters", isReal: false, explanation: "Mythical urban solution; traffic management uses public transit incentives." },
    { headline: "Vietnam's Gen Z unemployment soars to 40% from AI job losses", isReal: false, explanation: "Sensationalized statistic; youth employment is stable at ~8% per labor reports." },
    { headline: "Hue citadel to become floating casino resort for tourists", isReal: false, explanation: "Speculative tourism ploy; heritage site protected under UNESCO guidelines." },
    { headline: "Vietnam requires DNA tests for all marriages to prevent genetic issues", isReal: false, explanation: "Overhyped health mandate; family planning focuses on voluntary counseling." },
    { headline: "Phu Quoc island votes for secession as eco-independent zone", isReal: false, explanation: "Absurd autonomy claim; islands governed under national sovereignty laws." },
    { headline: "Vietnam's pho vendors union strikes for 'soup minimum wage'", isReal: false, explanation: "Humorous labor fiction; street food regulated by local business permits." },
    { headline: "HCMC installs emotion scanners at traffic lights to reduce road rage", isReal: false, explanation: "Futuristic exaggeration; safety campaigns emphasize driver education." },
    { headline: "Vietnam outlaws fortune cookies as cultural appropriation of Tet traditions", isReal: false, explanation: "Cultural hoax; no bans on imported snacks or holiday customs." },
    { headline: "Dalat bans Christmas trees to preserve 'pure Vietnamese holidays'", isReal: false, explanation: "Invented seasonal restriction; multicultural celebrations are encouraged." },
    { headline: "Vietnam's coffee farmers demand 'caffeine equity' in export deals", isReal: false, explanation: "Satirical trade demand; coffee industry focuses on fair pricing agreements." },
    { headline: "Australian states to adopt koala as official emotional support animal", isReal: false, explanation: "Fabricated wildlife policy; mental health services use therapy animals variably." },
    { headline: "Sydney Harbor installs underwater apartments for housing crisis", isReal: false, explanation: "Sci-fi urban myth; affordable housing prioritizes land-based developments." },
    { headline: "Outback towns declare 'no tourists' zones to fight overtourism", isReal: false, explanation: "Unfounded exclusion; tourism regulated through sustainable caps." },
    { headline: "Melbourne enforces vegemite rationing during cost-of-living crunch", isReal: false, explanation: "Exaggerated staple hoax; food security aids target broad essentials." },
    { headline: "Great Barrier Reef hosts annual 'coral music festival' for conservation", isReal: false, explanation: "Absurd eco-event; protection involves scientific monitoring, not concerts." },
    { headline: "Tasmania mandates bagpipe lessons for all schoolchildren", isReal: false, explanation: "Cultural exaggeration; curriculum emphasizes Indigenous arts over imports." },
    { headline: "Brisbane converts floods into 'adventure water parks' for resilience", isReal: false, explanation: "Humorous disaster spin; flood response prioritizes evacuation and infrastructure." },
    { headline: "Australia replaces parliament with AI debate bots for efficiency", isReal: false, explanation: "Mythical tech reform; governance remains human-led with digital aids." },
    { headline: "Perth beaches install shark-proof bubble suits for swimmers", isReal: false, explanation: "Overhyped safety gimmick; patrols use drones and nets, not personal gear." },
    { headline: "Indigenous elders vote to rename Sydney Opera House 'Dreamtime Pavilion'", isReal: false, explanation: "Speculative renaming; cultural recognition ongoing but no full rebrand." },
    { headline: "Australia's vegans petition for 'meat-free Mondays' nationwide law", isReal: false, explanation: "Wishful advocacy; dietary choices voluntary, no federal mandates." }
];

// Global variables: Current news array, score, index, buttona
let currentNews = [];
let score = 0; // Number of correct answers
let currentIndex = 0; // Current question index (starts at 0)
let buttons = []; // Array of "Real" and "Fake" buttons

// Shuffle function: Randomizes array for varied gameplay
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start game function (async to await Gemini generation)
async function startGame() {
    // Show loading (assumes #loading element in HTML)
    const loadingEl = document.getElementById('loading');
    if (loadingEl) loadingEl.style.display = 'block';

    try {
        // Generate 5 dynamic fake headlines with Gemini (parallel for speed)
        const fakePromises = Array.from({ length: 5 }, () => generateFakeHeadline());
        const fakes = await Promise.all(fakePromises);

        // Select 5 random real headlines from newsData
        const realCandidates = newsData.filter(item => item.isReal);
        const selectedReals = shuffle([...realCandidates]).slice(0, 5);

        // Create currentNews: Shuffle 5 reals + 5 fakes
        currentNews = shuffle([...selectedReals, ...fakes]);

        score = 0;
        currentIndex = 0;
        buttons = document.querySelectorAll('.buttons button');
        enableButtons();
        nextQuestion();
    } catch (error) {
        console.error('Game start failed:', error);
        // Full fallback: Use static data
        currentNews = shuffle([...newsData]).slice(0, 10);
        score = 0;
        currentIndex = 0;
        buttons = document.querySelectorAll('.buttons button');
        enableButtons();
        nextQuestion();
    } finally {
        if (loadingEl) loadingEl.style.display = 'none';
    }

    // Switch screens
    document.getElementById('menu').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

// Enable buttons function
function enableButtons() {
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
    });
}

// Disable buttons function
function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
    });
}

// Update score display (Correct: X / Y questions)
function updateScoreDisplay() {
    const attempted = currentIndex; // Total attempted questions (after update)
    document.getElementById('score').textContent = `Correct: ${score} / ${attempted} questions`;
    // Highlight animation (assumes CSS class)
    const scoreEl = document.getElementById('score');
    scoreEl.classList.add('score-update');
    setTimeout(() => scoreEl.classList.remove('score-update'), 500);
}

// Next question function
function nextQuestion() {
    if (currentIndex >= 10) {
        endGame();
        return;
    }
    const news = currentNews[currentIndex];
    document.getElementById('headline').textContent = news.headline;
    document.getElementById('progress').textContent = `Question ${currentIndex + 1}/10`;
    updateScoreDisplay();
    document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / 10) * 100}%`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';
    currentIndex++;
}

// Guess function
function guess(isReal) {
    if (buttons[0].disabled) return;

    disableButtons();
    
    const news = currentNews[currentIndex - 1];
    const correct = isReal === news.isReal;
    if (correct) score++;

    const feedbackEl = document.getElementById('feedback');
    const status = correct ? 'correct' : 'incorrect';
    const verdict = news.isReal ? 'real' : 'fake';
    feedbackEl.textContent = correct ? `✓ Correct! This is ${verdict} news.` : `✗ Incorrect! This is actually ${verdict} news.`;
    feedbackEl.className = status;
    feedbackEl.innerHTML += `<div class="explanation">${news.explanation}</div>`;

    updateScoreDisplay(); // Update immediately after guess

    setTimeout(() => {
        enableButtons();
        nextQuestion();
    }, 3000);
}

// End game function
function endGame() {
    document.getElementById('play').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const resultEl = document.getElementById('result-text');
    const finalScoreEl = document.getElementById('final-score');
    const resultIcon = document.getElementById('result-icon');
    
    finalScoreEl.textContent = score;
    
    if (score >= 6) {
        resultEl.textContent = 'Congratulations! You Win!';
        resultEl.style.color = 'var(--success)';
        resultIcon.innerHTML = '🏆';
        resultIcon.className = 'result-icon win';
    } else {
        resultEl.textContent = 'Better Luck Next Time! Try Again.';
        resultEl.style.color = 'var(--danger)';
        resultIcon.innerHTML = '💡';
        resultIcon.className = 'result-icon lose';
    }
}

// Restart function
function restart() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('play').style.display = 'none';
}