export class Review {
  public hidden: boolean = true;
  public approved: boolean = false;
  public userTastiness: number;
  constructor(public name: string, public specialty: string, public tastiness: number, public id: number) {

  }
}
