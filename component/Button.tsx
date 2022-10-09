import { FC, memo } from 'react'
import { Button } from '../types/types'


const Button: FC<Button> = (props) => {
    const { children, type, className, onClick, disabled } = props
    return (
        <button disabled={disabled} className={className} type={type} onClick={onClick}>{children}</button>
    )
}

export default memo(Button)