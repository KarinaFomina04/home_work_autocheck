import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):  UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCope = [...state]
            action.payload === "up"
            ? stateCope.sort((a, b)=>{
                if (a.name < b.name){return -1}
                if (a.name > b.name){return 1}
                return 0
            })
                : stateCope.sort((a, b)=>{
                        if (a.name > b.name){return -1}
                        if (a.name < b.name){return 1}
                        return 0
                    })
            return stateCope
        }
        case 'check': {
            return state.filter(e => e.age >= action.payload)
        }
        default:
            return state
    }
}


