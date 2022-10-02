const validate = (value: any, type: 'text' | 'number') => {
    if (!value) return false
    switch (type) {
        case 'text':
            return typeof value === 'string'
        case 'number':
            return Number(value)
        default:
            return false
    }
}

export default validate