const deleteElement = (array, id) => {

    array.forEach((element, i) => {

        if (element.id === id) {
            array.splice(i, 1)
        }

    })

}
export default deleteElement