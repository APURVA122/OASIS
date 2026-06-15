let users = [
  { username: "admin", password: "1234" }
];

let isLogin = true;

function handleAuth() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (isLogin) {
    // LOGIN
    const user = users.find(
      (user) => user.username === u && user.password === p
    );

    if (user) {
      msg.style.color = "lightgreen";
      msg.innerText = "Login Successful ✔️";
    } else {
      msg.style.color = "red";
      msg.innerText = "Invalid credentials ❌";
    }

  } else {
    // SIGN UP
    const exists = users.find(user => user.username === u);

    if (exists) {
      msg.style.color = "red";
      msg.innerText = "User already exists ❌";
      return;
    }

    users.push({ username: u, password: p });

    msg.style.color = "lightgreen";
    msg.innerText = "Account created ✔️ Now login";
    toggleMode(); // switch back to login
  }
}

function toggleMode() {
  isLogin = !isLogin;

  document.getElementById("title").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("authBtn").innerText = isLogin ? "Login" : "Sign Up";

  document.querySelector(".toggle").innerText =
    isLogin ? "Don't have an account? Sign up" : "Already have an account? Login";

  document.getElementById("msg").innerText = "";
}