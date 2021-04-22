import './_Body.css'
import React, { useState } from "react"
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

function valuetext(value) {
    return `${value}°C`;
}

const PriceSliderTemplate = (props) => {
    const [valueSelected, setvalueSelected] = React.useState([20, 37]);
    const [clicked, setClicked] = React.useState(false);

    const handleChange = (event, newValue) => {
        setvalueSelected(newValue);
        console.log(newValue);
    };

    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className='pt-5 w-100 messageOrientationRight ' >
                    <div>
                        {!clicked && (
                            <Slider
                            min={0}
                            max={500}
                                className="mt-3"
                                value={valueSelected}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        )}
                        {clicked && (
                            <Slider
                            min={0}
                            max={500}
                                disabled
                                className="mt-3"
                                value={valueSelected}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        )}

                    </div>
                </div>
            </div>
        </div>

        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className='w-auto messageOrientationRight ' >
                    <div>
                    <Button
        variant="contained"
        color="primary"
        onClick={(event) => {props.priceRange(event,valueSelected)
            setClicked(true);
        }}
      >
        Apply
      </Button>
                    </div>
                </div>
            </div>
        </div>


       
    </>
}

export default PriceSliderTemplate;
