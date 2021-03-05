import React from "react";
import ContentText from "../../Text/ContentText";
import "./DatePicker.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Button from "../../Button/Button";

const pColorPurple = "#1A1446"; //Morado principal
const pColorPurpleLight = "#1A1446"; //Morado principal claro
const pColorPurpleDark = "#1A1446"; //Morado principal oscuro

//Cambia el color del datePicker
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      light: pColorPurpleLight,
      main: pColorPurple,
      dark: pColorPurpleDark,
      contrastText: "#fff",
    },
  },
});

//Se crea el datepicker, se usa estado para actualizar la fecha y hora
function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-11-04T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="o-datePicker-container">
      <ContentText text="Reserva tu cita aquí" colorText="BlueLight" />

      <div className="o-pickers-container">
        <ThemeProvider theme={defaultMaterialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* Campo para desplegar calendario y seleccionar dia */}
            <div className="o-datepicker">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Fecha"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>

            {/* Campo para seleccionar hora  */}
            <div className="o-datepicker">
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Hora"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </div>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </div>

      <Button
        colorBackground={"Blue"}
        colorBorder={"Blue"}
        colorText={"White"}
        text={"COMPRAR"}
        onClick={""}
        icon={""}
      />
    </div>
  );
}

export default DatePicker;
