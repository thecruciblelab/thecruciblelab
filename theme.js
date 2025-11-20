// Theme toggler
const btn = document.getElementById('theme-toggle');
const state = localStorage.getItem('theme');
if(state) document.documentElement.setAttribute('data-theme', state);

btn.onclick = () => {
  let curr = document.documentElement.getAttribute('data-theme');
  let next = curr === 'dark' ? 'light' : 'dark';
  if(!curr) next = 'dark';
  document.documentElement.setAttribute('data-theme', next);
  btn.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
};
if(document.documentElement.getAttribute('data-theme') === 'dark') {
  btn.textContent = '☀️';
} else {
  btn.textContent = '🌙';
}
