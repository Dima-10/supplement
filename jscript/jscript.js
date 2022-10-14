let cont = document.querySelector('.content-1'),
items = document.querySelectorAll('.ingredients-items');







let subsBtn = document.querySelector('.subscribe-btn');
/*
subsBtn.addEventListener('click', function subscribe () {
    
    subsBtn.style = `background-color:#c1c1c1;color:#ffffff`;
    subsBtn.innerHTML = `unsubscribe`;
    
    
    
        
        
    
});
*/
subsBtn.addEventListener('click', function () {
    if (subsBtn.innerHTML == 'subscribe') {
        subsBtn.style = `background-color:#c1c1c1;color:#ffffff`;
        subsBtn.innerHTML = 'unsubscribe';
    } else if (subsBtn.innerHTML == 'unsubscribe') {
        subsBtn.style = `background-color:#18a3dd;color:#ffffff`;
        subsBtn.innerHTML = `subscribe`;
    }
});




