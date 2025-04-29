export enum CardEnum {
  Paisagem = 1,
  Flor = 2,
  Pizza = 3,
}

export const CardColorMap: { [key in CardEnum]: string } = {
  [CardEnum.Paisagem]: '#0051d4',
  [CardEnum.Flor]: '#f40241',
  [CardEnum.Pizza]: '#918c16',
};
