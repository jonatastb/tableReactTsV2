import { createContext } from "react"

export type AppContext = {
  search: string
  setSearch: (search: string) => void
}

export const AppContext = createContext({} as AppContext) //Objeto vazio que tem a tipagem do que a gente vai receber