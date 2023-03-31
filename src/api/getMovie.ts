import { UrlApi, getData } from '@/libs/axios';

const API = 'c378e61dad694db6110bd4e337a3fbeb';

const petition = getData(UrlApi[0], API);

export const getMovies = async (id?:string) => {
    const getdata =  id ? `/movie/${id}` : '/movie/day'
    return await petition.get(getdata)

}