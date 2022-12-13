import React, { createContext, useEffect, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  showMap: false,
  showGauges: false,
  container: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'SHOW_GAUGES':
      return { ...state, showGauges: payload };
    case 'SHOW_MAP':
      return {
        ...state,
        showMap: payload.showMap,
        shop: payload.shop,
        container: payload.container,
      };
    default:
      return state;
  }
}

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  // Hydrates the container (HTMLElement) with the MapView
  const loadMap = async () => {
    const { initialize } = await import('./data/webmap');
    const { container } = state;
    await initialize(container);
  };

  // Toggles the gauges layer on the map
  const showGauges = async () => {
    const { toggleGauges } = await import('./data/webmap');
    await toggleGauges();
  };

  // Whenever the state changes check if we gotta do stuff
  useEffect(() => {
    if (state.showMap) {
      loadMap();
    }
    if (state.showGauges) {
      showGauges();
    }
  }, [state]);

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
