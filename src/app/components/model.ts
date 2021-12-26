import { TodoItem } from "./todo/todoitem";

export class Model{
    name:string;
    items: TodoItem[];

    constructor(){
        this.name = "Batuhan"
        this.items = [
            {description: "Kahvaltı", action: "Todo"},
            {description: "Spor", action: "Continues"},
            {description: "Oyun", action: "Finished"}
        ]
    }
}