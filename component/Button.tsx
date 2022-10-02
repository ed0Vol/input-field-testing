import {FC, memo} from 'react'
import {Button} from '../types/types'


const Button:FC<Button> = (props) =>  {
    const {children, type, onClick} = props
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}

export default memo(Button)