document.addEventListener('DOMContentLoaded', () => {
    const enrollBtn = document.getElementById('enrollBtn');
    const modal = document.getElementById('enrollModal');
    const closeElements = document.querySelectorAll('[data-close]');
    const enrollForm = document.getElementById('enrollForm');
    const contactForm = document.getElementById('contactForm');

    // Open Modal
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Close Modal Function
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    // Close on click of overlay or close button
    if (closeElements) {
        closeElements.forEach(el => {
            el.addEventListener('click', closeModal);
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (modal && e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // Enrollment Form Submission
    if (enrollForm) {
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(enrollForm);
            const data = Object.fromEntries(formData.entries());

            // Construct mailto link
            const subject = encodeURIComponent(`New Enrollment: ${data.subject}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\n` +
                `Email: ${data.email}\n` +
                `Phone: ${data.phone}\n` +
                `Subject: ${data.subject}\n\n` +
                `Message:\n${data.message}`
            );

            const mailtoLink = `mailto:info@evkaconsultz.com?subject=${subject}&body=${body}`;

            // Simulate sending (User feedback)
            const submitBtn = enrollForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Opening Email Client...';
            submitBtn.disabled = true;

            setTimeout(() => {
                window.location.href = mailtoLink;

                // Reset UI
                submitBtn.textContent = 'Sent!';
                setTimeout(() => {
                    closeModal();
                    enrollForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }, 800);
        });
    }
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});



function lockPinLocation() {
    alert("Location saved! (This is a placeholder action)");
    console.log("Location pin locked.");
}
