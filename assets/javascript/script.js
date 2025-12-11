// ============================================
// PORTFÓLIO BRIAN WOOD - SCRIPT PRINCIPAL
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  initParticles();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
  initDownloadCV();
  initSkillCards();
});

// ============================================
// PARTICLES.JS CONFIGURAÇÃO
// ============================================
function initParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 800 }
        },
        color: {
          value: ["#444444", "#666666"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.9,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.4,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#555555",
          opacity: 0.6,
          width: 1.2
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.9 } },
          repulse: { distance: 180, duration: 0.4 }
        }
      },
      retina_detect: true
    });
  }
}

// ============================================
// ANIMAÇÕES AO SCROLL (INTERSECTION OBSERVER)
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos com classe de animação
  const animateElements = document.querySelectorAll(
    ".timeline-item, .skill-card, .project-card, section h2"
  );
  
  animateElements.forEach(el => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        empresa: document.getElementById("empresa").value,
        mensagem: document.getElementById("mensagem").value
      };

      // Mostrar loading
      messageDiv.innerHTML = '<div class="spinner-border spinner-border-sm text-primary" role="status"></div> Enviando...';
      messageDiv.className = "mt-3 text-center text-primary";

      // ============================================
      // INTEGRAÇÃO COM SERVIÇO DE EMAIL
      // ============================================
      // OPÇÃO 1: EmailJS (Recomendado - Gratuito até 200 emails/mês)
      // 1. Criar conta em https://www.emailjs.com/
      // 2. Configurar serviço de email (Gmail, Outlook, etc.)
      // 3. Criar template de email
      // 4. Substituir o código abaixo pelo código do EmailJS:
      /*
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(() => {
          messageDiv.innerHTML = '<div class="alert alert-success">✓ Mensagem enviada com sucesso! Entrarei em contato em breve.</div>';
          form.reset();
          setTimeout(() => { messageDiv.innerHTML = ""; }, 5000);
        })
        .catch((error) => {
          messageDiv.innerHTML = '<div class="alert alert-danger">✗ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</div>';
        });
      */

      // OPÇÃO 2: Formspree (Gratuito até 50 envios/mês)
      // Substituir action do form no HTML por: action="https://formspree.io/f/YOUR_FORM_ID"
      // E remover o preventDefault() e este código JavaScript

      // OPÇÃO 3: Netlify Forms (Se hospedar no Netlify)
      // Adicionar data-netlify="true" no form e usar action="/success.html"

      // Por enquanto, simulação de envio:
      setTimeout(() => {
        messageDiv.innerHTML = '<div class="alert alert-success">✓ Mensagem enviada com sucesso! Entrarei em contato em breve.</div>';
        form.reset();
        setTimeout(() => { messageDiv.innerHTML = ""; }, 5000);
      }, 1000);
    });
  }
}

// ============================================
// SCROLL SUAVE
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 70; // Compensar navbar fixa
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });
}

// ============================================
// DOWNLOAD CV
// ============================================
function initDownloadCV() {
  const downloadBtn = document.getElementById("download-cv");
  if (downloadBtn) {
    // O link já está configurado no HTML com download attribute
    // Não precisa de JavaScript adicional
  }
}

// ============================================
// CARDS DE HABILIDADES (HOVER EFFECTS)
// ============================================
function initSkillCards() {
  const skillCards = document.querySelectorAll(".skill-card");
  
  skillCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.style.transform = "translateY(-10px) scale(1.05)";
    });
    
    card.addEventListener("mouseleave", function() {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.8)";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.7)";
  }

  lastScroll = currentScroll;
});
