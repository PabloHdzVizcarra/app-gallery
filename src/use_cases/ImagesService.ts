import { ImagesApi } from "../http/ImagesApi";

interface IGetRandomImages {
  getImages(): any
}

export type Image = {
  id: string
  alt_description: string
  description: string
  created_at: string
  urls: {
    full: string
    raw : string
    regular: string
    small: string
    thumb: string
  }
  user: {
    name: string
  }

}

class ImagesService implements IGetRandomImages {
  private Api: ImagesApi;

  constructor() {
    this.Api = new ImagesApi();
  }

  public async getImages(): Promise<Image[]> {
    return await this.Api.getImages();
  }

}

export { ImagesService };
