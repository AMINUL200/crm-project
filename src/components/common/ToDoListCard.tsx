import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS , Transform} from "@dnd-kit/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faExclamationTriangle,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { HTMLAttributes } from "react";

interface Todo {
  id: string;
  text: string;
  date: string;
  isLatest?: boolean;
}

interface SortableTodoProps {
  todo: Todo;
  listeners: SyntheticListenerMap | undefined;
  attributes: HTMLAttributes<HTMLElement>;
  setNodeRef: (node: HTMLElement | null) => void;
  transform: Transform | null;
  transition: string | undefined;
}

const initialTodos: Todo[] = [
  { id: "1", text: "Compete this projects", date: "2023-12-26 07:15:00", isLatest: true },
  { id: "2", text: "Compete this projects", date: "2023-12-26 07:15:00" },
  { id: "3", text: "Compete this projects Monday", date: "2023-12-26 07:15:00" },
  { id: "4", text: "Prepare project presentation", date: "2023-12-27 10:00:00" },
  { id: "5", text: "Fix UI bugs on dashboard", date: "2023-12-27 12:30:00" },
  { id: "6", text: "Submit assignment", date: "2023-12-28 09:45:00" },
  { id: "7", text: "Update documentation", date: "2023-12-28 14:20:00" },
  { id: "8", text: "Review pull requests", date: "2023-12-29 11:15:00" },
  { id: "9", text: "Deploy new version", date: "2023-12-29 16:00:00" },
  { id: "10", text: "Write blog post", date: "2023-12-30 08:00:00" },
];

function SortableTodo({ todo, listeners, attributes, setNodeRef, transform, transition }: SortableTodoProps) {
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-4 py-3 border-b flex items-start gap-3 bg-white"
    >
      {/* Drag Icon */}
      <div className="mt-1 text-gray-400 cursor-grab">
        <FontAwesomeIcon icon={faGripVertical} />
      </div>

      {/* Todo Content */}
      <div className="flex-1">
        {todo.isLatest && (
          <div className="flex items-center text-orange-500 text-sm mb-1">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
            Latest to do's
          </div>
        )}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="accent-purple-600" />
          <p className="font-medium">{todo.text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">{todo.date}</p>
      </div>

      <div className="flex items-center space-x-2 mt-1">
        <button className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100">
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </button>
        <button className="p-1 rounded bg-purple-100 text-purple-600 hover:bg-purple-200">
          <FontAwesomeIcon icon={faPen} size="sm" />
        </button>
      </div>
    </div>
  );
}

interface DraggableTodoItemProps {
  todo: Todo;
}

function DraggableTodoItem({ todo }: DraggableTodoItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id });

  return (
    <SortableTodo
      todo={todo}
      attributes={attributes}
      listeners={listeners}
      setNodeRef={setNodeRef}
      transform={transform}
      transition={transition}
    />
  );
}

export default function ToDoListCard() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = todos.findIndex((todo) => todo.id === active.id);
      const newIndex = todos.findIndex((todo) => todo.id === over.id);
      setTodos((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <div className="xl:col-span-4 w-full rounded-xl border shadow-sm bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="font-semibold text-lg">My To Do Items</h2>
        <div className="text-sm text-purple-600 space-x-4">
          <button>View All</button>
          <button>+ Add To Do</button>
        </div>
      </div>

      {/* Scrollable Todo List */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={todos.map((todo) => todo.id)} strategy={verticalListSortingStrategy}>
            {todos.map((todo) => (
              <DraggableTodoItem key={todo.id} todo={todo} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}