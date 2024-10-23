export default function () {
    const fetcher = useState('fetch-provider-context', ()=>({
        loading: false,
        error: false,
        error_message: ''
    }));

    const fetcherHandler = async (callback: (...arg: any[]) => Promise<void>, ...arg: any[]) => {
        fetcher.value = { 
            ...fetcher.value, 
            loading: true, 
            error: false, 
            error_message: '' 
        };

        try {
            return await callback(...arg);
        } catch (e) {
            fetcher.value = {
                ...fetcher.value,
                error: true,
                error_message: e instanceof Error ? e.message : 'エラーが発生しました'
            };
            setInterval(() => {
                fetcher.value = { 
                    ...fetcher.value, 
                    error: false, 
                    error_message: '' 
                };
            }, 5000);
        } finally {
            fetcher.value = { 
                ...fetcher.value, 
                loading: false 
            };
        }
    }

    return {
        fetcher,
        fetcherHandler
    }
}