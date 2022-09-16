import { InputHTMLAttributes } from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {

}



export function Input(props: inputProps) {
    return (
        <input
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
            type="text"
            {...props}
        />
    )
}