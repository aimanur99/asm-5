// Donation calculate for Noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {
    console.log('add donation btn')

    const donateNoakhali = document.getElementById('donate-noakhali').value;
    const donateNumber = Number(donateNoakhali)
    if (donateNumber <= 0 || isNaN(donateNumber)) {
        alert('Sorry.Invalid donation.')

        return;
    } else {
        alert('Thank you.Successfully donated.')

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

//Donation calculate for Feni
document.getElementById('btn-feni').addEventListener('click',function(){
    const donateFeni = document.getElementById('donate-feni').value
    const donateNumber = Number(donateFeni)

    if(donateNumber <= 0 || isNaN(donateNumber)){
        alert('Sorry.Invalid doantion.')
        return;
    }else{
        
        alert('Thank you.Successfully donated.')
        
    }
    const amountFeni = document.getElementById('amount-feni').innerText
    const amountNumber = parseFloat(amountFeni)
    const topAmount = document.getElementById('top-amount').innerText;
    const topAmountNumber = parseFloat(topAmount)
    const feniTotalDonation = donateNumber + amountNumber
    const topNewAmount = topAmountNumber - donateNumber
    const topNewAmountUpdate = document.getElementById('top-amount').innerText=topNewAmount
    const feniTotalDonationUpdate = document.getElementById('amount-feni').innerText = feniTotalDonation

    const p = document.createElement('p')
    p.innerText= `${feniTotalDonation}Taka is Donated for famine-2024 at Feni, Bangladesh`
    document.getElementById('history-feni').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText= `${new Date().toLocaleDateString()}`
    document.getElementById('history-feni').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText= `${new Date().toLocaleTimeString()}`
    document.getElementById('history-feni').appendChild(p2)

})

//Aid for Quota Movement
document.getElementById('btn-quota').addEventListener('click',function(){
    const donateQuota = document.getElementById('donate-quota').value;
    const donateNumber = Number(donateQuota)
    

    if(donateNumber <= 0 || isNaN(donateNumber)){
        alert('Sorry.Invalid doantion.')

        return;
    }else{
        
        alert('Thank you.Successfully donated.')
        
    }
    const amountQuota = document.getElementById('amount-quota').innerText;
    const amountNumber = parseFloat(amountQuota)
    const topAmount = document.getElementById('top-amount').innerText;
    const topAmountNumber = parseFloat(topAmount);
    const quotaTotalDonation = amountNumber +donateNumber;
    const topNewAmount = topAmountNumber - donateNumber
    const quotaTotalDonationUpdate = document.getElementById('amount-quota').innerText=quotaTotalDonation
    const topNewAmountUpdate = document.getElementById('top-amount').innerText=topNewAmount

    const p = document.createElement('p')
    p.innerText= `${quotaTotalDonation}Taka is Donated for quota-2024 at Quota, Bangladesh `
    document.getElementById('history-quota').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText= `${new Date().toLocaleDateString()}`
    document.getElementById('history-quota').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText= `${new Date().toLocaleTimeString()}`
    document.getElementById('history-quota').appendChild(p2)
    
})

//button section formula

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.add('btn-donation');
    document.getElementById('donation-btn').classList.remove('btn-donation');
    document.getElementById('noakhali-section').classList.add('hidden');
    document.getElementById('noakhali-section').classList.remove('lg:flex');
    document.getElementById('feni-section').classList.add('hidden');
    document.getElementById('quota-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

document.getElementById('donation-btn').addEventListener('click',function(){
    const historyButton= document.getElementById('history-btn').classList.remove('btn-donation');
    const donationButton = document.getElementById('donation-btn').classList.add('btn-donation');
    const noakhaliSection = document.getElementById('noakhali-section').classList.remove('hidden');
    const feniSection = document.getElementById('feni-section').classList.remove('hidden');
    const quotaSection = document.getElementById('quota-section').classList.remove('hidden') ;
    const historySection = document.getElementById('history-section').classList.add('hidden');
})

// Start blog btn here----->
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='./blog.html'
})

// Start home button here ------>
document.getElementById('home-btn').addEventListener('click',function(){
    window.location.href='./home.html'
})
