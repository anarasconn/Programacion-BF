import {
  createTask,
  completeTask,
  deleteTask,
  listPendingTasks,
  listTasks
} from './services/task.service.js';
import type { Task } from './models/task.js';
import { delay } from './utils/delay.js';
import { getAppName } from './utils/env.js';

const showTasks = (items: readonly Task[] = listTasks()): void => {
  const rows = items.map((task) => ({
    id: task.id,
    title: task.title,
    status: task.status,
    createdAt: task.createdAt.toLocaleString()
  }));

  console.table(rows);
};

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : 'Ocurrió un error desconocido.';

const main = async (): Promise<void> => {
  console.log(`\n${getAppName()}`);
  console.log('Iniciando aplicación...');
  await delay(300);

  console.log('\nTareas iniciales');
  showTasks();

  const newTask = createTask('Construir mi primer servicio');
  console.log(`Tarea creada con id ${newTask.id}.`);

  completeTask(newTask.id);
  console.log(`Tarea ${newTask.id} completada.`);

  console.log('\nEstado final');
  showTasks();

  try {
    completeTask(999);
  } catch (error: unknown) {
    console.error(`Error controlado: ${getErrorMessage(error)}`);
  }

  console.log('\nTareas pendientes');
  showTasks(listPendingTasks());

  try {
    const deleted = deleteTask(newTask.id);
    console.log(`Tarea ${deleted.id} eliminada correctamente.`);
  } catch (error: unknown) {
    console.error(`Error controlado: ${getErrorMessage(error)}`);
  }

  try {
    deleteTask(999);
  } catch (error: unknown) {
    console.error(`Error controlado: ${getErrorMessage(error)}`);
  }

  console.log('\nLista después de eliminar');
  showTasks();
};

main().catch((error: unknown) => {
  console.error('Error no controlado:', error);
  process.exitCode = 1;
});