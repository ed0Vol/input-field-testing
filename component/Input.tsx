import {FC, memo} from 'react'
import {Input} from '../types/types'


const Input:FC<Input> = (props) =>  {
    const {value, type, onChange, ...OldProps} = props
    return (
        <input {...OldProps} type={type} value={value} onChange={onChange} >{value}</input>
    )
}

export default memo(Input)