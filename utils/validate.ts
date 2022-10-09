export const checkType = (value: any, type: 'text' | 'number') => {
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

export const checkLength = (value: string, minLength:number, maxLength:number) => {
    return value.length >= minLength && value.length <= maxLength
}