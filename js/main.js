document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    // Elements will fade and slide up as you scroll to them
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply to game cards and info sections
    const animateElements = document.querySelectorAll('.game-card, .info-container, .info-box, .payment-section');
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    // 2. RTP BAR LOADING ANIMATION
    // Bars will "fill up" when they appear on screen
    const rtpBars = document.querySelectorAll('.rtp-bar');
    rtpBars.forEach(bar => {
        const finalWidth = bar.style.width;
        bar.style.width = "0%";
        
        const rtpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.transition = "width 1.5s cubic-bezier(0.1, 0.5, 0.5, 1)";
                        bar.style.width = finalWidth;
                    }, 200);
                }
            });
        });
        rtpObserver.observe(bar);
    });

    // 3. BUTTON CLICK RIPPLE EFFECT
    // Adds a visual "shockwave" when clicking buttons
    const buttons = document.querySelectorAll('button, .nav-item');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.transition = 'all 0.5s ease-out';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.width = '300px';
                ripple.style.height = '300px';
                ripple.style.opacity = '0';
            }, 0);
            
            setTimeout(() => { ripple.remove(); }, 500);
        });
    });

    // 4. LOGO HOVER JIGGLE
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transition = "transform 0.3s cubic-bezier(.36,.07,.19,.97)";
        logo.style.transform = "rotate(5deg) scale(1.1)";
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = "rotate(0deg) scale(1)";
    });

});

// Function to handle the global redirect you requested
function openAuth() {
    window.location.href = 'https://i1lucky1u.com/kh';
}