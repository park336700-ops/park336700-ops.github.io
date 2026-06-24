const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const menuLabel = document.querySelector('.menu-label');
const navigation = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const desktopMedia = window.matchMedia('(min-width: 900px)');

const setMenuOpen = (isOpen, { returnFocus = false } = {}) => {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '주요 메뉴 닫기' : '주요 메뉴 열기');
  navigation.classList.toggle('is-open', isOpen);

  if (menuIcon) menuIcon.textContent = isOpen ? 'close' : 'menu';
  if (menuLabel) menuLabel.textContent = isOpen ? '닫기' : '메뉴';
  if (returnFocus) menuButton.focus();
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('click', (event) => {
  const isOpen = menuButton?.getAttribute('aria-expanded') === 'true';
  if (isOpen && header && !header.contains(event.target)) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  const isOpen = menuButton?.getAttribute('aria-expanded') === 'true';
  if (event.key === 'Escape' && isOpen) setMenuOpen(false, { returnFocus: true });
});

desktopMedia.addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});

const profileImage = document.querySelector('.portrait');
profileImage?.addEventListener('error', () => {
  profileImage.hidden = true;
});
