# Car-Rental-System
### If you wanna Store State Value as LocalStroage
```
const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};

const Dashboard = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
```
