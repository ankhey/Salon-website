window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Add interactive hover effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    });
});
// Add click animations
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      }, 100);
  });
});

// Responsive grid adjustment
function adjustGrid() {
  const container = document.querySelector('.grid-container');
  const width = window.innerWidth;
  if (width < 768) {
    container.style.gridTemplateColumns = '1fr';
  } else if (width < 1024) {
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else {
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
  }
}

// Initialize and add resize listener
adjustGrid();
window.addEventListener('resize', adjustGrid);

// Add stagger animation on load
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  setTimeout(() => {
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, index * 100);
  });
});

// Add special hover effect for service prices
document.querySelectorAll('.service-price').forEach(price => {
  price.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.color = '#ffd700';
  });
            
  price.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.color = 'white';
  });
});

const testimonials = [
  {
    text: "I walked out feeling like a brand-new person. The styling was flawless and really brought out my personality.",
    subtext: "The whole experience was relaxing and professional. I can't wait for my next appointment!",
    name: "Aisha M.",
    image: "https://i.pravatar.cc/50?img=8"
  },
  {
    text: "She knew exactly what look suited me best. I've never had so many compliments!",
    subtext: "The products she used were gentle and the results lasted for weeks.",
    name: "Linda G.",
    image: "https://i.pravatar.cc/50?img=12"
  },
  {
    text: "My curls have never looked this healthy and defined. I trust her completely with my hair.",
    subtext: "She truly cares about hair health, not just styling.",
    name: "Tasha W.",
    image: "https://i.pravatar.cc/50?img=32"
  }
];

let currentIndex = 0;

function showTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById('testimonialText').textContent = testimonial.text;
  document.getElementById('testimonialSubtext').textContent = testimonial.subtext;
  document.getElementById('clientName').textContent = testimonial.name;
  document.getElementById('clientImage').src = testimonial.image;
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// === Scroll Fade-In Effect for Major Sections ===
function revealOnScroll() {
  const sections = document.querySelectorAll('.section-fade');
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// === Hamburger Menu Toggle ===
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburgerMenu');
  const navList = document.getElementById('navList');
  if (hamburger && navList) {
    hamburger.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  }
});
