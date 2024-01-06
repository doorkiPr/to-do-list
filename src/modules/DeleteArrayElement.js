const deleteElement = (array, elementToDeleted) => {

    array.forEach((element, i) => {

        if (element.id === elementToDeleted.id) {
            array.splice(i, 1)
        }

    })

}
export default deleteElement