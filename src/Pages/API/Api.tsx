import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Photo from './Photo';
import {Item} from '../../Components/Item/ItemCard'
import { selectApiItems, setApiItems } from '../../Redux/navSlice';


 
const FetchApi = () => {
  // const [items, setItems] = useState<Item[] | null>(null);

  const dispatch = useDispatch()

  const apiItems = useSelector<Item[] | null>(selectApiItems)
 
  useEffect(() => {
    const fetchData = async () => {
    try {
        await fetch("https://testbackend.nc-one.com/image")
        .then((response) => response.json())
        .then((itemsData) => {
            // setItems(itemsData)
            dispatch(setApiItems(itemsData))
            console.log("Shop API called.")
        })
    } catch (error) {
        alert(error);
      }
    }
    if(!apiItems) {
      fetchData()  
    }
  }, [dispatch, apiItems])
 
  return {
    apiItems
  }
}
 
export default FetchApi;