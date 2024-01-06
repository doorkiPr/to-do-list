const deleteElement = (array, id) => {

    array.forEach((element, i) => {

        if (element.getId() === id) {
            array.splice(i, 1)
        }

    })

}
export default deleteElement