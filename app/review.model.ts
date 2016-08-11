export class Review {
  public approved: boolean = false;
  public userTastiness: number;
  constructor(public name: string, public specialty: string, public tastiness: number, public id: number) {

  }
}
