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


  return (
    <div >
      <FormControl className="formControl">
        <NativeSelect className="nativeSelect" defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }} >
          <option className="option" value="">Global</option>
          {country ? country.map((v, i) =>
            <option value={v.country} key={i}>{v.country}</option>
          ) : ""}
        </NativeSelect>
      </FormControl>
    </div >
  )
}


export default CountryPicker;