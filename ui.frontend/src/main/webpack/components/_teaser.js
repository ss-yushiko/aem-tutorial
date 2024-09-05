// teaser タイトルに番号を振る
document.addEventListener("DOMContentLoaded", () => {
    let teasers = document.querySelectorAll(".teaser.test");
    teasers.forEach((teaser, index) => {
        let teaserTitle = teaser.querySelector(".cmp-teaser__title");
        if (teaserTitle) {
            teaserTitle.textContent = `${index + 1}. ${teaserTitle.textContent}`;
        }
    });
});