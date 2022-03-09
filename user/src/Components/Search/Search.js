import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./Search.scss";
import { fullTextSearch, getMedById } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { addMedOrderAction } from "../../store/actions/orderAction";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const dispatch = useDispatch();
  const [term, setTerm] = React.useState("");
  const [data, setData] = React.useState([]);
  const orderStore = useSelector((state) => state.order);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term) {
        fullTextSearch(term).then(
          (res) => {
            setData(res.data);
          },
          (err) => {
            console.log(err);
          }
        );
      } else setData([]);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const handleSelectMed = (e) => {
    const selectedName = e.target.innerText;
    const [med] = data.filter((med) => med.name == selectedName);
    const result = orderStore.some((medicine) => medicine.id == med.id);
    if (!result)
      getMedById(med.id).then((res) => {
       
        const medObj = res.data;
        medObj.reqQuantity = 1;
        
        dispatch(addMedOrderAction(medObj));
      });
  };

  return (
    <Autocomplete
    
    sx={{px:2}}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      value={term}
      onKeyUp={(e) => setTerm(e.target.value)}
      onChange={handleSelectMed}
      options={data.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Your Products"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <React.Fragment>
                  <SearchIcon className="serach-Icon"/>
              </React.Fragment>
            ),
          }}
        
        />
      )}
    />
  );
}
