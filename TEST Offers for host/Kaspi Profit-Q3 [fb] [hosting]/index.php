<?php
// Получаем значение параметра buyer из URL
$buyer = $_GET['buyer'];
$creo = $_GET['creo'];

// Проверяем, что параметр buyer существует и не пустой
if (isset($buyer) && !empty($buyer) && isset($creo) && !empty($creo)) {
    // Если параметр buyer существует и не пустой, отображаем содержимое index.html
    include 'main-page.html';
} else {
    // Если параметр отсутствует или пустой, выполняем перенаправление на страницу 404
    header("HTTP/1.0 404 Not Found");
    echo "404 - Page Not Found";
}
?>