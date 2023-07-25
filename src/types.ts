export type FilterTagType = {
  id: number
  title: string
}

export type Listings = {
  id: number
  company: string
  logo: string
  ['new']: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export type filtersListType = {
  [filter: string]: {
    id: number
    title: string
  }
}
