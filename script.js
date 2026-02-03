const btn = document.getElementById('roulette-btn');
const statusText = document.getElementById('status-text');
const paperInfo = document.getElementById('paper-info');
const paperTitle = document.getElementById('paper-title');
const paperAuthors = document.getElementById('paper-authors');
const paperMeta = document.getElementById('paper-meta');
const paperLink = document.getElementById('paper-link');

const BARKAI_PAPERS = [
    {
        title: "Solutions of first-passage time problems: A biscaling approach",
        authors: "Talia Baravi, David A. Kessler, and Eli Barkai",
        meta: "Physical Review E 111.4 (2025)",
        url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.111.044103"
    },
    {
        title: "First passage times in compact domains exhibit biscaling",
        authors: "Talia Baravi, David A. Kessler, and Eli Barkai",
        meta: "Physical Review Letters 134.12 (2025)",
        url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.127101"
    },
    {
        title: "The thermodynamic limit of extreme first-passage times",
        authors: "Talia Baravi and Eli Barkai",
        meta: "Journal of Statistical Mechanics (2025)",
        url: "https://iopscience.iop.org/article/10.1088/1742-5468/ae1ff8/meta"
    }
];

function getRandomPaper() {
    btn.disabled = true;
    btn.textContent = "Shuffling...";
    btn.classList.add('pulse-fast');
    statusText.textContent = "Picking a recent paper...";
    paperInfo.classList.add('hidden');

    setTimeout(() => {
        const randomPaper = BARKAI_PAPERS[Math.floor(Math.random() * BARKAI_PAPERS.length)];

        paperTitle.textContent = randomPaper.title;
        paperAuthors.textContent = randomPaper.authors;
        paperMeta.textContent = randomPaper.meta;
        paperLink.href = randomPaper.url;

        paperInfo.classList.remove('hidden');
        statusText.textContent = "Found one!";
        
        btn.disabled = false;
        btn.textContent = "Roll Again";
        btn.classList.remove('pulse-fast');
    }, 600);
}

btn.addEventListener('click', getRandomPaper);
