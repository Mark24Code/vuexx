import * as type from './type'

const getters = {
    [type.GETTER_Name]:(state)=>{
        return state.nameA
    }
}

export default getters