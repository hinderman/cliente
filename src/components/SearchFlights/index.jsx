import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { MdFlightTakeoff, MdFlightLand, MdDateRange } from 'react-icons/md';
import { IconContext } from "react-icons";

const SearchFlights = () => {
  
  const [data, setData] = useState({
        departureAirportName: "",
        arrivalAirportName: "",
        departureDate: ""
    });
    
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
    console.log(e);
		e.preventDefault();
		try {
			const url = "";
			const { data: res } = await axios.post(url, data);
			window.location = "/";
		} catch (error) {
			if (error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message);
        alert(error);
			}
		}
	};
  
  return (
		<div className={styles.searchFlights_container}>
			<div className={styles.searchFlights_form_container}>
				<div className={styles.left}>
					<h1>Search Flights</h1>

					<form className={styles.form_container} onSubmit={handleSubmit}>

            <div>

              <IconContext.Provider value={{ color: "white", size: "3vh"}}>
                <MdFlightTakeoff/>
              </IconContext.Provider>
            
              <input  type="text" 
                      placeholder="Departure Airport"
                      name="departureAirportName"
                      onChange={handleChange}
                      value={data.departureAirportName}
                      required
                      className={styles.input}/>

            </div>

            <div>

              <IconContext.Provider value={{ color: "white", size: "3vh"}}>
                <MdFlightLand/>
              </IconContext.Provider>

              <input  type="text" 
                      placeholder="Arrival Airport"
                      name="arrivalAirportName"
                      onChange={handleChange}
                      value={data.arrivalAirportName}
                      required
                      className={styles.input}/>

            </div>

            <div>

              <IconContext.Provider value={{ color: "white", size: "3vh"}}>
                <MdDateRange/>
              </IconContext.Provider>

              <input  type="date" 
                      placeholder="Date"
                      name="departureDate"
                      onChange={handleChange}
                      value={data.departureDate}
                      required
                      className={styles.input}/>

            </div>

						{error && <div className={styles.error_msg}>{error}</div>}
            
						<button type="submit" className={styles.white_btn}>Search</button>

					</form>

				</div>

				<div className={styles.right}>

				</div>

			</div>
		</div>
	);
};
export default SearchFlights;