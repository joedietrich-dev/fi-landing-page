const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 
document.querySelector('main').appendChild(h2); 

function main() {
  const body = document.querySelector('body');
  const themeToggler = document.getElementById('theme-switch');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
  themeToggler.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
    } else {
      body.classList.replace('light', 'dark')
    }
  })
}

document.addEventListener('DOMContentLoaded', main)