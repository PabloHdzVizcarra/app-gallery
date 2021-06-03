class ImagesApi {
  protected readonly url: string = "https://api.unsplash.com/photos";
  protected readonly KEY: string = process.env.REACT_APP_KEY_UNSPLASH as string;

  public async getImages(): Promise<any> {
    const response = await fetch(`${this.url}`, {
      headers: {
        "Accept-Version": "v1",
        "Authorization": `Client-ID NAydCk2Yg8rkgwciPnzHduEonHnoUCI-HJ2SgGL53hA`
      }
    });
    return await response.json();
  }

  public async searchImage(text: string): Promise<any> {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${text}`, {
      headers: {
        "Accept-Version": "v1",
        "Authorization": `Client-ID NAydCk2Yg8rkgwciPnzHduEonHnoUCI-HJ2SgGL53hA`
      }
    });
    const data = await response.json();
    return await data.results;
  }
}

export { ImagesApi };
