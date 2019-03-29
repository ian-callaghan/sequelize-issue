import { Table, Column, Model } from "sequelize-typescript";

@Table
export class GamesDbImage extends Model<GamesDbImage> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  type: string;

  @Column
  side: string;

  @Column
  filename: string;

  @Column
  resolution: string;
}

export class Main {
  constructor() { }
  
  public async start() {      
    const testOb = await GamesDbImage.findOne();
    testOb.type;

    GamesDbImage.findOne().then(testOb => {
        testOb.side;
    });
  }
}
