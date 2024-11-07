export async function fetchData(url){
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('⛔ Somthing was happend try later!!!');

        const data = await response.json();
        if(data.Response === 'False') throw new Error('⛔ No movies!!!');
        
        
        return data;
    } catch (error) {
        throw error;
    }
}