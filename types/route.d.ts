
type RootStackParamList = {
  Home: undefined;
  History: {id: number; title: string; star: number} | undefined;
  Details: undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

declare module "*.png"