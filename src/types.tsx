export interface IBaseLocation {
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


// "id":138698
// "name":"Almalaâ±Q"
// "region":"Kalbacar"
// "country":"Azerbaijan"
// "lat":40.09
// "lon":46.24
// "url":"almalaq-kalbacar-azerbaijan"

// "name":"Lviv"
// "region":""
// "country":"Ukraine"
// "lat":49.83
// "lon":24
// "tz_id":"Europe/Kiev"
// "localtime_epoch":1645782262
// "localtime":"2022-02-25 11:44"