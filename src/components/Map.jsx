import React, { useContext, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../AppContext';

const Map = () => {
  const { state, dispatch } = useContext(AppContext);
  const mapRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'SHOW_MAP',
      payload: {
        showMap: true,
        container: mapRef.current,
      },
    })
  }, []);

  const handleClick = (_event) => {
    dispatch({
      type: 'SHOW_GAUGES',
      payload: {
        showGauges: true,
      },
    });
  }

  return (
    <>
      <div className="mapDiv" ref={mapRef}></div>
      <Button
        variant="primary"
        id="crazyFloatyBoy"
        onClick={handleClick}
      >Show me da gauges</Button>
    </>
  );
}

export default Map;
