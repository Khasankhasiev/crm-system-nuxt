import { EnumStatus } from "~/types/deals.type";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA:IColumn[] = [
   {
      id: EnumStatus.todo,
      name: 'Входящие',
      items:[],
   },
   {
      id: EnumStatus['to-be-agreed'],
      name: 'На согласовании',
      items:[],
   },
   {
      id: EnumStatus['in-proccess'],
      name: 'В производстве',
      items:[],
   },
   {
      id: EnumStatus['produced'],
      name: 'Произведено',
      items:[],
   },
   {
      id: EnumStatus['done'],
      name: 'К отгрузке',
      items:[],
   }
]