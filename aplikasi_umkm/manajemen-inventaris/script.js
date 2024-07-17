document.getElementById('inventory-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('inventory-product-name').value;
    const quantity = document.getElementById('inventory-quantity').value;

    const inventoryOutput = document.getElementById('inventory-output');
    const inventoryEntry = document.createElement('div');
    inventoryEntry.className = 'inventory-entry';
    inventoryEntry.textContent = `Produk: ${productName}, Jumlah: ${quantity}`;
    inventoryOutput.appendChild(inventoryEntry);
    
    document.getElementById('inventory-form').reset();
});
