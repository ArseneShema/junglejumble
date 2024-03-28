import { AppState } from "../AppState.js";
import { Jumble } from "../models/jumble.js";


class JumbleService {
    createJumble(JumbleData) {

        console.log(JumbleData);

        const createJumble = new Jumble(JumbleData)
        console.log(createJumble);
        AppState.jumbles.push(createJumble)
        this.createJumble


    }


}