(() => {
  const modal = document.getElementById('order-modal');
  const productField = document.getElementById('selected-product');
  const waField = document.getElementById('wa-number');
  const nameField = document.getElementById('business-name');
  const openModal = (product) => { productField.value = product || 'NFC + QR Card'; modal.classList.add('open'); setTimeout(() => waField.focus(), 30); };
  document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.order)));
  document.getElementById('close-modal').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.remove('open'); });
  document.getElementById('order-form').addEventListener('submit', event => {
    event.preventDefault();
    const phone = waField.value.replace(/\D/g, '');
    const business = nameField.value.trim();
    const product = productField.value;
    const message = `Halo TapReview! Saya dari ${business}. Saya tertarik dengan produk ${product}. Boleh minta katalog, pilihan bahan, harga, dan minimum order?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
