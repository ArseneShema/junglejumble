import { ExamplesController } from "./controllers/ExamplesController.js";
import { jumbleController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [jumbleController,],
    view: 'app/views/jumbleview.html'


  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])