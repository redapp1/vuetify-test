export const QURAN_PAGE_API = ({
    version = 'v1',
    page = '1',
    edition = "quran-uthmani"
}) => {
    return `http://api.alquran.cloud/${version}/page/${page}/${edition}`
}