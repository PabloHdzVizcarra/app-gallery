class ImagesApi {
  protected readonly url: string = "https://api.unsplash.com/photos";
  protected readonly KEY: string = process.env.REACT_APP_KEY_UNSPLASH as string;

  public async getImages(): Promise<any> {
    const response = await fetch(`${this.url}`, {
      headers: {
        "Accept-Version": "v1",
        "Authorization": `Client-ID ${this.KEY}`
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
}

export { ImagesApi };
