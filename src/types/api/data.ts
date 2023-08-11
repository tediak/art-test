type UniqueKey = 'price' | 'color' | 'name';
type UnificatorKey = 'id';
type LocalData = { id: number } & OneKey<UniqueKey>
type LocalDataResponse = Promise<LocalData[] | never>;
type UnifyFunction = (data: LocalData[], key: UniqueKey, unificator: UnificatorKey) => LocalData[];

type LocalSource = (...args: any[]) => LocalDataResponse
// You can create your own source kinds and handle them in src/controllers/data.ts
type Sources = { [key: string]: { kind: 'local', get: LocalSource } };
