import insert from './insert'

const formatPopulation = (population) => {
    let str = population.toString()

    for (let i = str.length - 3; i >= 0; i -= 3) {
        if (i !== 0) str = insert(str, i, ',')
    }

    return str
}
export default formatPopulation
