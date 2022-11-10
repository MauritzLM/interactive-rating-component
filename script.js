
// select form
// select section 1
// select section 2
// select message paragraph
// select radio buttons

(function () {
    const form = document.querySelector('form');
    const ratingSection = document.querySelector('.rating-state');
    const thankYouSection = document.querySelector('.thank-you-state');
    const infoMessage = document.querySelector('.info-message');
    const radioButtons = document.querySelectorAll('input[name="rating"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                infoMessage.textContent = `You selected ${radioButtons[i].value} of 5`;
            }

        }

        // toggle visibility class
        // ratingSection.classList.add('not-visible');
        // thankYouSection.classList.remove('not-visible');

    })
})()


