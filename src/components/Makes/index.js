import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMakesSagaAction } from '../../store/slices/cars/carsActions';
import { selectMakes } from '../../store/slices/cars/carsSlice';

const Makes = () => {
    const makes = useSelector(selectMakes);
    const dispatch = useDispatch();

    const loadMakes = useCallback(() => {
        dispatch(getMakesSagaAction());
      }, [dispatch]);
    
      useEffect(() => {
          console.log("Calling loadmakes");
        loadMakes();
      });
      
     console.log("MAKES", makes)
      return <>{makes?.length>0 && makes.map((eachModel, index)=>{
          return <lo key={index}><p>{eachModel}</p></lo>
      })}</>
}


export default Makes;