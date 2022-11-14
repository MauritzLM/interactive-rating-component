// on form submit
(function () {
    const form = document.querySelector('form');
    const ratingSection = document.querySelector('.rating-state');
    const thankYouSection = document.querySelector('.thank-you-state');
    const infoMessage = document.querySelector('.info-message');
    const radioButtons = document.querySelectorAll('input[name="rating"]');

    // get value of checked radio button and update info message text content
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                infoMessage.textContent = `You selected ${radioButtons[i].value} out of 5`;
            }

        }

        // toggle visibility class
        ratingSection.classList.add('not-visible');
        thankYouSection.classList.remove('not-visible');

    })
})()


