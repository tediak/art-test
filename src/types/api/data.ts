type DataRequestQuery = { sources?: string }

type UniqueKey = 'price' | 'color' | 'name';
type UnificatorKey = 'id';
type LocalData = { id: number } & OneKey<UniqueKey>
type LocalDataResponse = LocalData[];

type CollectedData = (PromiseSettledResult<{ name: string, key?: UniqueKey, data: LocalDataResponse }> | PromiseRejectedResult)[]

type UnifyFunction = (data: LocalData[], key: UniqueKey, unificator: UnificatorKey) => LocalData[];

type LocalSource = (...args: any[]) => Promise<LocalDataResponse>
// You can create your own source kinds and handle them in src/controllers/data.ts
type Sources = { [key: string]: { kind: 'local', get: LocalSource, key?: UniqueKey, args: any[] } };