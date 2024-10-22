export default function () {
    const fetcher = useState('fetch-provider-context', ()=>({
        loading: false,
        error: false,
        error_message: ''
    }));

    const fetcherHandler = (callback: (...arg: any[]) => Promise<void>, ...arg: any[]) => {
        fetcher.value.loading = true;
        try {
            return callback(...arg);
        } catch (e) {
            fetcher.value.error = true;
            fetcher.value.error_message = e instanceof Error ? e.message : 'エラーが発生しました';
            setInterval(() => {
                fetcher.value.error = false;
                fetcher.value.error_message = '';
            }, 5000);
        } finally {
            fetcher.value.loading = false;
        }
    }

    return {
        fetcher,
        fetcherHandler
    }
}