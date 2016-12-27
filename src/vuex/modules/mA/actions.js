import * as type from './type'

const actions = {
    [type.ACTION_addA]({commit}){
        commit(type.MUTATION_ADDA)
    },
    [type.ACTION_addB]({commit}){
        commit(type.MUTATION_ADDB)
    }
}

export default actions