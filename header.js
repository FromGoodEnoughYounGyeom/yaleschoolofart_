// 스크롤에 따른 헤더변화
	const headerWrap = html.querySelector('.header_wrap');
	let lastScroll = 0;

	window.addEventListener('scroll', () => {
		let scrollValue = html.scrollTop;

		if (scrollValue > 80) {
			if (scrollValue > lastScroll) {
				headerWrap.classList.add('fix');
				headerWrap.style.top = '0';
			} else {
				headerWrap.style.top = '-80px';
			}
		} else {
			headerWrap.classList.remove('fix');
			headerWrap.style.top = '0';
		}

		lastScroll = scrollValue;
	});