export const getRgb = (hex: string) => {
    const { r, g, b } = getColors(hex)
    return `rgb(${r}, ${g}, ${b})`
}

export const copyClipBoard = (copy: string) => {
    navigator.clipboard.writeText(copy).then(() => {
        window.alert('Success!');
    });
}

export const getColors = (hex: string) => {
    if (hex.includes('#')) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b }
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r, g, b }
}