// ==== container

// ==== state

export interface ExamplesState extends Set<number> {}

export function createInitialExamplesState(): ExamplesState {
  return new Set();
}

// ==== action type

const ADD: 'examples/ADD' = 'examples/ADD';
const REMOVE: 'examples/REMOVE' = 'examples/REMOVE';

export const examplesActionTypes = { ADD, REMOVE };

// ==== action creator

function add(value: number) {
  return {
    type: ADD,
    payload: { value },
  };
}

function remove(value: number) {
  return {
    type: REMOVE,
    payload: { value },
  };
}

export const examplesActionCreators = { add, remove };

// ==== action

type ExamplesAddAction = ReturnType<typeof add>;
type ExamplesRemoveAction = ReturnType<typeof remove>;

export type ExamplesAction = ExamplesAddAction | ExamplesRemoveAction;

// ==== reducer

export function examplesReducer(
  state: ExamplesState = createInitialExamplesState(),
  action: ExamplesAction,
): ExamplesState {
  switch (action.type) {
    case ADD: {
      const { value } = action.payload;

      if (state.has(value)) return state;

      return new Set(state).add(value);
    }

    case REMOVE: {
      const { value } = action.payload;

      if (!state.has(value)) return state;

      const nextState = new Set(state);

      nextState.delete(value);

      return nextState;
    }

    default:
      return state;
  }
}
