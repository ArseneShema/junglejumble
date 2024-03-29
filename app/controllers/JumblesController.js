import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _focusCursorIntoJumbleTextArea() {
  document.getElementById('jumble-area').focus()
}

export class JumblesController {
  constructor() {
    console.log("🍍🐒");
    this.drawJumblesList()

    AppState.on('activeJumble', this.drawActiveJumble)
    AppState.on('jumbles', this.drawJumblesList)
  }

  drawJumblesList() {
    const jumbles = AppState.jumbles
    let jumbleListContent = ''
    jumbles.forEach(jumble => jumbleListContent += jumble.ListTemplate)
    setHTML('jumbles-list', jumbleListContent)
  }

  drawActiveJumble() {
    console.log('drawing Active');
    const activeJumble = AppState.activeJumble
    setHTML('active-jumble', activeJumble.ActiveJumbleTemplate)
    _focusCursorIntoJumbleTextArea()
  }

  setActiveJumble(jumbleId) {
    console.log('setting active', jumbleId);
    jumblesService.setActiveJumble(jumbleId)
  }

  submitJumble() {
    try {
      event.preventDefault()
      console.log('form submitted');
      const form = event.target
      const newBody = form.body.value
      console.log('✨', form, newBody);
      jumblesService.checkJumbleBody(newBody)
      Pop.toast('You Win!', 'success', 'center')
    } catch (error) {
      Pop.toast(error.message, 'error', 'center')
    }
  }

}







