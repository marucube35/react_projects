export default function insert(str, index, value) {
    return str.substring(0, index) + value + str.substring(index, str.length)
}
