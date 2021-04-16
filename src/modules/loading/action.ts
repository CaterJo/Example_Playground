import { createAction } from 'typesafe-actions';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING, (type: any) => type)();

export const finishLoading = createAction(
  FINISH_LOADING,
  (type: any) => type
)();

const actions = {
  startLoading,
  finishLoading,
};

export default actions;
