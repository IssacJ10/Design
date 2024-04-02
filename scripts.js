document.addEventListener('DOMContentLoaded', () => {
    const contactUsSection = document.querySelector('.contact-us'); // Replace with your selector for the contact-us section
    const mailboxIcon = document.querySelector('.contact-us .contact-us-icon'); // Replace with your selector for the mailbox icon
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            mailboxIcon.classList.add('animated-mail-icon'); // Add class for animation
        } else {
          mailboxIcon.classList.remove('animated-mail-icon'); // Remove class for animation
        }
      });
    });
  
    observer.observe(contactUsSection); // Observe the contact-us section

    const navLinks = document.querySelectorAll(".nav-item a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jumping behavior
    
        const targetSection = document.getElementById(this.getAttribute("href").slice(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    
        // Check if on a mobile device
        if (isMobile()) {          
          // Close mobile navigation and overlay with ease transition
          const mobileNav = document.querySelector('.mobile-nav');
          const overlay = document.querySelector('.overlay');
    
          mobileNav.classList.remove('open');  // Remove open class with transition
          overlay.classList.remove('open');  // Remove open class with transition
    
          
             // Add transition styles directly (adjust properties and duration as needed)
          mobileNav.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
          overlay.style.transition = 'opacity 0.5s ease-in-out';
    
          // Remove the closing class after the transition completes (adjust duration as needed)
          setTimeout(() => {
            mobileNav.classList.add('close');
            overlay.classList.add('close');
          }, 500); // Adjust duration for your desired transition time in milliseconds
        }
      });
    });

    const scrollToTopButton = document.querySelector('.scroll-top-button');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 200) {  // Show button after scrolling 100px down
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const mobileMenuButton = document.querySelector('.mobile-menu-button-container');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

mobileMenuButton.addEventListener('click', () => {
  if (mobileNav.classList.contains('close')) {
    mobileNav.classList.remove('close');
    mobileNav.classList.add('open');
    overlay.classList.remove('close');
    overlay.classList.add('open');
  } else {
    mobileNav.classList.remove('open');
    mobileNav.classList.add('close');
    overlay.classList.remove('open');
    overlay.classList.add('close');
  }
});

// Function to detect mobile device (replace with your preferred method)
function isMobile() {
  // You can replace this with your preferred method to detect mobile devices
  // Here's a simple example using window.innerWidth
  return window.innerWidth <= 768; // Adjust the width threshold as needed
}
  });


  
