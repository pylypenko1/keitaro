// top rewards
let rewards_list = $('.top-rewards');

let X = 0;
let MAX = 3;


function topRewards() {
    if (PEOPLE.slice(X, MAX).length <= 0) {
        X = 0;
        MAX = 3;
    }
    $('.spinner-grow').toggle();

    var items = [];

    $.each(PEOPLE.slice(X, MAX), function (i, item) {
        const markup = `
                <li class="d-inline-flex mt-3 wow fadeIn" data-wow-duration="0.${i}s" data-wow-delay="0.${i}s">
                    <img class="avatar" src="img/${item.sex}.svg">
                    <div class="d-flex info">
                        <div class="status">${item.status}</div>
                        <div class="name d-flex">${item.name}</div>
                    </div>
                    <div class="d-flex info">
                        <div class="empt d-flex">&nbsp;</div>
                        <div class="bonus d-flex">${item.bonus}</div>
                    </div>
                </li>
            `;

        items.push(markup);
    });

    rewards_list.empty();
    rewards_list.append(items.join(''));
    X += 3;
    MAX += 3;

}

setInterval(topRewards, 5000);
