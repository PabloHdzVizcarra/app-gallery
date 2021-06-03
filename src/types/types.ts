type Image = {
  id: string
  alt_description: string
  description: string
  created_at: string
  urls: {
    full: string
    raw: string
    regular: string
    small: string
    thumb: string
  }
  user: {
    name: string
  }

}

export type { Image };
