const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? '메뉴' : '닫기';
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '메뉴';
    navigation.classList.remove('is-open');
  }
});

const profileImage = document.querySelector('.portrait');
profileImage?.addEventListener('error', () => {
  profileImage.hidden = true;
});