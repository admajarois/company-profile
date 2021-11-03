import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";


class App {
    constructor({button,  drawer, content}) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            content: this._content,
            button: this._button,
            drawer: this._drawer,
        });

    }


    async renderPage() {
        const url = UrlParser.parseActiveurlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;