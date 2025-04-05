// import Cookies from 'js-cookie';

    // Cookie に保存
    // Cookies.set('username', 'taro');

    // Cookie を読み出し
    // Cookies.get('username'); // → 'taro'

    // // Cookie を削除
    // Cookies.remove('username');

    // document.cookie = "user=Tarou"; // key=value
    // console.log(document.cookie); // user=Tarou
// ページ読み込み時に実行される処理

// ローカルストレージに保存
function saveCredentials(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    console.log('認証情報を保存しました');
}

// ローカルストレージから取得
function getCredentials() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
}

// ローカルストレージから削除
function clearCredentials() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    console.log('認証情報を削除しました');
}

// 使用例
// saveCredentials('example@example.com', 'password123');
// const credentials = getCredentials();
// console.log(credentials);
// clearCredentials();

// Sign inボタンのクリックイベント
document.querySelector('.button').addEventListener('click', function(event) {
    // ①デフォルトの動作を停止
    event.preventDefault();
    
    // ②入力値を取得
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="Password"]');
    
    // ③バリデーション
    if (!emailInput.value || !passwordInput.value) {
        alert('メールアドレスとパスワードを入力してください');
        return;
    }
    
    // ④ローカルストレージに保存
    saveCredentials(emailInput.value, passwordInput.value);
    
    // ⑤入力値をクリア
    emailInput.value = '';
    passwordInput.value = '';
    
    // ⑥新規タブでGoogle開く
    window.open('https://www.google.co.jp/', '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    // ローカルストレージから認証情報を取得
    const credentials = getCredentials();

    // 入力フィールドの参照を取得
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="Password"]');

    // 認証情報が存在する場合、フォームに自動入力
    if (credentials.email && credentials.password) {
        // 値を設定
        emailInput.value = credentials.email;
        passwordInput.value = credentials.password;

        // クラスを追加してスタイルを適用
        emailInput.classList.add('auto-filled');
        passwordInput.classList.add('auto-filled');

        alert('前回のログイン情報から自動入力しました。');
    }
});