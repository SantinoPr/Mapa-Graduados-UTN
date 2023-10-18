import './registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

  
export function Registro(){
  return( 
    <>
    
    <div className="container">
            <h2>Registro graduados</h2>    
        <div className="items_registro">
            <input id='item' className="form-control" type="text" placeholder="Nombre y Apellido" aria-label="default input example"></input>
            <input id='item' className="form-control" type="text" placeholder="Numero" aria-label="default input example"></input>
            <input id='item' className="form-control" type="email" placeholder="Email" aria-label="default input example"></input>
            <select id='item' className="form-select" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">Ing.Industrial</option>
                <option value="2">Ing.Civil</option>
                <option value="3">Ing.Electronica</option>
                <option value="4">Ing.Electromecanica</option>
                <option value="5">Tec.Universitaria en Programacion</option>
            </select><br></br>
            <label>Se encueentra ejerciendo su cargo?</label>
            <div id='item'className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Si
                </label>
            </div>
            <div id='item' className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
            </div>
              <div className="items_localidades">
                <select name="country" className="countries" id="countryId">
                    <option value="">Select Country</option>
                </select>
                <select name="state" className="states" id="stateId">
                    <option value="">Select State</option>
                </select>
                <select name="city" className="cities" id="cityId">
                    <option value="">Select City</option>
                </select>
            </div> 
        </div>
    </div>
    </>
    )
}

