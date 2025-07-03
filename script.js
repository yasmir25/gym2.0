// Referencias DOM
const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authContainer = document.getElementById('auth-container');
const dashboard = document.getElementById('dashboard');
const logoutBtn = document.getElementById('logout');
const userNameDisplay = document.getElementById('user-name');
const mainTitle = document.getElementById('main-title');

// Funciones para alternar vistas
showLogin.onclick = () => {
  showLogin.classList.add('active');
  showRegister.classList.remove('active');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
};
showRegister.onclick = () => {
  showRegister.classList.add('active');
  showLogin.classList.remove('active');
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
};

// Al enviar cualquiera de los formularios
loginForm.onsubmit = e => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  iniciarSesion(email.split('@')[0]);
};
registerForm.onsubmit = e => {
  e.preventDefault();
  const name = registerForm.querySelector('input[type="text"]').value;
  iniciarSesion(name);
};

// Iniciar sesión (frontend simulado)
function iniciarSesion(usuario) {
  sessionStorage.setItem('gimUser', usuario);
  mostrarDashboard(usuario);
}

// Mostrar dashboard
function mostrarDashboard(usuario) {
  authContainer.classList.add('hidden');
  dashboard.classList.remove('hidden');
  mainTitle.textContent = 'Inicio';
  userNameDisplay.textContent = usuario;
}

// Logout
logoutBtn.onclick = () => {
  sessionStorage.removeItem('gimUser');
  dashboard.classList.add('hidden');
  authContainer.classList.remove('hidden');
  mainTitle.textContent = 'Gimnasio';
  loginForm.reset();
  registerForm.reset();
};

// Si ya está logueado
document.addEventListener('DOMContentLoaded', () => {
  const stored = sessionStorage.getItem('gimUser');
  if (stored) mostrarDashboard(stored);
});

