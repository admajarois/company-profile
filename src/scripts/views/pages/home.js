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
            </div>
        `;
    },
    async afterRender() {
        
    }
}

export default Home;