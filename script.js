const ratingCon = document.querySelector('.wrapper__buttons');
const ratingBtns = document.querySelectorAll('.button');
const submitBtn = document.querySelector('.wrapper__submit');
const result = document.querySelector('.top__rating');
const secondWrp = document.querySelector('.wrapper--2');
let ratingValue;

ratingCon.addEventListener('click', e => {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active')
    })
    e.target.classList.add('active');
    ratingValue = e.target.innerHTML;
})

submitBtn.addEventListener('click', () => {
    if(ratingValue > 0 || ratingValue <= 5) {
        secondWrp.style.bottom = '0%';

        result.textContent = `You selected ${ratingValue} out of 5`
    }
    else {
        return false
    }
})