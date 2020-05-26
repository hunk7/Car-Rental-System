# Car-Rental-System
## https://guarded-woodland-64753.herokuapp.com
### If you wanna Store State Value as LocalStroage in Functional Component
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
