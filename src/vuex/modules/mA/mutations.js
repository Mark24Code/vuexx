import * as type from './type'


const mutations = {
    [type.MUTATION_ADDA](state){
        console.log("mutation AAA")
        state.nameA+="A"
    },
    [type.MUTATION_ADDB](state){
        state.nameA+="B"
    }
}

export default mutations