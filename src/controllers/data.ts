import { requestData1, requestData2, requestData3 } from 'api';

const availableSources: Sources = {
  data1: {
    kind: 'local',
    get: requestData1 as LocalSource
  },
  data2: {
    kind: 'local',
    get: requestData2 as LocalSource
  },
  data3: {
    kind: 'local',
    get: requestData3 as LocalSource
  }
}

export const getData = async (sources: { name: string, args: any[] }[]) => {
  const sourcesFound = sources
    .map(source => ({ source: availableSources[source.name], args: source.args }))
    .filter(({ source }) => source);

  const data = await Promise.allSettled(
    sourcesFound.map(({ source, args }) => source.get(...args))
  );

  return data;
} 