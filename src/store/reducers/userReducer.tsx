import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Character from "../../mechanics/characters/Character"
import { Warrior } from "../../mechanics/characters/Warrior"
import { rollForStats } from "../../mechanics/CreatingMechanic"

export interface IinitialState {
    character: Character
}

const initialState: IinitialState = {
    character: new Warrior({
        initHp: 25,
        initAttack: 0,
        initIsNpc: false,
        initName: "name",
        initImgSmall: 'string',
        initImgBig: 'string',
        initConstitution: rollForStats(),
        initDexterety: rollForStats(),
        initStrength: rollForStats()
    })
}

export const SET_ENEMY_TEXT = "SET_USER_CHARACTER"

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPlayerCharacter(state, action: PayloadAction<Character>) {
            state.character = action.payload
        }
    }
})

export default userSlice.reducer