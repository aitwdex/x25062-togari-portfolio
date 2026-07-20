/*navのaiconをhover差し替え*/
document.querySelectorAll(".sns-aicon").forEach((aicon) => {
    const brownSrc = aicon.querySelector('img').src;
    //〇〇.replace(◻︎, △) -> 〇〇の画像名が入る(◻︎までを、△に変更)
    const whiteSrc = brownSrc.replace('.svg', '_white.svg');

    aicon.addEventListener('mouseenter', () => {
        aicon.querySelector('img').src = whiteSrc;
    });
    aicon.addEventListener('mouseleave', () => {
        aicon.querySelector('img').src = brownSrc;
    });
});

/*ハンバーをクリック　nav表示*/
document.querySelector(".burger").addEventListener('click', () => {
    if(document.querySelector(".in-burger").classList.contains('close-burger')) {
        document.querySelector(".in-burger").classList.remove('close-burger');
        document.querySelector(".burger").classList.add('burger-open');
    }
    else {
        document.querySelector(".in-burger").classList.add('close-burger');
        document.querySelector(".burger").classList.remove('burger-open');
    }
});

/*arrowをhover差し替え*/
document.querySelectorAll(".hover-arrow").forEach((aicon) => {
    const whiteSrc = aicon.querySelector('img').src;
    //〇〇.replace(◻︎, △) -> 〇〇の画像名が入る(◻︎までを、△に変更)
    const brownSrc = whiteSrc.replace('.svg', '_brown.svg');

    aicon.addEventListener('mouseenter', () => {
        aicon.querySelector('img').src = brownSrc;
    });
    aicon.addEventListener('mouseleave', () => {
        aicon.querySelector('img').src = whiteSrc;
    });
});


