import { cn } from '@app/lib/utils'
import { ButtonHTMLAttributes, JSX, ReactNode } from 'react'
import { MdAdd, MdCancel, MdDelete, MdEdit } from 'react-icons/md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  buttonType?: 'add' | 'delete' | 'save' | 'cancel' | 'default' | 'edit'
}
export default function Button({
  children,
  className,
  buttonType,
  ...rest
}: ButtonProps): JSX.Element {
  // spanish names for button types
  const buttonLabels: Record<NonNullable<ButtonProps['buttonType']>, string> = {
    add: 'Añadir',
    delete: 'Eliminar',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    default: 'Acción'
  }
  const buttonName = buttonLabels[buttonType || 'default']

  // english names for button types
  // const buttonName = buttonType
  //   ? buttonType.charAt(0).toUpperCase() + buttonType.slice(1)
  //   : 'Default'

  return (
    <button
      className={cn(
        'cursor-pointer rounded-[4px] bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 transition-colors duration-200 flex items-center justify-center gap-2',
        {
          'bg-red-500 hover:bg-red-400': buttonType === 'delete',
          'bg-green-600 hover:bg-green-400': buttonType === 'save',
          'bg-gray-600 hover:bg-gray-400': buttonType === 'cancel'
        },
        className
      )}
      {...rest}
      aria-label={buttonName}
    >
      {buttonType === 'edit' && <MdEdit />}
      {children ? children : buttonName}
      {buttonType === 'add' && <MdAdd />}
      {buttonType === 'cancel' && <MdCancel />}
      {buttonType === 'delete' && <MdDelete />}
    </button>
  )
}
