export class LinkService {
    static copyLink() {
        navigator.clipboard.writeText(window.location.href)
    }
}