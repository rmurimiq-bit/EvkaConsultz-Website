class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="bg-white shadow-md py-4 px-4 md:px-8 lg:px-16 sticky top-0 z-50">
            <div class="max-w-6xl mx-auto flex justify-between items-center">
                <a class='flex items-center gap-3' href='index.html'>
                    <img src="images/evka_logo.png" alt="Evka Consultz Ltd Logo" class="h-20 w-auto">
                    <span class="text-[42px] font-bold text-blue-800 mb-2 font-['Playfair_Display']">Evka Consultz Ltd</span>
                </a>
                <nav class="hidden md:flex space-x-8">
                    <a class='text-slate-600 hover:text-blue-600 font-medium' href='index.html'>Home</a>
                    <a class='text-slate-600 hover:text-blue-600 font-medium' href='about.html'>About Us</a>
                    <a class='text-slate-600 hover:text-blue-600 font-medium' href='services.html'>Services</a>
                    <a class='text-slate-600 hover:text-blue-600 font-medium' href='training.html'>Training</a>
                    <a class='text-slate-600 hover:text-blue-600 font-medium' href='contact.html'>Contact</a>
                </nav>
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-slate-600 focus:outline-none">
                        <i data-feather="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-40">
            <nav class="flex flex-col space-y-4 px-4 py-4">
                <a class='text-slate-600 hover:text-blue-600 font-medium' href='index.html'>Home</a>
                <a class='text-slate-600 hover:text-blue-600 font-medium' href='about.html'>About Us</a>
                <a class='text-slate-600 hover:text-blue-600 font-medium' href='services.html'>Services</a>
                <a class='text-slate-600 hover:text-blue-600 font-medium' href='training.html'>Training</a>
                <a class='text-slate-600 hover:text-blue-600 font-medium' href='contact.html'>Contact</a>
            </nav>
        </div>
        `;

        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('nav a, #mobile-menu a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.remove('text-slate-600');
                link.classList.add('text-blue-600');
            } else {
                link.classList.add('text-slate-600');
                link.classList.remove('text-blue-600');
            }
        });

        // Re-initialize Feather icons if needed
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
