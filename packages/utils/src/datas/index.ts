export interface IResMe {
  id: number;
  name: string;
  age: number;
}

export interface IReqMe {
  id: number;
}

export const getMe = (req: IReqMe): IResMe => {
  return {
    id: req.id,
    name: '이정민',
    age: 10
  };
};
