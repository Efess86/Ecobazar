// Функция для создания одного рейтинга
function createStarRating(container) {
	for (let i = 1; i <= 5; i++) {
		const star = document.createElement('span');
		star.classList.add('star');
		star.dataset.value = i;
		star.textContent = '☆';
		container.appendChild(star);
	}

	container.addEventListener('click', function (event) {
		if (event.target.classList.contains('star')) {
			const clickedStar = event.target;
			const value = parseInt(clickedStar.dataset.value, 10);

			// Сбрасываем все звезды
			const stars = container.querySelectorAll('.star');
			stars.forEach(star => star.classList.remove('active'));

			// Заполняем звезды до выбранной
			for (let i = 0; i < value; i++) {
				stars[i].classList.add('active');
			}
		}
	});
}

// Находим все контейнеры для рейтинга и инициализируем их
const starRatingContainers = document.querySelectorAll('.star-rating');
starRatingContainers.forEach(createStarRating);