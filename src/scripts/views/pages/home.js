import image from '../../../public/hero.png';

const Home = {
    async render() {
        return `
        <div class="container-fluid col-xxl-8 px-4 py-5">
            <div class="row flex-row-reverse align-items-center g-5 py-5 px-5 hero-bg">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="${image}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bolder lh-1 mb-3 text-white">Hola,</h1>
                    <h2 class="display-6 fw-bold text-white">I'm Rois Dwi Admaja</h2>
                    <p class="lead text-white">Welcome to my website</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="#" class="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">LOOK MY WORK</a>
                        <a href="#" class="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">GET MY CV</a>
                    </div>
                </div>
            </div>
        </div>

        <div class=container py-5>
            <div class="p-5 mb-4 about-bg rounded-3">
                <div class="container-fluid py-5 d-xl-flex flex-column align-items-center">
                    <h1 class="display-5 fw-bold text-white">About me</h1>
                    <p class="col-md-8 fs-4 text-white text-center">I am a person who likes to learn new things and be creative.
                    I'm currently open to work as a freelancer
                    as well as permanent employees.</p>
                    <a href="#/about" class="btn btn-outline-light rounded-pill">SHOW MORE</a>
                </div>
            </div>

            <div class="row align-items-md-stretch">
                <div class="col-md-6 mb-4">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Change the background</h2>
                        <p>Swap the background-color utility and add a color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        <button class="btn btn-outline-light" type="button">Example button</button>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <button class="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                </div>
            </div>

            <div class="p-5 mb-4 about-bg rounded-3">
                <div class="container-fluid py-5 d-xl-flex flex-column align-items-center">
                    <h1 class="display-5 fw-bold text-white">About me</h1>
                    <p class="col-md-8 fs-4 text-white text-center">I am a person who likes to learn new things and be creative.
                    I'm currently open to work as a freelancer
                    as well as permanent employees.</p>
                    <a href="#/about" class="btn btn-outline-light rounded-pill">SHOW MORE</a>
                </div>
            </div>
        </div>
        
        `;
    },
    async afterRender() {
        
    }
}

export default Home;