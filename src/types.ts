export type TaskType = {
  _id: string;
  title: string;
  description: string;
  date: Date;
  isArchived: boolean;
};

export type TaskFilterType = {
  past?: boolean;
  today?: boolean;
  future?: boolean;
  isArchived?: boolean;
};

export type useAuthStoreType = {
  username: null | string;
  _id: null | string;
  setUser: (username: string | null, _id: string | null) => void;
  setUsername: (username: string | null) => void;
};
