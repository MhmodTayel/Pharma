import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import styles from "./Search.module.scss";
import { fullTextSearch, getMedById } from "../../services/userService";

export default function Search() {
  const [term, setTerm] = React.useState("");
  const [data, setData] = React.useState([]);

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

    getMedById(med.id).then((res) => {
      console.log(res);
    });
  };

  return (
    <Autocomplete
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
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}

