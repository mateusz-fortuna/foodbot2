import { FeatureName } from 'features/featureDetails/featureDetailsSlice';

type Names = {
  PREVIOUS: FeatureName | null;
  NEXT: FeatureName | null;
};

export const getNamesToInfiniteNavigation = (
  name: FeatureName,
  names: FeatureName[],
): Names => {
  const nameIndex = names.indexOf(name);
  const lastIndex = names.length - 1;
  const previous = nameIndex === 0 ? names[lastIndex] : names[nameIndex - 1];
  const next = nameIndex === lastIndex ? names[0] : names[nameIndex + 1];
  return { PREVIOUS: previous, NEXT: next };
};
