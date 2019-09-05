import { asyncMap, Dict } from "./aync-map";
import { getUrl } from "./get-url";

export function multiFetch(dict: Dict<string>): Dict<any> {
  return asyncMap(dict, getUrl);
}
