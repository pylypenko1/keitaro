<?php require(dirname(__FILE__) . '/onepage.php') ?>
<!DOCTYPE html>
<html lang="en">

<head><?php require(dirname(__FILE__) . '/js.app.php') ?>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Clean Skin</title>
    <link rel="shortcut icon" type="image/png" href="favicon.ico">
    <style>
        .discount {
            display: flex;
            align-items: center;
            color: #ffffff;
            background: #f5ca16;
            padding: 0 15px;

        }
    </style>
</head>

<body>
    <header class="header">
        <div class="header__inner">
            <h1 class="header__title">Clean Skin</h1>
        </div>
        <h2 class="header__subtitle">губка-пилинг для тела</h2>
        <img src="./img/baner1.jpg" alt="" class="header__img" />
        <div class="line__yellow">
            <div class="price">
                <div class="price__old">
                    <p class="price-titleText">Обычная цена:</p>
                    <p class="price__old-text"><?= $oldPriceHtml ?> <?= $currencyDisplayHtml ?></p>
                </div>
                <div class="price_item discount">
                    <div class="text"></div>
                    <div class="price__new-text">-50%</div>
                </div>
                <div class="price__new">
                    <p class="price-titleText">Цена сегодня:</p>
                    <p class="price__new-text"><?= $newPriceHtml ?> <?= $currencyDisplayHtml ?></p>
                </div>
            </div>
        </div>
        <div class="center-text">
            <p>В комплекте 4 шт.</p>
        </div>
        <div class="wrapper">
            <img src="./img/baner2.jpg" alt="" />
            <div class="btn-container">
                <a href="#order" class="btn">заказать сейчас</a>
                <p class="btn__afterText">осталось <span>15</span> комплектов по акции</p>
            </div>
        </div>
    </header>
    <section class="gif_sect">
        <img src="./img/gif1.gif" alt="" class="gif__img" />
    </section>
    <section class="sect2">
        <div class="tile">
            <div class="row">
                <div class="item">
                    <img src="./img/baner3.jpg" alt="" class="item__img" />
                </div>
                <div class="item">
                    <div class="item__vline"></div>
                    <p class="item__text">
                        Губка удаляет ороговевший слой эпидермиса, стимулирует лимфоток и выводит из клеток токсины.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <div class="item__vline"></div>
                    <p class="item__text">
                        Губка-пилинг Clean Skin увлажняет кожный покров, дарит ему мягкость и шелковистость
                    </p>
                </div>
                <div class="item">
                    <img src="./img/baner4_1.jpg" alt="" class="item__img" />
                </div>
            </div>
        </div>
    </section>

    <section class="section3">
        <div class="wrapper">
            <div class="title__container">
                <h2 class="title"><span>Уникальный</span> эффект</h2>
                <div class="title__container-hline"></div>
                <div class="title__container-hline"></div>
            </div>
            <p class="simple__text">
                Красивое, упругое тело - к этому результату стремится каждая женщина. Губка улучшает внешний вид кожи путем мгновенной очистки и удаления всех омертвевших клеток кожи. Делает кожу шелковистой и гладкой. При использовании губки для отшелушивания, вы увидите,
                что комочки грязи начнут выходить из пор, и вы будете рады результатом и почувствуете новые здоровые, мягкие ощущения кожи.
            </p>
        </div>
        <img src="./img/baner5.jpg" alt="" />
    </section>

    <section class="section4">
        <div class="wrapper">
            <div class="title__container">
                <h2 class="title"><span>Возможности</span> губки</h2>
                <div class="title__container-hline"></div>
                <div class="title__container-hline"></div>
            </div>
            <p class="simple__text">
                Губка-пилинг станет вашим неизменным помощником в борьбе за красивую фигуру. Известно, что тонус кожи можно повысить с помощью самомассажа, а именно стимулирования проблемных зон специальной губкой. При регулярном использовании уменьшается проявление
                целлюлита, тело становится подтянутым и упругим.
            </p>
        </div>
        <img src="./img/baner6.jpg" alt="" />
        <div class="btn-container">
            <a href="#order" class="btn">заказать сейчас</a>
        </div>
    </section>

    <section class="section5">
        <div class="wrapper">
            <div class="title__container">
                <h2 class="title">
                    <span>Характеристики</span>
                </h2>
                <div class="title__container-hline"></div>
                <div class="title__container-hline"></div>
            </div>
            <br>
            <img src="./img/baner7.jpg" alt="" />
            <ul class="characteristiks">
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Подходит для чувствительной кожи</p>
                </li>
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Параметры: 60x24 см</p>
                </li>
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Впитывают воду в течение 10 секунд</p>
                </li>
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Материал: EPE</p>
                </li>
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Размер губки: 13*7*3 см</p>
                </li>
                <li class="characteristiks__item">
                    <p class="characteristiks__text">&nbsp;&nbsp;<img src="./img/icons/icon1.png" alt="" class="characteristiks__img" /> Цвет: желтый, синий, зеленый, розовый</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="reviews">
        <div class="wrapper">
            <div class="title__container">
                <h2 class="title"><span>Отзывы</span> покупателей</h2>
                <div class="title__container-hline"></div>
                <div class="title__container-hline"></div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev1.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Адия</h2>
                    <p class="review-item__text">
                        Крутая мочалка. Благодаря ей, моя кожа буд-то обновилась, не понимаю, как раньше жила, с такими закупоренными порами. Рекомендую)).
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev2.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Кенже</h2>
                    <p class="review-item__text">
                        Продукт очень хорошо упакован, быстрая доставка в течение 3 дней, губка очень проста в использование и идеально соответствует описанию. Я в восторге).
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev3.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Бибинур</h2>
                    <p class="review-item__text">
                        Товар такой же, как в описание, хороший материал и качество, отличный продавец. Очень рада результату после использования этой губки
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev4.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Куаныш</h2>
                    <p class="review-item__text">
                        Все как на фото и описании, отлично справляется с чисткой кожи) Спасибо))
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev5.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Байсал</h2>
                    <p class="review-item__text">
                        Круто, мне очень нравится. Мой ребенок никогда не любил купаться, какие игрушки я только ему е давала, все равно не любил ванночку. Текстурный принт на этой губке ооочееень ему понравился, теперь сам просит принимать ванночку, а главное я могу качественно
                        отмыть ребенка.
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev6.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Дилара</h2>
                    <p class="review-item__text">
                        Отлично вычищает, кожа подтянулась, начала блистеть. И доставили всего за 2 дня. Советую)
                    </p>
                </div>
            </div>
            <div class="review-item">
                <img src="./img/reviews/rev7.jpg" alt="" class="review-item__img" />
                <div class="wrapper">
                    <h2 class="review-item__name">Саида</h2>
                    <p class="review-item__text">
                        Очень рада, что приобрела эту губку. Потому что начала сильно экономить на разных скрабах. Материал и текстура вычищает кожу до идеала, она стала мягкой и приятной на ощупь. Спасибо большое).
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section6">
        <div class="wrapper">
            <div class="title__container">
                <h2 class="title"><span>Как сделать</span> заказ</h2>
                <div class="title__container-hline"></div>
                <div class="title__container-hline"></div>
            </div>
            <ul class="order">
                <li class="order__item">
                    <img src="./img/icons/icon2.png" alt="" class="order__img" />
                    <p class="order__text">Вы оставляете заявку на нашем сайте</p>
                </li>
                <li class="order__item">
                    <img src="./img/icons/icon3.png" alt="" class="order__img" />
                    <p class="order__text">
                        Менеджер связывается с Вами для подтверждения заказa
                    </p>
                </li>
                <li class="order__item">
                    <img src="./img/icons/icon4.png" alt="" class="order__img" />
                    <p class="order__text">
                        Доставим заказ в течение 2-5 дней курьером до двери
                    </p>
                </li>
                <li class="order__item">
                    <img src="./img/icons/icon5.png" alt="" class="order__img" />
                    <p class="order__text">Оплачивайте после проверки товара</p>
                </li>
            </ul>
        </div>
    </section>
    <section class="header" style="margin-top: 20px">
        <div class="header__inner">
            <h1 class="header__title">Clean Skin</h1>
        </div>
        <h2 class="header__subtitle">губка-пилинг для тела</h2>
        <img src="./img/baner1.jpg" alt="" class="header__img" />
        <div class="line__yellow">
            <div class="price">
                <div class="price__old">
                    <p class="price-titleText">Обычная цена:</p>
                    <p class="price__old-text">
                        <?= $oldPriceHtml ?> <?= $currencyDisplayHtml ?> </p>
                </div>
                <div class="price_item discount">
                    <div class="text"></div>
                    <div class="price__new-text">-50%</div>
                </div>
                <div class="price__new">
                    <p class="price-titleText">Цена сегодня:</p>
                    <p class="price__new-text">
                        <?= $newPriceHtml ?> <?= $currencyDisplayHtml ?> </p>
                </div>
            </div>
        </div>
        <div class="center-text">
            <p>В комплекте 4 шт.</p>
        </div>
        <div class="wrapper">
            <img src="./img/baner2.jpg" alt="" />
            <div class="btn-container">
                <form class="form" action="" method="POST" id="order">
                    <?= countrySelect() ?>
                    <input type="text" name="name" class="form__input" placeholder="Введите Ваше имя" />
                    <input type="tel" name="phone" class="form__input" placeholder="Введите Ваш телефон" />
                    <button type="submit" class="btn btn__order">
                        заказать сейчас
                    </button>
                </form>
                <p class="btn__afterText">осталось <span>15</span> комплектов по акции</p>
            </div>
        </div>
    </section>
    <footer>
        <div class="foot_ru_center" style="text-align: center; margin: 0px auto; padding: 30px;">
            <?= footer() ?>
        </div>
    </footer>

    <style type="text/css">
        .form-control {
            width: 100%;
            border: 1px solid #acacac;
            height: 50px;
            background-color: #ececec;
            padding-left: 20px;
            margin-top: 20px;
            border-radius: 5px;
        }
    </style>


    <!-- Плавная прокрутка до якоря -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("a[href*=#]").on("click", function(e) {
                var anchor = $(this);
                $("html, body")
                    .stop()
                    .animate({
                            scrollTop: $(anchor.attr("href")).offset().top,
                        },
                        2000
                    );
                e.preventDefault();
                return false;
            });
        });
    </script>
    <!-- /Плавная прокрутка до якоря -->
</body>

</html>