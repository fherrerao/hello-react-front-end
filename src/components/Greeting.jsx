import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsFromAPI, getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    const fetchData = async () => {
      const greetingsAPI = await getGreetingsFromAPI();
      dispatch(getGreetings(greetingsAPI));
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{ greetings.message }</h1>
      <br />
    </>
  );
};

export default Greeting;
