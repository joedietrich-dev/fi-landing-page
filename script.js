function main() {
  const body = document.querySelector('body');
  const themeToggler = document.getElementById('theme-switch');
  
  if (!localStorage.getItem('theme')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark');
    } else {
      body.classList.add('light');
    }    
  } else {
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.add('light');
    }    
  }

  themeToggler.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  })
}

document.addEventListener('DOMContentLoaded', main)