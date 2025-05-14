// Write your function here
function removeElement (array, discarder) {
    const newArray = array.filter((element) => element != discarder)
    return newArray
}