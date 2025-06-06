document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO NAVBAR AO ROLAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- ANIMAÇÃO DO TÍTULO ---
    const headline = document.getElementById('animated-headline');
    const text = headline.textContent;
    headline.innerHTML = '';
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces
        span.style.transitionDelay = `${index * 0.05}s`;
        headline.appendChild(span);
    });
    setTimeout(() => headline.classList.add('visible'), 500);

    // --- EFEITO FLIP CARD AO TOCAR (MOBILE) ---
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });
    });
    
    // --- SLIDER DE DEPOIMENTOS ---
    const testimonials = [
        { quote: "Uma experiência transformadora. Nunca me senti tão bem na minha própria pele.", author: "Juliana S." },
        { quote: "O profissionalismo e o carinho da equipe são incomparáveis. Resultados que superaram todas as minhas expectativas!", author: "Larissa M." },
        { quote: "O ambiente é um oásis de tranquilidade e luxo. Cada detalhe é pensado para o nosso bem-estar.", author: "Camila R." }
    ];
    
    const slider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `<p>"${testimonial.quote}"</p><cite>– ${testimonial.author}</cite>`;
        slider.appendChild(card);
    });
    
    const sliderContainer = document.querySelector('.testimonial-slider-wrapper');
    const prevBtn = sliderContainer.querySelector('.prev');
    const nextBtn = sliderContainer.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = testimonials.length;
        if (index >= totalSlides) currentIndex = 0;
        if (index < 0) currentIndex = totalSlides - 1;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    // --- ANIMAÇÕES AO ROLAR (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
});


// --- MANIPULAÇÃO DO FORMULÁRIO ---
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');
    form.style.display = 'none';
    successMessage.style.display = 'block';
}