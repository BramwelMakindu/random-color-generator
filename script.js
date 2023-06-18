const container = document.querySelector('.container');
const button = document.querySelector('.button');

gencolors();

button.addEventListener('click', ()=>{
    window.location.reload();
});

function gencolors() {
    for (let index = 0; index < 20; index++) {

        const colorContainer = document.createElement('div');
        colorContainer.classList.add('color-container');
        container.appendChild(colorContainer);
    }

    const colorContainerEls = document.querySelectorAll('.color-container');

    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;

        colorContainerEl.addEventListener('click', () => {
            navigator.clipboard.writeText(colorContainerEl.innerText);
            colorContainerEl.innerText = 'Copied!';
            setTimeout(() => { colorContainerEl.innerText = "#" + newColorCode }, 1000);
        })
    });

    function randomColor() {
        const codeFormat = '0123456789abcdef';
        const colorCodeLength = 6
        let colorCode = "";
        for (let index = 0; index < colorCodeLength; index++) {
            const randomNum = Math.floor(Math.random() * codeFormat.length);
            colorCode += codeFormat.substring(randomNum, randomNum + 1);

        }
        return colorCode;
    }
}