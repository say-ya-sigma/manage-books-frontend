export type HistoriesTableItem = {
  id: number;
  title: number;
  lendStatus: string;
  lendDate: string;
  expectedReturnDate: string;
};

export interface HistoriesTableProps {
  histories: HistoriesTableItem[];
}
