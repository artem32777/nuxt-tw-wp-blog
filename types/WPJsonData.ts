export interface IPageData {
  id: number
  author: number
  comment_status: string
  date: string
  date_gtm: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  link: string
  menu_order: number
  modified: string
  modified_gmt: string
  parent: number
  slug: string
  status: string

  links: {
    about: [{href: string}]
    author: [{href: string}]
    collection: [{href: string}]
    curies: [{href: string}]
  }
}
