import { requestData1, requestData2, requestData3 } from 'api';

// If any other sources will be planned, we can implement args parsing from request query (or changing type to POST and pass via body).
// But for now we have only local sources, so I hardcoded possible args here
const availableSources: Sources = {
  data1: {
    kind: 'local',
    get: requestData1,
    key: 'price',
    args: [],
  },
  data2: {
    kind: 'local',
    get: requestData2,
    args: [],
  },
  data3: {
    kind: 'local',
    get: requestData3,
    key: 'name',
    args: [],
  }
}

const unifyData: UnifyFunction = (data, key, unificator) => {
  const nonUnique = (arr: any[], value: any) => arr.filter(el => el === value).length > 1;

  const values = data.map(obj => obj[key]);
  const unified: LocalDataResponse = data.map(obj => {
    if (nonUnique(values, obj[key])) {
      return { ...obj, [key]: `${obj[key]} ${obj[unificator]}` }
    } else {
      return { ...obj, [key]: obj[key].toString() } // converting numbers to strings to make them the same type as unified ones
    }
  })
  return unified;
}

export const allSources: string[] = Object.keys(availableSources);

export const getData = async (sources: string[]) => {
  const sourcesFound = sources
    .map(sourceName => ({ name: sourceName, source: availableSources[sourceName]}))
    .filter(({ source }) => source);
  const collectedData: CollectedData = await Promise.allSettled(
    sourcesFound.map(({ name, source }) => 
      source.get(...source.args)
        .then(data => ({ name, key: source.key, data }))
        .catch(() => {
          // such error handling because of response format, which was mentioned in README
          return { name, key: source.key, data: [] }; 
        })
    )
  );

  const response: { [key: string]: LocalDataResponse } = {};
  const unificator: UnificatorKey = 'id';
  for (const result of collectedData) {
    if (result.status === 'fulfilled') {
      const { name, key, data } = result.value;
      const unified = unifyData(data, key as UniqueKey, unificator);
      response[name] = unified;
    }
  }

  return response;
} 