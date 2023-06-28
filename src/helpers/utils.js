const findKey = (dataset = {}, key = '') => {
    if(dataset.hasOwnProperty(key)) {
        return dataset[key]
    }
}