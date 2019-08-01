export const QURAN_PAGE_API = ({
    version = 'v1',
    page = '1',
    edition = "quran-uthmani"
}) => {
    return `http://api.alquran.cloud/${version}/page/${page}/${edition}`
}

export const QURAN_EDITIONS_API = ({ version = 'v1' }) => {
    return `http://api.alquran.cloud/${version}/edition`
}

export const COUNTRIES_API = () => {
    return `https://restcountries.eu/rest/v2/all`
}