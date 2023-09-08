import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Header } from '../components';
// Import your updated data structure
import { kanbanData } from '../data/dummy';

const Kanban = () => {
 
  const [tasks, setTasks] = useState(kanbanData);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Dropped outside of a valid droppable
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (result.source.droppableId === result.destination.droppableId) {
      // Reorder within the same column (status)
      // const status = result.source.droppableId;
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(sourceIndex, 1);
      updatedTasks.splice(destinationIndex, 0, movedTask);

      setTasks(updatedTasks);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

    <Header category="App" title="Kanban" />
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {['To Do', 'In Progress', 'Review', 'Done'].map((status) => (
          <div key={status} className="kanban-list">
            <h2>{status}</h2>
            <Droppable droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex-none w-72 p-4 bg-gray-100 rounded-md shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4">{status}</h2>
                  {provided.placeholder}
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, taskIndex) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={taskIndex}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-md shadow-md mb-4"
                          >
                            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                            <p className="text-gray-700">{task.summary}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  </div>
  );
};

export default Kanban;