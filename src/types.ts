export type UserType = {
  id: number;
  Fullname: string;
  Days: [DateType];
};

export type DateType = {
  Date: string;
  End: string;
  Start: string;
};
