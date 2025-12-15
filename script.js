// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("productPage").classList.remove("hidden");
    } else {
        alert("Username atau password salah 😅");
    }
}

// LOGOUT
function logout() {
    document.getElementById("productPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

// TAMBAH PRODUK
function addProduct() {
    const name = document.getElementById("productName").value;
    const imageInput = document.getElementById("imageInput");
    const productList = document.getElementById("productList");

    if (!name || !imageInput.files[0]) {
        alert("Isi nama & pilih gambar ya 😊");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${reader.result}">
            <h4>${name}</h4>
        `;
        productList.appendChild(div);
    };
    reader.readAsDataURL(imageInput.files[0]);

    document.getElementById("productName").value = "";
    imageInput.value = "";
}
