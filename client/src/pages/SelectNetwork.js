import React, { useState } from 'react';
import Select from 'react-select';

const customStyles = {
    control: () => ({
        alignItems: "center",
        borderColor: "#000",
        borderRadius: "15px",
        borderStyle: "solid",
        display: "flex",
        flexWrap: "wrap",
        borderWidth: "2px"
    }),
}

const data = [
    {
        value: 0,
        text: 'Polygon',
        icon: <img src="images/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png" loading="lazy" width="20" height="20" alt="" />
    },
    {
        value: 1,
        text: 'Optimism',
        icon: <img src="images/Optimism.webp" loading="lazy" width="25" alt="" className="image-11" />
    },
    {
        value: 2,
        text: 'Ethereum',
        icon: <img src="images/ethereum-eth-logo.png" loading="lazy" width="25" srcSet="images/ethereum-eth-logo-p-500.png 500w, images/ethereum-eth-logo-p-800.png 800w, images/ethereum-eth-logo-p-1080.png 1080w, images/ethereum-eth-logo-p-1600.png 1600w, images/ethereum-eth-logo-p-2000.png 2000w, images/ethereum-eth-logo-p-2600.png 2600w, images/ethereum-eth-logo-p-3200.png 3200w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-11" />
    }
];

function SelectNetwork() {
    const [selectedOption, setSelectedOption] = useState(data[0]);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption
            (e);
    }

    return (
        <div className="">
            <Select
                styles={customStyles}
                value={selectedOption}
                options={data}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                )}
            />
        </div>
    );
}

export default SelectNetwork;
