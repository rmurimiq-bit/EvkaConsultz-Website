class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-blue-800 text-white py-12 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Evka Consultz</h3>
            <p class="text-base text-blue-200">Trusted regulatory advisory for pharmaceutical compliance across Africa.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-base text-blue-200 hover:text-white transition">Home</a></li>
              <li><a href="about.html" class="text-base text-blue-200 hover:text-white transition">About</a></li>
              <li><a href="services.html" class="text-base text-blue-200 hover:text-white transition">Services</a></li>
              <li><a href="training.html" class="text-base text-blue-200 hover:text-white transition">Training</a></li>
              <li><a href="contact.html" class="text-base text-blue-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <address class="not-italic text-base text-blue-200 space-y-3">
              <div class="flex items-start">
                <i data-feather="map-pin" class="w-5 h-5 mt-1 mr-2 flex-shrink-0"></i>
                <span>
                  Ushindi Lane, Next to Marurui Police post, Gate No.52, Nairobi, Kenya.
                </span>
              </div>
              <div class="flex items-center">
                <i data-feather="phone" class="w-5 h-5 mr-2 flex-shrink-0"></i>
                <span>+254 732 451324 / +254 773 492277</span>
              </div>
              <div class="flex items-center">
                <i data-feather="mail" class="w-5 h-5 mr-2 flex-shrink-0"></i>
                <span>info@evkaconsultz.com</span>
              </div>
            </address>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/in/evka-consultz-765190188/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiyH4YtddS%2B2NwjBZuqxUVg%3D%3D" target="_blank" rel="noopener noreferrer" class="text-blue-200 hover:text-white transition">
                <i data-feather="linkedin" class="w-6 h-6"></i>
              </a>
              <a href="https://www.instagram.com/evkaconsultz/" target="_blank" rel="noopener noreferrer" class="text-blue-200 hover:text-white transition">
                <i data-feather="instagram" class="w-6 h-6"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto border-t border-blue-700 mt-8 pt-8 text-center">
          <p class="text-base text-blue-200">&copy; ${new Date().getFullYear()} Evka Consultz Ltd. All rights reserved.</p>
        </div>
      </footer>
`;
  }
}
customElements.define('custom-footer', CustomFooter);
