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

/*ハンバーガーをクリック　nav表示*/
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

/*タグと作品の連携*/
document.querySelectorAll(".tag-btn").forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll(".tag-btn").forEach((btn) => {
            btn.classList.remove('select-tag');
        });
        button.classList.add('select-tag');

        let targetId = button.id;

        document.querySelectorAll(".works-grid article").forEach((article) => {
            if(targetId == 'all' || article.classList.contains(targetId)) {
                article.classList.remove('hid');
            }
            else {
                article.classList.add('hid');
            }
        });
    });
});

/*作品の再生・停止 / videoへ差し替え*/
document.querySelectorAll(".works-grid article").forEach((article) => {
    if(article.classList.contains('movie') || article.classList.contains('music')) {
        article.querySelector(".collection").addEventListener('click', () => {
            if(article.querySelector(".collection").querySelector('video')) {
                let videoSrc = article.querySelector(".collection").querySelector('video').getAttribute('src');
                let imgSrc = videoSrc.substring(0, videoSrc.lastIndexOf('.')) + '.webp';

                article.querySelector(".collection").innerHTML = `<img src="${imgSrc}" alt="">`;
                return;
            }
            
            //画像のパス名
            let imgSrc = article.querySelector(".collection").querySelector('img').getAttribute('src');
            //開始地点=0 から 最終地点=最後の「.」 までに .mp4を加える
            let videoSrc = imgSrc.substring(0, imgSrc.lastIndexOf('.')) + '.mp4';

            //playsinline = スマホ用ページ内再生
            //innerHTML = HTML上書き
            article.querySelector(".collection").innerHTML = `<video src="${videoSrc}" autoplay loop playsinline></video>`;
        });
    }
});
