export function linksBuilder(linksData) {
    let linksHtml = '';
    if (linksData) {
        for (const oneLink of linksData) {
            linksHtml += `
            <div class="one_link" data-link_id="${oneLink.id}">
               ${oneLink.title}
            </div> `;
        }
    }
    return linksHtml;
}
