export default function () {
    return useState('fetch-provider-context', ()=>({
        loading: false,
        error: false,
        error_message: ''
    }));
}