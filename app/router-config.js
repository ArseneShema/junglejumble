import { ExamplesController } from "./controllers/ExamplesController.js";
import { JumbleController } from "./controllers/JumbleController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JumbleController,],
    view: 'app/views/Jumbleview.html'


  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])