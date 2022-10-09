import {InputHTMLAttributes } from 'react'

export interface Input extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
    value?: string | number, 
    type: string,
    onChange?: (e: any) => void  
}

export interface Button extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
    disabled?: boolean,
    type: 'button' | 'submit',
    onClick?: (e: any) => void 
}

export interface Popup extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    value?: string,
    onClick?: (e: any) => void 

}