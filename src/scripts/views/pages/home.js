import image from '../../../public/fotome.png';

const Home = {
    async render() {
        return `
            <div class="banner">
                <div class="banner-container">
                    <img src="${image}" class="banner-img" alt="jumbotron image">
                    <div class="text-container">
                        <h1>Hello,</h1>
                        <h2>I'm Rois Dwi Admaja</h2>
                        <p>Welcome to my simple website, this website contains about myself personally.
                        With this website, it's hoped that it'll make it easier for me to introduce myself
                        and show the results of my work to the world.</p>
                    </div>
                    <div class="button-myself">
                        <a href="#">Look my CV</a>
                        <a href="#">Hire me</a>
                    </div>
                </div>
            </div>
            <div class="work-section">
                <h1>What can i do ?</h1>
                <div class="work-section_row">
                    <div class="work-section_item">
                        <i class="fab fa-chrome"></i>
                        <h2>Web Application Development</h2>
                    </div>
                    <div class="work-section_item">
                        <i class="fas fa-mobile"></i>
                        <h2>Mobile Application Development</h2>
                    </div>
                    <div class="work-section_item">
                        <i class="fab fa-figma"></i>
                        <h2>UI & UX Design</h2>
                    </div>
                </div>
            </div>
            <div class="skill-section">
                <h1>My Skills</h1>
                <div class="skill-section_row">
                    <div class="skill-section_item">
                        <i class="fab fa-js-square"></i>
                        <h3>Javascript</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-java"></i>
                        <h3>Java</h3>
                    </div>
                     <div class="skill-section_item">
                        <i class="fab fa-python"></i>
                        <h3>Python</h3>
                    </div>
                     <div class="skill-section_item">
                        <i class="fab fa-php"></i>
                        <h3>PHP</h3>
                    </div>
                     <div class="skill-section_item">
                        <i class="fab fa-html5"></i>
                        <h3>HTML</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-css3-alt"></i>
                        <h3>CSS</h3>
                    </div>
                     <div class="skill-section_item">
                        <i class="fab fa-react"></i>
                        <h3>ReactJS</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fas fa-flask"></i>
                        <h3>Flask</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-bootstrap"></i>
                        <h3>Bootstrap</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-laravel"></i>
                        <h3>Laravel</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-node-js"></i>
                        <h3>NodeJS</h3>
                    </div>
                    <div class="skill-section_item">
                        <i class="fab fa-vuejs"></i>
                        <h3>VueJS</h3>
                    </div>
                </div>
            </div>
        `;
    },
    async afterRender() {
        
    }
}

export default Home;