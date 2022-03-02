import {ICurrentForecast} from "../types";

const getCurrentForecastDetails = (
  currentForecast: ICurrentForecast,
) => [
  {
    name: 'Wind speed',
    value: currentForecast?.wind_kph,
    unit: "kph",
  },
  {
    name: 'Wind direction',
    value: currentForecast?.wind_dir,
    unit: '',
  },
  {
    name: 'Air pressure',
    value: currentForecast?.pressure_mb,
    unit: 'mb',
  },
  {
    name: 'Precipitation',
    value: currentForecast?.precip_mm,
    unit: 'mm',
  },
  {
    name: 'Humidity',
    value: currentForecast?.humidity,
    unit: '%',
  },
  {
    name: 'Cloud cover',
    value: currentForecast?.cloud,
    unit: '%',
  },
  {
    name: 'Visibility',
    value: currentForecast?.vis_km,
    unit: 'km',
  },
]

export default getCurrentForecastDetails