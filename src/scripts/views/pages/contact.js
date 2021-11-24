const Contact = {
    async render() {
        return `
            <div class="d-flex align-items-center hero-custom bg-gradient-eight">
                <div class="custom-hero p-5">
                    <h1 class="text-center text-white fw-bold">Contact Me</h1>
                    <p class="lh-1 text-center text-white">Contact me if you want to talk about the project or just to make small talk</p>
                </div>
            </div>
            <div class="container my-4">
                <div class="row contact-section-child align-items-md-stretch">
                    <div class="col-md-8">
                        <div class="h-100 p-5 text-white bg-gradient-third rounded-3">
                            <h2 class="text-center">Send Message</h2>
                            <form class="form">
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Input your email here"/>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Input your name here"/>
                                </div>
                                <div class="mb-3">  
                                    <textarea class="form-control" rows="5" placeholder="Input your message here"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-light">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="h-100 p-5 bg-gradient-fourth text-white rounded-3">
                            <h2 class="text-center">Add borders</h2>
                            <ul class="list-group">
                                <li class="list-group-item border-0 bg-transparent text-white mb-2">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Sawunggaling St No.33, Sumberagung Village, Rejotangan District, Tulungagung 66293.</p>
                                </li>
                                <li class="list-group-item border-0 bg-transparent text-white mb-2">
                                    <i class="fas fa-mobile-alt"></i>
                                    (+62)821 3917 4677
                                </li>
                                <li class="list-group-item border-0 bg-transparent text-white mb-2">
                                    <i class="fas fa-envelope"></i>
                                    rois.admj@gmail.com
                                </li>
                            </ul>
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