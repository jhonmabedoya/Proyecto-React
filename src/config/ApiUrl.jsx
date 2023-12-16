const apiKey = `${import.meta.env.VITE_REACT_APP_KEY}`;
export const APIW = city =>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
export const APIP = cityP =>`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityP}&units=metric&cnt=8&appid=${apiKey}&lang=es`
export const APII = iconCode=>`http://openweathermap.org/img/wn/${iconCode}.png`
