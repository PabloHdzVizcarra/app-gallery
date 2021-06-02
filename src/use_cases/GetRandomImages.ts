import { ImagesApi } from "../http/ImagesApi";

interface IGetRandomImages {
  getImages(): any
}

class GetRandomImages implements IGetRandomImages {
  private Api: ImagesApi;

  constructor() {
    this.Api = new ImagesApi();
  }

  public getImages(): any {

  }

}

export { GetRandomImages };
