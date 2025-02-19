document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 簡単な認証の例（実際には安全な方法を使用してください）
    if (username === 'admin' && password === 'admin') {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Invalid credentials.';
    }
});
