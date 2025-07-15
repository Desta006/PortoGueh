function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');  // Tampilkan menu
  } else {
    menu.classList.add('hidden');     // Sembunyikan menu
  }
}
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  if (menu.classList.contains('-translate-x-full')) {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
  } else {
    menu.classList.remove('translate-x-0');
    menu.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  menu.classList.remove('translate-x-0');
  menu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}