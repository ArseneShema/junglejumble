import { AppState } from "../AppState.js";



class JumblesService {
    setActiveJumble(jumbleId) {
        console.log('set Active Service', jumbleId); // 🧪
        const selectedJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        console.log('🐒', selectedJumble);
        selectedJumble.startTime = new Date()
        AppState.activeJumble = selectedJumble
        console.log('appstate active', AppState.activeJumble);
    }

    checkJumbleBody(newBody) {
        const activeJumble = AppState.activeJumble
        if (activeJumble.body != newBody) throw new Error('You can do better than that!')

        activeJumble.endTime = new Date()
        let elapsedTime = (activeJumble.endTime - activeJumble.startTime)

        if (activeJumble.fastestTime > elapsedTime) {
            activeJumble.fastestTime = elapsedTime
        }
        console.log('⏱️', activeJumble, elapsedTime);

        AppState.emit('activeJumble')
        AppState.emit('jumbles')
    }
}

export const jumblesService = new JumblesService()