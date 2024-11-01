function createImgElmnt(data) {
    let container = document.createElement('div');
    Object.assign(container.style, {
        position: 'relative',
        width: `${data.width}px`,
        height: `${data.height}px`,
        border: '1px solid #ddd',
        display: 'inline-block',
        margin: '10px',
        overflow: 'hidden',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px'
    });
    let img = document.createElement('img');
    img.src = data.url;
    img.alt = `Image ID ${data.id}`;
    Object.assign(img.style, {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'inherit'
    });
    let idLabel = document.createElement('div');
    idLabel.textContent = `ID: ${data.id}`;
    Object.assign(idLabel.style, {
        position: 'absolute',
        top: '8px',
        left: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        padding: '4px 6px',
        fontSize: '12px',
        borderRadius: '4px',
        letterSpacing: '0.5px',
        zIndex: 10
    });
    let dimensionsLabel = document.createElement('div');
    dimensionsLabel.textContent = `Width: ${data.width}px, Height: ${data.height}px`;
    Object.assign(dimensionsLabel.style, {
        position: 'absolute',
        bottom: '8px',
        right: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        padding: '4px 6px',
        fontSize: '12px',
        borderRadius: '4px',
        letterSpacing: '0.5px',
        zIndex: 10
    });
    [img, idLabel, dimensionsLabel].forEach(el => container.appendChild(el));
    document.body.appendChild(container);
}

export { createImgElmnt }
