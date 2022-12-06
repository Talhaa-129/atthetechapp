export const pageview = (url) => {
    if (window !== undefined) {
        window.gtag('config', "G-6RJP8LF23T", {
            path_url: url
        })
    }
}

export const event = ({ action, params }) => {
    if (window !== undefined) {
        window.gtag("event", action, params)
    }
}