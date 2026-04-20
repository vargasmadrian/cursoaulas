// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Collapsible sections (Guia Paso a Paso)
document.querySelectorAll('.collapsible-header').forEach(header => {
    const bodyId = header.id.replace('Toggle', 'Body');
    const body = document.getElementById(bodyId);
    if (body) {
        header.addEventListener('click', () => {
            header.classList.toggle('expanded');
            body.classList.toggle('expanded');
        });
    }
});

// Rubrica cards collapse/expand
document.querySelectorAll('.rubrica-card').forEach(card => {
    const header = card.querySelector('.rubrica-header');
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasExpanded = card.classList.contains('rubrica-card-expanded');
        card.classList.toggle('rubrica-card-expanded');
    });

    // Prevent clicks inside body from toggling
    const body = card.querySelector('.rubrica-body');
    if (body) {
        body.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Resource tabs (Creatividad section)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        const tabContainer = btn.closest('.resource-tabs');

        // Deactivate all buttons and contents within this tab group
        tabContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        tabContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Activate clicked
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Formulario de entrega - Google Sheets
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7WKEGRc5XzJ5kRloJA6gGae782i9AjpJjBeqQoqHE8c22aGaKEZoUZAal7WzkWevDZQ/exec';

const formEntrega = document.getElementById('formEntrega');
if (formEntrega) {
    formEntrega.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btnEntrega');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        const datos = {
            nombre: document.getElementById('nombre').value,
            nrc: document.getElementById('nrc').value,
            tipo: document.getElementById('tipo').value,
            materia: document.getElementById('materia').value,
            fecha: new Date().toLocaleString('es-EC')
        };

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(datos)
            });
            formEntrega.style.display = 'none';
            document.getElementById('entregaExito').style.display = 'block';
        } catch (error) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar entrega';
            alert('Error al enviar. Intenta nuevamente.');
        }
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .step, .faq-item, .support-card, .checklist-column').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Copy-to-clipboard for code boxes (Contenido para la web)
document.querySelectorAll('.code-box').forEach(box => {
    const btn = box.querySelector('.code-copy-btn');
    const code = box.querySelector('pre code');
    if (!btn || !code) return;
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code.innerText);
            const originalHTML = btn.innerHTML;
            btn.classList.add('copied');
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = originalHTML;
            }, 1800);
        } catch (err) {
            btn.innerHTML = '<i class="fas fa-times"></i> Error';
        }
    });
});
