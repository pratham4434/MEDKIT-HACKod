  import React, { useRef, useEffect, useState, useMemo } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  Layer,
  NavigationControl,
  useMap,
  Popup
} from "react-map-gl";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import { FaMap } from "react-icons/fa";
import { FiList } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import hospitallogojpg from "../assets/10130.jpg";
import hospitalMarker from "../assets/hospitalmarker.png";

const SearchCategory = ({
  category,
  addresss,
  handleChangeCategory,
  handleChangeAddresss,
  handlesetAddresss,
  detailsSubmit,
  detailsClear,
  toggleMap,
  showMapp,
  initial
}) => (
  <div className="searchcategoryContainer">
    <div className="category">
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={initial ? category : ''}
          onChange={handleChangeCategory}
          autoWidth
          label="Category"
        >
          <MenuItem value="Hospitals">Hospitals</MenuItem>
          <MenuItem value="Pharmacy">Pharmacy</MenuItem>
          <MenuItem value="Emergency Rooms">Emergency Rooms</MenuItem>
          <MenuItem value="ATM">ATM</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="locationSearch">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e)=>{e.preventDefault();
        handlesetAddresss()
        }}
      >
        <TextField
          onChange={handleChangeAddresss}
          onSubmit={(e)=>{e.preventDefault()}}
          value={addresss}
          id="outlined-basic"
          label="Enter city or address "
          variant="outlined"
        />
      </Box>
    </div>
    <div className="btns">
      <button onClick={detailsSubmit}>Search</button>
      <button onClick={detailsClear}>Clear</button>
    </div>
    <div className="maporlist">
      <div
        className="maporlistbtn"
        id="mapbtn"
        style={
          showMapp ? { backgroundColor: "red" } : { backgroundColor: "#a9a9df" }
        }
        onClick={toggleMap}
      >
        <FaMap />
      </div>
      <div
        className="maporlistbtn"
        id="listbtn"
        style={
          showMapp ? { backgroundColor: "#a9a9df" } : { backgroundColor: "red" }
        }
        onClick={toggleMap}
      >
        <FiList />
      </div>
    </div>
  </div>
);

const Cards = ({values ,setisLoadedCard,ShowwPopup}) => (
  <div className="cards" onClick={()=>{ShowwPopup(values)}}>
    <img src={hospitallogojpg} alt="" />
    <div className="carddetails">
      <div className="carddetailsleft">
        <h4>{values.attributes.PlaceName}</h4>
        <p>{values.attributes.Type}</p>
        <h5>{values.attributes.Place_addr}</h5>
        <p id="opentime">
          <MdOutlineWatchLater /> <span>Open 24 hours</span>
        </p>
      </div>
      <div className="carddetailsright">
        <p>+91 9876543210</p>
        <p>
          <a href="">View Details</a>
        </p>
      </div>
    </div>
    {setisLoadedCard(true)}
  </div>
);

const FindHospital = () => {
  const [category, setCategory] = useState("Hospital");
  const [initial, setInitial] = useState(false);
  const [addresss, setAddresss] = useState("");
  const [latitude, setlatitude] = useState(sessionStorage.getItem('latitude'));
  const [longitude, setlongitude] = useState(sessionStorage.getItem('longitude'));
  const [getcoords , setcoords] = useState([null,null]);
  const [showMapp, setShowMapp] = useState(true);
  const [isLoadedCard, setisLoadedCard] = useState(false);
  const [isLoadedMap, setisLoadedMap] = useState(false);
  const [gotdata , setGotdata] =useState(null);
  const [isLoadedData ,setisLoadedData] = useState(false)
  const [count ,setCount] =useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupcoords, setShowPopupcoords] = useState([null,null]);


  
  useEffect(() => {
    if(getcoords[0]===null && getcoords[1]===null){

      getData(category , latitude,longitude)
    }
    else{
      getData(category,getcoords[1],getcoords[0])
    }
  }, [category]);

  useEffect(()=>{
    getData(category , getcoords[1], getcoords[0])
  },[getcoords])

  async function getData(categoryy,latitudee,longitudee) {
    try{
      if(latitudee===null)
      latitudee= latitude
      if(longitudee===null)
      longitudee = longitude
      console.log("started")
      console.log(categoryy ,latitudee ,longitudee)
      let data = await axios.get(
        `https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&address=${categoryy}&location=${longitudee},${latitudee}&token=AAPKb9dcb6e453744df48d6adb2bf82e7026z8S1opfCTsEg90i5S9HKeGyiHI3j6WRXl3K3KM4Bty9oelp0zOq5aWj2IHlCTWkO&outfields=*`
      )
      console.log(data.data.candidates)
      setGotdata(data.data.candidates)
      setCount(data.data.candidates.length)
      setisLoadedData(true)
     }
    catch(err){
      console.log(err)
    }
  }
  const ShowwPopup = (values)=>{
    setShowPopupcoords([values])
}
  const LoadMap = ({latitudee,longitudee})=>(
            <Map 
              initialViewState={{
                latitude: latitudee,
                longitude: longitudee,
                zoom: 14,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              {console.log(latitudee , longitudee)}
              {gotdata.map((values)=>{
                return(
                <Marker
                longitude={values.location.x}
                latitude={values.location.y}
                style={{ cursor: "pointer" }}
                anchor="bottom"
              >
                <img src={hospitalMarker} style={{ height: "50px" }} alt="" />
              </Marker>
           ) })}
              <GeolocateControl
                trackUserLocation="true"
                showUserHeading="true"
              />
              <FullscreenControl />
              <Layer {...hospitalLayer} />
              <NavigationControl />
              {setisLoadedMap(true)}
              {showPopupcoords[0]!==null && 
                 (
                  <>
                 <Popup longitude={showPopupcoords[0].location.x} latitude={showPopupcoords[0].location.y}
                    anchor="bottom"
                    onClose={()=>{setShowPopup(false)}}
                    >
                   <h4>{showPopupcoords[0].attributes.PlaceName}</h4>
                   <h5>{showPopupcoords[0].attributes.Place_addr}</h5>
                  </Popup>
                  </>
                 )}
            
              
              
            </Map>
           
  )
  const handleChangeAddresss = (e) => {
    setAddresss(e.target.value);
  };
  const handlesetAddresss = () => {
    detailsSubmit()
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setInitial(true)
    
  };

  const detailsSubmit = () => {

    async function getcorrds(){
      const daata = await axios.get(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&token=AAPKb9dcb6e453744df48d6adb2bf82e7026z8S1opfCTsEg90i5S9HKeGyiHI3j6WRXl3K3KM4Bty9oelp0zOq5aWj2IHlCTWkO&address=${addresss}&outFields=*`)
      setcoords([(daata.data.candidates[0].extent.xmin+daata.data.candidates[0].extent.xmax)/2 ,(daata.data.candidates[0].extent.ymin+daata.data.candidates[0].extent.ymax)/2 ])
      setisLoadedData(false)
      getData(category,getcoords[1] , getcoords[0])
      
    }
    getcorrds();
  };
  const detailsClear = () => {
    setCategory("Hospitals");
    setAddresss("");
    console.log("cleared");
  };


  const toggleMap = () => {
    if (showMapp) setShowMapp(false);
    else setShowMapp(true);
    console.log("Map shown");
  };

  const hospitalLayer = {
    id: "landuse_hospital",
    type: "symbol",
    source: "mapbox",
    "source-layer": "landuse",
    filter: ["hospitals", "pharmacy"],
    paint: {
      "fill-color": "red",
    },
  };

  //TODO:
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoic2ltcGxlc29udTk4IiwiYSI6ImNsN3UxZzlhMjBvbWozcGxldTVheDFkdXMifQ.kdwiGRrDf_iMhE3r-V7kgw";

  return (
    <>
    {isLoadedData && (

      <Container>
      <Header />

      <SearchCategory
        category={category}
        addresss={addresss}
        handleChangeCategory={handleChangeCategory}
        handleChangeAddresss={handleChangeAddresss}
        handlesetAddresss={handlesetAddresss}
        detailsSubmit={detailsSubmit}
        detailsClear={detailsClear}
        toggleMap={toggleMap}
        showMapp={showMapp}
        initial={initial}
        />

      <div
        className="content"
        style={
          showMapp
          ? { gridTemplateColumns: "50% 50%" }
          : { gridTemplateColumns: "100%" }
        }
        >
        <div className="listsall">
          <h3>Showing {count} Results</h3>
          <hr />
          <div className="cardds">
            {gotdata.map((values)=>{
              return (
                <Cards values ={values} setisLoadedCard={setisLoadedCard} ShowwPopup={ShowwPopup}/>
              )
            })}
          </div>
        </div>

        <div className="map">
          {latitude !== null && longitude !== null && <LoadMap latitudee={getcoords[0]===null ? latitude : getcoords[1]} longitudee={getcoords[0]===null ? longitude : getcoords[0]} />}
        </div>
      </div>
      <Footer />
    </Container>
    )}
    </>
  );
};

var Container = styled.div`
  height: 100%;
  width: 100%;
  .map-container {
    height: 400px;
  }
  #map {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #323232;
    #marker {
      background-image: url("./hospitalmarker.png");
      background-size: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }

    .mapboxgl-popup {
      max-width: 200px;
    }
  }
  .searchcategoryContainer {
    margin-top: 4rem;
    display: flex;
    background-color: #a5dbec;
    justify-content: space-around;
    padding: 1.5rem;
    .category {
      div {
        div {
          width: 13rem;
        }
      }
    }
    .btns {
      height: 20%;
      display: flex;
      flex-direction: column;
      button {
        width: 7rem;
        border-radius: 20px;
        border: none;
        font-weight: bold;
        padding: 0.5rem;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-top: -11px;
      }
      button:hover {
        background-color: #981ad3;
        color: white;
      }
    }
    .maporlist {
      display: flex;
      width: 5rem;
      border-radius: 2rem;
      justify-content: space-around;
      cursor: pointer;
      .maporlistbtn {
        height: 70%;
        font-size: 2rem;
        background-color: #a9a9df;
        padding: 5% 30%;
        width: 100%;
      }
      .maporlistbtn:hover {
        background-color: yellow;
      }
      #mapbtn {
        border-radius: 2rem 0 0 2rem;
      }
      #listbtn {
        border-radius: 0 2rem 2rem 0;
      }
    }
    .locationSearch {
      .MuiBox-root {
        div {
          div {
            width: 20rem;
          }
        }
      }
    }
  }
  .content {
    grid-template-columns: 50% 50%;
    display: grid;
    .listsall {
      width: 100%;
      h3 {
        width: 28%;
        display: block;
        margin: auto;
        margin-top: 1rem;
      }
      .cardds {
        height: 100vh;
        overflow: scroll;
        .cards {
          display: flex;
          margin: auto;
          align-items: center;
          border-bottom: 2px solid #d7d7d7;
          padding: 2rem;
        }
        img {
          height: 100%;
          margin: 1rem 2rem;
          width: 30%;
          border-radius: 20px;
          box-shadow: -2px 2px 13px 3px;
        }
        .carddetails {
          display: flex;
          justify-content: space-between;
          flex-wrap:nowrap;
          width: 100%;
          p {
            font-weight: 500;
          }
        }
        .carddetailsleft {
          width: 50%;
          h5{
            margin-bottom: 1rem;
          }
          #opentime {
            color: yellowgreen;
            svg {
              margin-top: -5px;
              color: orange;
            }
          }
          h4 {
            color: blue;
          }
        }
        .carddetailsright {
          margin-top: 2.5rem;
        }
      }
    }
  }
  .map {
    width: 100%;
  }
`;
export default FindHospital;
