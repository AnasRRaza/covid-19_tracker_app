import React from 'react'
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const CountryPicker = (props) => {

  const { country, handleCountryChange } = props;

  const picker = {
    display: "flex",
    width: "50%",
    margin: "5px auto",
  }

  return (
    <div >
      <FormControl className="formControl" style={picker}>
        <NativeSelect className="nativeSelect" defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }} >
          <option className="option" value="">Global</option>
          {country ? country.map((v, i) =>
            <option className="option" value={v.country} key={i}>{v.country}</option>
          ) : ""}
        </NativeSelect>
      </FormControl>
    </div>
  )
}


export default CountryPicker;