
    const dots = document.querySelectorAll('.dot');
    const buttons = document.querySelectorAll('.num-btn');
    let code = ""; 

   
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            
            if (btn.classList.contains('delete-action') || btn.innerHTML.includes('<svg')) {
                code = code.slice(0, -1); 
                updateDots();
                return;
            }

            
            if (btn.querySelector('img')) {
                 fillAllDots();
                 setTimeout(() => window.location.href = "card.html", 300);
                 return;
            }

            
            const number = btn.innerText.trim();
            if (number && code.length < 4) {
                code += number;
                updateDots();

                
                if (code.length === 4) {
                    setTimeout(() => {
                        window.location.href = "card.html"; 
                    }, 300); 
                }
            }
        });
    });

    
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index < code.length) {
                dot.style.background = '#1A1A1A'; 
                dot.style.borderColor = '#1A1A1A';
            } else {
                dot.style.background = 'white';   
                dot.style.borderColor = '#ccc';
            }
        });
    }

    
    function fillAllDots() {
        dots.forEach(dot => {
            dot.style.background = '#1A1A1A';
            dot.style.borderColor = '#1A1A1A';
        });
    }
    function toggleMenu() {
        const sheet = document.getElementById('bottomSheet');
        const overlay = document.getElementById('overlay');
        sheet.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    