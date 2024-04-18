export interface NewsType {
  id: number;
  headline: string;
  content: string;
  date: string;
  time: string;
  category: string;
  publisher: string;
}

export interface TypeNew {
  id: number;
  name: string;
  news_type: NewsType[];
}

export interface DataNew {
  title: string;
  subtitle: string;
  type_new: TypeNew[];
}
