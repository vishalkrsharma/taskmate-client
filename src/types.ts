export interface TaskType {
  _id: string;
  title: string;
  content: string;
  date: Date;
  isArchived: boolean;
}

export type TaskFilterType = {
  past?: boolean;
  today?: boolean;
  future?: boolean;
  isArchived?: boolean;
};
