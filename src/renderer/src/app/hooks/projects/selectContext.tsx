import { createContext, ReactNode, useContext, useState } from 'react'

type SelectContextType = {
  select: boolean
  selectedIds: string[]
  enableSelect: () => void
  disableSelect: () => void
  toggleSelect: (id: string) => void
  isSelected: (id: string) => boolean
  clearSelected: () => void
  selectAll: (ids: string[]) => void
}

const defaultValue: SelectContextType = {
  select: false,
  selectedIds: [],
  enableSelect: () => {},
  disableSelect: () => {},
  toggleSelect: () => {},
  isSelected: () => false,
  clearSelected: () => {},
  selectAll: () => {}
}

// eslint-disable-next-line react-refresh/only-export-components
export const SelectContext = createContext<SelectContextType>(defaultValue)

export const SelectProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [select, setSelect] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const enableSelect = (): void => setSelect(true)
  const disableSelect = (): void => {
    setSelect(false)
    setSelectedIds([])
  }

  const toggleSelect = (id: string): void => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const isSelected = (id: string): boolean => selectedIds.includes(id)

  const clearSelected = (): void => setSelectedIds([])

  const selectAll = (ids: string[]): void => setSelectedIds(ids)

  return (
    <SelectContext.Provider
      value={{
        select,
        selectedIds,
        enableSelect,
        disableSelect,
        toggleSelect,
        isSelected,
        clearSelected,
        selectAll
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSelect = (): SelectContextType => useContext(SelectContext)
