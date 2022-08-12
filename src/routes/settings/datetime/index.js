const url = 'https://fullstacktest0822-gdasbv46yq-od.a.run.app/settings/datetime'

export async function get() {
    const response = await fetch(url);
    const settings = await response.json();
    return {
        status: response.status,
        body: {
            settings
        }
    };
}