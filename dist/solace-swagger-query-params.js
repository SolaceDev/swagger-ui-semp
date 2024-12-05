// Delete existing query parameters, if any.
var url = new URL(window.location);
for (var key of url.searchParams.keys()) {
    url.searchParams.delete(key);
}
history.pushState({}, document.title, url.toString());
