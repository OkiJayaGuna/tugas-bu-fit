// script.js

// Function to show a section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    // If financial report is selected, show the login page first
    if (sectionId === 'financial-report') {
        document.getElementById('login-section').classList.remove('hidden');
        document.getElementById('financial-report').classList.add('hidden');
    }
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123456') {
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('financial-report').classList.remove('hidden');
    } else {
        alert('Username atau password salah!');
    }
}

// Event listener for login form
document.getElementById('login-form').addEventListener('submit', handleLogin);

// Function to update financial report based on selected period
function updateFinancialReport() {
    const period = document.getElementById('report-period').value;
    const dailyList = document.getElementById('daily-sales-list');
    const monthlyList = document.getElementById('monthly-sales-list');

    if (period === 'daily') {
        dailyList.classList.remove('hidden');
        monthlyList.classList.add('hidden');
    } else if (period === 'monthly') {
        dailyList.classList.add('hidden');
        monthlyList.classList.remove('hidden');
    }
}

// Sample data for demonstration
const dailySales = [
    { date: '2024-07-17', total: 'Rp 500.000' },
    { date: '2024-07-16', total: 'Rp 400.000' },
];

const monthlySales = [
    { month: 'Juli 2024', total: 'Rp 10.000.000' },
    { month: 'Juni 2024', total: 'Rp 8.000.000' },
];

// Function to render sales data
function renderSalesData() {
    const dailyList = document.getElementById('daily-sales-list');
    const monthlyList = document.getElementById('monthly-sales-list');

    dailySales.forEach(sale => {
        const saleEntry = document.createElement('div');
        saleEntry.classList.add('sale-entry');
        saleEntry.textContent = `${sale.date}: ${sale.total}`;
        dailyList.appendChild(saleEntry);
    });

    monthlySales.forEach(sale => {
        const saleEntry = document.createElement('div');
        saleEntry.classList.add('sale-entry');
        saleEntry.textContent = `${sale.month}: ${sale.total}`;
        monthlyList.appendChild(saleEntry);
    });
}

// Call render function on page load
document.addEventListener('DOMContentLoaded', renderSalesData);
