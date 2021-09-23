import React, { useState, useEffect } from 'react'
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CountryNames } from "../API_CALL"

const CountryPicker = (props) => {

  const { handleCountryChange } = props;

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCountry(await CountryNames())
    }
    fetchData();
  }, [])

  const picker = {
    display: "flex",
    width: "50%",
    margin: "5px auto",
  }

  return (
    <div >
      <FormControl className="formControl" style={picker}>
        <NativeSelect className="nativeSelect" defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }} >
          <option  className="option" value="">Global</option>
          {country ? country.map((v, i) =>
            <option value={v.country} key={i}>{v.country}</option>
          ) : ""}
        </NativeSelect>
      </FormControl>
    </div >
  )
}


export default CountryPicker;