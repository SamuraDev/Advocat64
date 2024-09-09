// Отправка формы в Telegram
document.getElementById('consultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    if (name && phone && description) {
        const message = `Новая заявка с сайта:\n\nИмя: ${name}\nТелефон: ${phone}\nОписание: ${description}`;

        const token = '7062798008:AAFA8wZ3Q9G2_ysr4nbpREJp3YX4xh-FxYo';
        const chatId = '1416621658';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('Ваше сообщение успешно отправлено!');
                } else {
                    alert('Произошла ошибка при отправке. Попробуйте еще раз.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Произошла ошибка при отправке. Проверьте соединение с интернетом.');
            });
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
