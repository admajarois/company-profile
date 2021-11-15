const Contact = {
    async render() {
        return `
        <div class="container">
            <h1 class="h1-contact"> Contact Me </h1>
            <form id="form" class="topBefore">
		        <input id="name" type="text" placeholder="NAME">
		        <input id="email" type="email" placeholder="E-MAIL">
                <input id="subject" type="text" placeholder="SUBJECT">
		        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="GO!">
            </form>
        </div>
        `;
    },
     async afterRender() {
        
    }
}

export default Contact;