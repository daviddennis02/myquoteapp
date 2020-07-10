// Creating an array
let quotes = ['The secret to life is to love who you are.',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    'The secret of a good life is to have the right loyalties and hold them in the right scale of values. —Norman Thomas',
    'Life appears to be too short to be spent in nursing animosity or registering wrong. —Charlotte Bronte',
    'Your work is to discover your world and then with all your heart give yourself to it. —Buddha',
    ' I\'ve learned that you shouldn\'t go through life with a catcher\'s mitt on both hands; you need to be able to throw something back. —Maya Angelou',
    'There are no extra pieces in the universe. Everyone is here because he or she has a place to fill and every piece must fit itself into the big jigsaw puzzle. —Deepak Chopra',
    'I believe that being successful means having a balance of success stories across the many areas of your life. You can\'t truly be considered successful in your business life if your home life is in shambles. —Zig Ziglar',
    'We make a living by what we get, we make a life by what we give. —Winston Churchill',
    'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. The consciousness of loving and being loved brings a warmth and richness to life that nothing else can bring. —Oscar Wilde'
];

// let index = Math.floor(Math.random() * quotes.length);
// This will give a random quote
// quotes[index];

// Function to display quote
function displayQuote() {
    let index = Math.floor(Math.random() * quotes.length);

    // display the quote of that index
    let div = document.querySelector('#quote');
    let quote = `
    <div class = "card">
    <img src = "format_quote-24px-down.svg">
    <p>${quotes[index]}</p>
    <img src = "format_quote-24px-top.svg">
    </div>`;

    div.innerHTML = quote;
}

// Add event listener to generate new quote
let btn = document.querySelector('.btn');
btn.addEventListener('click', displayQuote);