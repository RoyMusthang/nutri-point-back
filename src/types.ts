export type Indexable = {
  id: string,
};

export type Entity = Indexable & {
  createdAt: Date,
  updateAt?: Date,
};

export type Client = Entity & {
  id: string
  description: string
  useMedication: boolean
};
