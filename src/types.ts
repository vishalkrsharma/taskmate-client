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

export type AuthStoreType = {
  username: null | string;
  _id: null | string;
  setUser: (username: string | null, _id: string | null) => void;
  setUsername: (username: string | null) => void;
};

export type DialogType = 'change-password' | 'change-username' | 'profile' | 'logout' | 'delete-task';

export type DialogStoreType = {
  type: DialogType | null;
  data?: any;
  isOpen: boolean;
  onOpen: (type: DialogType, data?: any) => void;
  onClose: () => void;
};
