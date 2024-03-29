import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js"

// Public
export class JumbleController {
  constructor() {
    console.log('This is the jumble Controller')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }

  drawJumble() {
    console.log('drawing Jumble');
    const jumbles = AppState.jumbles
    let Jumblehtml = ''
    jumbles.forEach(jumble => Jumblehtml += jumble.ListTemplate)



  }

}










