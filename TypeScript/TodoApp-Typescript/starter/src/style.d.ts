//? Burda interface leri globale alıyoruz.



//! Burda todos statenin type ını belirledik.
interface TodoType {
  id: number | string;
  task: string;
  isDone: boolean;
}


//! TodoList in type ını belirledik ne olacağını
interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}


interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;

}

//! Burada bu fonk işlem yaptığı için void oldu type ı
type AddFn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;


type DeleteFn = (id: string | number) => void;







