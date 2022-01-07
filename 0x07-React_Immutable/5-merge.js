import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
  const listP1 = List(page1);
  const listP2 = List(page2);
  return listP1.concat(listP2);
};

export default function mergeElements(page1, page2) {
  const mapP1 = Map(page1);
  const mapP2 = Map(page2);
  return mapP1.merge(mapP2);
};
