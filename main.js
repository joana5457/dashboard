const app = document.getElementById('app');

// Render login page using string HTML
function renderLoginPage() {
  app.innerHTML = `
    <div class="container">
      <h2>Login Page</h2>
      <input type="text" id="username" placeholder="Username"><br><br>
      <input type="password" id="password" placeholder="Password"><br><br>
      <button onclick="login()">Login</button>
    </div>
  `;
}

// Render dashboard using string HTML
function renderDashboard() {
  app.innerHTML = `
    <div class="container">
      <h2>Dashboard</h2>
      <div class="dashboard-item">Total Orders: <strong>5</strong></div>
      <div class="dashboard-item">Total Amount: <strong>$150</strong></div>
      <button onclick="logout()">Logout</button>
    </div>
  `;
}

// Login logic
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please enter both username and password.');
    return;
  }

  renderDashboard();
}

// Logout logic
function logout() {
  renderLoginPage();
}

// Initial render
renderLoginPage();
