import image from '../../../public/hero.png';
import icons from '../../globals/skills';
import { skillTemplate } from '../templates/templateCreator';

const Home = {
    async render() {
        return `
        <div class="hero-bg mb-4 text-light">
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">LOOK MY WORK</button>
                            <button type="button" class="btn btn-outline-light btn-lg px-4 rounded-pill">GET MY CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class=container py-5>
            <div class="p-5 mb-4 bg-gradient-second rounded-3">
                <div class="container-fluid py-5 d-flex flex-column align-items-center">
                    <h1 class="display-5 fw-bold text-white">About me</h1>
                    <p class="col-md-8 fs-4 text-white text-center">I am a person who likes to learn new things and be creative.
                    I'm currently open to work as a freelancer
                    as well as permanent employees.</p>
                    <a href="#/about" class="btn btn-outline-light rounded-pill">SHOW MORE</a>
                </div>
            </div>

            <div class="row align-items-md-stretch">
                <div class="col-md-6 mb-4">
                    <div class="h-100 p-5 text-white d-flex flex-column align-items-center bg-gradient-third rounded-3">
                        <h2 class="fw-bold">What can i do?</h2>
                        <div class="d-flex flex-column mt-3">
                            <div class="card p-3 mb-3 bg-transparent border">
                                <h2 class="text-center">Web Development</h2>
                            </div>
                            <div class="card p-3 mb-3 bg-transparent border">
                                <h2 class="text-center">Android Development</h2>
                            </div>
                            <div class="card p-3 mb-3 bg-transparent border">
                                <h2 class="text-center">UI & UX Design</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="h-100 p-5 text-white bg-gradient-fourth rounded-3">
                        <h2 class="fw-bold text-center">My Skills</h2>
                        <div class="row row-cols-4 row-cols-lg-4 g-2 g-lg-3" id="icons">
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-5 mb-4 bg-gradient-fifth rounded-3">
                <div class="container-fluid py-5 d-flex flex-column align-items-center">
                    <h1 class="display-5 fw-bold text-white">My Work</h1>
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
        const iconContainer = document.querySelector("#icons");
        icons.forEach((icon)=>{
            iconContainer.innerHTML += skillTemplate(icon);
        })
    }
}

export default Home;