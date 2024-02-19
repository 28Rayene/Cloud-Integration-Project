import {GoogleMap,Marker} from '@react-google-maps/api'
import {LoadScript} from '@react-google-maps/api'

const Maps=()=>{
    const item={
        name:"Location 1",
        Location:{
    
        lat:40.60785,
        lng:10.96899,
        } 

    };
    const mapStyles={
        height:"400px",
        width:"100%"   
    };
    const defaultCenter={
        lat:40.60785,
        lng:20.96899
    }
    return(
        <div>
            <LoadScript googleMapsApiKey="AIzaSyARVZnHOEfnLogWxs9tKH-qa78pNjxmAE4">
                <GoogleMap MapContainerStyles={mapStyles} zoom={15} center={defaultCenter}>
                    <Marker key={item.name} position={item.location}/>

                </GoogleMap>

            </LoadScript>

        </div>
    )
}
export default Maps