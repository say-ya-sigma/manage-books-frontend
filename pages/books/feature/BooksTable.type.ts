export type BooksTableItem = {
  id: number;
  title: string;
  author: string;
};

export interface BooksTableProps {
  books: BooksTableItem[];
}
