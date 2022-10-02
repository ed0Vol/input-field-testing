import {InputHTMLAttributes } from 'react'

export interface Input extends InputHTMLAttributes<HTMLInputElement>{
    value?: string | number, 
    type: string,
    onChange?: (e: any) => void  
}

export interface Button extends InputHTMLAttributes<HTMLInputElement>{
    type: 'button' | 'submit',
    onClick?: (e: any) => void 
}