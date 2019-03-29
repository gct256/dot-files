// ---- container

export class Items {}

// ---- state

export interface ItemsState extends Map<string, Items> {}

// ---- action

const ADD: 'Items/ADD' = 'Items/ADD';

// ---- action creator

export function itemsadd(id: string, value: string) {
  return {
    type: ADD,
    payload: { id, value },
  };
}

// ---- action

type ItemsaddAction = ReturnType<typeof itemsadd>;

export type ItemsAction = ItemsaddAction;

// ---- reducer

export function itemsReducer(
  state: ItemsState = new Map(),
  action: ItemsAction,
): ItemsState {
  switch (action.type) {
    default:
      return state;
  }
}
