const Contact = {
    async render() {
        return `
            <div class="d-flex align-items-center hero-custom bg-gradient-eight">
                <div class="custom-hero p-5">
                    <h1 class="text-center text-white fw-bold">Contact Me</h1>
                </div>
            </div>
            <div class="container contact-section my-4">
                <div class="row contact-section-child align-items-md-stretch">
                    <div class="col-md-8">
                        <div class="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="h-100 p-5 bg-light border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
     async afterRender() {
        
    }
}

export default Contact;