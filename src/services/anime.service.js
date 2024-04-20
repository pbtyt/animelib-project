class AnimeService{

    #BASE_URL = "http://127.0.0.1:8000"

    async getAnimeTitles(){
        const response = await fetch(`${this.#BASE_URL}/v1/title_list?q_filter=id,titles,type,rating,cover`);
        const data = await response.json();
        
        console.log('[GetAnimeTitles]: response...');
        return data;
    }

    async searchTitle(searchQuery){
        const response = await fetch(`${this.#BASE_URL}/v1/search_title?title=${searchQuery}&q_filter=cover,status,titles,type,id`);
        const data = await response.json();

        return data;
    }

    async getAnimeTitleById(id){
        const response = await fetch(`${this.#BASE_URL}/v1/title_id?id=${id}&q_filter=titles,description,time,episodes_count,release_date,cover,type,status,rating,background_url`);
        const data = await response.json();

        return data;
    }
}

export const animeService = new AnimeService()