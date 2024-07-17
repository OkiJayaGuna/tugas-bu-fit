document.getElementById('sales-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const date = new Date().toISOString();

    const salesOutput = document.getElementById('sales-output');
    const saleEntry = document.createElement('div');
    saleEntry.className = 'sale-entry';
    saleEntry.textContent = `Produk: ${productName}, Jumlah: ${quantity}, Harga: ${price}, Tanggal: ${new Date(date).toLocaleString()}`;
    salesOutput.appendChild(saleEntry);
    
    // Simpan penjualan ke localStorage
    let sales = JSON.parse(localStorage.getItem('sales')) || [];
    sales.push({ productName, quantity, price, date });
    localStorage.setItem('sales', JSON.stringify(sales));

    document.getElementById('sales-form').reset();
});
