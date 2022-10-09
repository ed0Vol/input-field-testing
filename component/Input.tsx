import {FC, memo} from 'react'
import {Input} from '../types/types'

const Input:FC<Input> = (props) =>  {
    const {value, type, className, onChange, ...OldProps} = props
    return (
        <input {...OldProps} type={type} value={value} onChange={onChange} className={className}>{value}</input>
    )
}

export default memo(Input)