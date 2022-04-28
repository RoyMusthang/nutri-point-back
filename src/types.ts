export type Indexable = {
  id: string,
};

export type Entity = Indexable & {
  createdAt: Date,
  updateAt?: Date,
};

export type Client = Entity & {
  description: string
  useMedication: boolean
};
