import { useEffect, } from 'react';
import { setApiItems, useGlobalState } from '../../GlobalState/Store';


 
const FetchApi = () => {
  // const [items, setItems] = useState<Item[] | null>(null);

  // const apiItems = useSelector<Item[] | null>(selectApiItems)

  const [apiItems] = useGlobalState("apiItems")
 
  useEffect(() => {
    const fetchData = async () => {
    try {
        await fetch("https://testbackend.nc-one.com/image")
        .then((response) => response.json())
        .then((itemsData) => {
            // setItems(itemsData)
            // dispatch(setApiItems(itemsData))
            setApiItems(itemsData)
            console.log("Shop API called.")
        })
    } catch (error) {
        alert(error);
      }
    }
    if(apiItems.length === 0) {
      fetchData()  
    }
  }, [apiItems])
 
  return {
    apiItems
  }
}
 
export default FetchApi;