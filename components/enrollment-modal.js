class EnrollmentModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="enrollModal" class="modal" aria-hidden="true">
            <div class="modal-overlay" tabindex="-1" data-close></div>
            <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <button class="modal-close" aria-label="Close modal" data-close>&times;</button>
                <div class="modal-header">
                    <h2 id="modalTitle" class="modal-title">Enroll with Evka Consultz Ltd</h2>
                    <p class="modal-desc">Fill out the form below to start your journey.</p>
                </div>
                <form id="enrollForm" class="enroll-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="john@example.com"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <div class="select-wrapper">
                            <select id="subject" name="subject" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                <option value="" disabled selected>Select an option</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Training Programs">Training Programs</option>
                                <option value="Regulatory Affairs">Regulatory Affairs</option>
                                <option value="Pharmacovigilance">Pharmacovigilance</option>
                                <option value="Quality Assurance">Quality Assurance</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" required
                            placeholder="Tell us more about your needs..."
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition">Submit
                        Enrollment</button>
                </form>
            </div>
        </div>
        `;
    }
}

customElements.define('enrollment-modal', EnrollmentModal);
