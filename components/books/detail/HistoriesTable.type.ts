export type HistoriesTableItem = {
  id: number;
  bookNumber: number;
  lendStatus: string;
  lendDate: string;
  returnDate?: string;
};

export interface HistoriesTableProps {
  histories: HistoriesTableItem[];
}
