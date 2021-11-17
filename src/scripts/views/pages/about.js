import profile from '../../../public/hero.png';
const About = {
    async render() {
        return `
            <div class="d-flex align-items-center hero-custom bg-gradient-second">
                <div class="custom-hero p-5">
                    <h1 class="text-center text-white fw-bold">About Me</h1>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mt-4">
                        <img src="${profile}" class="img-thumbnail"/>
                    </div>
                    <div class="col-md-8 mt-4">
                        <div class="card bg-gradient-first rounded-3  h-100">
                            <div class="card-body">
                                <p class="text-white lh-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc in interdum quam. Vestibulum efficitur magna consequat magna lacinia, 
                                quis eleifend elit fermentum. Pellentesque iaculis eros vel tortor ornare, 
                                imperdiet consectetur neque rutrum. Ut suscipit tellus in gravida efficitur. 
                                Aliquam vel bibendum enim. Aenean non nisi at ligula suscipit dapibus et sed 
                                nulla. Nullam a tempor sem. Donec eleifend ex non nibh rutrum bibendum at eget 
                                purus. Nam dapibus et nisl in venenatis. Sed sit amet volutpat ligula. 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                                turpis egestas. Ut lectus libero, congue eget dolor eget, viverra vehicula sapien. 
                                Integer blandit sollicitudin bibendum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-5 my-4 bg-gradient-six rounded-3">
                    <div class="container-fluid py-5 text-white">
                        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button class="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
                <div class="p-5 mb-4 bg-gradient-seven rounded-3">
                    <div class="container-fluid py-5 text-white">
                        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button class="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
            </div>
        `;
    },
     async afterRender() {
        
    }
}

export default About;