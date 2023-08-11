type UniqueKey = 'price' | 'color' | 'name';
type UnificatorKey = 'id';
type Data = Record<UniqueKey | UnificatorKey, string | number>;
type DataResponse = Promise<Data[]>;
type UnifyFunction = (data: Data[], key: UniqueKey, unificator: UnificatorKey) => Data[];