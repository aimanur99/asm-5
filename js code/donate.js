// Donation calculate in Noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {
    console.log('add donation btn')

    const donateNoakhali = document.getElementById('donate-noakhali').value;
    const donateNumber = Number(donateNoakhali)
    if (donateNumber <= 0 || isNaN(donateNumber)) {
        alert('Sorry.Invalid donation')

        return;
    } else {
        alert('Thank you.Successfully donated')

    }
    const amountNoakhali = document.getElementById('amount-noakhali').innerText;
    const amountNumber = parseFloat(amountNoakhali)
    const topAmount = document.getElementById('top-amount').innerText;
    const topAmountNumber = parseFloat(topAmount)
    const noakhaliTotalDonation = amountNumber + donateNumber
    const totalAmount = topAmountNumber - donateNumber
    const topUpdateAmount = document.getElementById('top-amount').innerText = totalAmount
    const newAmountNoakhali = document.getElementById('amount-noakhali').innerText = noakhaliTotalDonation

    const p = document.createElement('p')
    p.innerText = `${noakhaliTotalDonation}Taka is Donated for famine-2024 at Noakhali, Bangladesh`
    document.getElementById('history-noakhali').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText = `${new Date().toLocaleDateString()}`
    document.getElementById('history-noakhali').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText = `${new Date().toLocaleTimeString()}`
    document.getElementById('history-noakhali').appendChild(p2)
})