export type Task = {
    id: number;
    title: string;
  };
  
export type BoardProps = {
    tasks: Task[];
  };

export type ItemProps = {
    text: string;
    id: number;
}
  