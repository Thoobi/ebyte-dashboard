export interface User {
  name: string;
  age: string;
  email: string;
}

export interface Tracker {
  finished: {
    count: number;
    task: [
      {
        id: string;
        title: string;
      }
    ];
  };
  tracked: {
    count: number;
    task: [
      {
        id: string;
        title: string;
      }
    ];
  };
  efficiency: {
    count: number;
    task: [
      {
        id: string;
        title: string;
      }
    ];
  };
}
