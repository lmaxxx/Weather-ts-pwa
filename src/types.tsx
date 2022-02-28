export type UnitOfTemperature = "f" | "c"

export interface IUnitOfTemperatureContext {
  unitOfTemperature: UnitOfTemperature
  setUnitOfTemperature: (newUnit: UnitOfTemperature) => void
}

interface IBaseLocation {
  name: string
  region: string
  country: string
  lat: number
  lon: number
}

export interface ISearchedLocation extends IBaseLocation {
  id: number
  url: string
}

export interface IForecastLocation extends IBaseLocation{
  tz_id: string
  localtime_epoch: number
  localtime: string
}

interface ICondition {
  text: string
  icon: string
  code: number
}

interface IBaseForecast {
  temp_c: number
  temp_f: number
  is_day: number
  condition: ICondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
}

interface IHourForecast extends IBaseForecast{
  time_epoch: number
  time: string
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
}

export interface ICurrentForecast extends IBaseForecast {
  last_updated_epoch: number
  last_updated: string
}

interface IAstro {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: string
}

interface IDayDetails {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  daily_will_it_rain: number
  daily_chance_of_rain: number
  daily_will_it_snow: number
  daily_chance_of_snow: number
  condition: ICondition
  uv: number
}

interface IDayForecast {
  date: string
  date_epoch: string
  day: IDayDetails
  astro: IAstro
  hour: IHourForecast[]
}

export interface IForecast {
  location: IForecastLocation
  current: ICurrentForecast
  forecast: {
    forecastday :IDayForecast[]
  }
}

export interface IDetail {
  name: string
  value: string | number
  unit: string
}