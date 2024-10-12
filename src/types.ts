export type DialogType = 'change-password' | 'change-username' | 'profile' | 'logout' | 'delete-task' | 'new-scratchpad' | 'members';

export type TaskType = {
  _id: string;
  title: string;
  description: string;
  date: Date;
  isArchived: boolean;
};

export type ScratchpadType = {
  _id: string;
  userIds: string[];
  title: string;
  content: string;
  createdAt: Date;
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

export type DialogStoreType = {
  type: DialogType | null;
  dialogData?: any;
  isOpen: boolean;
  onOpen: (type: DialogType, data?: any, refresh?: () => Promise<void>) => void;
  onClose: () => void;
  refresh?: () => Promise<void> | undefined;
};
