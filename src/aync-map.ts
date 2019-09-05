export type Dict<T> = { [key: string]: T };

export async function asyncMap<TSource, TDestination>(
  dict: Dict<TSource>,
  transformFunction: (item: TSource) => Promise<TDestination>
): Promise<Dict<TDestination>> {
  const promises: Promise<[string, TDestination]>[] = [];
  for (const key in dict) {
    promises.push(
      transformFunction(dict[key]).then(res => [key, res], err => [key, err])
    );
  }
  return Promise.all(promises).then(keyValuePairs => {
    const res: Dict<TDestination> = {};
    for (const [key, value] of keyValuePairs) {
      res[key] = value;
    }
    return res;
  });
}
