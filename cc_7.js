const input = document.getElementById('cta-input');
const button = document.getElementById('update-btn');
const headline = document.getElementById('cta-headline');
button.addEventListener('click', function () {
    const newText = input.value;
    if (newText) {
        headline.textContent = newText;
        input.value = '';
    }
});