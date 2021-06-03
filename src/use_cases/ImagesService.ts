import { ImagesApi } from "../http/ImagesApi";
import { Image } from "../types/types";

interface IGetRandomImages {
  getImages(): any

  searchImage(text: string): any
}

class ImagesService implements IGetRandomImages {
  private Api: ImagesApi;

  constructor() {
    this.Api = new ImagesApi();
  }

  public async getImages(): Promise<Image[]> {
    return await this.Api.getImages();
  }

  public async searchImage(text: string): Promise<Image[]> {
    return await this.Api.searchImage(text);
  }

}

export { ImagesService };
